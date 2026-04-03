import { z } from "zod";

export const interestedInOptions = [
  "Customer Service Improvement",
  "Workflow / Collaboration Support",
  "Custom Digital Solution",
  "Partnership",
  "Not sure yet",
] as const;

const optionalShortText = z
  .string()
  .trim()
  .max(120, "Please keep this field under 120 characters.")
  .optional()
  .or(z.literal(""));

export const leadFormSchema = z.object({
  fullName: z
    .string()
    .trim()
    .min(2, "Please enter your full name.")
    .max(100, "Please keep your name under 100 characters."),
  workEmail: z.email("Please enter a valid work email.").trim(),
  companyName: optionalShortText,
  jobTitle: optionalShortText,
  phone: z
    .string()
    .trim()
    .max(50, "Please keep your phone number under 50 characters.")
    .optional()
    .or(z.literal("")),
  industry: optionalShortText,
  interestedIn: z.enum(interestedInOptions, {
    error: "Please choose what you are interested in.",
  }),
  message: z
    .string()
    .trim()
    .min(20, "Please share a bit more detail about your inquiry.")
    .max(3000, "Please keep your message under 3000 characters."),
  consent: z.literal(true, {
    error: "Please agree so we can contact you about your inquiry.",
  }),
  pageUrl: z.string().trim().optional().or(z.literal("")),
  honeypot: z.string().trim().optional().or(z.literal("")),
});

export type LeadFormValues = z.infer<typeof leadFormSchema>;

function cleanSingleLine(value?: string) {
  const sanitized = value?.replaceAll("\u0000", "").trim();

  if (!sanitized) {
    return undefined;
  }

  return sanitized.replace(/\s+/g, " ");
}

function cleanMultiline(value: string) {
  return value.replaceAll("\u0000", "").trim();
}

export function normalizeLeadInput(values: LeadFormValues) {
  return {
    fullName: cleanSingleLine(values.fullName) || "",
    workEmail: cleanSingleLine(values.workEmail) || "",
    companyName: cleanSingleLine(values.companyName),
    jobTitle: cleanSingleLine(values.jobTitle),
    phone: cleanSingleLine(values.phone),
    industry: cleanSingleLine(values.industry),
    interestedIn: values.interestedIn,
    message: cleanMultiline(values.message),
    consent: true as const,
    pageUrl: cleanSingleLine(values.pageUrl),
    honeypot: cleanSingleLine(values.honeypot),
  };
}
