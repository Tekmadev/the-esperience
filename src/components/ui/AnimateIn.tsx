"use client";

import { useRef, useEffect, type ReactNode } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

type AnimateVariant = "fade-up" | "fade-down" | "fade-left" | "fade-right" | "scale" | "fade";

const variantMap: Record<AnimateVariant, gsap.TweenVars> = {
  "fade-up": { y: 60, opacity: 0 },
  "fade-down": { y: -60, opacity: 0 },
  "fade-left": { x: -60, opacity: 0 },
  "fade-right": { x: 60, opacity: 0 },
  "scale": { scale: 0.9, opacity: 0 },
  "fade": { opacity: 0 },
};

interface AnimateInProps {
  children: ReactNode;
  variant?: AnimateVariant;
  from?: gsap.TweenVars;
  duration?: number;
  delay?: number;
  className?: string;
  triggerStart?: string;
}

export default function AnimateIn({
  children,
  variant = "fade-up",
  from,
  duration = 1,
  delay = 0,
  className = "",
  triggerStart = "top 85%",
}: AnimateInProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;

    const fromVars = from ?? variantMap[variant];

    const tween = gsap.from(ref.current, {
      ...fromVars,
      duration,
      delay,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ref.current,
        start: triggerStart,
        toggleActions: "play none none none",
      },
    });

    return () => {
      tween.kill();
    };
  }, [variant, from, duration, delay, triggerStart]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
