import type { Metadata } from "next";
import { MapPin, Phone, EnvelopeSimple, Clock } from "@phosphor-icons/react/dist/ssr";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import ContactForm from "@/components/ContactForm";
import FaqAccordion from "@/components/FaqAccordion";
import T from "@/components/T";
import { officeLocations, faqs } from "@/lib/data";

export const metadata: Metadata = {
  title: "Contact · Anjuman-E Rahmania Ahmadia Sunnia Trust",
  description: "Get in touch with Anjuman-E Rahmania Ahmadia Sunnia Trust — offices, phone and email.",
};

export default function ContactPage() {
  return (
    <>
      <SiteHeader />
      <main className="flex-1">
        <PageHero
          eyebrow="GET IN TOUCH"
          title="We'd love to hear from you"
          description="Questions about our programs, donations or volunteering — reach out and our team will respond."
          crumb="Contact"
        />

        <div className="mx-auto max-w-[1180px] px-5 py-16 md:px-10 md:py-24">
          <Reveal>
            <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1fr_1.1fr]">
              <div className="rounded-2xl bg-tint p-6 md:p-8">
                <h2 className="mb-6 text-xl font-extrabold text-deep">
                  <T k="section_sendMessage" />
                </h2>
                <ContactForm />
              </div>

              <div className="flex flex-col gap-6">
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div className="rounded-card border border-hairline p-5">
                    <Phone size={20} className="mb-3 text-brand" weight="fill" />
                    <div className="mb-1 text-[13px] font-bold text-deep">
                      <T k="contact_phone" />
                    </div>
                    <div className="text-[13px] text-muted">02333388411</div>
                    <div className="text-[13px] text-muted">02333388422</div>
                    <div className="text-[13px] text-muted">02333363837</div>
                  </div>
                  <div className="rounded-card border border-hairline p-5">
                    <EnvelopeSimple size={20} className="mb-3 text-brand" weight="fill" />
                    <div className="mb-1 text-[13px] font-bold text-deep">
                      <T k="contact_email" />
                    </div>
                    <div className="text-[13px] text-muted">info@anjumantrust.org</div>
                    <div className="text-[13px] text-muted">news@anjumantrust.org</div>
                  </div>
                </div>

                <div className="rounded-card border border-hairline p-5">
                  <Clock size={20} className="mb-3 text-brand" weight="fill" />
                  <div className="mb-1 text-[13px] font-bold text-deep">
                    <T k="contact_hours" />
                  </div>
                  <div className="text-[13px] text-muted">Everyday 9:30 AM – 5:30 PM</div>
                </div>

                {officeLocations.map((office) => (
                  <div key={office.name} className="flex gap-4 rounded-card border border-hairline p-5">
                    <MapPin size={22} className="mt-0.5 shrink-0 text-brand" weight="fill" />
                    <div>
                      <div className="mb-1 text-[13.5px] font-bold text-deep">{office.name}</div>
                      <div className="text-[13px] text-muted">{office.address}</div>
                    </div>
                  </div>
                ))}

                <div className="overflow-hidden rounded-card border border-hairline">
                  <iframe
                    title="Anjuman-E Rahmania Ahmadia Sunnia Trust — Head Office location"
                    src="https://www.google.com/maps?q=321+Didar+Market,+Dewan+Bazar,+Chattogram,+Bangladesh&output=embed"
                    className="h-64 w-full border-0"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal className="mt-16 md:mt-24">
            <h2 className="mb-8 text-center text-2xl font-extrabold text-deep">
              <T k="section_faq" />
            </h2>
            <FaqAccordion faqs={faqs} />
          </Reveal>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
