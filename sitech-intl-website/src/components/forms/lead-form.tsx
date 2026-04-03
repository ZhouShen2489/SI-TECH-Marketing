"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { startTransition, useState } from "react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { CheckboxField, SelectInput, TextAreaInput, TextInput } from "@/components/forms/form-fields";
import {
  interestedInOptions,
  leadFormSchema,
  type LeadFormValues,
} from "@/lib/validation";

const defaultValues: LeadFormValues = {
  fullName: "",
  workEmail: "",
  companyName: "",
  jobTitle: "",
  phone: "",
  industry: "",
  interestedIn: "Customer Service Improvement",
  message: "",
  consent: true,
  pageUrl: "",
  honeypot: "",
};

export function LeadForm() {
  const router = useRouter();
  const [serverError, setServerError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<LeadFormValues>({
    resolver: zodResolver(leadFormSchema),
    defaultValues,
  });

  const onSubmit = form.handleSubmit((values) => {
    setServerError(null);
    setIsSubmitting(true);

    startTransition(async () => {
      try {
        const response = await fetch("/api/contact", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            ...values,
            pageUrl: typeof window !== "undefined" ? window.location.href : values.pageUrl,
          }),
        });

        const result = (await response.json()) as { message?: string; success?: boolean };

        if (!response.ok || !result.success) {
          throw new Error(result.message || "Unable to submit inquiry.");
        }

        form.reset(defaultValues);
        router.push("/thank-you");
      } catch (error) {
        const message =
          error instanceof Error
            ? error.message
            : "Unable to submit inquiry. Please try again later.";
        setServerError(message);
      } finally {
        setIsSubmitting(false);
      }
    });
  });

  const { register, formState } = form;
  const { errors } = formState;

  return (
    <form onSubmit={onSubmit} className="space-y-5">
      <div className="grid gap-5 md:grid-cols-2">
        <TextInput
          label="Full Name *"
          placeholder="Your full name"
          error={errors.fullName?.message}
          {...register("fullName")}
        />
        <TextInput
          label="Work Email *"
          type="email"
          placeholder="name@company.com"
          error={errors.workEmail?.message}
          {...register("workEmail")}
        />
        <TextInput
          label="Company Name"
          placeholder="Company"
          error={errors.companyName?.message}
          {...register("companyName")}
        />
        <TextInput
          label="Job Title"
          placeholder="Role"
          error={errors.jobTitle?.message}
          {...register("jobTitle")}
        />
        <TextInput
          label="Phone"
          placeholder="Phone number"
          error={errors.phone?.message}
          {...register("phone")}
        />
        <TextInput
          label="Industry"
          placeholder="Industry"
          error={errors.industry?.message}
          {...register("industry")}
        />
      </div>

      <SelectInput
        label="Interested In *"
        error={errors.interestedIn?.message}
        {...register("interestedIn")}
      >
        {interestedInOptions.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </SelectInput>

      <TextAreaInput
        label="Project / Inquiry Details *"
        placeholder="Tell us what is slowing the workflow down, what the team needs, and what kind of support you are exploring."
        error={errors.message?.message}
        {...register("message")}
      />

      <input
        type="text"
        tabIndex={-1}
        autoComplete="off"
        className="hidden"
        aria-hidden="true"
        {...register("honeypot")}
      />

      <CheckboxField
        label="I agree to be contacted regarding my inquiry."
        error={errors.consent?.message}
        {...register("consent")}
      />

      {serverError ? (
        <div className="rounded-2xl border border-rose-200 bg-rose-50 px-4 py-3 text-sm text-rose-700">
          {serverError}
        </div>
      ) : null}

      <button
        type="submit"
        disabled={isSubmitting}
        className="inline-flex items-center rounded-full bg-[var(--brand-primary)] px-6 py-3 text-sm font-semibold !text-white [color:#ffffff] shadow-[0_16px_38px_rgba(36,67,133,0.22)] transition duration-200 hover:-translate-y-0.5 hover:bg-[var(--brand-primary-strong)] hover:shadow-[0_22px_44px_rgba(36,67,133,0.30)] hover:!text-white focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[rgba(36,67,133,0.18)] disabled:cursor-not-allowed disabled:bg-slate-500 disabled:shadow-none"
      >
        {isSubmitting ? "Submitting..." : "Send Inquiry"}
      </button>
    </form>
  );
}
