"use client";
import { useEffect, useRef } from "react";

/**
 * Muted, looping background-style video. Loads only when near the viewport,
 * plays only while visible, and stays on its poster for reduced-motion users.
 */
export function LoopVideo({ src, poster, label, className = "", eager = false }: { src: string; poster: string; label?: string; className?: string; eager?: boolean }) {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = ref.current;
    if (!video || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        if (video.preload === "none") video.preload = "auto";
        video.play().catch(() => {});
      } else {
        video.pause();
      }
    }, { rootMargin: "200px" });
    observer.observe(video);
    return () => observer.disconnect();
  }, []);

  return (
    <video ref={ref} src={src} poster={poster} muted loop playsInline preload={eager ? "auto" : "none"}
      aria-label={label} aria-hidden={label ? undefined : true} className={className} />
  );
}
