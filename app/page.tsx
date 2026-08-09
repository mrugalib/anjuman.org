import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import Hero from "@/components/Hero";
import StatsBar from "@/components/StatsBar";
import DonatePanel from "@/components/DonatePanel";
import FoundersGrid from "@/components/FoundersGrid";
import NewsTabs from "@/components/NewsTabs";
import Widgets from "@/components/Widgets";
import Reveal from "@/components/Reveal";

export default function Home() {
  return (
    <>
      <SiteHeader />

      <main id="top" className="flex-1">
        <Hero />
        <StatsBar />

        <div className="mx-auto max-w-[1180px] px-5 pb-16 md:px-10 md:pb-24">
          <Reveal className="mt-16 md:mt-24">
            <DonatePanel />
          </Reveal>

          <Reveal className="mt-16 md:mt-24">
            <FoundersGrid />
          </Reveal>

          <Reveal className="mt-16 [scroll-margin-top:var(--header-h)] md:mt-24" id="news">
            <NewsTabs />
          </Reveal>

          <Reveal className="mt-16 md:mt-24">
            <Widgets />
          </Reveal>
        </div>
      </main>

      <SiteFooter />
    </>
  );
}
