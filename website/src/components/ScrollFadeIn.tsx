"use client";

import { useEffect, useRef, type ReactNode } from "react";

type Direction = "up" | "left" | "right" | "none";

export default function ScrollFadeIn({
  children,
  direction = "up",
  delay = 0,
  className = "",
}: {
  children: ReactNode;
  direction?: Direction;
  delay?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            el.classList.add("fade-in-visible");
          }, delay);
          observer.unobserve(el);
        }
      },
      { threshold: 0.15 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [delay]);

  const dirClass =
    direction === "left"
      ? "fade-in-left"
      : direction === "right"
        ? "fade-in-right"
        : direction === "none"
          ? "fade-in-none"
          : "fade-in-up";

  return (
    <div ref={ref} className={`${dirClass} ${className}`}>
      {children}
    </div>
  );
}
