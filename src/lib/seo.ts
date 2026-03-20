import type { Location } from "@/types";

export function generateLocalBusinessSchema(location: Location) {
  return {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "BeautySalon"],
    name: location.name,
    description: `Premium Black-owned hair salon in ${location.city} specializing in locs, braids, and custom wigs. Experience luxury hair care at The Esperience.`,
    url: `https://theesperience.com/locations/${location.slug}`,
    telephone: location.phone,
    email: location.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: location.address.split(",")[0],
      addressLocality: location.city,
      addressRegion: location.address.split(",").slice(-1)[0]?.trim().split(" ")[0],
      addressCountry: location.slug === "nyc" ? "US" : "CA",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: location.coordinates.lat,
      longitude: location.coordinates.lng,
    },
    priceRange: "$$$",
    image: `https://theesperience.com/images/locations/${location.slug}.jpg`,
    sameAs: [
      "https://instagram.com/theesperience",
      "https://tiktok.com/@theesperience",
    ],
    openingHoursSpecification: Object.entries(location.hours)
      .filter(([, value]) => value !== "Closed")
      .map(([day, hours]) => {
        const [open, close] = hours.split(" - ");
        return {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: day.includes("-")
            ? day.split(" - ").map((d) => d.trim())
            : [day],
          opens: convertTo24h(open),
          closes: convertTo24h(close),
        };
      }),
  };
}

function convertTo24h(time: string): string {
  const [timePart, period] = time.split(" ");
  const [hoursStr, minutes] = timePart.split(":");
  let hours = parseInt(hoursStr, 10);
  if (period === "PM" && hours !== 12) hours += 12;
  if (period === "AM" && hours === 12) hours = 0;
  return `${hours.toString().padStart(2, "0")}:${minutes}`;
}

export function generateOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "The Esperience",
    description: "Premium Black-owned hair salon specializing in locs, braids, and custom wigs across Ottawa, Montréal, and New York City.",
    url: "https://theesperience.com",
    logo: "https://theesperience.com/images/logo.png",
    sameAs: [
      "https://instagram.com/theesperience",
      "https://tiktok.com/@theesperience",
    ],
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: "(613) 555-0199",
        contactType: "customer service",
        areaServed: ["CA", "US"],
        availableLanguage: ["English", "French"],
      },
    ],
  };
}
