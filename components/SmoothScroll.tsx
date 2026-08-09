"use client";

import { useEffect } from "react";
import Lenis from "lenis";

const EXTRA_GAP = 16;

function headerOffset() {
  const header = document.querySelector("header");
  const height = header?.getBoundingClientRect().height ?? 84;
  return -(height + EXTRA_GAP);
}

export default function SmoothScroll() {
  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion) return;

    const lenis = new Lenis({
      duration: 1.1,
      easing: (t: number) => 1 - Math.pow(2, -10 * t),
      smoothWheel: true,
      touchMultiplier: 1.2,
    });

    let rafId: number;
    function raf(time: number) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }
    rafId = requestAnimationFrame(raf);

    function scrollToHash(hash: string, immediate = false) {
      const target = document.getElementById(hash);
      if (!target) return;
      lenis.scrollTo(target, { offset: headerOffset(), immediate });
    }

    // Landing directly on a page with a #hash (cross-page nav, refresh, shared link)
    if (window.location.hash) {
      const hash = window.location.hash.slice(1);
      requestAnimationFrame(() => {
        requestAnimationFrame(() => scrollToHash(hash, true));
      });
    }

    function onClick(e: MouseEvent) {
      const anchor = (e.target as HTMLElement)?.closest("a[href]");
      if (!(anchor instanceof HTMLAnchorElement)) return;

      const href = anchor.getAttribute("href") ?? "";
      const hashIndex = href.indexOf("#");
      if (hashIndex === -1) return;

      const hash = href.slice(hashIndex + 1);
      if (!hash) return;

      const path = href.slice(0, hashIndex);
      if (path && path !== window.location.pathname) return;

      if (!document.getElementById(hash)) return;

      e.preventDefault();
      scrollToHash(hash);
    }

    document.addEventListener("click", onClick);

    return () => {
      document.removeEventListener("click", onClick);
      cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, []);

  return null;
}
