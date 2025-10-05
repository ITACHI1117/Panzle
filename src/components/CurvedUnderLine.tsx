import React from "react";

export default function CurvedUnderline({
  className = "",
}: {
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 400 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      preserveAspectRatio="none"
    >
      <defs>
        <linearGradient
          id="underlineGradient"
          x1="0%"
          y1="0%"
          x2="100%"
          y2="0%"
        >
          <stop offset="0%" stopColor="#fb923c" />
          <stop offset="50%" stopColor="#f97316" />
          <stop offset="100%" stopColor="#ef4444" />
        </linearGradient>
      </defs>
      <path
        d="M 0 15 Q 100 5, 200 10 T 400 8"
        stroke="url(#underlineGradient)"
        strokeWidth="3"
        strokeLinecap="round"
        fill="none"
      />
    </svg>
  );
}
