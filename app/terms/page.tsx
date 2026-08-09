import type { Metadata } from "next";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import LegalContent from "@/components/LegalContent";

export const metadata: Metadata = {
  title: "Terms of Conditions · Anjuman-E Rahmania Ahmadia Sunnia Trust",
  description: "Terms of conditions for using the Anjuman-E Rahmania Ahmadia Sunnia Trust website and services.",
};

const sections = [
  {
    heading: "1. Acceptance of Terms",
    body: [
      "By accessing or using the Anjuman-E Rahmania Ahmadia Sunnia Trust website, you agree to be bound by these terms of conditions. If you do not agree, please discontinue use of the site.",
    ],
  },
  {
    heading: "2. Use of the Site",
    body: [
      "This website provides information about the Trust's programs, institutions and activities, and facilitates donations, volunteering and general enquiries. You agree to use the site only for lawful purposes and in a way that does not infringe the rights of, or restrict or inhibit the use and enjoyment of the site by, any third party.",
    ],
  },
  {
    heading: "3. Donations",
    body: [
      "Donations made through this website or in person are directed to the fund selected at the time of contribution. The Trust reserves the right to allocate undesignated or excess funds to the area of greatest need, consistent with its charitable purpose.",
      "Receipts and confirmations are issued for record-keeping. Donations are non-refundable except where required by law.",
    ],
  },
  {
    heading: "4. Intellectual Property",
    body: [
      "All content on this site — including text, images, logos and design — is the property of Anjuman-E Rahmania Ahmadia Sunnia Trust unless otherwise credited, and may not be reproduced without written permission.",
    ],
  },
  {
    heading: "5. Limitation of Liability",
    body: [
      "The Trust makes reasonable efforts to keep information on this site accurate and up to date, but does not warrant that content is free of errors. The Trust is not liable for any loss arising from reliance on information published here.",
    ],
  },
  {
    heading: "6. Changes to These Terms",
    body: [
      "These terms may be updated periodically to reflect changes in our practices or for other operational, legal or regulatory reasons. Continued use of the site after changes are posted constitutes acceptance of the revised terms.",
    ],
  },
  {
    heading: "7. Contact",
    body: [
      "Questions about these terms can be directed to info@anjumantrust.com or the office locations listed on our Contact page.",
    ],
  },
];

export default function TermsPage() {
  return (
    <>
      <SiteHeader />
      <main className="flex-1">
        <PageHero title="Terms of Conditions" crumb="Terms of Conditions" />
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
