import type { Metadata } from "next";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import FoundersGrid from "@/components/FoundersGrid";
import Timeline from "@/components/Timeline";
import { missionPoints, timeline } from "@/lib/data";

export const metadata: Metadata = {
  title: "About Us · Anjuman-E Rahmania Ahmadia Sunnia Trust",
  description:
    "The history, mission and leadership of Anjuman-E Rahmania Ahmadia Sunnia Trust, serving the Sunni Muslim community since 1926.",
};

export default function AboutPage() {
  return (
    <>
      <SiteHeader />
      <main className="flex-1">
        <PageHero
          eyebrow="OUR STORY"
          title="Faith, service and community since 1926"
          description="A non-political, religious and philanthropic trust, recognised by the Muslim Ummah of the sub-continent and beyond."
          crumb="About Us"
        />

        <div className="mx-auto max-w-[1180px] px-5 md:px-10">
          <Reveal className="mt-16 md:mt-24">
            <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:items-center">
              <div>
                <span className="mb-3 inline-block w-fit rounded-full bg-tint px-3 py-1 text-[11.5px] font-bold text-brand">
                  WHO WE ARE
                </span>
                <h2 className="mb-4 text-2xl font-extrabold text-deep md:text-[28px]">
                  Anjuman-E Rahmania Ahmadia Sunnia Trust
                </h2>
                <p className="mb-4 text-[14.5px] leading-relaxed text-muted">
                  Anjuman – E -Shura -E -Rahmania was established on 15th Feb, 1925 in Rangoon (Burma) for
                  serving the activities of Muslim Majhab and Millat, subsequently it was reconstituted on
                  29th August 1937 by the disciples who returned from Rangoon in presence of Huzur kebla
                  Syed Ahmad Shah in Chittagong for administering and managing the affairs of Darul Uloom
                  Islamia Rahmania Madrasha of Haripur, Pakistan.
                </p>
                <p className="mb-4 text-[14.5px] leading-relaxed text-muted">
                  It was reformed on 22nd January 1954 and renamed as Anjuman-E Ahmadia Sunnia for
                  establishing new religious educational Institutions/Madrasha at Chittagong and other
                  places of the country, having its office at 39 Anderkilla, Chittagong.
                </p>
                <p className="mb-4 text-[14.5px] leading-relaxed text-muted">
                  Subsequently on 18th March 1956 Anjuman-E-Ahmadia Sunnia was reconstituted as
                  Anjuman-E-Rahmania Ahmadia Sunnia as non-political, religious and philanthropic
                  organisation, that&apos;s became one of the most reliable and trustworthy, religious
                  platform for the sunni Muslim of the Country, that has duly been recognised by the Muslim
                  Ummah of the Sub-Continent, as well as of the World.
                </p>
                <p className="mb-4 text-[14.5px] leading-relaxed text-muted">
                  Anjuman-E-Rahmania Ahmadia Sunnia Trust was duly been registered under Registration of
                  Societies Act XXI of 1860, having Registration No. 1237 E.P. /82 of 1958-59. (CHS- 1237)
                </p>
                <p className="mb-4 text-[14.5px] leading-relaxed text-muted">
                  Anjuman means Society, Rahmania was taken from the name of Hazrat Abdur Rahman Chowhravi
                  (R.A), Ahmadia was taken from the name of Hazrat Syed Ahmad Shah (R.A), while Sunnia was
                  taken for identification of Sunniot and Trust is the symbol of welfare.
                </p>
                <p className="mb-4 text-[14.5px] leading-relaxed text-muted">
                  Registered Office of this organization situated at Jamea Ahmadia Sunnia Bhaban, West
                  Sholashahar, Chittagong and Principal office at 321, Didar Market, Dewan Bazar, Chittagong.
                </p>
                <p className="text-[14.5px] leading-relaxed text-muted">
                  Tax exemption was approved by the Government from payment of Income Tax vide Ministry of
                  Finance (Revenue Division) under Notification No. S.R.O. 383 (k) dtd.04.4.60.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {missionPoints.map((m) => (
                  <div
                    key={m.title}
                    className="group rounded-card border border-hairline p-5 transition-colors duration-300 hover:border-deep hover:bg-deep"
                  >
                    <div className="mb-2 text-[14.5px] font-bold text-deep transition-colors duration-300 group-hover:text-white">
                      {m.title}
                    </div>
                    <p className="text-[12.5px] leading-relaxed text-muted transition-colors duration-300 group-hover:text-white/80">
                      {m.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal className="mt-16 md:mt-24">
            <h2 className="mb-8 text-center text-2xl font-extrabold text-deep">A Century of Service</h2>
            <Timeline timeline={timeline} />
          </Reveal>

          <Reveal className="mt-16 mb-20 md:mt-24 md:mb-28">
            <FoundersGrid />
          </Reveal>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
