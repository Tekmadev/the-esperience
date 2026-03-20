"use client";

import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Button from "@/components/ui/Button";

gsap.registerPlugin(ScrollTrigger);

export default function CTASection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    gsap.from(sectionRef.current.children, {
      opacity: 0,
      y: 40,
      stagger: 0.15,
      duration: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 80%",
        toggleActions: "play none none none",
      },
    });
  }, []);

  return (
    <section className="py-24 md:py-32 px-6 bg-charcoal text-white">
      <div
        ref={sectionRef}
        className="max-w-3xl mx-auto text-center flex flex-col items-center"
      >
        <span className="font-montserrat text-xs tracking-[0.2em] uppercase text-rose-gold mb-6">
          Your Journey Begins
        </span>
        <h2 className="font-playfair text-4xl md:text-5xl lg:text-6xl text-rose-gold-gradient-animated">
          Ready for Your Transformation?
        </h2>
        <p className="mt-6 font-montserrat font-light text-lg text-white/60 leading-relaxed max-w-xl">
          Book your appointment today and discover why clients travel from across
          the continent for The Esperience.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row gap-4">
          <Button href="/booking" size="lg">
            Book Now
          </Button>
          <Button href="/contact" variant="outline" size="lg" className="border-white/30 text-white hover:bg-white/10 hover:text-white">
            Get in Touch
          </Button>
        </div>
      </div>
    </section>
  );
}
