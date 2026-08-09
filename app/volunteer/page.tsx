import type { Metadata } from "next";
import { MapPin, Clock } from "@phosphor-icons/react/dist/ssr";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import ContactForm from "@/components/ContactForm";
import T from "@/components/T";
import { volunteerOpportunities } from "@/lib/data";

export const metadata: Metadata = {
  title: "Volunteer · Anjuman-E Rahmania Ahmadia Sunnia Trust",
  description: "Volunteer opportunities with Anjuman-E Rahmania Ahmadia Sunnia Trust across relief, education and dawah.",
};

export default function VolunteerPage() {
  return (
    <>
      <SiteHeader />
      <main className="flex-1">
        <PageHero
          eyebrow="GIVE YOUR TIME"
          title="Volunteer with Anjuman"
          description="From relief camps to classrooms, our work runs on volunteers who give their time in service of the community."
          crumb="Volunteer"
        />

        <div className="mx-auto max-w-[1180px] px-5 py-16 md:px-10 md:py-24">
          <Reveal>
            <h2 className="mb-8 text-2xl font-extrabold text-deep">
              <T k="section_currentOpportunities" />
            </h2>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              {volunteerOpportunities.map((v) => (
                <div key={v.title} className="rounded-card border border-hairline p-6">
                  <h3 className="mb-3 text-base font-bold text-deep">{v.title}</h3>
                  <div className="mb-3 flex flex-wrap gap-4 text-[12.5px] font-semibold text-brand">
                    <span className="flex items-center gap-1.5">
                      <MapPin size={15} weight="fill" />
                      {v.location}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Clock size={15} weight="fill" />
                      {v.commitment}
                    </span>
                  </div>
                  <p className="text-[13px] leading-relaxed text-muted">{v.text}</p>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal className="mt-16 md:mt-24">
            <div className="mx-auto max-w-[640px] rounded-2xl bg-tint p-6 md:p-10">
              <h2 className="mb-6 text-center text-xl font-extrabold text-deep">
                <T k="section_registerInterest" />
              </h2>
              <ContactForm />
            </div>
          </Reveal>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
