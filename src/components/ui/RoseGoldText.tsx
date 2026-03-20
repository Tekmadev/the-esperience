interface RoseGoldTextProps {
  children: React.ReactNode;
  as?: "h1" | "h2" | "h3" | "h4" | "span" | "p";
  animated?: boolean;
  className?: string;
}

export default function RoseGoldText({
  children,
  as: Tag = "span",
  animated = false,
  className = "",
}: RoseGoldTextProps) {
  return (
    <Tag
      className={`${
        animated ? "text-rose-gold-gradient-animated" : "text-rose-gold-gradient"
      } ${className}`}
    >
      {children}
    </Tag>
  );
}
