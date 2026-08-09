"use client";

import { useEffect, useState } from "react";
import { X, CaretLeft, CaretRight } from "@phosphor-icons/react/dist/ssr";
import { galleryFilters, galleryItems, type GalleryCategory } from "@/lib/data";

export default function GalleryGrid() {
  const [active, setActive] = useState<GalleryCategory | "all">("all");
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const items = active === "all" ? galleryItems : galleryItems.filter((g) => g.category === active);

  useEffect(() => {
    if (openIndex === null) return;
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setOpenIndex(null);
      if (e.key === "ArrowRight") setOpenIndex((i) => (i === null ? i : (i + 1) % items.length));
      if (e.key === "ArrowLeft") setOpenIndex((i) => (i === null ? i : (i - 1 + items.length) % items.length));
    }
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [openIndex, items.length]);

  return (
    <div>
      <div
        role="tablist"
        aria-label="Gallery categories"
        className="mb-8 flex gap-2 overflow-x-auto pb-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {galleryFilters.map((f) => {
          const selected = f.key === active;
          return (
            <button
              key={f.key}
              role="tab"
              aria-selected={selected}
              onClick={() => {
                setActive(f.key);
                setOpenIndex(null);
              }}
              className={`shrink-0 rounded-full border px-4.5 py-2.5 text-[13.5px] font-bold transition-colors ${
                selected
                  ? "border-brand bg-brand text-white"
                  : "border-hairline bg-white text-muted hover:border-brand hover:text-brand"
              }`}
            >
              {f.label}
            </button>
          );
        })}
      </div>

      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
        {items.map((item, i) => (
          <button
            key={item.image}
            type="button"
            onClick={() => setOpenIndex(i)}
            className="group text-left"
          >
            <figure className="overflow-hidden rounded-card border border-hairline">
              <div className="aspect-square w-full overflow-hidden bg-tint">
                <img
                  src={item.image}
                  alt={item.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <figcaption className="p-3.5">
                <span className="mb-1 block w-fit rounded-full bg-tint px-2 py-0.5 text-[10.5px] font-bold text-brand capitalize">
                  {item.category}
                </span>
                <span className="text-[12.5px] font-bold text-deep">{item.title}</span>
              </figcaption>
            </figure>
          </button>
        ))}
      </div>

      {openIndex !== null && items[openIndex] && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Image viewer"
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 p-5"
          onClick={() => setOpenIndex(null)}
        >
          <button
            type="button"
            aria-label="Close"
            onClick={() => setOpenIndex(null)}
            className="absolute top-5 right-5 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20"
          >
            <X size={20} />
          </button>

          {items.length > 1 && (
            <>
              <button
                type="button"
                aria-label="Previous image"
                onClick={(e) => {
                  e.stopPropagation();
                  setOpenIndex((i) => (i === null ? i : (i - 1 + items.length) % items.length));
                }}
                className="absolute left-3 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 sm:left-6"
              >
                <CaretLeft size={20} weight="bold" />
              </button>
              <button
                type="button"
                aria-label="Next image"
                onClick={(e) => {
                  e.stopPropagation();
                  setOpenIndex((i) => (i === null ? i : (i + 1) % items.length));
                }}
                className="absolute right-3 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 sm:right-6"
              >
                <CaretRight size={20} weight="bold" />
              </button>
            </>
          )}

          <img
            src={items[openIndex].image}
            alt={items[openIndex].title}
            onClick={(e) => e.stopPropagation()}
            className="max-h-[85vh] max-w-full rounded-lg object-contain shadow-2xl"
          />
        </div>
      )}
    </div>
  );
}
