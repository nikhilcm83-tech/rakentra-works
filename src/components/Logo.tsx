import React from "react";
import Link from "next/link";

interface LogoProps {
  variant?: "full" | "horizontal" | "mark";
  className?: string;
  height?: number;
  showTagline?: boolean;
}

export default function Logo({
  variant = "horizontal",
  className = "",
  height = 72,
}: LogoProps) {
  if (variant === "mark") {
    return (
      <Link href="/" className={`inline-flex items-center group ${className}`}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/logo.png"
          alt="Rakentra Logo"
          className="h-14 sm:h-16 md:h-20 w-auto object-contain transition-all duration-300 group-hover:scale-105"
        />
      </Link>
    );
  }

  if (variant === "full") {
    return (
      <Link href="/" className={`inline-flex items-center group ${className}`}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/logo.png"
          alt="Rakentra - Pioneering Engineering & Construction"
          className="w-full max-w-[380px] sm:max-w-[450px] h-auto object-contain transition-all duration-300 group-hover:scale-105"
        />
      </Link>
    );
  }

  // Horizontal image variant (Default for Navbar header)
  return (
    <Link href="/" className={`inline-flex items-center group shrink-0 ${className}`}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/logo.png"
        alt="Rakentra Logo"
        style={{ height: `${height}px` }}
        className="w-auto object-contain transition-all duration-300 group-hover:scale-105 max-h-20 sm:max-h-24 py-1"
      />
    </Link>
  );
}
