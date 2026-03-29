"use client";

import { useState, useMemo } from "react";
import ImageCollage from "./ImageCollage";

type Media = { id: string; url: string; alt?: string };
type SlideItem = { id: string; images: Media[] };

type Props = {
  slides: SlideItem[];
  title?: string;
  fromColor?: string;
  toColor?: string;
  accentColor?: string;
};

export default function GallerySection({
  slides,
  title = "Gallery",
  fromColor = "#8657E4",
  toColor = "#5A2FD6",
  accentColor = "#F3B500",
}: Props) {
  const [i, setI] = useState(0);

  const data = useMemo(
    () => slides.filter((s) => s.images.some((img) => img.url)),
    [slides]
  );

  const len = data.length || 1;

  const next = () => setI((p) => (p + 1) % len);
  const prev = () => setI((p) => (p - 1 + len) % len);

  const bg = {
    background: `linear-gradient(to right, ${fromColor}, ${toColor})`,
  };

  return (
    <section className="w-full min-h-screen flex flex-col">
      <div className="h-6 md:h-10" style={bg} />

      <div
        className="relative flex items-center justify-between px-4 sm:px-6 md:px-10 lg:px-20 h-16 sm:h-20 md:h-28 lg:h-32"
        style={bg}
      >
        <h2 className="text-xl sm:text-2xl md:text-4xl lg:text-5xl xl:text-6xl text-white">
          {title}
        </h2>

        <div
          className="absolute right-0 top-0 h-full flex items-center justify-center gap-2 sm:gap-3 md:gap-4 px-3 sm:px-4 md:px-6"
          style={{ backgroundColor: accentColor }}
        >
          <button
            onClick={prev}
            className="w-7 h-7 sm:w-8 sm:h-8 md:w-10 md:h-10 rounded-full border border-white text-white hover:bg-white hover:text-[#0055B8] transition"
          >
            ←
          </button>
          <button
            onClick={next}
            className="w-7 h-7 sm:w-8 sm:h-8 md:w-10 md:h-10 rounded-full border border-white text-white hover:bg-white hover:text-[#0055B8] transition"
          >
            →
          </button>
        </div>
      </div>

      <div className="flex-1 overflow-hidden">
        <div
          className="flex h-full transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${i * 100}%)` }}
        >
          {data.map((s) => (
            <div key={s.id} className="min-w-full h-full">
              <ImageCollage slides={[s]} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}