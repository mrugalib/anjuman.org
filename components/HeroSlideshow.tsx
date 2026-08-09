"use client";

import { useEffect, useRef, useState } from "react";

const POSTER = "/images/hero/drone-poster.jpg";

export default function HeroSlideshow() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [canAnimate, setCanAnimate] = useState(false);

  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion) return;
    const id = requestAnimationFrame(() => setCanAnimate(true));
    return () => cancelAnimationFrame(id);
  }, []);

  useEffect(() => {
    if (!canAnimate) return;
    const video = videoRef.current;
    if (!video) return;

    // Some browsers ignore the autoplay attribute on late-hydrating video
    // elements, so kick playback explicitly once it's ready.
    video.play().catch(() => {});
  }, [canAnimate]);

  return (
    <div aria-hidden className="absolute inset-0 overflow-hidden bg-deep">
      <img
        src={POSTER}
        alt=""
        draggable={false}
        className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ${
          canAnimate ? "opacity-0" : "opacity-100"
        }`}
      />
      {canAnimate && (
        <video
          ref={videoRef}
          className="absolute inset-0 h-full w-full object-cover"
          poster={POSTER}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
        >
          <source src="/videos/hero-drone-sm.mp4" type="video/mp4" media="(max-width: 767px)" />
          <source src="/videos/hero-drone.mp4" type="video/mp4" />
        </video>
      )}
    </div>
  );
}
