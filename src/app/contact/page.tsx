import type { Metadata } from "next";
import { locations } from "@/lib/data";
import AnimateIn from "@/components/ui/AnimateIn";
import SectionHeading from "@/components/ui/SectionHeading";
import ContactForm from "./ContactForm";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with The Esperience. Reach our team in Ottawa, Montréal, or New York City for inquiries, partnerships, or appointments.",
};

export default function ContactPage() {
  return (
    <div className="pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading
          subtitle="Get in Touch"
          title="Contact Us"
          description="We'd love to hear from you. Whether you have a question, want to collaborate, or just want to say hello."
        />

        <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <AnimateIn variant="fade-right">
            <ContactForm />
          </AnimateIn>

          {/* Location Info */}
          <AnimateIn variant="fade-left">
            <div className="space-y-8">
              <div>
                <span className="subheader">Our Locations</span>
                <div className="mt-6 space-y-8">
                  {locations.map((loc) => (
                    <div
                      key={loc.id}
                      className="p-6 border border-cream-dark hover:border-rose-gold/30 transition-all duration-500"
                    >
                      <h3 className="font-playfair text-xl text-charcoal mb-1">
                        {loc.city}
                        {loc.isHQ && (
                          <span className="ml-2 font-montserrat text-[9px] tracking-[0.2em] uppercase text-rose-gold/60 align-middle">
                            HQ
                          </span>
                        )}
                      </h3>
                      <p className="font-montserrat font-light text-sm text-warm-gray">
                        {loc.address}
                      </p>
                      <div className="mt-3 flex flex-col gap-1">
                        <a
                          href={`tel:${loc.phone.replace(/[^+\d]/g, "")}`}
                          className="font-montserrat text-sm text-rose-gold hover:text-rose-gold-dark transition-colors"
                        >
                          {loc.phone}
                        </a>
                        <a
                          href={`mailto:${loc.email}`}
                          className="font-montserrat text-sm text-rose-gold hover:text-rose-gold-dark transition-colors"
                        >
                          {loc.email}
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-6 bg-cream">
                <h4 className="font-playfair text-lg text-charcoal mb-2">
                  General Inquiries
                </h4>
                <p className="font-montserrat font-light text-sm text-warm-gray mb-2">
                  For press, partnerships, and general questions:
                </p>
                <a
                  href="mailto:hello@theesperience.com"
                  className="font-montserrat text-sm text-rose-gold hover:text-rose-gold-dark transition-colors"
                >
                  hello@theesperience.com
                </a>
              </div>
            </div>
          </AnimateIn>
        </div>
      </div>
    </div>
  );
}
