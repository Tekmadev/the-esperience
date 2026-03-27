"use client";

import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { testimonials } from "@/lib/data";
import SectionHeading from "@/components/ui/SectionHeading";

gsap.registerPlugin(ScrollTrigger);

export default function Testimonials() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const cards = containerRef.current.children;
    gsap.from(cards, {
      opacity: 0,
      y: 50,
      stagger: 0.15,
      duration: 0.9,
      ease: "power3.out",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 80%",
        toggleActions: "play none none none",
      },
    });
  }, []);

  return (
    <section id="testimonials" className="py-24 md:py-32 px-6 bg-white scroll-mt-20">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          subtitle="Testimonials"
          title="What Our Clients Say"
          description="Real experiences from our valued clients across all three locations."
        />

        <div ref={containerRef} className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.slice(0, 3).map((testimonial) => (
            <div
              key={testimonial.id}
              className="p-8 border border-cream-dark hover:border-rose-gold/30 transition-all duration-500"
            >
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <span key={i} className="text-rose-gold text-sm">★</span>
                ))}
              </div>
              <p className="font-montserrat font-light text-sm text-warm-gray leading-relaxed italic">
                &ldquo;{testimonial.text}&rdquo;
              </p>
              <div className="mt-6 pt-4 border-t border-cream-dark">
                <p className="font-montserrat text-sm text-charcoal font-normal">
                  {testimonial.name}
                </p>
                <p className="font-montserrat text-xs text-warm-gray-light mt-0.5">
                  {testimonial.service} &middot; {testimonial.location}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
