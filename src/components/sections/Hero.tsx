"use client";

import { useEffect, useRef, Suspense } from "react";
import { gsap } from "gsap";
import dynamic from "next/dynamic";
import Button from "@/components/ui/Button";

const SilkBackground = dynamic(
  () => import("@/components/three/SilkBackground"),
  { ssr: false }
);

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const subRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

    tl.from(lineRef.current, {
      scaleX: 0,
      duration: 0.8,
      delay: 0.3,
    })
      .from(
        headingRef.current,
        {
          y: 80,
          opacity: 0,
          duration: 1.2,
        },
        "-=0.3"
      )
      .from(
        subRef.current,
        {
          y: 40,
          opacity: 0,
          duration: 1,
        },
        "-=0.6"
      )
      .from(
        ctaRef.current,
        {
          y: 30,
          opacity: 0,
          duration: 0.8,
        },
        "-=0.4"
      );

    return () => {
      tl.kill();
    };
  }, []);

  return (
    <section
      id="home"
      ref={containerRef}
      className="relative min-h-screen flex flex-col items-center justify-center px-6 overflow-hidden"
    >
      <Suspense fallback={null}>
        <SilkBackground />
      </Suspense>

      <div className="relative z-10 text-center max-w-4xl">
        <div
          ref={lineRef}
          className="w-16 h-[1px] bg-rose-gold mx-auto mb-8 origin-center"
        />

        <p className="subheader mb-6">Premium Hair Studio</p>

        <h1
          ref={headingRef}
          className="font-signature text-6xl sm:text-7xl md:text-8xl lg:text-9xl text-rose-gold-gradient-animated"
        >
          The Esperience
        </h1>

        <p
          ref={subRef}
          className="mt-8 font-montserrat font-light text-lg md:text-xl text-warm-gray max-w-2xl mx-auto leading-relaxed"
        >
          Where artistry meets authenticity. Specializing in locs, braids, and custom
          wigs across Ottawa, Montréal, and New York City.
        </p>

        <div ref={ctaRef} className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button href="#booking" size="lg">
            Book Your Experience
          </Button>
          <Button href="#services" variant="outline" size="lg">
            Explore Services
          </Button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50">
        <span className="font-montserrat text-[10px] tracking-[0.3em] uppercase text-warm-gray">
          Scroll
        </span>
        <div className="w-[1px] h-8 bg-rose-gold/50 animate-pulse" />
      </div>
    </section>
  );
}
