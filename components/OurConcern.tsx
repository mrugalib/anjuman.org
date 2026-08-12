import { concerns } from "@/lib/data";
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

      <div className="grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4">
        {concerns.map((c) => (
          <a
            key={c.name}
            href={c.href}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col items-center gap-3 rounded-2xl border border-hairline bg-white p-5 text-center transition-shadow hover:shadow-[0_8px_24px_rgba(15,53,31,0.10)] sm:p-6"
          >
            <img
              src={c.logo}
              alt={c.name}
              loading="lazy"
              draggable={false}
              className="h-16 w-16 shrink-0 object-contain transition-transform duration-300 group-hover:scale-105 sm:h-20 sm:w-20"
            />
            <span className="text-[12px] leading-snug font-bold text-deep sm:text-[13px]">{c.name}</span>
          </a>
        ))}
      </div>
    </div>
  );
}
