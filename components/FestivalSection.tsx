"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

type FestivalSectionProps = {
  leftImage: string;
  bottomImage: string;
  title: string;
  description: string;
  buttonText: string;
  buttonLink: string;
  topBg?: string;
  bottomBg?: string;
  textColor?: string;
  buttonColor?: string;
};

export default function FestivalSection({
  leftImage,
  bottomImage,
  title,
  description,
  buttonText,
  buttonLink,
  topBg = "bg-[#dedbd4]",
  bottomBg = "bg-gradient-to-r from-orange-500 via-orange-400 to-yellow-400",
  textColor = "text-purple-600",
  buttonColor = "text-purple-600 border-purple-600 hover:bg-purple-600",
}: FestivalSectionProps) {
  return (
    <section className="w-full grid grid-cols-1 lg:grid-cols-[40%_60%]">
      <div className="relative w-full h-55 sm:h-70 md:h-90 lg:h-auto lg:min-h-full overflow-hidden">
        <Image
          src={leftImage}
          alt="Festival"
          fill
          priority
          className="object-cover transition-transform duration-700 ease-out hover:scale-105"
        />
      </div>

      <div className="flex flex-col">
        <div
          className={`${topBg} px-4 sm:px-6 md:px-12 lg:px-16 py-10 sm:py-14 md:py-16 lg:py-20 flex-1 flex flex-col justify-center`}
        >
          <h1
            className={`font-light leading-tight ${textColor} text-2xl sm:text-3xl md:text-5xl lg:text-6xl`}
          >
            {title}
          </h1>

          <p className="mt-4 sm:mt-6 text-gray-600 text-sm sm:text-base md:text-lg lg:text-xl max-w-3xl leading-relaxed">
            {description}
          </p>

          {buttonText && (
            <Link
              href={buttonLink}
              target="_blank"
              rel="noopener noreferrer"
              className={`mt-6 sm:mt-8 inline-flex items-center gap-2 sm:gap-3 text-sm sm:text-base md:text-lg font-medium group transition-all duration-300 ${textColor}`}
            >
              <span className="relative overflow-hidden">
                <span className="block transition-transform duration-300 group-hover:-translate-y-full">
                  {buttonText}
                </span>
                <span className="absolute left-0 top-0 block translate-y-full transition-transform duration-300 group-hover:translate-y-0">
                  {buttonText}
                </span>
              </span>

              <span
                className={`w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center rounded-full border transition-all duration-300 ${buttonColor} group-hover:translate-x-2 group-hover:scale-110`}
              >
                <ArrowRight size={16} className="sm:w-4.5 sm:h-4.5" />
              </span>
            </Link>
          )}
        </div>

        <div
          className={`relative w-full h-45 sm:h-60 md:h-80 lg:h-95 ${bottomBg} overflow-hidden`}
        >
          <Image
            src={bottomImage}
            alt="Decoration"
            fill
            className="object-cover transition-transform duration-700 ease-out hover:scale-105"
          />
        </div>
      </div>
    </section>
  );
}