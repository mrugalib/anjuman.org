import type { Metadata } from "next";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import ActivityTabs from "@/components/ActivityTabs";
import { activityCategories } from "@/lib/data";

export const metadata: Metadata = {
  title: "Activities · Anjuman-E Rahmania Ahmadia Sunnia Trust",
  description:
    "Committee updates from the Gausia Committee Bangladesh, Research Centre, Education Board and Dawate Khair.",
};

export default function ActivitiesPage() {
  return (
    <>
      <SiteHeader />
      <main className="flex-1">
        <PageHero
          eyebrow="OUR WORK"
          title="Activities across our committees"
          description="Updates from the Gausia Committee Bangladesh, Research Centre, Education Board and Dawate Khair."
          crumb="Activities"
        />

        <div className="mx-auto max-w-[1180px] px-5 pb-16 md:px-10 md:pb-24">
          {activityCategories.map((category) => (
            <Reveal key={category.key} id={category.key} className="mt-16 [scroll-margin-top:var(--header-h)] md:mt-24">
              <ActivityTabs initialKey={category.key} />
            </Reveal>
          ))}
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
