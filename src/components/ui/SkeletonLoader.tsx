"use client";

interface SkeletonLoaderProps {
  className?: string;
  lines?: number;
  height?: string;
}

export default function SkeletonLoader({
  className = "",
  lines = 1,
  height = "h-4",
}: SkeletonLoaderProps) {
  return (
    <div className={`space-y-3 ${className}`} role="status" aria-label="Loading">
      {Array.from({ length: lines }).map((_, i) => (
        <div
          key={i}
          className={`skeleton-rose rounded ${height} ${
            i === lines - 1 ? "w-3/4" : "w-full"
          }`}
        />
      ))}
      <span className="sr-only">Loading...</span>
    </div>
  );
}

export function BookingSkeleton() {
  return (
    <div className="w-full space-y-6 p-8">
      <div className="skeleton-rose h-12 w-2/3 rounded mx-auto" />
      <div className="skeleton-rose h-8 w-1/2 rounded mx-auto" />
      <div className="space-y-4 mt-8">
        {Array.from({ length: 4 }).map((_, i) => (
          <div key={i} className="skeleton-rose h-16 w-full rounded" />
        ))}
      </div>
      <div className="skeleton-rose h-12 w-48 rounded mx-auto mt-6" />
    </div>
  );
}
