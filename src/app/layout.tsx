import type { Metadata } from "next";
import { Playfair_Display, Montserrat, Great_Vibes } from "next/font/google";
import SmoothScroll from "@/components/layout/SmoothScroll";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { generateOrganizationSchema } from "@/lib/seo";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
  weight: ["300", "400", "500", "600"],
});

const greatVibes = Great_Vibes({
  subsets: ["latin"],
  variable: "--font-signature",
  display: "swap",
  weight: "400",
});

export const metadata: Metadata = {
  title: {
    default: "The Esperience | Premium Locs, Braids & Wigs",
    template: "%s | The Esperience",
  },
  description:
    "Premium Black-owned hair salon specializing in locs, braids, and custom wigs. Locations in Ottawa, Montréal, and New York City. Book your transformation today.",
  keywords: [
    "locs",
    "braids",
    "wigs",
    "Black-owned salon",
    "Ottawa hair salon",
    "Montreal hair salon",
    "NYC hair salon",
    "knotless braids",
    "faux locs",
    "custom wigs",
    "The Esperience",
  ],
  openGraph: {
    title: "The Esperience | Premium Locs, Braids & Wigs",
    description:
      "Where artistry meets authenticity. Premium hair salon specializing in locs, braids, and custom wigs across three cities.",
    url: "https://theesperience.com",
    siteName: "The Esperience",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "The Esperience | Premium Locs, Braids & Wigs",
    description:
      "Where artistry meets authenticity. Premium hair salon across Ottawa, Montréal, and NYC.",
  },
  metadataBase: new URL("https://theesperience.com"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const orgSchema = generateOrganizationSchema();

  return (
    <html lang="en" className={`${playfair.variable} ${montserrat.variable} ${greatVibes.variable}`}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
        />
      </head>
      <body className="bg-white text-charcoal font-montserrat font-light antialiased">
        <SmoothScroll>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
