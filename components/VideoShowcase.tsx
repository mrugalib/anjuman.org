"use client";

import { useRef, useState } from "react";
import { CaretRight, Play } from "@phosphor-icons/react/dist/ssr";
import { liveBroadcast, videoShowcase } from "@/lib/data";
import T from "./T";

const ROW_HEIGHT = "h-[150px] sm:h-[200px] md:h-[240px]";

function LivePanel() {
  const [playing, setPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const play = () => {
    setPlaying(true);
    requestAnimationFrame(() => videoRef.current?.play().catch(() => {}));
  };

  return (
    <div className={`relative w-full overflow-hidden rounded-[20px] bg-deep ${ROW_HEIGHT}`}>
      {playing ? (
        <video
          ref={videoRef}
          className="absolute inset-0 h-full w-full object-cover"
          poster={liveBroadcast.poster}
          controls
          autoPlay
          playsInline
        >
          <source src={liveBroadcast.videoUrl} type="video/mp4" />
        </video>
      ) : (
        <button
          type="button"
          onClick={play}
          aria-label={`Play video: ${liveBroadcast.title}`}
          className="group absolute inset-0 h-full w-full"
        >
          <img src={liveBroadcast.poster} alt="" draggable={false} className="h-full w-full object-cover" />
          <span
            className="absolute top-1/2 left-1/2 flex h-14 w-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-[#e0433a] text-white shadow-[0_0_0_8px_rgba(224,67,58,0.25)] transition-transform duration-300 group-hover:scale-110 sm:h-16 sm:w-16"
          >
            <Play size={24} weight="fill" className="ml-0.5" />
          </span>
        </button>
      )}
    </div>
  );
}

function PreviousVideos() {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [playingIndex, setPlayingIndex] = useState<number | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const scrollNext = () => {
    const nextIndex = (activeIndex + 1) % videoShowcase.length;
    itemRefs.current[nextIndex]?.scrollIntoView({ behavior: "smooth", inline: nextIndex === 0 ? "start" : "end", block: "nearest" });
    setActiveIndex(nextIndex);
  };

  return (
    <div className={`flex w-full min-w-0 items-center gap-1 rounded-2xl bg-[#eef1ee] p-1 sm:gap-1.5 sm:p-1.5 ${ROW_HEIGHT}`}>
      <div ref={scrollerRef} className="flex h-full min-w-0 flex-1 gap-1.5 overflow-x-auto sm:gap-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        {videoShowcase.map((video, i) => (
          <div
            key={video.title}
            ref={(el) => {
              itemRefs.current[i] = el;
            }}
            className="relative h-full aspect-square shrink-0 overflow-hidden rounded-2xl"
          >
            {playingIndex === i ? (
              <video className="absolute inset-0 h-full w-full object-cover" poster={video.poster} controls autoPlay playsInline>
                <source src={video.videoUrl} type="video/mp4" />
              </video>
            ) : (
              <button
                type="button"
                onClick={() => setPlayingIndex(i)}
                aria-label={`Play video: ${video.title}`}
                className="group absolute inset-0 h-full w-full"
              >
                <img src={video.poster} alt="" draggable={false} className="h-full w-full object-cover" />
                <span
                  aria-hidden
                  className="pointer-events-none absolute inset-0 flex items-center justify-center bg-black/0 opacity-0 transition-all duration-200 group-hover:bg-black/25 group-hover:opacity-100"
                >
                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white/90 text-brand">
                    <Play size={15} weight="fill" className="ml-0.5" />
                  </span>
                </span>
              </button>
            )}
          </div>
        ))}
      </div>
      <button
        type="button"
        onClick={scrollNext}
        aria-label="Show more videos"
        className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white text-deep shadow-md transition-transform duration-200 hover:scale-105 sm:h-9 sm:w-9"
      >
        <CaretRight size={15} weight="bold" />
      </button>
    </div>
  );
}

export default function VideoShowcase() {
  return (
    <div>
      <div className="mb-8 text-center">
        <h2 className="text-2xl font-extrabold text-deep">
          <T k="videoShowcase_heading" />
        </h2>
        <p className="mt-2 text-[13px] text-muted">
          <T k="videoShowcase_subheading" />
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1fr_2.1fr]">
        <div>
          <h3 className="mb-3 text-[15px] font-semibold text-muted sm:text-base">
            <T k="videoShowcase_live" />
          </h3>
          <LivePanel />
        </div>

        <div className="min-w-0">
          <h3 className="mb-3 text-[15px] font-semibold text-muted sm:text-base">
            <T k="videoShowcase_previous" />
          </h3>
          <PreviousVideos />
        </div>
      </div>
    </div>
  );
}
