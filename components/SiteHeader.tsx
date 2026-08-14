"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { CaretDown, List, X } from "@phosphor-icons/react/dist/ssr";
import { activityCategories, mainNav } from "@/lib/data";
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
  const isExternal = (href: string) => href.startsWith("http");
  const navLabel = (item: { label: string; href: string }) => {
    const key = navLabelKeys[item.href];
    return key ? t(key) : item.label;
  };
  const goToSection = (key: string) => (e: React.MouseEvent) => {
    if (pathname === "/activities") {
      e.preventDefault();
      document.getElementById(key)?.scrollIntoView({ behavior: "smooth" });
    }
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
      <div className="mx-auto flex h-16 max-w-[1280px] items-center justify-between gap-2 px-4 py-3 sm:h-18 sm:gap-6 sm:px-5 md:px-10">
        <Link
          href="/#top"
          onClick={(e) => {
            if (pathname === "/") {
              e.preventDefault();
              document.getElementById("top")?.scrollIntoView({ behavior: "smooth" });
            }
          }}
          className="flex min-w-0 shrink items-center gap-2 sm:shrink-0 sm:gap-3"
        >
          <Image
            src="/images/anjuman-logo.png"
            alt="Anjuman-E Rahmania Ahmadia Sunnia Trust logo"
            width={42}
            height={42}
            className="h-9 w-9 shrink-0 object-contain sm:h-[42px] sm:w-[42px]"
            priority
          />
          <strong className="min-w-0 truncate text-[11px] leading-tight font-extrabold tracking-[0.02em] text-brand sm:text-[15px] sm:whitespace-nowrap">
            ANJUMAN-E-RAHMANIA AHMADIA SUNNIA TRUST
          </strong>
        </Link>

        <nav aria-label="Primary" className="hidden flex-1 justify-center gap-6 pl-12 lg:flex">
          {mainNav.map((item) => {
            const isActivities = item.href === "/activities";
            return (
              <div key={item.label} className={isActivities ? "group/menu relative" : undefined}>
                <Link
                  href={item.href}
                  target={isExternal(item.href) ? "_blank" : undefined}
                  rel={isExternal(item.href) ? "noopener noreferrer" : undefined}
                  className={`group flex items-center gap-1 border-b-2 py-2 text-[14.5px] font-semibold whitespace-nowrap ${
                    isActive(item.href) ? "border-brand text-brand" : "border-transparent text-ink hover:border-brand"
                  }`}
                >
                  <span className="relative block h-[18px] overflow-hidden">
                    <span className="block leading-[18px] transition-transform duration-300 ease-out group-hover:-translate-y-[18px]">
                      {navLabel(item)}
                    </span>
                    <span
                      aria-hidden
                      className="absolute inset-0 block translate-y-[18px] leading-[18px] text-brand transition-transform duration-300 ease-out group-hover:translate-y-0"
                    >
                      {navLabel(item)}
                    </span>
                  </span>
                  {isActivities && (
                    <CaretDown
                      size={12}
                      weight="bold"
                      className="mt-0.5 shrink-0 transition-transform duration-200 group-hover/menu:rotate-180"
                    />
                  )}
                </Link>

                {isActivities && (
                  <div className="invisible absolute top-full left-1/2 z-10 -translate-x-1/2 pt-2 opacity-0 transition-all duration-150 group-hover/menu:visible group-hover/menu:opacity-100 group-focus-within/menu:visible group-focus-within/menu:opacity-100">
                    <div className="w-60 rounded-xl border border-hairline bg-white p-1.5 shadow-[0_12px_32px_rgba(15,53,31,0.14)]">
                      {activityCategories.map((c) => (
                        <Link
                          key={c.key}
                          href={`/activities#${c.key}`}
                          onClick={goToSection(c.key)}
                          className="block rounded-lg px-3 py-2 text-[13px] font-semibold text-ink hover:bg-tint hover:text-brand"
                        >
                          {c.label[lang]}
                        </Link>
                      ))}
                      <Link
                        href="https://www.monthlytarjuman.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block rounded-lg px-3 py-2 text-[13px] font-semibold text-ink hover:bg-tint hover:text-brand"
                      >
                        {t("nav_tarjumaneAhleSunnat")}
                      </Link>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
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
            className="relative overflow-hidden rounded-lg bg-brand px-3 py-2 text-[12px] font-bold whitespace-nowrap text-white transition-colors before:absolute before:inset-0 before:-translate-x-full before:bg-[linear-gradient(115deg,transparent_20%,rgba(255,255,255,0.4)_50%,transparent_80%)] before:transition-transform before:duration-700 before:ease-out before:content-[''] hover:bg-brand-hover hover:before:translate-x-full sm:px-5 sm:py-2.5 sm:text-[13.5px]"
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
          {mainNav.map((item) => {
            const isActivities = item.href === "/activities";
            return (
              <div key={item.label}>
                <Link
                  href={item.href}
                  target={isExternal(item.href) ? "_blank" : undefined}
                  rel={isExternal(item.href) ? "noopener noreferrer" : undefined}
                  onClick={() => setOpen(false)}
                  className={`block rounded-md px-2 py-2.5 text-[14.5px] font-semibold ${
                    isActive(item.href) ? "text-brand" : "text-ink hover:text-brand"
                  }`}
                >
                  {navLabel(item)}
                </Link>
                {isActivities && (
                  <div className="mb-1 ml-2 flex flex-col gap-0.5 border-l border-hairline pl-3">
                    {activityCategories.map((c) => (
                      <Link
                        key={c.key}
                        href={`/activities#${c.key}`}
                        onClick={(e) => {
                          setOpen(false);
                          goToSection(c.key)(e);
                        }}
                        className="rounded-md px-2 py-2 text-[13px] font-semibold text-muted hover:text-brand"
                      >
                        {c.label[lang]}
                      </Link>
                    ))}
                    <Link
                      href="https://www.monthlytarjuman.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => setOpen(false)}
                      className="rounded-md px-2 py-2 text-[13px] font-semibold text-muted hover:text-brand"
                    >
                      {t("nav_tarjumaneAhleSunnat")}
                    </Link>
                  </div>
                )}
              </div>
            );
          })}
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
