import Link from "next/link";
import HeroSlideshow from "./HeroSlideshow";
import T from "./T";

export default function Hero() {
  return (
    <section
      aria-label="Introduction"
      className="relative flex min-h-[560px] items-center sm:min-h-[620px] md:min-h-[680px] lg:min-h-[740px] xl:min-h-[800px]"
    >
      <HeroSlideshow />
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(100deg, rgba(6,20,12,0.82) 0%, rgba(6,20,12,0.52) 42%, rgba(6,20,12,0.12) 78%, rgba(6,20,12,0.05) 100%), " +
            "linear-gradient(0deg, rgba(6,20,12,0.55) 0%, rgba(6,20,12,0.1) 32%, rgba(6,20,12,0) 55%)",
        }}
      />
      <div className="relative mx-auto w-full max-w-[1180px] px-5 py-18 pb-22 md:px-10 md:pt-24 md:pb-27">
        <div className="hero-in mb-4 text-[13px] font-bold tracking-[0.06em] text-[#8fe0b4] [animation-delay:0ms]">
          SINCE 1926 &middot; CHATTOGRAM, BANGLADESH
        </div>
        <h1 className="hero-in mb-4 max-w-[620px] text-[32px] leading-[1.16] font-extrabold text-white [animation-delay:100ms] md:text-[46px]">
          Faith, education and relief for the Sunni Muslim community
        </h1>
        <p className="hero-in mb-7 max-w-[500px] text-base leading-relaxed text-[#dcebe2] [animation-delay:200ms]">
          A non-political, religious and philanthropic trust, recognised by the Muslim Ummah of the
          Sub-continent and beyond.
        </p>
        <div className="hero-in flex flex-wrap gap-3.5 [animation-delay:300ms]">
          <Link
            href="/#donate-panel"
            className="rounded-lg bg-accent px-7 py-3.5 text-[14.5px] font-bold text-white transition-colors hover:bg-accent-hover"
          >
            <T k="hero_donate" />
          </Link>
          <Link
            href="/about"
            className="rounded-lg border border-white/45 bg-white/10 px-7 py-3.5 text-[14.5px] font-bold text-white transition-colors hover:bg-white/18"
          >
            <T k="hero_learnMore" />
          </Link>
        </div>
      </div>
    </section>
  );
}
