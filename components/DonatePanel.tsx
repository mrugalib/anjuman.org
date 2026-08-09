"use client";

import { donationFunds } from "@/lib/data";
import { useLanguage } from "@/lib/i18n";

export default function DonatePanel() {
  const { t } = useLanguage();
  return (
    <div id="donate-panel" className="[scroll-margin-top:var(--header-h)] rounded-2xl bg-tint p-6 md:p-10">
      <h2 className="mb-6 text-center text-xl font-extrabold text-deep">{t("donate_heading")}</h2>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="grid grid-cols-1 items-end gap-3.5 md:grid-cols-[1fr_1fr_1fr_auto]"
      >
        <div className="flex flex-col gap-1.5">
          <label htmlFor="fund" className="text-xs font-bold text-muted">
            {t("donate_fundLabel")}
          </label>
          <select
            id="fund"
            name="fund"
            className="w-full rounded-lg border border-[#d7e6db] bg-white px-3.5 py-3 text-sm text-ink focus:border-brand focus:ring-3 focus:ring-brand/15 focus:outline-none"
          >
            {donationFunds.map((f) => (
              <option key={f}>{f}</option>
            ))}
          </select>
        </div>
        <div className="flex flex-col gap-1.5">
          <label htmlFor="contact" className="text-xs font-bold text-muted">
            {t("donate_contactLabel")}
          </label>
          <input
            id="contact"
            type="text"
            placeholder={t("donate_contactPlaceholder")}
            className="w-full rounded-lg border border-[#d7e6db] bg-white px-3.5 py-3 text-sm text-ink placeholder-faint focus:border-brand focus:ring-3 focus:ring-brand/15 focus:outline-none"
          />
        </div>
        <div className="flex flex-col gap-1.5">
          <label htmlFor="amount" className="text-xs font-bold text-muted">
            {t("donate_amountLabel")}
          </label>
          <input
            id="amount"
            type="text"
            inputMode="numeric"
            placeholder={t("donate_amountPlaceholder")}
            className="w-full rounded-lg border border-[#d7e6db] bg-white px-3.5 py-3 text-sm text-ink placeholder-faint focus:border-brand focus:ring-3 focus:ring-brand/15 focus:outline-none"
          />
        </div>
        <button
          type="submit"
          className="h-[46px] rounded-lg bg-accent px-7 text-sm font-bold text-white transition-colors hover:bg-accent-hover"
        >
          {t("donate_submit")}
        </button>
      </form>
    </div>
  );
}
