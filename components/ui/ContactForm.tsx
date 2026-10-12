"use client";

import Link from "next/link";
import { useId, useState, type FormEvent } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { CircleAlert, CircleCheck, LoaderCircle, Send } from "lucide-react";
import { cn } from "@/lib/cn";

type Status = "idle" | "sending" | "success" | "mailto" | "error";
type Field = "name" | "email" | "message";
type Errors = Partial<Record<Field, string>>;

interface ContactFormProps {
  email: string;
  formspreeId?: string;
  responseTime: string;
}

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validate(values: Record<Field, string>): Errors {
  const errors: Errors = {};
  if (values.name.length < 2) errors.name = "Bitte geben Sie Ihren Namen ein.";
  if (!EMAIL_PATTERN.test(values.email)) errors.email = "Bitte geben Sie eine gültige E-Mail-Adresse ein.";
  if (values.message.length < 10) errors.message = "Bitte beschreiben Sie Ihr Anliegen in mindestens 10 Zeichen.";
  return errors;
}

const inputClass =
  "mt-2 block w-full rounded-xl border border-line bg-canvas px-4 py-3 text-[0.95rem] text-ink transition-[border-color,box-shadow] placeholder:text-muted/70 focus:border-accent focus:ring-4 focus:ring-accent/15 focus:outline-none aria-[invalid=true]:border-red-500";

/**
 * Kontaktformular mit Prüfung der Eingaben.
 *
 * - Mit Formspree-ID (config/profile.ts): Nachricht wird direkt an deine
 *   E-Mail-Adresse gesendet.
 * - Ohne Formspree-ID: Das E-Mail-Programm des Besuchers öffnet sich mit
 *   der fertig vorbereiteten Nachricht.
 */
