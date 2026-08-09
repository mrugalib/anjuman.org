"use client";

import { useId, useState } from "react";
import { CaretDown } from "@phosphor-icons/react/dist/ssr";

type Faq = { q: string; a: string };

export default function FaqAccordion({ faqs }: { faqs: Faq[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const baseId = useId();

  return (
    <div className="mx-auto flex max-w-[760px] flex-col gap-3">
      {faqs.map((f, i) => {
        const open = openIndex === i;
        const panelId = `${baseId}-panel-${i}`;
        const buttonId = `${baseId}-button-${i}`;
        return (
          <div
            key={f.q}
            className={`rounded-card border transition-colors ${
              open ? "border-brand" : "border-hairline"
            }`}
          >
            <button
              type="button"
              id={buttonId}
              aria-expanded={open}
              aria-controls={panelId}
              onClick={() => setOpenIndex(open ? null : i)}
              className="flex w-full items-center justify-between gap-4 p-5 text-left"
            >
              <span className="text-[14.5px] font-bold text-deep">{f.q}</span>
              <CaretDown
                size={16}
                weight="bold"
                className={`shrink-0 text-muted transition-transform duration-300 ${
                  open ? "rotate-180 text-brand" : ""
                }`}
              />
            </button>
            <div
              id={panelId}
              role="region"
              aria-labelledby={buttonId}
              className={`grid overflow-hidden transition-[grid-template-rows] duration-300 ease-out ${
                open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
              }`}
            >
              <div className="overflow-hidden">
                <p className="px-5 pb-5 text-[13px] leading-relaxed text-muted">{f.a}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
