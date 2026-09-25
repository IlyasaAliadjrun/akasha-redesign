import type { ReactNode } from "react";

const PATHS = {
  pin: (
    <>
      <path d="M12 21s-7-6.2-7-11.5a7 7 0 1 1 14 0C19 14.8 12 21 12 21Z" />
      <circle cx="12" cy="9.5" r="2.5" />
    </>
  ),
  "arrow-up-right": <path d="M7 17 17 7M8 7h9v9" />,
  building: (
    <>
      <path d="M4 21V5a1 1 0 0 1 1-1h9a1 1 0 0 1 1 1v16M15 9h4a1 1 0 0 1 1 1v11M3 21h18" />
      <path d="M8 8h3M8 12h3M8 16h3" />
    </>
  ),
  truck: (
    <>
      <path d="M3 6h11v10H3zM14 10h4l3 3v3h-7" />
      <circle cx="7" cy="18" r="1.8" />
      <circle cx="17" cy="18" r="1.8" />
    </>
  ),
  factory: (
    <>
      <path d="M3 21V10l5 3V10l5 3V6h4l1 15" />
      <path d="M3 21h18M7 17h2M12 17h2" />
    </>
  ),
  shield: (
    <>
      <path d="M12 3 5 6v5c0 4.5 3 8.3 7 10 4-1.7 7-5.5 7-10V6l-7-3Z" />
      <path d="m9 12 2 2 4-4" />
    </>
  ),
  quality: (
    <>
      <circle cx="12" cy="10" r="6" />
      <path d="m9.5 10 1.7 1.7 3.3-3.4M8.5 15.2 7 21l5-2.5 5 2.5-1.5-5.8" />
    </>
  ),
  "food-safety": (
    <>
      <path d="M12 3 5 6v5c0 4.5 3 8.3 7 10 4-1.7 7-5.5 7-10V6l-7-3Z" />
      <path d="M9 14c0-3 2-5 6-5 0 4-2 6-5 6M9 14l3-2.5" />
    </>
  ),
  safety: (
    <>
      <path d="M4 17a8 8 0 0 1 16 0M3 17h18v2H3zM10 9V6h4v3" />
    </>
  ),
  environment: (
    <>
      <path d="M5 19c0-8 5-13 14-14 0 9-5 14-12 14" />
      <path d="M5 19c3-4 6-6 9-7.5" />
    </>
  ),
  cosmetics: (
    <>
      <path d="M9 3h6M10 3v5l-4.5 9a2.5 2.5 0 0 0 2.2 3.6h8.6a2.5 2.5 0 0 0 2.2-3.6L14 8V3" />
      <path d="M7.5 14h9" />
    </>
  ),
  rating: <path d="m12 3.5 2.6 5.3 5.9.9-4.3 4.1 1 5.8L12 16.9l-5.2 2.7 1-5.8-4.3-4.1 5.9-.9L12 3.5Z" />,
} satisfies Record<string, ReactNode>;

export type IconName = keyof typeof PATHS;

export default function Icon({ name, className = "h-5 w-5" }: { name: IconName; className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.7}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden
    >
      {PATHS[name]}
    </svg>
  );
}
