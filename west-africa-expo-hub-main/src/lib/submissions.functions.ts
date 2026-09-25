import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

export const FORM_TYPES = {
  exhibitor: { sheet: "Exhibitors", label: "Book A Stand (Exhibitor)", prefix: "EXH" },
  partner: { sheet: "Partners", label: "Become A Partner (Sponsor)", prefix: "PAR" },
  visitor: { sheet: "Visitors", label: "Register To Visit (Visitor)", prefix: "VIS" },
} as const;

export type FormType = keyof typeof FORM_TYPES;

const submissionSchema = z.object({
  formType: z.enum(["exhibitor", "partner", "visitor"]),
  fullName: z.string().trim().min(2).max(120),
  email: z.string().trim().email().max(160),
  phone: z.string().trim().min(7).max(40),
  organization: z.string().trim().max(160).default(""),
  details: z.record(z.string(), z.string().max(4000)),
});

function makeSubmissionId(prefix: string) {
  const random = Math.random().toString(36).slice(2, 7).toUpperCase();
  return `WAAEE-${prefix}-${Date.now().toString(36).toUpperCase()}-${random}`;
}

export const submitExpoForm = createServerFn({ method: "POST" })
  .inputValidator((data: unknown) => submissionSchema.parse(data))
  .handler(async ({ data }) => {
    const endpoint = process.env["GOOGLE_APPS_SCRIPT_URL"];
    const meta = FORM_TYPES[data.formType];

    const payload = {
      token: process.env["GOOGLE_APPS_SCRIPT_TOKEN"] ?? "",
      submissionId: makeSubmissionId(meta.prefix),
      submittedAt: new Date().toISOString(),
      formType: data.formType,
      formLabel: meta.label,
      sheet: meta.sheet,
      fullName: data.fullName,
      email: data.email,
      phone: data.phone,
      organization: data.organization,
      status: "New",
      details: data.details,
    };

    if (!endpoint) {
      console.error("GOOGLE_APPS_SCRIPT_URL is not configured; submission not stored.", payload.submissionId);
      throw new Error(
        "Submissions are not connected yet. Please contact the team on waaeenig@gmail.com or WhatsApp while we complete setup.",
      );
    }

    const response = await fetch(endpoint, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
      redirect: "follow",
    });

    const body = await response.text();
    if (!response.ok) {
      console.error(`Apps Script request failed [${response.status}]: ${body}`);
      throw new Error("We could not record your submission. Please try again in a moment.");
    }

    let ok = true;
    try {
      const parsed = JSON.parse(body);
      if (parsed && parsed.ok === false) ok = false;
      if (!ok) console.error(`Apps Script returned an error: ${body}`);
    } catch {
      // Apps Script can return HTML on redirect; a 200 is treated as accepted.
    }
    if (!ok) throw new Error("We could not record your submission. Please try again in a moment.");

    return { submissionId: payload.submissionId };
  });
