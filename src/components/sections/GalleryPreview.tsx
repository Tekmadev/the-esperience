"use client";

import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";

gsap.registerPlugin(ScrollTrigger);

const galleryImages = [
  { id: 1, aspect: "row-span-2", label: "Goddess Locs" },
  { id: 2, aspect: "", label: "Box Braids" },
  { id: 3, aspect: "", label: "Custom Wig" },
  { id: 4, aspect: "row-span-2", label: "Cornrow Art" },
  { id: 5, aspect: "", label: "Silk Press" },
  { id: 6, aspect: "", label: "Faux Locs" },
];

export default function GalleryPreview() {
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!gridRef.current) return;

    const items = gridRef.current.children;
    gsap.from(items, {
      opacity: 0,
      y: 40,
      scale: 0.95,
      stagger: 0.1,
      duration: 0.8,
      ease: "power3.out",
      scrollTrigger: {
        trigger: gridRef.current,
        start: "top 80%",
        toggleActions: "play none none none",
      },
    });
  }, []);

  return (
    <section className="py-24 md:py-32 px-6 bg-cream">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          subtitle="Our Work"
          title="The Gallery"
          description="Every style tells a story. Explore the artistry of our talented stylists."
        />

        <div
          ref={gridRef}
          className="mt-16 grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4 auto-rows-[200px] md:auto-rows-[250px]"
        >
          {galleryImages.map((img) => (
            <div
              key={img.id}
              className={`relative overflow-hidden group cursor-pointer ${img.aspect}`}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-rose-gold/20 to-rose-gold-dark/30" />
              <div className="absolute inset-0 bg-rose-gold-light/10 group-hover:bg-transparent transition-colors duration-500" />
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-charcoal/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <span className="font-montserrat text-xs tracking-[0.2em] uppercase text-white">
                  {img.label}
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button href="/gallery" variant="outline">
            View Full Gallery
          </Button>
        </div>
      </div>
    </section>
  );
}
