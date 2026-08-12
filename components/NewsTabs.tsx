"use client";

import { useState } from "react";
import Link from "next/link";
import { newsCategories } from "@/lib/data";
import { useLanguage } from "@/lib/i18n";

export default function NewsTabs() {
  const { t } = useLanguage();
  const [active, setActive] = useState(newsCategories[0].key);
  const category = newsCategories.find((c) => c.key === active) ?? newsCategories[0];

  return (
    <div>
      <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
        <h2 className="text-2xl font-extrabold text-deep">{t("news_heading")}</h2>

        <div
          role="tablist"
          aria-label="News categories"
          className="flex gap-2 overflow-x-auto pb-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {newsCategories.map((c) => {
            const selected = c.key === active;
            return (
              <button
                key={c.key}
                role="tab"
                aria-selected={selected}
                onClick={() => setActive(c.key)}
                className={`shrink-0 rounded-full border px-4.5 py-2.5 text-[13.5px] font-bold transition-colors ${
                  selected
                    ? "border-brand bg-brand text-white"
                    : "border-hairline bg-white text-muted hover:border-brand hover:text-brand"
                }`}
              >
                {c.label}
              </button>
            );
          })}
        </div>
      </div>

      <div key={category.key} role="tabpanel" className="tab-fade grid grid-cols-1 gap-6 lg:grid-cols-[1.3fr_1fr]">
        <Link
          href={`/news/${category.featured.slug}`}
          className="group flex flex-col overflow-hidden rounded-card border border-hairline transition-shadow hover:shadow-[0_12px_32px_rgba(15,53,31,0.12)]"
        >
          <div className="h-56 overflow-hidden md:h-70">
            <img
              src={category.featured.heroImage}
              alt=""
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </div>
          <div className="flex flex-1 flex-col p-5">
            <span className="mb-2.5 w-fit rounded-full bg-tint px-2.5 py-1 text-[11px] font-bold text-brand">
              {category.label}
            </span>
            <h3 className="mb-2 text-base leading-snug font-bold text-deep group-hover:text-brand">
              {category.featured.title}
            </h3>
            <p className="mb-3.5 flex-1 text-[13px] leading-relaxed text-muted">
              {category.featured.excerpt}
            </p>
            <span className="mt-auto text-xs text-faint">{category.featured.date}</span>
          </div>
        </Link>

        <div className="flex h-full flex-col gap-5">
          {category.rest.map((item) => (
            <Link
              key={item.title}
              href={`/news/${item.slug}`}
              className="group flex flex-1 overflow-hidden rounded-card border border-hairline transition-shadow hover:shadow-[0_12px_32px_rgba(15,53,31,0.12)]"
            >
              <div className="w-32 min-h-32 shrink-0 self-stretch overflow-hidden">
                <img
                  src={item.heroImage}
                  alt=""
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="flex flex-1 flex-col justify-center p-4">
                <h3 className="mb-1.5 text-sm font-bold text-deep group-hover:text-brand">{item.title}</h3>
                <span className="text-xs text-faint">{item.date}</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
