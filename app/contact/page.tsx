import type { Metadata } from "next";
import { MapPin, Phone, EnvelopeSimple } from "@phosphor-icons/react/dist/ssr";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import ImageSlot from "@/components/ImageSlot";
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
                    <div className="text-[13px] text-muted">02333388421</div>
                    <div className="text-[13px] text-muted">01841-937872</div>
                  </div>
                  <div className="rounded-card border border-hairline p-5">
                    <EnvelopeSimple size={20} className="mb-3 text-brand" weight="fill" />
                    <div className="mb-1 text-[13px] font-bold text-deep">
                      <T k="contact_email" />
                    </div>
                    <div className="text-[13px] text-muted">info@anjumantrust.com</div>
                  </div>
                </div>

                {officeLocations.map((office) => (
                  <div key={office.name} className="flex gap-4 rounded-card border border-hairline p-5">
                    <MapPin size={22} className="mt-0.5 shrink-0 text-brand" weight="fill" />
                    <div>
                      <div className="mb-1 text-[13.5px] font-bold text-deep">{office.name}</div>
                      <div className="mb-1 text-[13px] text-muted">{office.address}</div>
                      <div className="text-[13px] text-muted">{office.phone}</div>
                    </div>
                  </div>
                ))}

                <ImageSlot dark label="Map · Chattogram, Bangladesh" className="h-48" />
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
