"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { animate, stagger } from "animejs";
import Button from "@/components/ui/Button";
import { useLenis } from "@/components/layout/SmoothScroll";

const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#gallery", label: "Gallery" },
  { href: "#testimonials", label: "Testimonials" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const menuRef = useRef<HTMLDivElement>(null);
  const linksRef = useRef<HTMLDivElement>(null);
  const lenis = useLenis();

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith("#")) {
      e.preventDefault();
      setIsOpen(false);
      if (lenis) {
        lenis.scrollTo(href, { offset: -80 });
      } else {
        const el = document.querySelector(href);
        if (el) el.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!menuRef.current) return;

    if (isOpen) {
      document.body.style.overflow = "hidden";
      menuRef.current.style.display = "flex";
      animate(menuRef.current, {
        opacity: [0, 1],
        duration: 400,
        ease: "outQuad",
      });
      if (linksRef.current) {
        animate(linksRef.current.children, {
          translateY: [30, 0],
          opacity: [0, 1],
          delay: stagger(80, { start: 200 }),
          duration: 600,
          ease: "outQuad",
        });
      }
    } else {
      document.body.style.overflow = "";
      const anim = animate(menuRef.current, {
        opacity: [1, 0],
        duration: 300,
        ease: "inQuad",
      });
      anim.then(() => {
        if (menuRef.current) menuRef.current.style.display = "none";
      });
    }
  }, [isOpen]);

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-white/90 backdrop-blur-md shadow-sm py-4"
            : "bg-transparent py-6"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <Link href="/" className="relative z-50">
            <span className="font-signature text-2xl md:text-3xl text-rose-gold tracking-wide">
              The Esperience
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-10">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="font-montserrat text-xs tracking-[0.2em] uppercase transition-colors duration-300 text-charcoal hover:text-rose-gold"
              >
                {link.label}
              </a>
            ))}
            <Button href="#booking" size="sm">
              Book Now
            </Button>
          </div>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden relative z-50 w-8 h-8 flex flex-col justify-center items-center gap-1.5 cursor-pointer"
            aria-label="Toggle menu"
          >
            <span
              className={`block w-6 h-[1.5px] bg-charcoal transition-all duration-300 ${
                isOpen ? "rotate-45 translate-y-[4.5px]" : ""
              }`}
            />
            <span
              className={`block w-6 h-[1.5px] bg-charcoal transition-all duration-300 ${
                isOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block w-6 h-[1.5px] bg-charcoal transition-all duration-300 ${
                isOpen ? "-rotate-45 -translate-y-[4.5px]" : ""
              }`}
            />
          </button>
        </div>
      </nav>

      {/* Mobile Full-Screen Menu */}
      <div
        ref={menuRef}
        className="fixed inset-0 z-40 bg-white flex-col items-center justify-center hidden"
        style={{ display: "none" }}
      >
        <div ref={linksRef} className="flex flex-col items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-playfair text-3xl transition-colors duration-300 text-charcoal hover:text-rose-gold"
              onClick={(e) => handleLinkClick(e, link.href)}
            >
              {link.label}
            </a>
          ))}
          <Button href="#booking" size="lg" className="mt-4" onClick={(e) => {
            if (lenis) {
              e.preventDefault();
              setIsOpen(false);
              lenis.scrollTo("#booking", { offset: -80 });
            }
          }}>
            Book Now
          </Button>
        </div>
      </div>
    </>
  );
}
