// src/components/icons/SearchIcon.tsx
import type { FC, SVGProps } from "react";

export const SearchIcon: FC<SVGProps<SVGSVGElement>> = (props) => (
  <svg viewBox="0 0 20 20" fill="none" aria-hidden="true" {...props}>
    <path
      d="M8.75 16.75C13.1683 16.75 16.75 13.1683 16.75 8.75C16.75 4.33172 13.1683 0.75 8.75 0.75C4.33172 0.75 0.75 4.33172 0.75 8.75C0.75 13.1683 4.33172 16.75 8.75 16.75Z"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M18.75 18.75L14.4 14.4"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
