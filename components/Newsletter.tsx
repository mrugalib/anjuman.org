"use client";

import { useLanguage } from "@/lib/i18n";

export default function Newsletter() {
  const { t } = useLanguage();
  return (
    <div className="flex flex-wrap items-center justify-between gap-4 bg-brand px-5 py-6 md:px-10 md:py-7">
      <div className="text-[10px] leading-tight font-extrabold whitespace-nowrap text-white sm:text-[18px] lg:text-[21px]">
        {t("newsletter_heading")}
      </div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="flex min-w-70 max-w-[460px] flex-1 gap-2.5"
      >
        <label htmlFor="nl-email" className="sr-only">
          {t("newsletter_emailSr")}
        </label>
        <input
          id="nl-email"
          type="email"
          required
          placeholder={t("newsletter_placeholder")}
          className="flex-1 rounded-lg border-2 border-white/40 bg-white px-4 py-2.5 text-sm text-ink shadow-lg placeholder-faint focus:ring-3 focus:ring-white/50 focus:outline-none"
        />
        <button
          type="submit"
          className="rounded-lg bg-accent px-5.5 py-2.5 text-sm font-bold whitespace-nowrap text-white transition-colors hover:bg-accent-hover"
        >
          {t("newsletter_subscribe")}
        </button>
      </form>
    </div>
  );
}
