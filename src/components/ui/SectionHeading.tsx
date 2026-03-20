import AnimateIn from "./AnimateIn";
import RoseGoldText from "./RoseGoldText";

interface SectionHeadingProps {
  subtitle: string;
  title: string;
  description?: string;
  centered?: boolean;
  className?: string;
}

export default function SectionHeading({
  subtitle,
  title,
  description,
  centered = true,
  className = "",
}: SectionHeadingProps) {
  return (
    <div className={`${centered ? "text-center" : ""} ${className}`}>
      <AnimateIn variant="fade-up">
        <span className="subheader">{subtitle}</span>
      </AnimateIn>
      <AnimateIn variant="fade-up" delay={0.1}>
        <RoseGoldText as="h2" className="font-playfair text-4xl md:text-5xl lg:text-6xl mt-4">
          {title}
        </RoseGoldText>
      </AnimateIn>
      {description && (
        <AnimateIn variant="fade-up" delay={0.2}>
          <p className="mt-6 text-warm-gray font-montserrat font-light text-lg max-w-2xl mx-auto leading-relaxed">
            {description}
          </p>
        </AnimateIn>
      )}
    </div>
  );
}
