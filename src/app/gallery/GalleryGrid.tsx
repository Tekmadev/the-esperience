"use client";

import { useState, useRef, useEffect } from "react";
import { gsap } from "gsap";
import { animate } from "animejs";

interface GalleryItem {
  id: string;
  label: string;
  category: string;
  span: string;
}

interface GalleryGridProps {
  items: GalleryItem[];
  filters: string[];
}

export default function GalleryGrid({ items, filters }: GalleryGridProps) {
  const [activeFilter, setActiveFilter] = useState("all");
  const gridRef = useRef<HTMLDivElement>(null);

  const filteredItems =
    activeFilter === "all"
      ? items
      : items.filter((item) => item.category === activeFilter);

  const handleFilter = (filter: string) => {
    setActiveFilter(filter);
  };

  useEffect(() => {
    if (!gridRef.current) return;

    const children = gridRef.current.children;
    gsap.from(children, {
      opacity: 0,
      scale: 0.9,
      y: 20,
      stagger: 0.05,
      duration: 0.5,
      ease: "power2.out",
    });
  }, [activeFilter]);

  const handleFilterClick = (e: React.MouseEvent<HTMLButtonElement>, filter: string) => {
    animate(e.currentTarget, {
      scale: [1, 0.95, 1],
      duration: 300,
      ease: "outElastic(1, .6)",
    });
    handleFilter(filter);
  };

  return (
    <>
      <div className="flex flex-wrap justify-center gap-3 mt-12 mb-12">
        {filters.map((filter) => (
          <button
            key={filter}
            onClick={(e) => handleFilterClick(e, filter)}
            className={`font-montserrat text-xs tracking-[0.2em] uppercase px-5 py-2.5 border transition-all duration-300 cursor-pointer ${
              activeFilter === filter
                ? "bg-rose-gold text-white border-rose-gold"
                : "bg-transparent text-warm-gray border-cream-dark hover:border-rose-gold/50 hover:text-rose-gold"
            }`}
          >
            {filter}
          </button>
        ))}
      </div>

      <div
        ref={gridRef}
        className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4 auto-rows-[180px] md:auto-rows-[220px]"
      >
        {filteredItems.map((item) => (
          <div
            key={item.id}
            className={`relative overflow-hidden group cursor-pointer ${item.span}`}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-rose-gold/15 to-rose-gold-dark/25 transition-all duration-500 group-hover:from-rose-gold/25 group-hover:to-rose-gold-dark/40" />
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <span className="font-montserrat text-xs tracking-[0.15em] uppercase text-white bg-charcoal/70 px-4 py-2 backdrop-blur-sm">
                {item.label}
              </span>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
