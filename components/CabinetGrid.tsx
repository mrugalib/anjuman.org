import { cabinetChiefs, cabinetMembers } from "@/lib/data";
import { founderAvatar } from "@/lib/avatar";

export default function CabinetGrid() {
  return (
    <div>
      <div className="mb-8 text-center md:mb-10">
        <span className="mb-3 inline-block w-fit rounded-full bg-tint px-3 py-1 text-[11.5px] font-bold text-brand">
          LEADERSHIP
        </span>
        <h2 className="text-2xl font-extrabold text-deep md:text-[28px]">Cabinet Members</h2>
        <p className="mx-auto mt-2 max-w-xl text-[13.5px] leading-relaxed text-muted">
          The elected officers and cabinet who guide the Trust&apos;s affairs and represent its mission
          across the community.
        </p>
      </div>

      <div className="mx-auto mb-6 grid max-w-md grid-cols-2 gap-3 sm:gap-4 md:mb-8">
        {cabinetChiefs.map((m) => (
          <div
            key={m.name}
            className="group rounded-2xl bg-deep p-4 text-center shadow-[0_10px_28px_rgba(15,53,31,0.16)] sm:p-5"
          >
            <div className="mx-auto mb-3 h-20 w-20 overflow-hidden rounded-full ring-4 ring-white/15 sm:h-24 sm:w-24">
              <img
                src={m.image}
                alt={m.name}
                loading="lazy"
                draggable={false}
                className="h-full w-full object-cover object-[center_18%] transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <div className="text-[12.5px] leading-snug font-bold text-white sm:text-[13.5px]">
              {m.name} {m.suffix}
            </div>
            <div className="mt-1 text-[11px] font-semibold text-[#8fe0b4] sm:text-[11.5px]">{m.role}</div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 lg:grid-cols-4">
        {cabinetMembers.map((m, i) => {
          const avatar = m.image ?? founderAvatar(m.name, i);
          return (
            <div
              key={m.name}
              className="group rounded-2xl border border-hairline bg-white p-4 text-center transition-shadow duration-300 hover:shadow-[0_8px_24px_rgba(15,53,31,0.10)] sm:p-5"
            >
              <div className="mx-auto mb-3 h-20 w-20 overflow-hidden rounded-full bg-deep sm:h-24 sm:w-24">
                <img
                  src={avatar}
                  alt={m.name}
                  loading="lazy"
                  draggable={false}
                  className={`h-full w-full object-cover transition-transform duration-300 group-hover:scale-105 ${
                    m.image ? "object-top" : "object-[center_18%]"
                  }`}
                />
              </div>
              <div className="text-[12.5px] leading-snug font-bold text-deep sm:text-[13.5px]">
                {m.name} {m.suffix}
              </div>
              <div className="mt-1 text-[11px] font-semibold text-brand sm:text-[11.5px]">{m.role}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
