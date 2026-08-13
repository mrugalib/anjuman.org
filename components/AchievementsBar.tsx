"use client";

import { useEffect, useRef, useState } from "react";
import { GraduationCap, Mosque, RocketLaunch } from "@phosphor-icons/react/dist/ssr";
import { aboutAchievements } from "@/lib/data";

const achievementIcons: Record<string, typeof GraduationCap> = {
  "Our Madrasah": GraduationCap,
  "Khanka Sharif": Mosque,
  "On Going Project": RocketLaunch,
};

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
      {Math.round(display)}
      {suffix}
    </>
  );
}

export default function AchievementsBar() {
  const ref = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(false);

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
    <div>
      <div className="mb-8 text-center md:mb-10">
        <span className="mb-3 inline-block w-fit rounded-full bg-tint px-3 py-1 text-[11.5px] font-bold text-brand">
          OUR IMPACT
        </span>
        <h2 className="text-2xl font-extrabold text-deep md:text-[28px]">A Century of Achievements</h2>
      </div>

      <div
        ref={ref}
        className={`stagger-grid overflow-hidden rounded-card bg-deep shadow-[0_18px_44px_rgba(15,53,31,0.16)] ${
          active ? "is-visible" : ""
        }`}
      >
        <div className="grid grid-cols-1 gap-px bg-white/10 sm:grid-cols-3">
          {aboutAchievements.map((a) => {
            const Icon = achievementIcons[a.label];
            return (
              <div key={a.label} className="bg-deep px-6 py-10 text-center sm:py-12">
                <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-[#8fe0b4] sm:h-14 sm:w-14">
                  <Icon size={26} weight="duotone" className="sm:size-[30px]" />
                </div>
                <div className="text-[32px] leading-tight font-extrabold text-white tabular-nums sm:text-[40px] md:text-[46px]">
                  <CountUp value={a.value} active={active} />
                </div>
                <div className="mt-2 text-[13.5px] font-semibold text-white/75 sm:text-[14.5px]">{a.label}</div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
