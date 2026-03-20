import type { Location } from "@/types";
import { locations } from "@/lib/data";
import AnimateIn from "@/components/ui/AnimateIn";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import Link from "next/link";

interface LocationDetailProps {
  location: Location;
}

export default function LocationDetail({ location }: LocationDetailProps) {
  const otherLocations = locations.filter((l) => l.id !== location.id);

  return (
    <div className="pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading
          subtitle={location.isHQ ? "Headquarters" : "Location"}
          title={`The Esperience ${location.city}`}
          description={`Your premium hair destination in ${location.city}. Specializing in locs, braids, and custom wigs.`}
        />

        <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Location Image Placeholder */}
          <AnimateIn variant="fade-right">
            <div className="aspect-[4/3] bg-gradient-to-br from-rose-gold/10 to-cream-dark relative overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="font-playfair text-6xl text-rose-gold/20">
                  {location.city}
                </span>
              </div>
            </div>
          </AnimateIn>

          {/* Location Info */}
          <AnimateIn variant="fade-left">
            <div className="space-y-8">
              <div>
                <span className="subheader mb-4 block">Address</span>
                <p className="font-montserrat text-lg text-charcoal">
                  {location.address}
                </p>
              </div>

              <div>
                <span className="subheader mb-4 block">Contact</span>
                <div className="space-y-2">
                  <a
                    href={`tel:${location.phone.replace(/[^+\d]/g, "")}`}
                    className="block font-montserrat text-lg text-rose-gold hover:text-rose-gold-dark transition-colors"
                  >
                    {location.phone}
                  </a>
                  <a
                    href={`mailto:${location.email}`}
                    className="block font-montserrat text-sm text-warm-gray hover:text-rose-gold transition-colors"
                  >
                    {location.email}
                  </a>
                </div>
              </div>

              <div>
                <span className="subheader mb-4 block">Hours</span>
                <div className="space-y-2">
                  {Object.entries(location.hours).map(([day, hours]) => (
                    <div
                      key={day}
                      className="flex justify-between items-center py-2 border-b border-cream-dark last:border-b-0"
                    >
                      <span className="font-montserrat text-sm text-charcoal">
                        {day}
                      </span>
                      <span
                        className={`font-montserrat text-sm ${
                          hours === "Closed"
                            ? "text-warm-gray-light"
                            : "text-warm-gray"
                        }`}
                      >
                        {hours}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button href="/booking" size="lg">
                  Book at This Location
                </Button>
                <Button
                  href={`https://maps.google.com/?q=${location.coordinates.lat},${location.coordinates.lng}`}
                  variant="outline"
                  size="lg"
                >
                  Get Directions
                </Button>
              </div>
            </div>
          </AnimateIn>
        </div>

        {/* Other Locations */}
        <div className="mt-32">
          <AnimateIn variant="fade-up">
            <h3 className="font-playfair text-2xl text-charcoal text-center mb-12">
              Our Other Locations
            </h3>
          </AnimateIn>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {otherLocations.map((loc, i) => (
              <AnimateIn key={loc.id} variant="fade-up" delay={i * 0.1}>
                <Link
                  href={`/locations/${loc.slug}`}
                  className="block group p-8 border border-cream-dark hover:border-rose-gold/30 transition-all duration-500 glimmer-hover"
                >
                  <h4 className="font-playfair text-xl text-charcoal group-hover:text-rose-gold transition-colors">
                    {loc.city}
                    {loc.isHQ && (
                      <span className="ml-2 font-montserrat text-[9px] tracking-[0.2em] uppercase text-rose-gold/60">
                        HQ
                      </span>
                    )}
                  </h4>
                  <p className="mt-2 font-montserrat font-light text-sm text-warm-gray">
                    {loc.address}
                  </p>
                  <p className="mt-1 font-montserrat text-sm text-rose-gold">
                    {loc.phone}
                  </p>
                </Link>
              </AnimateIn>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
