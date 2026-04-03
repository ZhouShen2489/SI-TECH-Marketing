import nodemailer from "nodemailer";
import { Resend } from "resend";
import { siteConfig } from "@/content/site";
import { escapeHtml } from "@/lib/utils";
import type { LeadRecord } from "@/types/lead";

const mailTo = process.env.MAIL_TO || siteConfig.email;
const mailFrom =
  process.env.MAIL_FROM || "Si-Tech Intl <onboarding@resend.dev>";

function getResendClient() {
  if (!process.env.RESEND_API_KEY) {
    return null;
  }

  return new Resend(process.env.RESEND_API_KEY);
}

function getSmtpTransport() {
  const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS } = process.env;

  if (!SMTP_HOST || !SMTP_PORT || !SMTP_USER || !SMTP_PASS) {
    return null;
  }

  return nodemailer.createTransport({
    host: SMTP_HOST,
    port: Number(SMTP_PORT),
    secure: Number(SMTP_PORT) === 465,
    auth: {
      user: SMTP_USER,
      pass: SMTP_PASS,
    },
  });
}

function renderInternalEmail(lead: LeadRecord) {
  const fields = [
    ["Submission time", lead.submittedAt],
    ["Full Name", lead.fullName],
    ["Work Email", lead.workEmail],
    ["Company Name", lead.companyName || "-"],
    ["Job Title", lead.jobTitle || "-"],
    ["Phone", lead.phone || "-"],
    ["Industry", lead.industry || "-"],
    ["Interested In", lead.interestedIn],
    ["Inquiry Details", lead.message],
    ["Page URL", lead.pageUrl || "-"],
    ["Referrer", lead.referrer || "-"],
    ["UTM Source", lead.utmSource || "-"],
    ["UTM Medium", lead.utmMedium || "-"],
    ["UTM Campaign", lead.utmCampaign || "-"],
    ["User Agent", lead.userAgent || "-"],
    ["IP Hash", lead.ipHash || "-"],
  ];

  return `
    <div style="font-family: Arial, sans-serif; color: #0f172a; line-height: 1.6;">
      <h2 style="margin-bottom: 16px;">New website lead</h2>
      <table style="border-collapse: collapse; width: 100%;">
        ${fields
          .map(
            ([label, value]) => `
              <tr>
                <td style="padding: 10px 12px; border: 1px solid #dbe3ee; width: 220px; font-weight: 700;">${escapeHtml(label)}</td>
                <td style="padding: 10px 12px; border: 1px solid #dbe3ee; white-space: pre-wrap;">${escapeHtml(value)}</td>
              </tr>
            `,
          )
          .join("")}
      </table>
    </div>
  `;
}

function renderAutoReplyEmail(fullName: string) {
  const safeName = escapeHtml(fullName);

  return `
    <div style="font-family: Arial, sans-serif; color: #0f172a; line-height: 1.7;">
      <p>Hello ${safeName},</p>
      <p>Thank you for contacting Si-Tech Intl. We have received your inquiry and our team will review it shortly.</p>
      <p>If you would like to add any more details in the meantime, you can reply directly to this email or contact us at ${escapeHtml(siteConfig.email)}.</p>
      <p>Best regards,<br />Si-Tech Intl</p>
    </div>
  `;
}

async function sendWithResend(lead: LeadRecord) {
  const resend = getResendClient();

  if (!resend) {
    return false;
  }

  await resend.emails.send({
    from: mailFrom,
    to: [mailTo],
    subject: `[Website Lead] ${lead.interestedIn} - ${lead.companyName || lead.fullName}`,
    html: renderInternalEmail(lead),
    replyTo: lead.workEmail,
  });

  await resend.emails.send({
    from: mailFrom,
    to: [lead.workEmail],
    subject: "We received your inquiry | Si-Tech Intl",
    html: renderAutoReplyEmail(lead.fullName),
    replyTo: mailTo,
  });

  return true;
}

async function sendWithSmtp(lead: LeadRecord) {
  const transport = getSmtpTransport();

  if (!transport) {
    return false;
  }

  await transport.sendMail({
    from: mailFrom,
    to: mailTo,
    subject: `[Website Lead] ${lead.interestedIn} - ${lead.companyName || lead.fullName}`,
    html: renderInternalEmail(lead),
    replyTo: lead.workEmail,
  });

  await transport.sendMail({
    from: mailFrom,
    to: lead.workEmail,
    subject: "We received your inquiry | Si-Tech Intl",
    html: renderAutoReplyEmail(lead.fullName),
    replyTo: mailTo,
  });

  return true;
}

export async function sendLeadEmails(lead: LeadRecord) {
  if (await sendWithResend(lead)) {
    return { provider: "resend" as const };
  }

  if (await sendWithSmtp(lead)) {
    return { provider: "smtp" as const };
  }

  console.warn(
    "Lead saved, but no mail provider is configured. Set RESEND_API_KEY or SMTP credentials.",
  );

  return { provider: "none" as const };
}
