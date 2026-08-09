import type { Metadata } from "next";
import Link from "next/link";
import { MapPin, Briefcase } from "@phosphor-icons/react/dist/ssr";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import T from "@/components/T";
import { careers } from "@/lib/data";

export const metadata: Metadata = {
  title: "Careers · Anjuman-E Rahmania Ahmadia Sunnia Trust",
  description: "Open positions at Anjuman-E Rahmania Ahmadia Sunnia Trust across education, relief and administration.",
};

export default function CareersPage() {
  return (
    <>
      <SiteHeader />
      <main className="flex-1">
        <PageHero
          eyebrow="JOIN OUR TEAM"
          title="Build a career in service"
          description="We hire across education, relief, finance and communications — all in support of our mission."
          crumb="Careers"
        />

        <div className="mx-auto max-w-[1180px] px-5 py-16 md:px-10 md:py-24">
          <Reveal>
            <h2 className="mb-8 text-2xl font-extrabold text-deep">
              <T k="section_openPositions" />
            </h2>
            <div className="flex flex-col gap-4">
              {careers.map((c) => (
                <div
                  key={c.title}
                  className="flex flex-col gap-4 rounded-card border border-hairline p-6 sm:flex-row sm:items-center sm:justify-between"
                >
                  <div>
                    <h3 className="mb-2 text-base font-bold text-deep">{c.title}</h3>
                    <div className="mb-2.5 flex flex-wrap gap-4 text-[12.5px] font-semibold text-brand">
                      <span className="flex items-center gap-1.5">
                        <MapPin size={15} weight="fill" />
                        {c.location}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <Briefcase size={15} weight="fill" />
                        {c.type}
                      </span>
                    </div>
                    <p className="max-w-[560px] text-[13px] leading-relaxed text-muted">{c.text}</p>
                  </div>
                  <Link
                    href="/contact"
                    className="shrink-0 rounded-lg bg-brand px-6 py-3 text-center text-[13.5px] font-bold text-white transition-colors hover:bg-brand-hover"
                  >
                    <T k="cta_applyNow" />
                  </Link>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal className="mt-16 rounded-2xl bg-tint p-8 text-center md:mt-24 md:p-12">
            <h2 className="mb-3 text-xl font-extrabold text-deep">
              <T k="section_dontSeeRole" />
            </h2>
            <p className="mx-auto mb-6 max-w-[480px] text-[13.5px] leading-relaxed text-muted">
              We&apos;re always glad to hear from people who want to serve the community. Send us your CV and
              we&apos;ll keep you in mind for upcoming openings.
            </p>
            <Link
              href="/contact"
              className="inline-block rounded-lg bg-accent px-7 py-3.5 text-[13.5px] font-bold text-white transition-colors hover:bg-accent-hover"
            >
              <T k="cta_getInTouch" />
            </Link>
          </Reveal>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
