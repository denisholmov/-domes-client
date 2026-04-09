import type { FC, SVGProps } from "react";

export const ChevronDownIcon: FC<SVGProps<SVGSVGElement>> = (props) => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
    {...props}
  >
    <polyline points="6 9 12 15 18 9" />
  </svg>
);
