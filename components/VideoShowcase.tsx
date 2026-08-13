"use client";

import { useRef, useState } from "react";
import { Play } from "@phosphor-icons/react/dist/ssr";
import { liveBroadcast, videoShowcase, type ShowcaseVideo } from "@/lib/data";
import { useLanguage } from "@/lib/i18n";
import T from "./T";

function PlayableVideo({
  video,
  aspect,
  badge,
  compact,
}: {
  video: ShowcaseVideo;
  aspect: string;
  badge?: React.ReactNode;
  compact?: boolean;
}) {
  const [playing, setPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const play = () => {
    setPlaying(true);
    requestAnimationFrame(() => videoRef.current?.play().catch(() => {}));
  };

  return (
    <div className={`relative overflow-hidden rounded-card border border-hairline bg-deep ${aspect}`}>
      {playing ? (
        <video
          ref={videoRef}
          className="absolute inset-0 h-full w-full object-cover"
          poster={video.poster}
          controls
          autoPlay
          playsInline
        >
          <source src={video.videoUrl} type="video/mp4" />
        </video>
      ) : (
        <button
          type="button"
          onClick={play}
          aria-label={`Play video: ${video.title}`}
          className="group absolute inset-0 h-full w-full"
        >
          <img src={video.poster} alt="" draggable={false} className="h-full w-full object-cover" />
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0"
            style={{
              background:
                "linear-gradient(0deg, rgba(6,20,12,0.85) 0%, rgba(6,20,12,0.15) 45%, rgba(6,20,12,0.35) 100%)",
            }}
          />
          {badge && <div className="absolute top-2.5 left-2.5 z-[2] sm:top-3 sm:left-3">{badge}</div>}
          <span
            className={`absolute top-1/2 left-1/2 flex -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-brand shadow-lg transition-transform duration-300 group-hover:scale-110 ${
              compact ? "h-10 w-10 sm:h-12 sm:w-12" : "h-16 w-16 sm:h-18 sm:w-18"
            }`}
          >
            <Play size={compact ? 16 : 26} weight="fill" className="ml-0.5" />
          </span>
          <div className={`absolute inset-x-0 bottom-0 text-left ${compact ? "p-2 sm:p-3" : "p-4 sm:p-6"}`}>
            <h3 className={`font-extrabold text-white ${compact ? "line-clamp-1 text-[12px] sm:text-[13.5px]" : "text-base sm:text-lg"}`}>
              {video.title}
            </h3>
            {!compact && (
              <p className="mt-1 line-clamp-2 max-w-xl text-[12.5px] text-white/75 sm:text-[13.5px]">
                {video.description}
              </p>
            )}
          </div>
        </button>
      )}
    </div>
  );
}

export default function VideoShowcase() {
  const { t } = useLanguage();

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

      <div className="mb-2 grid grid-cols-[1.5fr_1fr_1fr_1fr] gap-2 sm:gap-3">
        <h3 className="text-[11px] font-extrabold whitespace-nowrap text-deep sm:text-xs">
          <T k="videoShowcase_live" />
        </h3>
        <h3 className="col-span-3 text-[11px] font-extrabold whitespace-nowrap text-deep sm:text-xs">
          <T k="videoShowcase_previous" />
        </h3>
      </div>

      <div className="grid grid-cols-[1.5fr_1fr_1fr_1fr] gap-2 sm:gap-3">
        <PlayableVideo
          video={liveBroadcast}
          aspect="aspect-video w-full"
          compact
          badge={
            liveBroadcast.isLive ? (
              <span className="inline-flex animate-pulse items-center gap-1.5 rounded-full bg-[#e0433a] px-2 py-0.5 text-[9px] font-extrabold tracking-[0.06em] text-white sm:px-2.5 sm:py-1 sm:text-[10px]">
                <span className="h-1.5 w-1.5 rounded-full bg-white" />
                {t("videoShowcase_liveNow")}
              </span>
            ) : (
              <span className="inline-flex items-center rounded-full bg-black/45 px-2 py-0.5 text-[9px] font-bold text-white/85 backdrop-blur-sm sm:px-2.5 sm:py-1 sm:text-[10px]">
                {t("videoShowcase_offline")}
              </span>
            )
          }
        />
        {videoShowcase.slice(0, 3).map((video) => (
          <PlayableVideo key={video.title} video={video} aspect="aspect-video w-full" compact />
        ))}
      </div>
    </div>
  );
}
