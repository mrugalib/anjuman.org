import type { Metadata } from "next";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import GalleryGrid from "@/components/GalleryGrid";

export const metadata: Metadata = {
  title: "Gallery · Anjuman-E Rahmania Ahmadia Sunnia Trust",
  description: "Photos from congregations, education programs, relief work and construction projects.",
};

export default function GalleryPage() {
  return (
    <>
      <SiteHeader />
      <main className="flex-1">
        <PageHero
          eyebrow="MOMENTS"
          title="Gallery"
          description="A visual record of our congregations, classrooms, relief drives and building projects across Bangladesh."
          crumb="Gallery"
        />

        <div className="mx-auto max-w-[1180px] px-5 py-16 md:px-10 md:py-24">
          <Reveal>
            <GalleryGrid />
          </Reveal>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
