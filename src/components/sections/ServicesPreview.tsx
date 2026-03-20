import { services } from "@/lib/data";
import AnimateIn from "@/components/ui/AnimateIn";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";

const featuredServices = services.filter((s) => s.featured);

const categoryIcons: Record<string, string> = {
  locs: "✦",
  braids: "◆",
  wigs: "❖",
  styling: "◇",
  treatments: "○",
};

export default function ServicesPreview() {
  return (
    <section className="py-24 md:py-32 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          subtitle="Our Craft"
          title="Signature Services"
          description="Each service is a work of art, delivered with precision, care, and an unwavering commitment to your hair's health."
        />

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuredServices.map((service, i) => (
            <AnimateIn key={service.id} variant="fade-up" delay={i * 0.1}>
              <div className="group p-8 border border-cream-dark hover:border-rose-gold/30 transition-all duration-500 glimmer-hover h-full flex flex-col">
                <span className="text-2xl text-rose-gold mb-4 block">
                  {categoryIcons[service.category] ?? "◈"}
                </span>
                <span className="subheader text-[10px] mb-3">
                  {service.category}
                </span>
                <h3 className="font-playfair text-xl text-charcoal mb-3">
                  {service.name}
                </h3>
                <p className="font-montserrat font-light text-sm text-warm-gray leading-relaxed mb-6 flex-grow">
                  {service.description}
                </p>
                <div className="flex items-center justify-between mt-auto pt-4 border-t border-cream-dark">
                  <span className="font-montserrat text-sm text-rose-gold font-normal">
                    {service.price}
                  </span>
                  <span className="font-montserrat text-xs text-warm-gray-light">
                    {service.duration}
                  </span>
                </div>
              </div>
            </AnimateIn>
          ))}
        </div>

        <AnimateIn variant="fade-up" delay={0.4} className="text-center mt-12">
          <Button href="/services" variant="outline">
            View All Services
          </Button>
        </AnimateIn>
      </div>
    </section>
  );
}
