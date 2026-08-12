"use client";

import Link from "next/link";
import { activityCategories } from "@/lib/data";

export default function ActivityTabs({ initialKey }: { initialKey?: string } = {}) {
  const category = activityCategories.find((c) => c.key === initialKey) ?? activityCategories[0];

  return (
    <div>
      <div className="mb-8">
        <h2 className="text-2xl font-extrabold text-deep">{category.label}</h2>
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1.3fr_1fr]">
        <Link
          href={`/activities/${category.featured.slug}`}
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
              href={`/activities/${item.slug}`}
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
