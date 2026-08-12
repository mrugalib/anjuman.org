"use client";

import { useState } from "react";
import {
  ArrowsClockwise,
  SealCheck,
  MapPin,
  FacebookLogo,
  YoutubeLogo,
  InstagramLogo,
  XLogo,
  WhatsappLogo,
} from "@phosphor-icons/react/dist/ssr";
import { founderAvatar } from "@/lib/avatar";
import { socialLinks } from "@/lib/data";
import { useLanguage } from "@/lib/i18n";

export type Founder = {
  name: string;
  suffix: string;
  role: string;
  tagline: string;
  bio: string;
  location: string;
  committee: string;
  tags: string[];
  image?: string;
};

const socialIcons: Record<string, typeof FacebookLogo> = {
  Facebook: FacebookLogo,
  YouTube: YoutubeLogo,
  Instagram: InstagramLogo,
  X: XLogo,
  WhatsApp: WhatsappLogo,
};

export default function FounderCard3D({ founder, index }: { founder: Founder; index: number }) {
  const { t } = useLanguage();
  const [flipped, setFlipped] = useState(false);
  const avatar = founder.image ?? founderAvatar(founder.name, index);

  const toggle = () => setFlipped((f) => !f);

  return (
    <div className="[perspective:1400px]">
      <div
        role="button"
        tabIndex={0}
        aria-pressed={flipped}
        aria-label={`Profile card for ${founder.name}. ${
          flipped ? "Back" : "Front"
        } side showing. Press Enter to flip.`}
        onClick={toggle}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            toggle();
          }
        }}
        className="group relative aspect-[2/3] w-full cursor-pointer rounded-3xl outline-none [-webkit-tap-highlight-color:transparent] focus-visible:ring-4 focus-visible:ring-brand/25"
      >
        <div
          className="relative h-full w-full rounded-3xl transition-transform duration-700 [transform-style:preserve-3d] motion-reduce:transition-none"
          style={{
            transform: flipped ? "rotateY(180deg)" : "rotateY(0deg)",
            transitionTimingFunction: "cubic-bezier(0.4, 0.2, 0.2, 1)",
          }}
        >
          {/* Front */}
          <div className="absolute inset-0 z-[2] overflow-hidden rounded-3xl border border-black/[0.06] bg-white shadow-[0_4px_24px_rgba(15,53,31,0.10),0_1px_4px_rgba(15,53,31,0.04)] [backface-visibility:hidden]">
            <div className="absolute inset-[4px] overflow-hidden rounded-[18px] bg-deep">
              <img
                src={avatar}
                alt={founder.name}
                loading="lazy"
                draggable={false}
                className="h-full w-full object-cover object-[center_18%] transition-transform duration-700 ease-out group-hover:scale-[1.06]"
              />
              <div
                aria-hidden
                className="pointer-events-none absolute inset-0"
                style={{
                  background:
                    "linear-gradient(0deg, rgba(6,20,12,0.92) 0%, rgba(6,20,12,0.62) 34%, rgba(6,20,12,0.18) 62%, rgba(6,20,12,0) 82%)",
                }}
              />
            </div>

            <div className="absolute top-3 left-3 z-[3] sm:top-4 sm:left-4">
              <span className="inline-flex shrink-0 rounded-md bg-[#F2994A] px-2.5 py-1 text-[9.5px] font-bold whitespace-nowrap text-white sm:text-[10.5px]">
                {founder.role}
              </span>
            </div>

            <div className="absolute inset-x-0 bottom-0 z-[3] p-3 pb-4 sm:p-4 sm:pb-4.5">
              <div className="mb-1 flex items-start gap-1.5">
                <span className="line-clamp-2 text-[13px] leading-tight font-extrabold text-white sm:text-[15px]">
                  {founder.name} {founder.suffix}
                </span>
                <SealCheck size={15} weight="fill" className="mt-0.5 shrink-0 text-[#8fe0b4] sm:size-[17px]" />
              </div>
              <p className="line-clamp-2 text-[11.5px] leading-snug text-white/72 sm:text-[12.5px]">
                {founder.tagline}
              </p>
            </div>

            <div
              aria-hidden
              className="pointer-events-none absolute top-3 right-3 z-[4] flex h-8 w-8 items-center justify-center rounded-[10px] border border-white/15 bg-black/25 text-white opacity-0 backdrop-blur-md transition-opacity duration-300 group-hover:opacity-100 sm:h-8.5 sm:w-8.5"
            >
              <ArrowsClockwise size={14} weight="bold" />
            </div>
          </div>

          {/* Back */}
          <div
            className="absolute inset-0 z-[1] flex flex-col overflow-hidden rounded-3xl border border-black/[0.06] bg-white p-4.5 shadow-[0_4px_24px_rgba(15,53,31,0.10),0_1px_4px_rgba(15,53,31,0.04)] [backface-visibility:hidden] sm:p-5.5"
            style={{ transform: "rotateY(180deg)" }}
          >
            <div className="mb-3 flex shrink-0 items-center gap-2.5 sm:mb-4">
              <img
                src={avatar}
                alt={founder.name}
                loading="lazy"
                draggable={false}
                className="h-9 w-9 shrink-0 rounded-full object-cover object-[center_18%] sm:h-10 sm:w-10"
              />
              <div className="min-w-0 flex-1">
                <div className="truncate text-[13px] font-bold text-deep sm:text-[14px]">
                  {founder.name}
                </div>
                <div className="truncate text-[11px] font-semibold whitespace-nowrap text-brand sm:text-[12px]">
                  {founder.suffix} &middot; {founder.role}
                </div>
              </div>
            </div>

            <div aria-hidden className="mb-3 h-[3px] w-9 shrink-0 rounded-full bg-brand/60 sm:mb-3.5" />

            <h3 className="mb-1.5 shrink-0 text-[15.5px] font-extrabold text-deep sm:mb-2 sm:text-[17px]">
              {t("founder_about")}
            </h3>
            <p className="mb-3 min-h-0 flex-1 overflow-hidden text-[12px] leading-relaxed text-muted sm:text-[13px]">
              {founder.bio}
            </p>

            <div className="mb-2.5 flex shrink-0 items-center gap-1.5 truncate text-[11px] text-muted sm:mb-3 sm:text-[12px]">
              <MapPin size={13} weight="fill" className="shrink-0 text-brand/70" />
              <span className="truncate">
                {founder.location} &middot; {founder.committee}
              </span>
            </div>

            <div className="mb-2.5 flex shrink-0 gap-1.5 overflow-x-auto [scrollbar-width:none] sm:mb-3 [&::-webkit-scrollbar]:hidden">
              {founder.tags.map((tag) => (
                <span
                  key={tag}
                  className="shrink-0 rounded-full bg-tint px-2.5 py-1 text-[10px] font-bold whitespace-nowrap text-brand sm:text-[10.5px]"
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="mt-auto flex shrink-0 items-center gap-3 pt-1">
              {socialLinks.map(({ label, href }) => {
                const Icon = socialIcons[label];
                return (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    onClick={(e) => e.stopPropagation()}
                    className="flex text-faint transition-colors hover:text-brand"
                  >
                    <Icon size={15} />
                  </a>
                );
              })}
              <div className="ml-auto flex items-center gap-1.5 text-[10.5px] font-semibold text-faint">
                <ArrowsClockwise size={12} weight="bold" />
                <span className="hidden sm:inline">{t("founder_flipBack")}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
