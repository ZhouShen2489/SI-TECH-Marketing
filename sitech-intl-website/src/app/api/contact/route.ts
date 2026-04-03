import { createHash } from "node:crypto";
import { headers } from "next/headers";
import { NextResponse } from "next/server";
import { saveLead } from "@/lib/leads-repo";
import { sendLeadEmails } from "@/lib/mailer";
import { leadFormSchema, normalizeLeadInput } from "@/lib/validation";

export const runtime = "nodejs";

const rateLimitWindowMs = 45_000;
const recentSubmissions = new Map<string, number>();

function hashValue(value: string) {
  return createHash("sha256").update(value).digest("hex");
}

function getIpHash(forwardedFor: string | null) {
  const rawIp = forwardedFor?.split(",")[0]?.trim();

  if (!rawIp) {
    return undefined;
  }

  return hashValue(rawIp).slice(0, 20);
}

function getTrackingFields(pageUrl?: string, referrer?: string | null) {
  const target = pageUrl || referrer || "";

  if (!target) {
    return {};
  }

  try {
    const parsed = new URL(target);
    return {
      utmSource: parsed.searchParams.get("utm_source") || undefined,
      utmMedium: parsed.searchParams.get("utm_medium") || undefined,
      utmCampaign: parsed.searchParams.get("utm_campaign") || undefined,
    };
  } catch {
    return {};
  }
}

export async function POST(request: Request) {
  try {
    const payload = await request.json();
    const parsed = leadFormSchema.safeParse(payload);

    if (!parsed.success) {
      return NextResponse.json(
        {
          success: false,
          message: "Please review the form fields and try again.",
        },
        { status: 400 },
      );
    }

    const leadInput = normalizeLeadInput(parsed.data);

    if (leadInput.honeypot) {
      return NextResponse.json(
        { success: true, message: "Inquiry submitted successfully." },
        { status: 200 },
      );
    }

    const requestHeaders = await headers();
    const forwardedFor = requestHeaders.get("x-forwarded-for");
    const referrer = requestHeaders.get("referer");
    const userAgent = requestHeaders.get("user-agent");
    const ipHash = getIpHash(forwardedFor);
    const rateLimitKey = ipHash || leadInput.workEmail.toLowerCase();
    const now = Date.now();
    const lastSubmission = recentSubmissions.get(rateLimitKey);

    if (lastSubmission && now - lastSubmission < rateLimitWindowMs) {
      return NextResponse.json(
        {
          success: false,
          message: "Please wait a moment before submitting again.",
        },
        { status: 429 },
      );
    }

    recentSubmissions.set(rateLimitKey, now);

    const trackingFields = getTrackingFields(leadInput.pageUrl, referrer);

    const lead = await saveLead({
      ...leadInput,
      referrer: referrer || undefined,
      userAgent: userAgent || undefined,
      ipHash,
      ...trackingFields,
    });

    await sendLeadEmails(lead);

    return NextResponse.json({
      success: true,
      message: "Inquiry submitted successfully.",
    });
  } catch (error) {
    console.error("Failed to handle contact form submission", error);

    return NextResponse.json(
      {
        success: false,
        message: "Unable to submit inquiry. Please try again later.",
      },
      { status: 500 },
    );
  }
}
