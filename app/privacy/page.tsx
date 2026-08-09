import type { Metadata } from "next";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import LegalContent from "@/components/LegalContent";

export const metadata: Metadata = {
  title: "Privacy Policy · Anjuman-E Rahmania Ahmadia Sunnia Trust",
  description: "How Anjuman-E Rahmania Ahmadia Sunnia Trust collects, uses and protects your information.",
};

const sections = [
  {
    heading: "1. Information We Collect",
    body: [
      "We collect information you provide directly — such as your name, email, phone number and donation details — when you use our donation panel, newsletter signup, contact or volunteer forms.",
      "We may also collect basic technical information (such as browser type and pages visited) to help us improve the site.",
    ],
  },
  {
    heading: "2. How We Use Your Information",
    body: [
      "Information is used to process donations, respond to enquiries, coordinate volunteering, send newsletter updates you've opted into, and improve our programs and communications.",
      "We do not sell or rent your personal information to third parties.",
    ],
  },
  {
    heading: "3. Information Sharing",
    body: [
      "We may share information with trusted service providers who help us operate the site or process donations, under obligations of confidentiality, or where required by law or to protect the rights and safety of the Trust and the community we serve.",
    ],
  },
  {
    heading: "4. Data Security",
    body: [
      "We take reasonable technical and organisational measures to protect your information against unauthorised access, loss or misuse. No method of transmission over the internet is completely secure, so we cannot guarantee absolute security.",
    ],
  },
  {
    heading: "5. Your Choices",
    body: [
      "You can unsubscribe from newsletter emails at any time using the link in those emails, or by contacting us directly. You may request access to, correction of, or deletion of your personal information by contacting info@anjumantrust.com.",
    ],
  },
  {
    heading: "6. Changes to This Policy",
    body: [
      "We may update this privacy policy from time to time. Material changes will be reflected by an updated date at the top of this page.",
    ],
  },
  {
    heading: "7. Contact",
    body: [
      "For any privacy-related questions, please reach out via our Contact page or write to info@anjumantrust.com.",
    ],
  },
];

export default function PrivacyPage() {
  return (
    <>
      <SiteHeader />
      <main className="flex-1">
        <PageHero title="Privacy Policy" crumb="Privacy Policy" />
        <div className="mx-auto max-w-[1180px] px-5 py-16 md:px-10 md:py-24">
          <Reveal>
            <LegalContent updated="August 1, 2026" sections={sections} />
          </Reveal>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
