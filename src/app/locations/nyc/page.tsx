import type { Metadata } from "next";
import { locations } from "@/lib/data";
import { generateLocalBusinessSchema } from "@/lib/seo";
import LocationDetail from "../LocationDetail";

const location = locations.find((l) => l.slug === "nyc")!;

export function generateMetadata(): Metadata {
  return {
    title: `${location.city} Salon — Locs, Braids & Wigs`,
    description: `Visit The Esperience ${location.city} at ${location.address}. Premium Black-owned hair salon specializing in locs, braids, and custom wigs. Book your appointment today.`,
    openGraph: {
      title: `The Esperience ${location.city} | Premium Hair Salon`,
      description: `Premium locs, braids, and wig services in ${location.city}. Black-owned, excellence-driven.`,
      url: `https://theesperience.com/locations/${location.slug}`,
    },
  };
}

export default function NYCPage() {
  const schema = generateLocalBusinessSchema(location);
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <LocationDetail location={location} />
    </>
  );
}
