"use client";

import { useEffect, useRef, useState } from "react";
import { concerns } from "@/lib/data";
import { useLanguage } from "@/lib/i18n";

function formatIndian(num: number) {
  const s = Math.round(num).toString();
  if (s.length <= 3) return s;
  const last3 = s.slice(-3);
  const rest = s.slice(0, -3);
  const grouped = rest.replace(/\B(?=(\d{2})+(?!\d))/g, ",");
  return `${grouped},${last3}`;
}

function parseStat(value: string) {
  const match = value.match(/^([\d,]+)(.*)$/);
  if (!match) return { target: 0, suffix: value };
  return { target: parseInt(match[1].replace(/,/g, ""), 10), suffix: match[2] };
}

function easeOutExpo(t: number) {
  return t === 1 ? 1 : 1 - Math.pow(2, -10 * t);
}

function CountUp({ value, active }: { value: string; active: boolean }) {
  const { target, suffix } = parseStat(value);
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!active) return;
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const duration = reduceMotion ? 1 : 1400;
    const start = performance.now();
    let raf = 0;

    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      setDisplay(target * easeOutExpo(progress));
      if (progress < 1) raf = requestAnimationFrame(tick);
    };

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [active, target]);

  return (
    <>
      {formatIndian(display)}
      {suffix}
    </>
  );
}

export default function StatsBar() {
  const ref = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(false);
  const { t } = useLanguage();

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setActive(true);
          observer.unobserve(el);
        }
      },
      { threshold: 0.3 },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section aria-label="Trust at a glance" className="relative z-3 mx-auto -mt-24 max-w-[1180px] px-5 sm:-mt-14 md:px-10">
      <div
        ref={ref}
        className={`stagger-grid overflow-hidden rounded-card shadow-[0_18px_44px_rgba(15,53,31,0.16)] ${
          active ? "is-visible" : ""
        }`}
      >
        <div className="grid grid-cols-2 gap-px bg-hairline sm:grid-cols-5">
          {concerns.map((c, i) => (
            <div
              key={c.name}
              className={`bg-white px-5 py-6 text-center sm:py-7 sm:col-span-1 ${
                i === concerns.length - 1 && concerns.length % 2 !== 0 ? "col-span-2" : ""
              }`}
            >
              <div className="text-[19px] leading-tight font-extrabold break-words text-brand tabular-nums sm:text-[23px] md:text-[27px]">
                <CountUp value={c.stat} active={active} />
              </div>
              <div className="mt-1 text-[12.5px] text-muted">{t(c.statLabel)}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
