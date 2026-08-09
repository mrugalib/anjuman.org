export type LegalSection = { heading: string; body: string[] };

export default function LegalContent({
  updated,
  sections,
}: {
  updated: string;
  sections: LegalSection[];
}) {
  return (
    <div className="mx-auto max-w-[760px]">
      <p className="mb-10 text-[12.5px] font-semibold text-faint">Last updated: {updated}</p>
      <div className="flex flex-col gap-9">
        {sections.map((s) => (
          <div key={s.heading}>
            <h2 className="mb-3 text-lg font-extrabold text-deep">{s.heading}</h2>
            <div className="flex flex-col gap-3">
              {s.body.map((p, i) => (
                <p key={i} className="text-[13.5px] leading-relaxed text-muted">
                  {p}
                </p>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
