import type { Metadata } from "next";
import GalleryGrid from "./GalleryGrid";
import SectionHeading from "@/components/ui/SectionHeading";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "Browse our portfolio of stunning locs, braids, wigs, and styling work from The Esperience across Ottawa, Montréal, and NYC.",
};

const galleryItems = [
  { id: "g1", label: "Goddess Locs", category: "locs", span: "col-span-2 row-span-2" },
  { id: "g2", label: "Knotless Box Braids", category: "braids", span: "" },
  { id: "g3", label: "Custom Lace Front", category: "wigs", span: "" },
  { id: "g4", label: "Passion Twists", category: "braids", span: "row-span-2" },
  { id: "g5", label: "Silk Press", category: "styling", span: "" },
  { id: "g6", label: "Loc Retwist", category: "locs", span: "" },
  { id: "g7", label: "Cornrow Design", category: "braids", span: "col-span-2" },
  { id: "g8", label: "Faux Locs", category: "locs", span: "" },
  { id: "g9", label: "Bob Wig Install", category: "wigs", span: "" },
  { id: "g10", label: "Fulani Braids", category: "braids", span: "row-span-2" },
  { id: "g11", label: "Starter Locs", category: "locs", span: "" },
  { id: "g12", label: "Deep Conditioning", category: "treatments", span: "" },
];

const filters = ["all", "locs", "braids", "wigs", "styling", "treatments"];

export default function GalleryPage() {
  return (
    <div className="pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading
          subtitle="Portfolio"
          title="Our Gallery"
          description="A curated showcase of transformations, artistry, and the beauty of Black hair."
        />
        <GalleryGrid items={galleryItems} filters={filters} />
      </div>
    </div>
  );
}
