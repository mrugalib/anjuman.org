import Link from "next/link";
import ImageSlot from "./ImageSlot";
import T from "./T";
import { crumbKeys } from "@/lib/translations";

export default function PageHero({
  eyebrow,
  title,
  description,
  crumb,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  crumb: string;
}) {
  return (
    <section aria-label={title} className="relative flex min-h-[240px] items-center md:min-h-[280px]">
      <div className="absolute inset-0 overflow-hidden">
        <ImageSlot dark rounded="" className="h-full w-full" label="" />
      </div>
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(100deg, rgba(15,35,24,0.96) 0%, rgba(15,35,24,0.90) 55%, rgba(15,35,24,0.72) 100%)",
        }}
      />
      <div className="relative mx-auto w-full max-w-[1180px] px-5 py-14 md:px-10 md:py-18">
        <div className="mb-3 flex items-center gap-2 text-[12.5px] font-semibold text-[#a9c2b4]">
          <Link href="/" className="hover:text-white">
            <T k="nav_home" />
          </Link>
          <span aria-hidden className="opacity-60">
            /
          </span>
          <span className="text-white">{crumbKeys[crumb] ? <T k={crumbKeys[crumb]!} /> : crumb}</span>
        </div>
        {eyebrow && (
          <div className="mb-3 text-[12.5px] font-bold tracking-[0.06em] text-[#8fe0b4]">{eyebrow}</div>
        )}
        <h1 className="max-w-[640px] text-[28px] leading-[1.18] font-extrabold text-white md:text-[38px]">
          {title}
        </h1>
        {description && (
          <p className="mt-4 max-w-[560px] text-[14.5px] leading-relaxed text-[#dcebe2]">{description}</p>
        )}
      </div>
    </section>
  );
}
