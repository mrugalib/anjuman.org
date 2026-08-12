"use client";

import { useEffect, useRef, useState } from "react";
import FounderCard3D from "./FounderCard3D";
import T from "./T";
import { founders } from "@/lib/data";

export default function FoundersGrid() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(el);
        }
      },
      { threshold: 0.15 },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div>
      <div className="mb-8 text-center">
        <h2 className="text-2xl font-extrabold text-deep">
          <T k="founders_heading" />
        </h2>
        <p className="mt-2 text-[13px] text-muted">
          <T k="founders_subheading" />
        </p>
      </div>
      <div
        ref={ref}
        className={`stagger-grid grid grid-cols-2 gap-x-2 gap-y-3 sm:gap-x-2.5 sm:gap-y-4 lg:grid-cols-4 lg:gap-x-3 ${visible ? "is-visible" : ""}`}
      >
        {founders.map((f, i) => (
          <div key={f.name} className="mx-auto w-full max-w-[185px] sm:max-w-[220px]">
            <FounderCard3D founder={f} index={i} />
          </div>
        ))}
      </div>
    </div>
  );
}
