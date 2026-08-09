"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { List, X } from "@phosphor-icons/react/dist/ssr";
import { mainNav } from "@/lib/data";
import { useLanguage } from "@/lib/i18n";
import { navLabelKeys } from "@/lib/translations";
import EventCountdown from "./EventCountdown";

export default function SiteHeader() {
  const [open, setOpen] = useState(false);
  const headerRef = useRef<HTMLElement>(null);
  const pathname = usePathname();
  const { lang, setLang, t } = useLanguage();
  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href.split("#")[0]) && href !== "/#news";
  const navLabel = (item: { label: string; href: string }) => {
    const key = navLabelKeys[item.href];
    return key ? t(key) : item.label;
  };

  useEffect(() => {
    const el = headerRef.current;
    if (!el) return;

    const setHeaderVar = () => {
      document.documentElement.style.setProperty("--header-h", `${el.offsetHeight}px`);
    };

    setHeaderVar();
    const ro = new ResizeObserver(setHeaderVar);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  return (
    <header
      ref={headerRef}
      className="sticky top-0 z-40 border-b border-hairline bg-white/96 backdrop-blur-sm [overflow-anchor:none]"
    >
      <EventCountdown />
      <div className="mx-auto flex h-16 max-w-[1180px] items-center justify-between gap-2 px-4 py-3 sm:h-18 sm:gap-6 sm:px-5 md:px-10">
        <Link href="/" className="flex min-w-0 shrink items-center gap-2 sm:shrink-0 sm:gap-3">
          <Image
            src="/images/anjuman-logo.jpg"
            alt="Anjuman-E Rahmania Ahmadia Sunnia Trust logo"
            width={42}
            height={42}
            className="h-9 w-9 shrink-0 object-contain sm:h-[42px] sm:w-[42px]"
            priority
          />
          <span className="flex min-w-0 flex-col leading-tight">
            <strong className="truncate text-[13px] font-extrabold text-deep sm:text-[14.5px]">
              Anjuman-E Rahmania
            </strong>
            <span className="truncate text-[9px] font-bold tracking-[0.04em] text-[#4f8f6a] sm:text-[10px] sm:tracking-[0.06em]">
              AHMADIA SUNNIA TRUST
            </span>
          </span>
        </Link>

        <nav aria-label="Primary" className="hidden flex-1 justify-center gap-7 lg:flex">
          {mainNav.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className={`border-b-2 py-2 text-[14.5px] font-semibold ${
                isActive(item.href)
                  ? "border-brand text-brand"
                  : "border-transparent text-ink hover:border-brand hover:text-brand"
              }`}
            >
              {navLabel(item)}
            </Link>
          ))}
        </nav>

        <div className="flex shrink-0 items-center gap-1.5 sm:gap-3">
          <div
            role="group"
            aria-label="Language"
            className="hidden items-center gap-1 rounded-full border border-hairline p-0.5 text-[11.5px] font-bold text-muted sm:flex"
          >
            <button
              type="button"
              aria-pressed={lang === "en"}
              onClick={() => setLang("en")}
              className={`rounded-full px-2.5 py-1 transition-colors ${
                lang === "en" ? "bg-brand text-white" : "text-muted hover:text-brand"
              }`}
            >
              EN
            </button>
            <button
              type="button"
              aria-pressed={lang === "bn"}
              onClick={() => setLang("bn")}
              className={`rounded-full px-2.5 py-1 transition-colors ${
                lang === "bn" ? "bg-brand text-white" : "text-muted hover:text-brand"
              }`}
            >
              BN
            </button>
          </div>
          <Link
            href="/#donate-panel"
            className="rounded-lg bg-brand px-3 py-2 text-[12px] font-bold whitespace-nowrap text-white transition-colors hover:bg-brand-hover sm:px-5 sm:py-2.5 sm:text-[13.5px]"
          >
            <span className="sm:hidden">{t("header_donateShort")}</span>
            <span className="hidden sm:inline">{t("header_donate")}</span>
          </Link>
          <button
            type="button"
            aria-label={open ? t("header_closeMenu") : t("header_openMenu")}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-hairline sm:h-10 sm:w-10 lg:hidden"
          >
            {open ? <X size={20} /> : <List size={20} />}
          </button>
        </div>
      </div>

      {open && (
        <nav
          aria-label="Primary mobile"
          className="flex max-h-[calc(100vh-4rem)] flex-col gap-1 overflow-y-auto border-b border-hairline bg-white px-5 py-4 shadow-lg sm:max-h-[calc(100vh-4.5rem)] lg:hidden"
        >
          {mainNav.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              onClick={() => setOpen(false)}
              className={`rounded-md px-2 py-2.5 text-[14.5px] font-semibold ${
                isActive(item.href) ? "text-brand" : "text-ink hover:text-brand"
              }`}
            >
              {navLabel(item)}
            </Link>
          ))}
          <div role="group" aria-label="Language" className="mt-2 flex items-center gap-1 border-t border-hairline pt-3">
            <button
              type="button"
              aria-pressed={lang === "en"}
              onClick={() => setLang("en")}
              className={`rounded-full px-3 py-1.5 text-[13px] font-bold ${
                lang === "en" ? "bg-brand text-white" : "text-muted"
              }`}
            >
              EN
            </button>
            <button
              type="button"
              aria-pressed={lang === "bn"}
              onClick={() => setLang("bn")}
              className={`rounded-full px-3 py-1.5 text-[13px] font-bold ${
                lang === "bn" ? "bg-brand text-white" : "text-muted"
              }`}
            >
              BN
            </button>
          </div>
        </nav>
      )}
    </header>
  );
}
