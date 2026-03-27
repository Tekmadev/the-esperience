import AnimateIn from "@/components/ui/AnimateIn";
import SectionHeading from "@/components/ui/SectionHeading";
import RoseGoldText from "@/components/ui/RoseGoldText";

const values = [
  {
    icon: "✦",
    title: "Artistry",
    description:
      "Every style we create is a work of art, executed with precision and creative vision.",
  },
  {
    icon: "◆",
    title: "Authenticity",
    description:
      "We celebrate the beauty and versatility of Black hair in all its forms.",
  },
  {
    icon: "❖",
    title: "Excellence",
    description:
      "We hold ourselves to the highest standard in technique, products, and client care.",
  },
  {
    icon: "◇",
    title: "Community",
    description:
      "We're more than a salon — we're a space where our community feels seen, valued, and celebrated.",
  },
];

export default function AboutSection() {
  return (
    <section id="about" className="pt-32 pb-24 scroll-mt-20 relative">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading
          subtitle="Our Story"
          title="About The Esperience"
          description="Founded on the belief that every person deserves to feel extraordinary."
        />

        {/* Origin Story */}
        <div className="mt-20 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <AnimateIn variant="fade-right">
            <div className="aspect-[4/5] bg-gradient-to-br from-rose-gold/10 to-cream-dark relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/20 to-transparent" />
              <div className="absolute bottom-6 left-6">
                <span className="font-montserrat text-[10px] tracking-[0.2em] uppercase text-white/80">
                  Est. 2020
                </span>
              </div>
            </div>
          </AnimateIn>

          <AnimateIn variant="fade-left">
            <div className="space-y-6">
              <span className="subheader">The Beginning</span>
              <h3 className="font-playfair text-3xl md:text-4xl text-charcoal">
                Born from a Vision of{" "}
                <RoseGoldText>Excellence</RoseGoldText>
              </h3>
              <p className="font-montserrat font-light text-warm-gray leading-relaxed">
                The Esperience was founded in Ottawa with a singular mission: to
                create a hair salon that matches the excellence of our culture. We
                saw a gap in the market — premium spaces that truly understood and
                celebrated Black hair were rare.
              </p>
              <p className="font-montserrat font-light text-warm-gray leading-relaxed">
                What began as a single chair in Ottawa has grown into three
                locations across two countries. From our headquarters on Rideau
                Street to the vibrant streets of Montréal and Brooklyn, we bring
                the same unwavering commitment to quality, artistry, and
                community.
              </p>
              <p className="font-montserrat font-light text-warm-gray leading-relaxed">
                Our stylists are more than technicians — they&apos;re artists who
                understand the cultural significance of every loc twist, every
                braid pattern, and every wig installation. At The Esperience, your
                hair is in the hands of people who truly care.
              </p>
            </div>
          </AnimateIn>
        </div>

        {/* Values */}
        <div className="mt-32">
          <SectionHeading
            subtitle="What We Stand For"
            title="Our Values"
          />

          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, i) => (
              <AnimateIn key={value.title} variant="fade-up" delay={i * 0.1}>
                <div className="text-center p-8 border border-cream-dark hover:border-rose-gold/30 transition-all duration-500">
                  <span className="text-3xl text-rose-gold block mb-4">
                    {value.icon}
                  </span>
                  <h3 className="font-playfair text-xl text-charcoal mb-3">
                    {value.title}
                  </h3>
                  <p className="font-montserrat font-light text-sm text-warm-gray leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>

        {/* Stats */}
        <AnimateIn variant="fade-up" className="mt-32">
          <div className="bg-charcoal text-white p-12 md:p-16">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              {[
                { number: "3", label: "Locations" },
                { number: "5+", label: "Years of Excellence" },
                { number: "15K+", label: "Happy Clients" },
                { number: "25+", label: "Expert Stylists" },
              ].map((stat) => (
                <div key={stat.label}>
                  <span className="font-playfair text-4xl md:text-5xl text-rose-gold-gradient">
                    {stat.number}
                  </span>
                  <p className="mt-2 font-montserrat text-xs tracking-[0.2em] uppercase text-white/50">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </AnimateIn>
      </div>
    </section>
  );
}
