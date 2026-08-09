"use client";

import { useLanguage } from "@/lib/i18n";

export default function ContactForm() {
  const { t } = useLanguage();
  return (
    <form onSubmit={(e) => e.preventDefault()} className="flex flex-col gap-4">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div className="flex flex-col gap-1.5">
          <label htmlFor="name" className="text-xs font-bold text-muted">
            {t("form_name")}
          </label>
          <input
            id="name"
            type="text"
            required
            placeholder={t("form_namePlaceholder")}
            className="w-full rounded-lg border border-[#d7e6db] bg-white px-3.5 py-3 text-sm text-ink placeholder-faint focus:border-brand focus:ring-3 focus:ring-brand/15 focus:outline-none"
          />
        </div>
        <div className="flex flex-col gap-1.5">
          <label htmlFor="email" className="text-xs font-bold text-muted">
            {t("form_email")}
          </label>
          <input
            id="email"
            type="email"
            required
            placeholder={t("form_emailPlaceholder")}
            className="w-full rounded-lg border border-[#d7e6db] bg-white px-3.5 py-3 text-sm text-ink placeholder-faint focus:border-brand focus:ring-3 focus:ring-brand/15 focus:outline-none"
          />
        </div>
      </div>
      <div className="flex flex-col gap-1.5">
        <label htmlFor="subject" className="text-xs font-bold text-muted">
          {t("form_subject")}
        </label>
        <input
          id="subject"
          type="text"
          placeholder={t("form_subjectPlaceholder")}
          className="w-full rounded-lg border border-[#d7e6db] bg-white px-3.5 py-3 text-sm text-ink placeholder-faint focus:border-brand focus:ring-3 focus:ring-brand/15 focus:outline-none"
        />
      </div>
      <div className="flex flex-col gap-1.5">
        <label htmlFor="message" className="text-xs font-bold text-muted">
          {t("form_message")}
        </label>
        <textarea
          id="message"
          rows={5}
          required
          placeholder={t("form_messagePlaceholder")}
          className="w-full resize-none rounded-lg border border-[#d7e6db] bg-white px-3.5 py-3 text-sm text-ink placeholder-faint focus:border-brand focus:ring-3 focus:ring-brand/15 focus:outline-none"
        />
      </div>
      <button
        type="submit"
        className="mt-1 w-fit rounded-lg bg-accent px-7 py-3.5 text-sm font-bold text-white transition-colors hover:bg-accent-hover"
      >
        {t("form_send")}
      </button>
    </form>
  );
}
