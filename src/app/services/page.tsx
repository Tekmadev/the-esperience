import type { Metadata } from "next";
import { services } from "@/lib/data";
import AnimateIn from "@/components/ui/AnimateIn";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Explore our full menu of premium hair services including locs, braids, wigs, styling, and treatments at The Esperience.",
};

const categories = [
  { id: "locs", label: "Locs", icon: "✦" },
  { id: "braids", label: "Braids", icon: "◆" },
  { id: "wigs", label: "Wigs", icon: "❖" },
  { id: "styling", label: "Styling", icon: "◇" },
  { id: "treatments", label: "Treatments", icon: "○" },
] as const;

export default function ServicesPage() {
  return (
    <div className="pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading
          subtitle="What We Offer"
          title="Our Services"
          description="Every service at The Esperience is a testament to our dedication to artistry, quality, and the celebration of Black hair."
        />

        {categories.map((category, catIndex) => {
          const categoryServices = services.filter(
            (s) => s.category === category.id
          );
          if (categoryServices.length === 0) return null;

          return (
            <section
              key={category.id}
              id={category.id}
              className="mt-20 scroll-mt-32"
            >
              <AnimateIn variant="fade-up">
                <div className="flex items-center gap-4 mb-10">
                  <span className="text-2xl text-rose-gold">{category.icon}</span>
                  <h2 className="font-playfair text-3xl md:text-4xl text-charcoal">
                    {category.label}
                  </h2>
                  <div className="flex-1 h-[1px] bg-cream-dark ml-4" />
                </div>
              </AnimateIn>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {categoryServices.map((service, i) => (
                  <AnimateIn
                    key={service.id}
                    variant="fade-up"
                    delay={i * 0.1 + catIndex * 0.05}
                  >
                    <div className="group p-8 border border-cream-dark hover:border-rose-gold/30 transition-all duration-500 glimmer-hover h-full">
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <h3 className="font-playfair text-xl text-charcoal group-hover:text-rose-gold transition-colors">
                            {service.name}
                          </h3>
                          {service.featured && (
                            <span className="inline-block mt-1 font-montserrat text-[9px] tracking-[0.2em] uppercase text-rose-gold border border-rose-gold/30 px-2 py-0.5">
                              Popular
                            </span>
                          )}
                        </div>
                        <span className="font-montserrat text-lg text-rose-gold font-normal whitespace-nowrap ml-4">
                          {service.price}
                        </span>
                      </div>
                      <p className="font-montserrat font-light text-sm text-warm-gray leading-relaxed">
                        {service.description}
                      </p>
                      <p className="mt-4 font-montserrat text-xs text-warm-gray-light">
                        Duration: {service.duration}
                      </p>
                    </div>
                  </AnimateIn>
                ))}
              </div>
            </section>
          );
        })}

        <AnimateIn variant="fade-up" className="text-center mt-20">
          <div className="p-12 bg-cream">
            <p className="subheader mb-4">Ready to Get Started?</p>
            <h3 className="font-playfair text-3xl text-rose-gold-gradient mb-4">
              Book Your Appointment
            </h3>
            <p className="font-montserrat font-light text-warm-gray mb-8 max-w-lg mx-auto">
              Select your preferred service and location to begin your
              transformation.
            </p>
            <Button href="/booking" size="lg">
              Book Now
            </Button>
          </div>
        </AnimateIn>
      </div>
    </div>
  );
}
