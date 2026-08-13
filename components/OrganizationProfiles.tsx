import { organizationProfiles } from "@/lib/data";

export default function OrganizationProfiles() {
  return (
    <div>
      <div className="mb-8 text-center md:mb-10">
        <span className="mb-3 inline-block w-fit rounded-full bg-tint px-3 py-1 text-[11.5px] font-bold text-brand">
          OUR ORGANISATIONS
        </span>
        <h2 className="text-2xl font-extrabold text-deep md:text-[28px]">Wings of the Trust</h2>
        <p className="mx-auto mt-2 max-w-xl text-[13.5px] leading-relaxed text-muted">
          Three enduring institutions carry the Trust&apos;s mission forward — in print, in the field and in
          the hearts of the community.
        </p>
      </div>

      <div className="flex flex-col gap-5 md:gap-6">
        {organizationProfiles.map((org, i) => (
          <div
            key={org.key}
            className="grid grid-cols-1 items-center gap-6 rounded-card border border-hairline bg-white p-6 shadow-[0_2px_12px_rgba(15,53,31,0.04)] sm:p-8 md:grid-cols-[auto_1fr] md:gap-10"
          >
            <div
              className={`mx-auto flex h-28 w-28 shrink-0 items-center justify-center rounded-2xl border border-hairline bg-tint/40 p-4 sm:h-32 sm:w-32 ${
                i % 2 === 1 ? "md:order-2" : ""
              }`}
            >
              <img
                src={org.logo}
                alt={org.name}
                loading="lazy"
                draggable={false}
                className="h-full w-full object-contain"
              />
            </div>

            <div className={i % 2 === 1 ? "md:order-1" : ""}>
              <div className="mb-2 flex flex-wrap items-center gap-2.5">
                <h3 className="text-lg font-extrabold text-deep sm:text-xl">{org.name}</h3>
                <span className="rounded-full bg-tint px-2.5 py-0.5 text-[10.5px] font-bold text-brand">
                  {org.established}
                </span>
              </div>
              <div className="space-y-2.5">
                {org.description.map((para, idx) => (
                  <p key={idx} className="text-[13.5px] leading-relaxed text-muted">
                    {para}
                  </p>
                ))}
              </div>
              <a
                href={org.href}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center gap-1.5 text-[12.5px] font-bold text-brand hover:underline"
              >
                Visit official site →
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