export function ContactForm({ email, formspreeId, responseTime }: ContactFormProps) {
  const id = useId();
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<Errors>({});
  const [firstName, setFirstName] = useState("");

  const fieldId = (field: Field) => `${id}-${field}`;
  const errorId = (field: Field) => `${id}-${field}-error`;

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);

    // Unsichtbares Feld: Wird es ausgefüllt, war es ein Spam-Bot
    if (data.get("_gotcha")) return;

    const values = {
      name: String(data.get("name") ?? "").trim(),
      email: String(data.get("email") ?? "").trim(),
      message: String(data.get("message") ?? "").trim(),
    };

    const nextErrors = validate(values);
    setErrors(nextErrors);
    const firstInvalid = (Object.keys(nextErrors) as Field[])[0];
    if (firstInvalid) {
      form.querySelector<HTMLElement>(`[name="${firstInvalid}"]`)?.focus();
      return;
    }

    setFirstName(values.name.split(" ")[0] ?? "");

    // Ohne Formspree: E-Mail-Programm mit vorbereiteter Nachricht öffnen
    if (!formspreeId) {
      const subject = encodeURIComponent(`Projektanfrage von ${values.name}`);
      const body = encodeURIComponent(`${values.message}\n\n${values.name}\n${values.email}`);
      window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
      setStatus("mailto");
      return;
    }

    setStatus("sending");
    try {
      const response = await fetch(`https://formspree.io/f/${formspreeId}`, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });
      if (!response.ok) throw new Error(`Formspree antwortete mit Status ${response.status}`);
      form.reset();
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  return (
    <div className="rounded-2xl border border-line bg-surface/60 p-6 sm:p-8">
      <AnimatePresence mode="wait" initial={false}>
        {status === "success" ? (
          <motion.div
            key="success"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            role="status"
            className="flex min-h-[26rem] flex-col items-start justify-center"
          >
            <CircleCheck aria-hidden="true" className="size-10 text-accent-ink" strokeWidth={1.5} />
            <h3 className="mt-6 text-2xl font-semibold tracking-tight">Nachricht gesendet</h3>
            <p className="mt-3 max-w-sm text-pretty text-muted">
              Danke{firstName ? `, ${firstName}` : ""}! Ich melde mich {responseTime} bei Ihnen.
            </p>
            <button
              type="button"
              onClick={() => setStatus("idle")}
              className="mt-8 text-sm font-medium text-accent-ink hover:underline"
            >
              Weitere Nachricht schreiben
            </button>
          </motion.div>
        ) : (
          <motion.form
            key="form"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onSubmit={handleSubmit}
            noValidate
            className="space-y-5"
          >
            <div>
              <label htmlFor={fieldId("name")} className="text-sm font-medium">
                Name
              </label>
              <input
                id={fieldId("name")}
                name="name"
                type="text"
                autoComplete="name"
                required
                aria-invalid={errors.name ? true : undefined}
                aria-describedby={errors.name ? errorId("name") : undefined}
                className={inputClass}
              />
              <FieldError id={errorId("name")} message={errors.name} />
            </div>

            <div>
              <label htmlFor={fieldId("email")} className="text-sm font-medium">
                E-Mail
              </label>
              <input
                id={fieldId("email")}
                name="email"
                type="email"
                autoComplete="email"
                inputMode="email"
                required
                aria-invalid={errors.email ? true : undefined}
                aria-describedby={errors.email ? errorId("email") : undefined}
                className={inputClass}
              />
              <FieldError id={errorId("email")} message={errors.email} />
            </div>

            <div>
              <label htmlFor={fieldId("message")} className="text-sm font-medium">
                Nachricht
              </label>
              <textarea
                id={fieldId("message")}
                name="message"
                rows={6}
                required
                placeholder="Worum geht es bei Ihrem Projekt?"
                aria-invalid={errors.message ? true : undefined}
                aria-describedby={errors.message ? errorId("message") : undefined}
                className={cn(inputClass, "resize-y")}
              />
              <FieldError id={errorId("message")} message={errors.message} />
            </div>

            {/* Spam-Schutz: für Menschen unsichtbar, Bots füllen es aus */}
            <div aria-hidden="true" className="hidden">
              <label>
                Dieses Feld bitte leer lassen
                <input type="text" name="_gotcha" tabIndex={-1} autoComplete="off" />
              </label>
            </div>

            <div className="flex flex-col gap-4 pt-1 sm:flex-row sm:items-center sm:justify-between">
              <button
                type="submit"
                disabled={status === "sending"}
                className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-accent px-6 text-[0.95rem] font-medium text-accent-foreground transition-[background-color,transform] duration-200 hover:bg-accent/85 active:scale-[0.98] disabled:cursor-wait disabled:opacity-70"
              >
                {status === "sending" ? (
                  <>
                    <LoaderCircle aria-hidden="true" className="size-4 animate-spin" />
                    Wird gesendet …
                  </>
                ) : (
                  <>
                    <Send aria-hidden="true" className="size-4" />
                    Nachricht senden
                  </>
                )}
              </button>
              <p className="text-xs leading-relaxed text-muted sm:max-w-[16rem]">
                Ihre Angaben nutze ich nur, um Ihre Anfrage zu beantworten. Mehr dazu in der{" "}
                <Link href="/datenschutz" className="underline underline-offset-2 hover:text-ink">
                  Datenschutzerklärung
                </Link>
                .
              </p>
            </div>

            {/* Rückmeldungen werden von Screenreadern vorgelesen */}
            <div aria-live="polite">
              {status === "mailto" ? (
                <p className="rounded-xl border border-line bg-canvas p-4 text-sm text-pretty text-muted">
                  Ihr E-Mail-Programm öffnet sich mit der vorbereiteten Nachricht. Bitte senden Sie
                  sie dort ab. Falls sich nichts öffnet, schreiben Sie direkt an{" "}
                  <a href={`mailto:${email}`} className="font-medium text-ink underline underline-offset-2">
                    {email}
                  </a>
                  .
                </p>
              ) : null}
              {status === "error" ? (
                <p className="flex gap-2.5 rounded-xl border border-red-500/30 bg-red-500/5 p-4 text-sm text-pretty">
                  <CircleAlert aria-hidden="true" className="mt-0.5 size-4 shrink-0 text-red-600 dark:text-red-400" />
                  <span>
                    Die Nachricht konnte nicht gesendet werden. Bitte versuchen Sie es erneut oder
                    schreiben Sie direkt an{" "}
                    <a href={`mailto:${email}`} className="font-medium underline underline-offset-2">
                      {email}
                    </a>
                    .
                  </span>
                </p>
              ) : null}
            </div>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
}

function FieldError({ id, message }: { id: string; message?: string }) {
  if (!message) return null;
  return (
    <p id={id} className="mt-2 flex items-center gap-1.5 text-sm text-red-600 dark:text-red-400">
      <CircleAlert aria-hidden="true" className="size-4 shrink-0" />
      {message}
    </p>
  );
}
