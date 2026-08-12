"use client";

import { founderAvatar } from "@/lib/avatar";

export type Founder = {
  name: string;
  suffix: string;
  role: string;
  tagline: string;
  bio: string;
  location: string;
  committee: string;
  tags: string[];
  image?: string;
};

export default function FounderCard3D({ founder, index }: { founder: Founder; index: number }) {
  const avatar = founder.image ?? founderAvatar(founder.name, index);

  return (
    <div
      className="group relative aspect-[2/3] w-full overflow-hidden rounded-[10px] border-2 border-[#1a3d2e]"
      aria-label={`Profile card for ${founder.name}`}
    >
      <img
        src={avatar}
        alt={founder.name}
        loading="lazy"
        draggable={false}
        className="h-full w-full object-cover object-[center_18%] transition-transform duration-700 ease-out group-hover:scale-[1.06]"
        style={{ filter: "grayscale(40%) sepia(20%)" }}
      />

      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "linear-gradient(0deg, #1a3d2e 0%, rgba(26,61,46,0.82) 32%, rgba(26,61,46,0.28) 60%, rgba(26,61,46,0) 80%)",
        }}
      />

      <div className="absolute top-3 left-3 z-[2] sm:top-4 sm:left-4">
        <span className="inline-flex shrink-0 rounded-md bg-[#F2994A] px-2.5 py-1 text-[9.5px] font-bold whitespace-nowrap text-white sm:text-[10.5px]">
          {founder.role}
        </span>
      </div>

      <div className="absolute inset-x-0 bottom-0 z-[2] border-l-2 border-white/40 p-3 pl-2.5 sm:p-4 sm:pl-3.5">
        <div className="text-[13px] leading-tight font-extrabold text-white sm:text-[15px]">
          {founder.name} {founder.suffix}
        </div>
        <p className="mt-1 line-clamp-2 text-[10px] leading-snug text-white/75 sm:text-[11px]">
          {founder.tagline}
        </p>
      </div>
    </div>
  );
}
