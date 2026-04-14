export function MakzLogoIcon({ size = 32 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Rounded square outline */}
      <rect
        x="2"
        y="2"
        width="28"
        height="28"
        rx="6"
        stroke="currentColor"
        strokeWidth="1.5"
        fill="none"
      />
      {/* Crosshair lines - top */}
      <line x1="16" y1="2" x2="16" y2="11" stroke="currentColor" strokeWidth="1.5" />
      {/* Crosshair lines - bottom */}
      <line x1="16" y1="21" x2="16" y2="30" stroke="currentColor" strokeWidth="1.5" />
      {/* Crosshair lines - left */}
      <line x1="2" y1="16" x2="11" y2="16" stroke="currentColor" strokeWidth="1.5" />
      {/* Crosshair lines - right */}
      <line x1="21" y1="16" x2="30" y2="16" stroke="currentColor" strokeWidth="1.5" />
      {/* Blue centre dot */}
      <circle cx="16" cy="16" r="3" fill="#4d8eff" />
    </svg>
  );
}
