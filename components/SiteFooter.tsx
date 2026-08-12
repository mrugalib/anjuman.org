"use client";

import Image from "next/image";
import Link from "next/link";
import { FacebookLogo, YoutubeLogo, InstagramLogo, XLogo, WhatsappLogo } from "@phosphor-icons/react/dist/ssr";
import { footerMenu, footerConnect, footerOthers, socialLinks } from "@/lib/data";
import { useLanguage } from "@/lib/i18n";
import { navLabelKeys, type TranslationKey } from "@/lib/translations";
import Newsletter from "./Newsletter";

const socialIcons: Record<string, typeof FacebookLogo> = {
  Facebook: FacebookLogo,
  YouTube: YoutubeLogo,
  Instagram: InstagramLogo,
  X: XLogo,
  WhatsApp: WhatsappLogo,
};

function FooterColumn({
  titleKey,
  items,
}: {
  titleKey: TranslationKey;
  items: { label: string; href: string }[];
}) {
  const { t } = useLanguage();
  return (
    <div>
      <div className="mb-3.5 text-[13px] font-bold tracking-[0.04em] text-white">{t(titleKey)}</div>
      <div className="flex flex-col gap-3">
        {items.map((item) => {
          const key = navLabelKeys[item.href];
          return (
            <Link key={item.label} href={item.href} className="text-[13.5px] text-[#a9c2b4] hover:text-white">
              {key ? t(key) : item.label}
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default function SiteFooter() {
  return (
    <footer className="bg-deep-2 text-[#cfe0d5]">
      <Newsletter />

      <div className="mx-auto grid max-w-[1180px] grid-cols-1 gap-10 px-5 py-12 sm:grid-cols-2 md:px-10 lg:grid-cols-[1.6fr_1fr_1fr_1fr]">
        <div>
          <div className="mb-3.5 flex items-center gap-2.5">
            <Image
              src="/images/anjuman-logo.jpg"
              alt="Anjuman-E Rahmania Ahmadia Sunnia Trust logo"
              width={36}
              height={36}
              className="h-9 w-9 shrink-0 object-contain"
            />
            <strong className="text-[10.5px] leading-tight font-extrabold tracking-[0.01em] whitespace-nowrap text-white sm:text-[12px]">
              ANJUMAN-E-RAHMANIA AHMADIA SUNNIA TRUST
            </strong>
          </div>
          <p className="mb-4 max-w-80 text-[13px] leading-relaxed text-[#a9c2b4]">
            Established 1926 in Rangoon (Burma) for the Muslim Mashab and Millat, reconstituted 29 August
            1937 by the disciples of Huzur Ahmad Shah in Chattogram.
          </p>
          <div className="flex gap-2.5">
            {socialLinks.map(({ label, href }) => {
              const Icon = socialIcons[label];
              return (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex h-8.5 w-8.5 items-center justify-center rounded-full bg-white/8 text-white transition-colors hover:bg-brand"
                >
                  <Icon size={16} />
                </a>
              );
            })}
          </div>
        </div>

        <FooterColumn titleKey="footer_menuTitle" items={footerMenu} />
        <FooterColumn titleKey="footer_connectTitle" items={footerConnect} />
        <FooterColumn titleKey="footer_othersTitle" items={footerOthers} />
      </div>

      <div className="mx-auto flex max-w-[1180px] flex-wrap justify-between gap-4 border-t border-white/8 px-5 py-4.5 text-xs text-[#8fab9c] md:px-10">
        <span>info@anjumantrust.com &middot; 02333388421 &middot; 01841-937872</span>
        <span>Copyright&copy; 2026 Anjuman-E Rahmania Ahmadia Sunnia Trust. All rights reserved.</span>
      </div>
    </footer>
  );
}
