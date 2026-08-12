"use client";

import { useEffect, useState } from "react";
import { prayerTimes } from "@/lib/data";

function parseToMinutes(time: string) {
  const [, hh, mm, period] = time.match(/(\d+):(\d+)\s*(AM|PM)/i) ?? [];
  let hours = Number(hh) % 12;
  if (period?.toUpperCase() === "PM") hours += 12;
  return hours * 60 + Number(mm);
}

function formatCountdown(totalSeconds: number) {
  const h = Math.floor(totalSeconds / 3600);
  const m = Math.floor((totalSeconds % 3600) / 60);
  const s = Math.floor(totalSeconds % 60);
  return [h, m, s].map((n) => String(n).padStart(2, "0")).join(":");
}

export default function PrayerTimesList() {
  const [now, setNow] = useState<Date | null>(null);

  useEffect(() => {
    setNow(new Date());
    const id = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(id);
  }, []);

  const nowMinutes = now ? now.getHours() * 60 + now.getMinutes() : null;
  const nowSeconds = now ? now.getSeconds() : 0;

  const upcomingIndex =
    nowMinutes === null
      ? -1
      : (() => {
          const idx = prayerTimes.findIndex((p) => parseToMinutes(p.time) > nowMinutes);
          return idx === -1 ? 0 : idx;
        })();

  return (
    <div>
      {prayerTimes.map((p, i) => {
        const isUpcoming = i === upcomingIndex;
        let countdown: string | null = null;
        if (isUpcoming && nowMinutes !== null) {
          const target = parseToMinutes(p.time);
          const diffMinutes = target > nowMinutes ? target - nowMinutes : target + 24 * 60 - nowMinutes;
          const diffSeconds = diffMinutes * 60 - nowSeconds;
          countdown = formatCountdown(Math.max(diffSeconds, 0));
        }

        return (
          <div
            key={p.name}
            className={`flex items-center justify-between border-b border-tint py-2.5 text-[13px] last:border-b-0 ${
              isUpcoming ? "-mx-2.5 rounded-lg border-b-0 bg-brand px-2.5" : ""
            }`}
          >
            <span className={`font-semibold ${isUpcoming ? "text-white" : "text-deep"}`}>
              {p.name}
              {isUpcoming && countdown && (
                <span className="ml-2 text-[10.5px] font-bold tracking-[0.02em] text-white/75">
                  Upcoming in {countdown}
                </span>
              )}
            </span>
            <span className={`font-bold ${isUpcoming ? "text-white" : "text-brand"}`}>{p.time}</span>
          </div>
        );
      })}
    </div>
  );
}
