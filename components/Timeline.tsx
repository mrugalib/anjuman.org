"use client";

import { useEffect, useRef, useState } from "react";

type TimelineEntry = { year: string; title: string; text: string };

export default function Timeline({ timeline }: { timeline: TimelineEntry[] }) {
  const trackRef = useRef<HTMLDivElement>(null);
  const markerRefs = useRef<(HTMLSpanElement | null)[]>([]);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  const [markerY, setMarkerY] = useState<number[]>([]);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const measure = () => {
      const track = trackRef.current;
      if (!track) return;
      const trackTop = track.getBoundingClientRect().top;
      setMarkerY(
        markerRefs.current.map((el) => {
          if (!el) return 0;
          const r = el.getBoundingClientRect();
          return r.top - trackTop + r.height / 2;
        }),
      );
    };

    measure();
    window.addEventListener("resize", measure);
    const ro = new ResizeObserver(measure);
    if (trackRef.current) ro.observe(trackRef.current);
    return () => {
      window.removeEventListener("resize", measure);
      ro.disconnect();
    };
  }, [timeline.length]);

  useEffect(() => {
    const visible = new Set<number>();

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          const idx = Number((entry.target as HTMLElement).dataset.index);
          if (entry.isIntersecting) visible.add(idx);
          else visible.delete(idx);
        }
        if (visible.size > 0) {
          setActiveIndex(Math.max(...visible));
        }
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 },
    );

    itemRefs.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, [timeline.length]);

  const fillHeight = markerY[activeIndex] ?? 0;
  const dotTop = markerY[activeIndex] ?? 0;

  return (
    <div ref={trackRef} className="relative mx-auto max-w-[760px]">
      <div
        aria-hidden
        className="absolute top-0 bottom-0 left-[7px] w-px bg-hairline md:left-1/2 md:-translate-x-1/2"
      />
      <div
        aria-hidden
        style={{ height: fillHeight }}
        className="absolute top-0 left-[7px] w-px bg-brand transition-[height] duration-500 ease-out md:left-1/2 md:-translate-x-1/2"
      />
      <div
        aria-hidden
        style={{ top: dotTop }}
        className="absolute left-[7px] h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand shadow-[0_0_0_4px_rgba(28,122,68,0.18)] transition-[top] duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] md:left-1/2"
      />

      <div className="flex flex-col gap-8">
        {timeline.map((t, i) => {
          const reached = i <= activeIndex;
          return (
            <div
              key={t.year}
              ref={(el) => {
                itemRefs.current[i] = el;
              }}
              data-index={i}
              className={`relative flex flex-col gap-2 pl-8 md:w-1/2 md:pl-0 ${
                i % 2 === 0 ? "md:pr-10 md:text-right" : "md:ml-auto md:pl-10"
              }`}
            >
              <span
                ref={(el) => {
                  markerRefs.current[i] = el;
                }}
                aria-hidden
                className={`absolute top-1 left-0 h-3.5 w-3.5 rounded-full border-2 transition-colors duration-500 ${
                  reached ? "border-brand bg-brand" : "border-brand bg-white"
                } ${i % 2 === 0 ? "md:left-auto md:right-[-7px]" : "md:right-auto md:left-[-7px]"}`}
              />
              <span className="text-[13px] font-extrabold text-brand">{t.year}</span>
              <span className="text-[14.5px] font-bold text-deep">{t.title}</span>
              <p className="text-[12.5px] leading-relaxed text-muted">{t.text}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
