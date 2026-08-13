import { concernLogos } from "@/lib/data";
import T from "./T";

export default function OurConcern() {
  return (
    <div>
      <div className="mb-8 text-center">
        <h2 className="text-2xl font-extrabold text-deep">
          <T k="ourConcern_heading" />
        </h2>
        <p className="mt-2 text-[13px] text-muted">
          <T k="ourConcern_subheading" />
        </p>
      </div>

      <div className="grid grid-cols-2 items-stretch gap-3 sm:gap-4 lg:grid-cols-3 xl:grid-cols-6">
        {concernLogos.map((c) => (
          <a
            key={c.name}
            href={c.href}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col items-center justify-center gap-2 rounded-2xl border border-hairline bg-white px-2.5 py-4 text-center transition-shadow hover:shadow-[0_8px_24px_rgba(15,53,31,0.10)] sm:px-3"
          >
            <img
              src={c.logo}
              alt={c.name.replace("\n", " ")}
              loading="lazy"
              draggable={false}
              className="h-14 w-14 shrink-0 object-contain transition-transform duration-300 group-hover:scale-105 sm:h-16 sm:w-16"
            />
            <span className="text-[11px] leading-snug font-bold tracking-tight whitespace-pre-line text-deep sm:text-[12.5px]">
              {c.name}
            </span>
          </a>
        ))}
      </div>
    </div>
  );
}
