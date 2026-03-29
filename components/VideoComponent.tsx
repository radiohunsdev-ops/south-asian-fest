"use client";

import { useState } from "react";
import Image from "next/image";

type VideoComponentProps = {
  videoUrl: string;
  thumbnail: string;
  showBackground?: boolean;
  backgroundImage?: string;
  gradientFrom?: string;
  gradientVia?: string;
  gradientTo?: string;
  title?: string;
  subtitle?: string;
};

const getEmbedUrl = (url: string) => {
  try {
    const parsed = new URL(url);

    if (parsed.hostname.includes("youtube.com")) {
      const id = parsed.searchParams.get("v");
      return `https://www.youtube.com/embed/${id}?autoplay=1`;
    }

    if (parsed.hostname.includes("youtu.be")) {
      const id = parsed.pathname.split("/")[1];
      return `https://www.youtube.com/embed/${id}?autoplay=1`;
    }

    return url;
  } catch {
    return url;
  }
};

const VideoComponent = ({
  videoUrl,
  thumbnail,
  showBackground = true,
  backgroundImage = "/bg.png",
  gradientFrom = "#f97316",
  gradientVia = "#fb923c",
  gradientTo = "#facc15",
  title = "2019 SAF Recap",
  subtitle = "",
}: VideoComponentProps) => {
  const [play, setPlay] = useState(false);
  const embedUrl = getEmbedUrl(videoUrl);

  return (
    <section
      className="w-full py-12 md:py-16 lg:py-20 relative overflow-hidden"
      style={{
        background: `linear-gradient(to right, ${gradientFrom}, ${gradientVia}, ${gradientTo})`,
      }}
    >
      {showBackground && backgroundImage && (
        <div
          className="absolute inset-0 bg-no-repeat bg-cover bg-center opacity-30"
          style={{ backgroundImage: `url('${backgroundImage}')` }}
        />
      )}

      <div className="relative w-full max-w-6xl mx-auto px-4">
        <div className="aspect-video w-full relative overflow-hidden rounded-xl">
          {!play && (
            <>
              <Image
                src={thumbnail}
                alt="video thumbnail"
                fill
                className="object-cover"
              />

              <div
                onClick={() => setPlay(true)}
                className="absolute inset-0 flex items-center justify-center cursor-pointer bg-black/40 hover:bg-black/50 transition"
              >
                <div className="w-14 h-14 md:w-20 md:h-20 rounded-full border-2 border-white flex items-center justify-center">
                  <div className="w-0 h-0 border-l-[14px] md:border-l-[18px] border-l-white border-y-[10px] md:border-y-[12px] border-y-transparent ml-1" />
                </div>

                {title && (
                  <h1 className="absolute left-4 md:left-8 bottom-10 md:bottom-16 text-xl md:text-3xl lg:text-4xl font-light text-white">
                    {title}
                  </h1>
                )}

                {subtitle && (
                  <p className="absolute left-4 md:left-8 bottom-4 md:bottom-8 text-sm md:text-lg lg:text-xl font-light text-white">
                    {subtitle}
                  </p>
                )}
              </div>
            </>
          )}

          {play && (
            <iframe
              className="w-full h-full"
              src={embedUrl}
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          )}
        </div>
      </div>
    </section>
  );
};

export default VideoComponent;