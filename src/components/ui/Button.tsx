"use client";

import { useRef, type ReactNode, type ButtonHTMLAttributes } from "react";
import Link from "next/link";
import { animate } from "animejs";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: "primary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  href?: string;
  className?: string;
}

const variants = {
  primary:
    "bg-rose-gold text-white hover:bg-rose-gold-dark border border-rose-gold",
  outline:
    "bg-transparent text-rose-gold border border-rose-gold hover:bg-rose-gold hover:text-white",
  ghost:
    "bg-transparent text-rose-gold hover:bg-rose-gold-glow border border-transparent",
};

const sizes = {
  sm: "px-5 py-2 text-xs",
  md: "px-8 py-3 text-sm",
  lg: "px-10 py-4 text-base",
};

export default function Button({
  children,
  variant = "primary",
  size = "md",
  href,
  className = "",
  ...props
}: ButtonProps) {
  const ref = useRef<HTMLButtonElement | HTMLAnchorElement>(null);

  const handleClick = () => {
    if (!ref.current) return;
    animate(ref.current, {
      scale: [1, 0.95, 1.02, 1],
      duration: 400,
      ease: "outElastic(1, .6)",
    });
  };

  const baseClasses = `
    inline-flex items-center justify-center
    font-montserrat font-normal tracking-[0.2em] uppercase
    rounded-none transition-all duration-300
    glimmer-hover cursor-pointer
    ${variants[variant]} ${sizes[size]} ${className}
  `.trim();

  if (href) {
    return (
      <Link
        href={href}
        ref={ref as React.Ref<HTMLAnchorElement>}
        className={baseClasses}
        onClick={handleClick}
      >
        {children}
      </Link>
    );
  }

  return (
    <button
      ref={ref as React.Ref<HTMLButtonElement>}
      className={baseClasses}
      onClick={(e) => {
        handleClick();
        props.onClick?.(e);
      }}
      {...props}
    >
      {children}
    </button>
  );
}
