import React from 'react';

export function GooglePlayIcon({
  className = "size-[22px]",
  ...props
}: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      aria-hidden="true"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M3.609 1.814L13.792 12 3.61 22.186A2.223 2.223 0 0 1 3 20.626V3.374c0-.594.224-1.164.609-1.56z"
        fill="#00A3FF"
      />
      <path
        d="M17.556 8.235l-3.764 3.765 3.764 3.765 4.225-2.438a1.528 1.528 0 0 0 0-2.654l-4.225-2.438z"
        fill="#FFB300"
      />
      <path
        d="M3.609 1.814l10.183 10.186 3.764-3.765L5.783 1.52a2.44 2.44 0 0 0-2.174.294z"
        fill="#00D763"
      />
      <path
        d="M13.792 12L3.609 22.186c.642.457 1.488.544 2.174.148l11.773-6.715-3.764-3.619z"
        fill="#FF334B"
      />
    </svg>
  );
}
