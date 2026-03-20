import { locations } from "@/lib/data";
import AnimateIn from "@/components/ui/AnimateIn";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";

export default function LocationsPreview() {
  return (
    <section className="py-24 md:py-32 px-6 bg-cream">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          subtitle="Visit Us"
          title="Three Cities, One Standard"
          description="Experience our signature level of care at any of our three premium locations."
        />

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          {locations.map((loc, i) => (
            <AnimateIn key={loc.id} variant="fade-up" delay={i * 0.15}>
              <div className="group relative p-10 bg-white border border-cream-dark hover:border-rose-gold/30 transition-all duration-500 text-center glimmer-hover">
                {loc.isHQ && (
                  <span className="absolute top-4 right-4 font-montserrat text-[9px] tracking-[0.2em] uppercase text-rose-gold/60 border border-rose-gold/20 px-2 py-1">
                    Headquarters
                  </span>
                )}
                <h3 className="font-playfair text-2xl text-charcoal mb-2">
                  {loc.city}
                </h3>
                <p className="font-montserrat font-light text-sm text-warm-gray mb-1">
                  {loc.address}
                </p>
                <p className="font-montserrat font-light text-sm text-rose-gold mb-6">
                  {loc.phone}
                </p>
                <Button
                  href={`/locations/${loc.slug}`}
                  variant="ghost"
                  size="sm"
                >
                  View Details
                </Button>
              </div>
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  );
}
