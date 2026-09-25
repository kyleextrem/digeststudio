'use client';

import { useEffect, useRef, useState, type FormEvent } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import {
  emptyGrowthAuditFields,
  firstGrowthAuditError,
  IMPROVEMENT_OPTIONS,
  INDUSTRIES,
  SUBURB_SUGGESTIONS,
  validateGrowthAudit,
  type GrowthAuditErrors,
  type GrowthAuditField,
  type GrowthAuditFields,
} from '@/lib/growth-audit';
import { trackEvent } from '@/lib/track-event';

const inputClass =
  'w-full rounded-2xl border border-[#e4e4e7] bg-white px-4 py-3.5 text-[15px] text-accent placeholder:text-accent/35 transition-colors focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/25';

const labelClass = 'mb-2 block text-[13px] font-medium text-accent/80';

const whileYoureHere = [
  {
    title: 'Newcastle Digest',
    body: 'The best of Newcastle, delivered every week.',
    href: '/brands/newcastle-digest',
    image: '/newcastle-digest.png',
    imageAlt: 'Newcastle Digest homepage',
    imageClass: 'object-cover object-top',
  },
  {
    title: 'Testimo',
    body: 'Turn customer feedback into a growth asset.',
    href: '/brands/testimo',
    image: '/Testimo.jpg',
    imageAlt: 'Testimo product',
    imageClass: 'object-cover object-top',
  },
  {
    title: 'Digest Studio',
    body: 'Websites, SEO, content, reviews and local distribution for local businesses.',
    href: '/about',
    image: '/kyle-profile.jpg',
    imageAlt: 'Kyle, founder of Digest Studio',
    imageClass: 'object-cover object-[center_62%]',
  },
] as const;

function FieldError({ id, message }: { id: string; message?: string }) {
  if (!message) return null;
  return (
    <p id={id} className="mt-2 text-[13px] font-medium text-red-700">
      {message}
    </p>
  );
}

function TextField({
  id,
  label,
  value,
  error,
  onChange,
  type = 'text',
  autoComplete,
  placeholder,
  inputMode,
  list,
}: {
  id: GrowthAuditField;
  label: string;
  value: string;
  error?: string;
  onChange: (value: string) => void;
  type?: string;
  autoComplete?: string;
  placeholder?: string;
  inputMode?: 'text' | 'email' | 'tel' | 'url';
  list?: string;
}) {
  const errorId = `${id}-error`;

  return (
    <div>
      <label htmlFor={id} className={labelClass}>
        {label}
      </label>
      <input
        id={id}
        name={id}
        type={type}
        value={value}
        autoComplete={autoComplete}
        placeholder={placeholder}
        inputMode={inputMode}
        list={list}
        aria-invalid={error ? true : undefined}
        aria-describedby={error ? errorId : undefined}
        onChange={(event) => onChange(event.target.value)}
        className={`${inputClass} ${error ? 'border-red-600 focus:border-red-600 focus:ring-red-600/20' : ''}`}
      />
      <FieldError id={errorId} message={error} />
    </div>
  );
}

