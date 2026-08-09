"use client";

import { useEffect, useState } from "react";
import { Sparkle } from "@phosphor-icons/react/dist/ssr";
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
    <div className="relative overflow-hidden bg-[linear-gradient(100deg,#0c2c15_0%,#1a5c33_50%,#0c2c15_100%)] text-white">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            "radial-gradient(circle at 12% 25%, #f2c14e 0%, transparent 42%), radial-gradient(circle at 88% 75%, #f2c14e 0%, transparent 42%)",
        }}
      />
      <div className="relative mx-auto flex max-w-[1180px] flex-wrap items-center justify-center gap-x-6 gap-y-2 px-4 py-2.5 text-center sm:justify-between sm:px-5 md:px-10">
        <div className="flex flex-wrap items-center justify-center gap-x-2.5 gap-y-1 sm:justify-start">
          <span
            className={`inline-flex shrink-0 items-center gap-1 rounded-full px-2.5 py-1 text-[10px] font-extrabold tracking-[0.08em] ring-1 ${
              happeningNow
                ? "animate-pulse bg-[#f2c14e]/20 text-[#f2c14e] ring-[#f2c14e]/45"
                : "bg-[#f2c14e]/15 text-[#f2c14e] ring-[#f2c14e]/35"
            }`}
          >
            <Sparkle size={11} weight="fill" />
            {happeningNow ? t("event_happeningNow") : t("event_badge")}
          </span>
          <span className="text-[12.5px] font-bold sm:text-[13.5px]">{t("event_title")}</span>
          <span className="hidden text-[12px] text-white/65 sm:inline">{t("event_date")}</span>
        </div>

        {!happeningNow && (
          <div className="flex items-center gap-1.5 sm:gap-2.5">
            {units.map((u, i) => (
              <div key={u.label} className="flex items-center gap-1.5 sm:gap-2.5">
                <div className="flex min-w-9 flex-col items-center rounded-lg bg-white/10 px-2 py-1 ring-1 ring-white/15 sm:min-w-11 sm:px-2.5 sm:py-1.5">
                  <span className="font-mono text-[15px] leading-none font-extrabold tabular-nums text-[#f2c14e] sm:text-[18px]">
                    {pad(u.value)}
                  </span>
                  <span className="mt-0.5 text-[8px] font-bold tracking-[0.05em] text-white/60 uppercase sm:text-[9px]">
                    {u.label}
                  </span>
                </div>
                {i < units.length - 1 && <span className="text-white/30">:</span>}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
