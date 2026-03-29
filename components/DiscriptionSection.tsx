"use client";

import Link from "next/link";

type DiscriptionSectionProps = {
  title: string;
  showButton?: boolean;
  buttonText?: string;
  buttonLink?: string;
};

export default function DiscriptionSection({
  title,
  showButton = true,
  buttonText = "About",
  buttonLink = "/about",
}: DiscriptionSectionProps) {
  return (
    <section className="relative w-full py-12 sm:py-16 md:py-20 lg:py-24 flex items-center overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#631EDC] via-[#8454E3] to-[#AD96ED]" />

      {/* Content */}
      <div className="relative z-10 w-full max-w-[1400px] mx-auto px-4 sm:px-6 md:px-10 lg:px-20">
        {/* Title */}
        <h1 className="text-white text-2xl sm:text-3xl md:text-5xl lg:text-6xl xl:text-7xl leading-snug md:leading-tight font-light">
          {title}
        </h1>

        {/* Button */}
        {showButton && (
          <div className="mt-6 sm:mt-8 md:mt-10">
            <Link
              href={buttonLink}
              className="group inline-flex items-center gap-2 sm:gap-3 text-orange-400 text-sm sm:text-base md:text-lg lg:text-xl uppercase font-medium transition-all duration-300"
            >
              {/* Text with underline animation */}
              <span className="relative">
                {buttonText}
                <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-orange-400 transition-all duration-300 group-hover:w-full" />
              </span>

              {/* Arrow Circle */}
              <span className="flex items-center justify-center w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 rounded-full border border-orange-400 transition-all duration-300 group-hover:bg-orange-400 group-hover:text-white group-hover:scale-110">
                <span className="transform transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </span>
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
