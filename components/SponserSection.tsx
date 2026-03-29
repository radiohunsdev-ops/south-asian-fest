"use client";

import Image from "next/image";

type Sponsor = {
  type?: "text" | "image" | "custom";
  content?: string;
  image?: string;
};

type SponsorSectionProps = {
  title: string;
  buttonText?: string;
  buttonLink?: string;
  leftGradientFrom?: string;
  leftGradientVia?: string;
  leftGradientTo?: string;
  rightGradientFrom?: string;
  rightGradientTo?: string;
  bottomImage: string;
  sponsors: Sponsor[];
};

const SponserSection = ({
  title,
  buttonText = "Become a sponsor",
  buttonLink = "#",
  leftGradientFrom = "from-orange-500",
  leftGradientVia = "via-orange-400",
  leftGradientTo = "to-yellow-400",
  rightGradientFrom = "from-[#5A0FDA]",
  rightGradientTo = "to-[#5A0FDA]",
  bottomImage,
  sponsors,
}: SponsorSectionProps) => {
  return (
    <main className="w-full flex flex-col lg:flex-row bg-white">
      <div className="w-full lg:w-1/2 flex flex-col bg-[#EDE9E3]">
        <div className="flex flex-col justify-center px-6 sm:px-10 lg:px-16 py-12">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[64px] leading-tight lg:leading-18 font-medium text-purple-700 whitespace-pre-line">
            {title}
          </h1>

          <a
            href={buttonLink}
            className="mt-8 flex items-center gap-3 text-orange-500 cursor-pointer"
          >
            <span className="text-base sm:text-lg">{buttonText}</span>
            <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full border border-orange-500 flex items-center justify-center">
              →
            </div>
          </a>
        </div>

        <div
          className={`relative h-40 sm:h-56 md:h-64 overflow-hidden bg-linear-to-r ${leftGradientFrom} ${leftGradientVia} ${leftGradientTo}`}
        >
          <Image
            src={bottomImage}
            alt="Decorative"
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover"
          />
        </div>
      </div>

      <div
        className={`w-full lg:w-1/2 bg-linear-to-b ${rightGradientFrom} ${rightGradientTo} flex flex-wrap lg:flex-col items-center justify-center gap-8 sm:gap-12 lg:gap-16 py-12 px-6 text-white`}
      >
        {sponsors.length > 0 &&
          sponsors.map((sponsor, index) => {
            if (sponsor.type === "text") {
              return (
                <div
                  key={index}
                  className="bg-white text-purple-700 font-bold text-xl sm:text-2xl md:text-3xl lg:text-4xl px-6 py-4 text-center"
                >
                  {sponsor.content}
                </div>
              );
            }

            if (sponsor.type === "image" && sponsor.image) {
              return (
                <div
                  key={index}
                  className="relative w-28 h-16 sm:w-36 sm:h-20 md:w-40 md:h-24"
                >
                  <Image
                    src={sponsor.image}
                    alt="sponsor"
                    fill
                    sizes="160px"
                    className="object-contain"
                  />
                </div>
              );
            }

            return (
              <div key={index} className="text-center opacity-90">
                <div className="text-lg sm:text-xl md:text-2xl lg:text-3xl tracking-widest">
                  {sponsor.content}
                </div>
              </div>
            );
          })}
      </div>
    </main>
  );
};

export default SponserSection;