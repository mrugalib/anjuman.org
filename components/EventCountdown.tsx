"use client";

import { useEffect, useState } from "react";
import { useLanguage } from "@/lib/i18n";

const EVENT_START = new Date("2026-08-25T00:00:00+06:00").getTime();
const EVENT_END = new Date("2026-08-27T00:00:00+06:00").getTime();

function pad(n: number) {
  return String(n).padStart(2, "0");
}

export default function EventCountdown() {
  const { t } = useLanguage();
  const [now, setNow] = useState<number | null>(null);

  useEffect(() => {
    setNow(Date.now());
    const id = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(id);
  }, []);

  if (now === null || now >= EVENT_END) return null;

  const happeningNow = now >= EVENT_START;
  const diff = Math.max(EVENT_START - now, 0);

  const units = [
    { value: Math.floor(diff / 86400000), label: t("countdown_days") },
    { value: Math.floor((diff % 86400000) / 3600000), label: t("countdown_hours") },
    { value: Math.floor((diff % 3600000) / 60000), label: t("countdown_minutes") },
    { value: Math.floor((diff % 60000) / 1000), label: t("countdown_seconds") },
  ];

  return (
    <div className="bg-deep text-white">
      <div className="mx-auto flex max-w-[1180px] flex-wrap items-center justify-center gap-x-6 gap-y-2 px-4 py-2.5 text-center sm:justify-between sm:px-5 md:px-10">
        <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-1.5 sm:justify-start">
          <span
            className={`inline-flex shrink-0 items-center rounded-md bg-[#F2994A] px-2.5 py-1 text-[10px] font-extrabold tracking-[0.06em] text-white uppercase ${
              happeningNow ? "animate-pulse" : ""
            }`}
          >
            {happeningNow ? t("event_happeningNow") : t("event_badge")}
          </span>
          <span className="text-[12.5px] font-semibold sm:text-[13px]">
            {t("event_title")} <span className="text-white/55">— {t("event_date")}</span>
          </span>
        </div>

        {!happeningNow && (
          <div className="flex items-center gap-4 sm:gap-6">
            {units.map((u) => (
              <div key={u.label} className="flex items-baseline gap-1">
                <span className="font-mono text-[14px] font-extrabold tabular-nums text-[#F2994A] sm:text-[15px]">
                  {pad(u.value)}
                </span>
                <span className="text-[11px] text-white/55 sm:text-[12px]">{u.label}</span>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
