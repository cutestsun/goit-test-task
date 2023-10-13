import React from "react";

export const AvatarBorder = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 80 80"
      width="80"
      height="80"
      style={{ zIndex: 10 }}
    >
      <defs>
        <filter
          id="a"
          width="78.783"
          height="80.979"
          x=".608"
          y="-2.196"
          colorInterpolationFilters="sRGB"
          filterUnits="userSpaceOnUse"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            result="hardAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          />
          <feOffset dy="4.392" />
          <feGaussianBlur stdDeviation="2.196" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.06 0" />
          <feBlend
            in2="BackgroundImageFix"
            result="effect1_dropShadow_832_56"
          />
          <feBlend
            in="SourceGraphic"
            in2="effect1_dropShadow_832_56"
            result="shape"
          />
          <feColorMatrix
            in="SourceAlpha"
            result="hardAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          />
          <feOffset dy="4.392" />
          <feGaussianBlur stdDeviation="1.647" />
          <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic" />
          <feColorMatrix values="0 0 0 0 0.985684 0 0 0 0 0.972083 0 0 0 0 1 0 0 0 1 0" />
          <feBlend in2="shape" result="effect2_innerShadow_832_56" />
          <feColorMatrix
            in="SourceAlpha"
            result="hardAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          />
          <feOffset dy="-2.196" />
          <feGaussianBlur stdDeviation="2.196" />
          <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic" />
          <feColorMatrix values="0 0 0 0 0.680944 0 0 0 0 0.480757 0 0 0 0 0.891667 0 0 0 1 0" />
          <feBlend
            in2="effect2_innerShadow_832_56"
            result="effect3_innerShadow_832_56"
          />
        </filter>
      </defs>
      <g filter="url(#a)" transform="matrix(1.05 0 0 1.05 -.25 0)">
        <path
          fill="#EBD8FF"
          fillRule="evenodd"
          d="M38.333 67.725c16.364 0 29.63-13.266 29.63-29.63 0-16.364-13.266-29.629-29.63-29.629-16.364 0-29.629 13.265-29.629 29.629s13.265 29.63 29.629 29.63Zm0 8.465c21.039 0 38.095-17.056 38.095-38.095C76.428 17.056 59.372 0 38.333 0 17.294 0 .238 17.056.238 38.095c0 21.039 17.056 38.095 38.095 38.095Z"
          clipRule="evenodd"
        />
      </g>
    </svg>
  );
};
