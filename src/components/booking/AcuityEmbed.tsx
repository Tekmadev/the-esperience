"use client";

import { useState } from "react";
import Script from "next/script";
import { BookingSkeleton } from "@/components/ui/SkeletonLoader";

const ACUITY_URL =
  process.env.NEXT_PUBLIC_ACUITY_EMBED_URL ??
  "https://app.acuityscheduling.com/schedule.php?owner=PLACEHOLDER";

export default function AcuityEmbed() {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className="relative min-h-[600px]" data-lenis-prevent>
      {!loaded && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-full max-w-xl">
            <BookingSkeleton />
          </div>
        </div>
      )}

      <iframe
        src={`${ACUITY_URL}&notitle=1`}
        title="Book an Appointment - The Esperience"
        width="100%"
        height="800"
        frameBorder="0"
        onLoad={() => setLoaded(true)}
        className={`transition-opacity duration-500 ${
          loaded ? "opacity-100" : "opacity-0"
        }`}
        style={{
          border: "none",
          minHeight: "600px",
        }}
      />

      <Script
        src="https://embed.acuityscheduling.com/js/embed.js"
        strategy="lazyOnload"
        onLoad={() => setLoaded(true)}
      />
    </div>
  );
}