export default function GrowthAuditForm() {
  const [fields, setFields] = useState<GrowthAuditFields>(emptyGrowthAuditFields);
  const [errors, setErrors] = useState<GrowthAuditErrors>({});
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState('');
  const [succeeded, setSucceeded] = useState(false);
  const started = useRef(false);
  const successPanel = useRef<HTMLDivElement>(null);
  const successHeading = useRef<HTMLHeadingElement>(null);
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (!succeeded) return;

    const panel = successPanel.current;
    const heading = successHeading.current;
    if (!panel || !heading) return;

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    panel.scrollIntoView({
      behavior: reduceMotion ? 'auto' : 'smooth',
      block: 'start',
    });
    heading.focus({ preventScroll: true });
  }, [succeeded]);

  const update = <K extends GrowthAuditField>(key: K, value: GrowthAuditFields[K]) => {
    setFields((current) => ({ ...current, [key]: value }));
    setErrors((current) => {
      if (!current[key]) return current;
      const next = { ...current };
      delete next[key];
      return next;
    });
  };

  const markStarted = () => {
    if (started.current) return;
    started.current = true;
    trackEvent('growth_audit_application_started');
  };

  const toggleImprovement = (option: string) => {
    markStarted();
    const selected = fields.improvements.includes(option)
      ? fields.improvements.filter((item) => item !== option)
      : [...fields.improvements, option];
    update('improvements', selected);
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitError('');

    const nextErrors = validateGrowthAudit(fields);
    setErrors(nextErrors);

    const invalid = firstGrowthAuditError(nextErrors);
    if (invalid) {
      trackEvent('growth_audit_form_error', {
        error_type: 'validation',
        fields: Object.keys(nextErrors).join(','),
      });
      const target = formRef.current?.querySelector<HTMLElement>(`#${invalid}, #${invalid}-group`);
      target?.focus();
      return;
    }

    setSubmitting(true);
    trackEvent('growth_audit_application_submitted');

    try {
      const response = await fetch('/api/growth-audit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(fields),
      });

      const payload = (await response.json().catch(() => ({}))) as {
        error?: string;
        fields?: GrowthAuditErrors;
      };

      if (!response.ok) {
        if (payload.fields) setErrors(payload.fields);
        setSubmitError(payload.error || 'Something went wrong. Please try again.');
        trackEvent('growth_audit_form_error', {
          error_type: response.status === 400 ? 'validation' : 'submit',
          fields: payload.fields ? Object.keys(payload.fields).join(',') : 'request',
        });
        return;
      }

      setSucceeded(true);
      trackEvent('growth_audit_application_success');
    } catch {
      setSubmitError('Something went wrong. Please try again.');
      trackEvent('growth_audit_form_error', { error_type: 'submit', fields: 'network' });
    } finally {
      setSubmitting(false);
    }
  };

  if (succeeded) {
    return (
      <div
        ref={successPanel}
        className="hero-enter scroll-mt-28 rounded-[28px] border border-[#ececec] bg-white p-6 shadow-[0_24px_48px_-32px_rgba(17,24,39,0.35)] sm:p-10"
      >
        <div role="status" aria-live="polite" aria-atomic="true">
          <h2
            ref={successHeading}
            tabIndex={-1}
            className="font-heading text-4xl font-bold tracking-tight text-accent outline-none md:text-5xl"
          >
            You&apos;re in.
          </h2>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-accent/75">
            Your Growth Audit application has been received.
          </p>
          <p className="mt-3 max-w-xl text-base leading-relaxed text-accent/75">
            We personally review each business, so we&apos;ll take a look at your application and
            get back to you with the next step.
          </p>
        </div>

        <div className="mt-12">
          <h3 className="font-heading text-2xl font-bold tracking-tight text-accent">
            While you&apos;re here
          </h3>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {whileYoureHere.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="ds-card-interactive group overflow-hidden"
              >
                <div className="relative aspect-[16/10] bg-[#f4f4f5]">
                  <Image
                    src={item.image}
                    alt={item.imageAlt}
                    fill
                    sizes="(max-width: 768px) 100vw, 320px"
                    className={item.imageClass}
                  />
                </div>
                <div className="p-5">
                  <p className="font-heading text-lg font-bold tracking-tight text-accent">
                    {item.title}
                  </p>
                  <p className="mt-2 text-[14px] leading-relaxed text-accent/70">{item.body}</p>
                  <span className="mt-4 inline-flex items-center gap-1.5 text-[13px] font-semibold text-primary">
                    Have a look
                    <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    );
  }

  const improvementsErrorId = 'improvements-error';

  return (
    <form
      ref={formRef}
      id="growth-audit-form"
      onSubmit={handleSubmit}
      onFocus={markStarted}
      noValidate
      className="rounded-[28px] border border-[#ececec] bg-white p-6 shadow-[0_24px_48px_-32px_rgba(17,24,39,0.28)] sm:p-10"
    >
      <div className="mb-8 max-w-xl">
        <h2 className="font-heading text-3xl font-bold tracking-tight text-accent md:text-4xl">
          Apply for your Growth Audit
        </h2>
        <p className="mt-3 text-[15px] leading-relaxed text-accent/70">Takes about 2 minutes.</p>
      </div>

      {submitError && (
        <p role="alert" className="mb-6 rounded-2xl border border-red-200 bg-red-50 px-4 py-3 text-[14px] leading-relaxed text-red-800">
          {submitError}{' '}
          <a href="mailto:info@digeststudio.com.au" className="font-semibold underline underline-offset-2">
            Email info@digeststudio.com.au
          </a>{' '}
          if it keeps happening.
        </p>
      )}

      <div className="absolute -left-[9999px] h-px w-px overflow-hidden" aria-hidden="true">
        <label htmlFor="dsHp">Leave blank</label>
        <input
          id="dsHp"
          name="dsHp"
          type="text"
          tabIndex={-1}
          autoComplete="off"
          value={fields.dsHp}
          onChange={(event) => update('dsHp', event.target.value)}
        />
      </div>

      <fieldset className="space-y-5">
        <legend className="mb-5 font-heading text-xl font-bold tracking-tight text-accent">
          About your business
        </legend>
        <div className="grid gap-5 sm:grid-cols-2">
          <TextField
            id="businessName"
            label="Business name"
            value={fields.businessName}
            error={errors.businessName}
            autoComplete="organization"
            onChange={(value) => update('businessName', value)}
          />
          <TextField
            id="website"
            label="Website"
            value={fields.website}
            error={errors.website}
            autoComplete="url"
            inputMode="url"
            placeholder="yourbusiness.com.au"
            onChange={(value) => update('website', value)}
          />
          <div>
            <label htmlFor="industry" className={labelClass}>
              Industry
            </label>
            <select
              id="industry"
              name="industry"
              value={fields.industry}
              aria-invalid={errors.industry ? true : undefined}
              aria-describedby={errors.industry ? 'industry-error' : undefined}
              onChange={(event) => update('industry', event.target.value)}
              className={`${inputClass} ${errors.industry ? 'border-red-600' : ''}`}
            >
              <option value="">Select an industry</option>
              {INDUSTRIES.map((industry) => (
                <option key={industry} value={industry}>
                  {industry}
                </option>
              ))}
            </select>
            <FieldError id="industry-error" message={errors.industry} />
          </div>
          <TextField
            id="suburb"
            label="Suburb / location"
            value={fields.suburb}
            error={errors.suburb}
            autoComplete="address-level2"
            placeholder="e.g. Merewether"
            list="growth-audit-suburbs"
            onChange={(value) => update('suburb', value)}
          />
          <datalist id="growth-audit-suburbs">
            {SUBURB_SUGGESTIONS.map((suburb) => (
              <option key={suburb} value={suburb} />
            ))}
          </datalist>
        </div>
      </fieldset>

      <fieldset className="mt-10">
        <legend className="font-heading text-xl font-bold tracking-tight text-accent">
          What are you trying to improve?
        </legend>
        <p id="improvements-hint" className="mt-2 text-[14px] text-accent/65">
          Choose everything that applies.
        </p>
        <div
          id="improvements-group"
          tabIndex={-1}
          role="group"
          aria-invalid={errors.improvements ? true : undefined}
          aria-describedby={errors.improvements ? `${improvementsErrorId} improvements-hint` : 'improvements-hint'}
          className="mt-5 grid gap-3 sm:grid-cols-2 outline-none"
        >
          {IMPROVEMENT_OPTIONS.map((option) => {
            const checked = fields.improvements.includes(option);
            return (
              <label
                key={option}
                className={`flex cursor-pointer items-center gap-3 rounded-2xl border px-4 py-3.5 text-[14px] font-medium transition-colors focus-within:ring-2 focus-within:ring-primary/40 focus-within:ring-offset-2 ${
                  checked
                    ? 'border-accent bg-accent text-white'
                    : 'border-[#e4e4e7] bg-white text-accent hover:border-accent/25'
                }`}
              >
                <input
                  type="checkbox"
                  name="improvements"
                  value={option}
                  checked={checked}
                  onChange={() => toggleImprovement(option)}
                  className="h-4 w-4 shrink-0 accent-primary"
                />
                {option}
              </label>
            );
          })}
        </div>
        <FieldError id={improvementsErrorId} message={errors.improvements} />
      </fieldset>

      <div className="mt-10">
        <label htmlFor="frustration" className="font-heading text-xl font-bold tracking-tight text-accent">
          What&apos;s frustrating you most about your marketing right now?
        </label>
        <textarea
          id="frustration"
          name="frustration"
          rows={5}
          value={fields.frustration}
          placeholder="Tell us what's not working, what you've tried or what you'd like to improve."
          aria-invalid={errors.frustration ? true : undefined}
          aria-describedby={errors.frustration ? 'frustration-error' : undefined}
          onChange={(event) => update('frustration', event.target.value)}
          className={`${inputClass} mt-4 resize-y ${errors.frustration ? 'border-red-600 focus:border-red-600 focus:ring-red-600/20' : ''}`}
        />
        <FieldError id="frustration-error" message={errors.frustration} />
      </div>

      <div className="mt-10">
        <label htmlFor="opportunity" className={labelClass}>
          <span className="mb-2 block text-[11px] font-semibold uppercase tracking-[0.18em] text-accent/70">
            Optional
          </span>
          What would make the biggest difference to your business over the next 6–12 months?
        </label>
        <textarea
          id="opportunity"
          name="opportunity"
          rows={4}
          value={fields.opportunity}
          aria-invalid={errors.opportunity ? true : undefined}
          aria-describedby={errors.opportunity ? 'opportunity-error' : undefined}
          onChange={(event) => update('opportunity', event.target.value)}
          className={`${inputClass} resize-y ${errors.opportunity ? 'border-red-600' : ''}`}
        />
        <FieldError id="opportunity-error" message={errors.opportunity} />
      </div>

      <fieldset className="mt-10 space-y-5">
        <legend className="mb-5 font-heading text-xl font-bold tracking-tight text-accent">
          Contact
        </legend>
        <div className="grid gap-5 sm:grid-cols-2">
          <TextField
            id="name"
            label="Name"
            value={fields.name}
            error={errors.name}
            autoComplete="name"
            onChange={(value) => update('name', value)}
          />
          <TextField
            id="email"
            label="Email"
            type="email"
            inputMode="email"
            value={fields.email}
            error={errors.email}
            autoComplete="email"
            onChange={(value) => update('email', value)}
          />
          <div className="sm:col-span-2">
            <TextField
              id="phone"
              label="Phone"
              type="tel"
              inputMode="tel"
              value={fields.phone}
              error={errors.phone}
              autoComplete="tel"
              placeholder="04xx xxx xxx"
              onChange={(value) => update('phone', value)}
            />
          </div>
        </div>
      </fieldset>

      <div className="mt-8">
        <label htmlFor="consent" className="flex items-start gap-3 text-[14px] leading-relaxed text-accent/80">
          <input
            id="consent"
            name="consent"
            type="checkbox"
            checked={fields.consent}
            aria-invalid={errors.consent ? true : undefined}
            aria-describedby={errors.consent ? 'consent-error' : undefined}
            onChange={(event) => update('consent', event.target.checked)}
            className="mt-0.5 h-4 w-4 shrink-0 accent-primary"
          />
          <span>I agree to Digest Studio contacting me about my Growth Audit and recommendations.</span>
        </label>
        <FieldError id="consent-error" message={errors.consent} />
        <p className="mt-3 text-[13px] text-accent/70">
          <Link href="/privacy" className="underline decoration-accent/20 underline-offset-4 hover:text-primary">
            Privacy policy
          </Link>
        </p>
      </div>

      <div className="mt-8">
        <button
          type="submit"
          disabled={submitting}
          aria-busy={submitting}
          className={`inline-flex w-full items-center justify-center gap-2.5 rounded-2xl px-7 py-3.5 text-[15px] font-semibold transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 focus-visible:ring-offset-2 sm:w-auto ${
            submitting
              ? 'cursor-wait bg-primary/70 text-white'
              : 'bg-primary text-white hover:bg-accent'
          }`}
        >
          {submitting ? 'Sending your application' : 'Apply for My Growth Audit'}
          {!submitting && <ArrowRight className="h-4 w-4" aria-hidden="true" />}
        </button>
      </div>
    </form>
  );
}
