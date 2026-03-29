"use client";

import Image from "next/image";

type HeroProps = {
  bgImage: string;
  overlayImage?: string;
  subtitle?: string;
  title: React.ReactNode;
};

export default function Hero({
  bgImage,
  overlayImage,
  subtitle,
  title,
}: HeroProps) {
  return (
    <section className="relative h-[70vh] sm:h-[80vh] md:h-screen w-full overflow-hidden">
      <Image
        src={bgImage}
        alt="hero background"
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />

      <div className="absolute inset-0 bg-black/50 z-10" />

      {overlayImage && (
        <Image
          src={overlayImage}
          alt="overlay"
          fill
          sizes="100vw"
          className="pointer-events-none absolute inset-0 z-20 object-cover"
        />
      )}

      <div className="relative z-30 flex h-full items-center">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-12 text-center md:text-left">
          {subtitle && (
            <p className="mb-3 text-sm sm:text-base md:text-lg lg:text-xl text-cyan-400 drop-shadow-md">
              {subtitle}
            </p>
          )}

          <h1 className="max-w-3xl text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-light leading-23 text-white drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)]">
            {title}
          </h1>
        </div>
      </div>
    </section>
  );
}
