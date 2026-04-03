export type LeadInterest =
  | "Customer Service Improvement"
  | "Workflow / Collaboration Support"
  | "Custom Digital Solution"
  | "Partnership"
  | "Not sure yet";

export type LeadStatus = "new" | "contacted";

export type LeadSubmission = {
  fullName: string;
  workEmail: string;
  companyName?: string;
  jobTitle?: string;
  phone?: string;
  industry?: string;
  interestedIn: LeadInterest;
  message: string;
  consent: true;
  pageUrl?: string;
  honeypot?: string;
};

export type LeadRecord = {
  id: string;
  submittedAt: string;
  fullName: string;
  workEmail: string;
  companyName?: string;
  jobTitle?: string;
  phone?: string;
  industry?: string;
  interestedIn: LeadInterest;
  message: string;
  pageUrl?: string;
  referrer?: string;
  utmSource?: string;
  utmMedium?: string;
  utmCampaign?: string;
  userAgent?: string;
  ipHash?: string;
  status: LeadStatus;
  notes?: string;
};
