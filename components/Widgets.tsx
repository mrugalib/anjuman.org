import { MoonStars, CalendarBlank, Link as LinkIcon } from "@phosphor-icons/react/dist/ssr";
import { prayerTimes, quickLinks } from "@/lib/data";
import T from "./T";

const TODAY = 12;

function buildCalendarDays() {
  return Array.from({ length: 28 }, (_, i) => {
    const n = i + 1;
    return {
      n,
      isToday: n === TODAY,
      isFriday: i % 7 === 5,
    };
  });
}

export default function Widgets() {
  const calendarDays = buildCalendarDays();

  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
      <div className="rounded-card border border-hairline p-5.5">
        <h3 className="mb-3.5 flex items-center gap-2 text-sm font-extrabold text-deep">
          <MoonStars size={16} className="text-brand" weight="fill" />
          <T k="widgets_prayerTimes" />
        </h3>
        <div className="mb-3 text-xs text-faint">10 Jamadiul Awwal, 1447 &middot; Dhaka, Bangladesh</div>
        {prayerTimes.map((p) => (
          <div
            key={p.name}
            className="flex justify-between border-b border-tint py-2.5 text-[13px] last:border-b-0"
          >
            <span className="font-semibold text-deep">{p.name}</span>
            <span className="font-bold text-brand">{p.time}</span>
          </div>
        ))}
      </div>

      <div className="rounded-card border border-hairline p-5.5">
        <h3 className="mb-3.5 flex items-center gap-2 text-sm font-extrabold text-deep">
          <CalendarBlank size={16} className="text-brand" />
          <T k="widgets_calendar" />
        </h3>
        <div className="mb-3 text-center text-[13px] font-bold text-deep">Rabiul Awwal 1447</div>
        <div className="mb-1.5 grid grid-cols-7 gap-1 text-center text-[11px] text-faint">
          {["S", "M", "T", "W", "T", "F", "S"].map((d, i) => (
            <span key={i}>{d}</span>
          ))}
        </div>
        <div className="grid grid-cols-7 gap-1 text-center text-xs font-semibold text-ink-soft">
          {calendarDays.map((d) => (
            <span
              key={d.n}
              className={`rounded-md py-1.5 ${
                d.isToday ? "bg-brand font-extrabold text-white" : d.isFriday ? "text-brand" : ""
              }`}
            >
              {d.n}
            </span>
          ))}
        </div>
      </div>

      <div className="rounded-card border border-brand bg-brand p-5.5">
        <h3 className="mb-3.5 flex items-center gap-2 text-sm font-extrabold text-white">
          <LinkIcon size={16} />
          <T k="widgets_links" />
        </h3>
        <div className="flex flex-col gap-2">
          {quickLinks.map((link) => (
            <div
              key={link}
              className="rounded-md bg-white/14 px-3.5 py-2.5 text-[12.5px] font-semibold text-white"
            >
              {link}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
