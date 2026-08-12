import { MoonStars, CalendarBlank, Link as LinkIcon } from "@phosphor-icons/react/dist/ssr";
import { quickLinks } from "@/lib/data";
import PrayerTimesList from "./PrayerTimesList";
import T from "./T";

const hijriFormatter = new Intl.DateTimeFormat("en-US-u-ca-islamic", { month: "long", year: "numeric" });
const hijriDayFormatter = new Intl.DateTimeFormat("en-US-u-ca-islamic", {
  day: "numeric",
  month: "long",
  year: "numeric",
});
function formatHijri(date: Date) {
  const parts = hijriFormatter.formatToParts(date);
  const month = parts.find((p) => p.type === "month")?.value ?? "";
  const year = parts.find((p) => p.type === "year")?.value ?? "";
  return `${month} ${year}`;
}

function formatHijriDay(date: Date) {
  const parts = hijriDayFormatter.formatToParts(date);
  const day = parts.find((p) => p.type === "day")?.value ?? "";
  const month = parts.find((p) => p.type === "month")?.value ?? "";
  const year = parts.find((p) => p.type === "year")?.value ?? "";
  return `${day} ${month}, ${year}`;
}

function getHijriDayOfMonth(date: Date) {
  const parts = hijriDayFormatter.formatToParts(date);
  return Number(parts.find((p) => p.type === "day")?.value ?? 1);
}

function isSameDay(a: Date, b: Date) {
  return a.getFullYear() === b.getFullYear() && a.getMonth() === b.getMonth() && a.getDate() === b.getDate();
}

function buildHijriCalendarDays(today: Date) {
  const todayHijriDay = getHijriDayOfMonth(today);

  const firstOfMonth = new Date(today);
  firstOfMonth.setDate(firstOfMonth.getDate() - (todayHijriDay - 1));

  const monthLabel = formatHijri(firstOfMonth);
  let length = 0;
  const cursor = new Date(firstOfMonth);
  while (length < 30 && formatHijri(cursor) === monthLabel) {
    length++;
    cursor.setDate(cursor.getDate() + 1);
  }

  const firstWeekday = firstOfMonth.getDay();
  const blanks = Array.from({ length: firstWeekday }, (_, i) => ({
    key: `hblank-${i}`,
    n: null as number | null,
    isToday: false,
    isFriday: false,
  }));

  const days = Array.from({ length }, (_, i) => {
    const date = new Date(firstOfMonth);
    date.setDate(date.getDate() + i);
    return {
      key: `hday-${i}`,
      n: i + 1,
      isToday: isSameDay(date, today),
      isFriday: date.getDay() === 5,
    };
  });

  return [...blanks, ...days];
}

const weekdayLabels = ["S", "M", "T", "W", "T", "F", "S"];

function CalendarGrid({ days }: { days: ReturnType<typeof buildHijriCalendarDays> }) {
  return (
    <>
      <div className="mb-1.5 grid grid-cols-7 gap-1 text-center text-[11px] text-faint">
        {weekdayLabels.map((d, i) => (
          <span key={i}>{d}</span>
        ))}
      </div>
      <div className="grid grid-cols-7 gap-1 text-center text-xs font-semibold text-ink-soft">
        {days.map((d) => (
          <span
            key={d.key}
            className={`rounded-md py-1.5 ${
              d.n === null
                ? ""
                : d.isToday
                  ? "bg-brand font-extrabold text-white"
                  : d.isFriday
                    ? "text-brand"
                    : ""
            }`}
          >
            {d.n ?? ""}
          </span>
        ))}
      </div>
    </>
  );
}

export default function Widgets() {
  const today = new Date();
  const hijriCalendarDays = buildHijriCalendarDays(today);

  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
      <div className="rounded-card border border-hairline p-5.5">
        <h3 className="mb-3.5 flex items-center gap-2 text-sm font-extrabold text-deep">
          <MoonStars size={16} className="text-brand" weight="fill" />
          <T k="widgets_prayerTimes" />
        </h3>
        <div className="mb-3 text-xs text-faint">
          {formatHijriDay(today)} &middot; Dhaka, Bangladesh
        </div>
        <PrayerTimesList />
      </div>

      <div className="rounded-card border border-hairline p-5.5">
        <h3 className="mb-3.5 flex items-center gap-2 text-sm font-extrabold text-deep">
          <CalendarBlank size={16} className="text-brand" />
          <T k="widgets_calendar" />
        </h3>
        <div className="mb-3 text-center text-[13px] font-bold text-deep">{formatHijri(today)}</div>
        <CalendarGrid days={hijriCalendarDays} />
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
