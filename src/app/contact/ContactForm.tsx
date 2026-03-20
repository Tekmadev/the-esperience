"use client";

import { useState, useRef } from "react";
import { animate } from "animejs";
import Button from "@/components/ui/Button";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);
  const successRef = useRef<HTMLDivElement>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);

    if (successRef.current) {
      animate(successRef.current, {
        opacity: [0, 1],
        translateY: [20, 0],
        duration: 600,
        ease: "outQuad",
      });
    }
  };

  if (submitted) {
    return (
      <div ref={successRef} className="text-center py-16 px-8 border border-cream-dark">
        <span className="text-4xl text-rose-gold block mb-4">✦</span>
        <h3 className="font-playfair text-2xl text-charcoal mb-3">
          Message Sent
        </h3>
        <p className="font-montserrat font-light text-sm text-warm-gray max-w-md mx-auto">
          Thank you for reaching out. Our team will get back to you within 24
          hours.
        </p>
        <button
          onClick={() => setSubmitted(false)}
          className="mt-6 font-montserrat text-xs tracking-[0.2em] uppercase text-rose-gold hover:text-rose-gold-dark transition-colors cursor-pointer"
        >
          Send Another Message
        </button>
      </div>
    );
  }

  const inputClasses =
    "w-full px-4 py-3 border border-cream-dark font-montserrat font-light text-sm text-charcoal placeholder:text-warm-gray-light focus:border-rose-gold focus:outline-none transition-colors bg-transparent";

  return (
    <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label className="subheader text-[10px] mb-2 block">
            First Name
          </label>
          <input
            type="text"
            required
            placeholder="Your first name"
            className={inputClasses}
          />
        </div>
        <div>
          <label className="subheader text-[10px] mb-2 block">
            Last Name
          </label>
          <input
            type="text"
            required
            placeholder="Your last name"
            className={inputClasses}
          />
        </div>
      </div>

      <div>
        <label className="subheader text-[10px] mb-2 block">Email</label>
        <input
          type="email"
          required
          placeholder="your@email.com"
          className={inputClasses}
        />
      </div>

      <div>
        <label className="subheader text-[10px] mb-2 block">
          Preferred Location
        </label>
        <select className={`${inputClasses} cursor-pointer`} defaultValue="">
          <option value="" disabled>
            Select a location
          </option>
          <option value="ottawa">Ottawa (HQ)</option>
          <option value="montreal">Montréal</option>
          <option value="nyc">New York City</option>
        </select>
      </div>

      <div>
        <label className="subheader text-[10px] mb-2 block">Subject</label>
        <select className={`${inputClasses} cursor-pointer`} defaultValue="">
          <option value="" disabled>
            What is this regarding?
          </option>
          <option value="booking">Booking Inquiry</option>
          <option value="services">Service Questions</option>
          <option value="partnership">Partnership / Collaboration</option>
          <option value="feedback">Feedback</option>
          <option value="other">Other</option>
        </select>
      </div>

      <div>
        <label className="subheader text-[10px] mb-2 block">Message</label>
        <textarea
          required
          rows={5}
          placeholder="Tell us how we can help..."
          className={`${inputClasses} resize-none`}
        />
      </div>

      <Button type="submit" size="lg" className="w-full">
        Send Message
      </Button>
    </form>
  );
}
