import { useRef, useState } from "react";
import { ArrowRight, CheckCircle2, Loader2, AlertTriangle, X } from "lucide-react";

import type { FormType } from "@/lib/submissions.functions";

export type FieldDef = {
  name: string;
  label: string;
  type?: "text" | "email" | "tel" | "textarea" | "select";
  required?: boolean;
  options?: string[];
  placeholder?: string;
  full?: boolean;
};

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[a-z]{2,}$/i;
const PHONE_RE = /^\+?[0-9][0-9\s().-]{6,19}$/;

const SUCCESS_MESSAGE =
  "Thank you. Your submission has been received successfully. Our team will contact you shortly.";

export function ExpoForm({
  formType,
  fields,
  nameFields,
  organizationField,
  submitLabel,
  googleForm,
}: {
  formType: FormType;
  fields: FieldDef[];
  nameFields: string[];
  organizationField?: string;
  submitLabel: string;
  googleForm?: {
    action: string;
    fields: Record<string, string>;
  };
}) {
  const [values, setValues] = useState<Record<string, string>>({});
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [formError, setFormError] = useState("");
  const [submissionId, setSubmissionId] = useState("");
  const inFlight = useRef(false);
  const lastPayload = useRef("");

  const setValue = (name: string, value: string) => {
    setValues((v) => ({ ...v, [name]: value }));
    setErrors((e) => (e[name] ? { ...e, [name]: "" } : e));
  };

  function validate() {
    const next: Record<string, string> = {};
    for (const f of fields) {
      const value = (values[f.name] ?? "").trim();
      if (f.required && !value) {
        next[f.name] = "This field is required.";
        continue;
      }
      if (!value) continue;
      if (f.type === "email" && !EMAIL_RE.test(value)) next[f.name] = "Enter a valid email address.";
      if (f.type === "tel" && !PHONE_RE.test(value))
        next[f.name] = "Enter a valid phone number, for example +234 706 365 0022.";
    }
    setErrors(next);
    return Object.keys(next).length === 0;
  }

  async function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    if (inFlight.current || status === "loading" || status === "success") return;
    setFormError("");
    if (!validate()) {
      setStatus("error");
      setFormError("Please check the highlighted fields and try again.");
      return;
    }

    const trimmed: Record<string, string> = {};
    for (const f of fields) trimmed[f.label] = (values[f.name] ?? "").trim();

    const signature = JSON.stringify(trimmed);
    if (signature === lastPayload.current) return;

    inFlight.current = true;
    setStatus("loading");
    try {
      if (!googleForm) {
        throw new Error("This form is not connected yet. Please try again later.");
      }

      // Submit the custom website form directly to the client's Google Form.
      // URL-encoded form data works with Google Forms without exposing the Google Form UI.
      const body = new URLSearchParams();
      for (const [fieldName, entryId] of Object.entries(googleForm.fields)) {
        body.append(entryId, (values[fieldName] ?? "").trim());
      }

      await fetch(googleForm.action, {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
        },
        body: body.toString(),
      });

      const localId = "EXPO-" + Math.floor(100000 + Math.random() * 900000);

      lastPayload.current = signature;
      setSubmissionId(localId);
      setStatus("success");
    } catch (error) {
      setStatus("error");
      setFormError(
        error instanceof Error ? `Connection Error: ${error.message}` : "We could not submit your registration."
      );
    } finally {
      inFlight.current = false;
    }
  }

  if (status === "success") {
    return (
      <div
        className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50 px-4 backdrop-blur-sm"
        role="dialog"
        aria-modal="true"
        aria-labelledby="submission-success-title"
      >
      <div className="relative w-full max-w-xl rounded-[2rem] bg-white p-8 text-center shadow-2xl sm:p-12">
        <button
          type="button"
          onClick={() => setStatus("idle")}
          aria-label="Close"
          className="absolute right-6 top-6 text-gray-400 transition-colors hover:text-gray-700"
        >
        <X className="h-7 w-7" />
        </button>
        <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-emerald-50">
          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-emerald-500">
           <CheckCircle2 className="h-9 w-9 text-white" strokeWidth={3} />
          </div>
        </div>

        <h3
          id="submission-success-title"
          className="mt-8 font-display text-3xl font-bold tracking-tight text-charcoal"
        >
          Request Submitted!
        </h3>

        <p className="mx-auto mt-5 max-w-md text-base leading-relaxed text-gray-500">
          Your request was submitted successfully. One of our Customer Service
          Executives will reach out to you soon. Thank you, and we look forward
          to seeing you at WAAEE.
        </p>

        {submissionId ? (
          <p className="mt-5 font-display text-xs font-bold uppercase tracking-[0.14em] text-charcoal">
            Reference: {submissionId}
          </p>
        ) : null}

        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="mt-8 w-full rounded-xl bg-primary px-6 py-4 font-display text-sm font-bold uppercase tracking-[0.12em] text-white transition-all duration-200 hover:opacity-90 sm:w-auto sm:min-w-[220px]"
        >
          Done
        </button>
      </div>
    </div>
  );

}

  const inputClass =
    "mt-2 w-full border border-border bg-card px-4 py-3 text-sm text-charcoal outline-none transition-colors duration-200 focus:border-primary";

  return (
    <form noValidate onSubmit={handleSubmit} className="bg-card p-8 panel-shadow lg:p-12">
      <div className="grid gap-6 md:grid-cols-2">
        {fields.map((f) => {
          const id = `${formType}-${f.name}`;
          const error = errors[f.name];
          const describedBy = error ? `${id}-error` : undefined;
          return (
            <div
              key={f.name}
              className={f.full || f.type === "textarea" ? "md:col-span-2" : undefined}
            >
              <label
                htmlFor={id}
                className="font-display text-[0.7rem] font-bold uppercase tracking-[0.14em] text-charcoal"
              >
                {f.label}
                {f.required ? <span className="text-primary"> *</span> : null}
              </label>

              {f.type === "textarea" ? (
                <textarea
                  id={id}
                  name={f.name}
                  rows={5}
                  required={f.required}
                  placeholder={f.placeholder}
                  value={values[f.name] ?? ""}
                  onChange={(e) => setValue(f.name, e.target.value)}
                  aria-invalid={!!error}
                  aria-describedby={describedBy}
                  className={inputClass}
                />
              ) : f.type === "select" ? (
                <select
                  id={id}
                  name={f.name}
                  required={f.required}
                  value={values[f.name] ?? ""}
                  onChange={(e) => setValue(f.name, e.target.value)}
                  aria-invalid={!!error}
                  aria-describedby={describedBy}
                  className={inputClass}
                >
                  <option value="">Please select</option>
                  {(f.options ?? []).map((o) => (
                    <option key={o} value={o}>
                      {o}
                    </option>
                  ))}
                </select>
              ) : (
                <input
                  id={id}
                  name={f.name}
                  type={f.type ?? "text"}
                  required={f.required}
                  placeholder={f.placeholder}
                  autoComplete={
                    f.type === "email" ? "email" : f.type === "tel" ? "tel" : undefined
                  }
                  value={values[f.name] ?? ""}
                  onChange={(e) => setValue(f.name, e.target.value)}
                  aria-invalid={!!error}
                  aria-describedby={describedBy}
                  className={inputClass}
                />
              )}

              {error ? (
                <p id={`${id}-error`} className="mt-2 text-xs font-medium text-destructive">
                  {error}
                </p>
              ) : null}
            </div>
          );
        })}
      </div>

      {formError ? (
        <p
          role="alert"
          className="mt-8 flex items-start gap-3 border-l-2 border-destructive bg-stone p-4 text-sm text-charcoal"
        >
          <AlertTriangle className="mt-0.5 h-4 w-4 shrink-0 text-destructive" aria-hidden />
          {formError}
        </p>
      ) : null}

      <button
        type="submit"
        disabled={status === "loading"}
        className="mt-10 inline-flex items-center justify-center gap-3 bg-primary px-8 py-5 font-display text-xs font-bold uppercase tracking-[0.14em] text-primary-foreground transition-transform duration-400 hover:-translate-y-1 disabled:pointer-events-none disabled:opacity-70"
      >
        {status === "loading" ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" aria-hidden />
            Submitting
          </>
        ) : (
          <>
            {submitLabel}
            <ArrowRight className="h-4 w-4" aria-hidden />
          </>
        )}
      </button>
      <p className="mt-4 text-xs text-muted-foreground">
        Fields marked * are required. Your details are used only for WAAEE Expo 2027 correspondence.
      </p>
    </form>
  );
}
