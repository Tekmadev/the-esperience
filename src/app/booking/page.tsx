import type { Metadata } from "next";
import { Suspense } from "react";
import AcuityEmbed from "@/components/booking/AcuityEmbed";
import { BookingSkeleton } from "@/components/ui/SkeletonLoader";
import SectionHeading from "@/components/ui/SectionHeading";

export const metadata: Metadata = {
  title: "Book an Appointment",
  description:
    "Book your premium hair appointment at The Esperience. Locs, braids, wigs, and more across Ottawa, Montréal, and NYC.",
};

export default function BookingPage() {
  return (
    <div className="pt-32 pb-24">
      <div className="max-w-4xl mx-auto px-6">
        <SectionHeading
          subtitle="Appointments"
          title="Book Your Experience"
          description="Select your preferred service, stylist, and location below. We can't wait to welcome you."
        />

        <div className="mt-16 border border-cream-dark p-4 md:p-8">
          <Suspense fallback={<BookingSkeleton />}>
            <AcuityEmbed />
          </Suspense>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="p-6">
            <span className="text-rose-gold text-2xl block mb-3">✦</span>
            <h3 className="font-playfair text-lg text-charcoal mb-2">
              Consultation
            </h3>
            <p className="font-montserrat font-light text-sm text-warm-gray">
              Not sure which service is right for you? Book a free consultation
              with one of our expert stylists.
            </p>
          </div>
          <div className="p-6">
            <span className="text-rose-gold text-2xl block mb-3">◆</span>
            <h3 className="font-playfair text-lg text-charcoal mb-2">
              Cancellation Policy
            </h3>
            <p className="font-montserrat font-light text-sm text-warm-gray">
              We require 24-hour notice for cancellations. Late cancellations may
              incur a fee.
            </p>
          </div>
          <div className="p-6">
            <span className="text-rose-gold text-2xl block mb-3">❖</span>
            <h3 className="font-playfair text-lg text-charcoal mb-2">
              Deposit
            </h3>
            <p className="font-montserrat font-light text-sm text-warm-gray">
              A non-refundable deposit is required for services over $200 to
              secure your appointment.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
