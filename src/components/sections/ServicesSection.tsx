import { services } from "@/lib/data";
import AnimateIn from "@/components/ui/AnimateIn";
import SectionHeading from "@/components/ui/SectionHeading";

const categories = [
  { id: "locs", label: "Locs", icon: "✦" },
  { id: "braids", label: "Braids", icon: "◆" },
  { id: "wigs", label: "Wigs", icon: "❖" },
  { id: "styling", label: "Styling", icon: "◇" },
  { id: "treatments", label: "Treatments", icon: "○" },
] as const;

export default function ServicesSection() {
  return (
    <section id="services" className="pt-32 pb-24 bg-cream/30 scroll-mt-20 relative">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading
          subtitle="What We Offer"
          title="Our Services"
          description="Every service at The Esperience is a testament to our dedication to artistry, quality, and the celebration of Black hair."
        />

        <div className="space-y-24">
          {categories.map((category, catIndex) => {
            const categoryServices = services.filter(
              (s) => s.category === category.id
            );
            if (categoryServices.length === 0) return null;

            return (
              <div key={category.id} className="mt-12">
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
                      <div className="group p-8 border border-cream-dark hover:border-rose-gold/30 transition-all duration-500 glimmer-hover h-full bg-white/50 backdrop-blur-sm">
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
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
