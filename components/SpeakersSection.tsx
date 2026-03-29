"use client";

import Image from "next/image";

type Speaker = {
  name: string;
  role?: string;
  image: string;
};

const speakers: Speaker[] = [
  {
    name: "Pierre Poilievre",
    role: "MP (Ontario)",
    image: "/speakers/human.jpg",
  },
  {
    name: "Tim Uppal",
    role: "MP (Alberta)",
    image: "/speakers/punjabi2.jpg",
  },
  {
    name: "Prabmeet Singh Sarkaria",
    role: "MP (Ontario)",
    image: "/speakers/punjabi.jpg",
  },
  {
    name: "The Hon. Lisa MacLeod",
    role: "Ontario's Minister of Tourism, Culture and Sport",
    image: "/speakers/girl.jpg",
  },
];

function SpeakerCard({
  name,
  role,
  image,
  priority = false,
  size = "small",
}: Speaker & { priority?: boolean; size?: "large" | "small" }) {
  return (
    <div
      className={`relative w-full overflow-hidden rounded-2xl ${
        size === "large"
          ? "h-65 sm:h-80 md:h-105 lg:h-130"
          : "h-40 sm:h-50 md:h-60 lg:h-65"
      }`}
    >
      <Image
        src={image}
        alt={name}
        fill
        priority={priority}
        sizes="(max-width: 640px) 100vw, 
         (max-width: 1024px) 50vw, 
         33vw"
        className="object-cover"
      />

      <div className="absolute inset-0 bg-black/30" />

      <div
        className={`absolute text-white ${
          size === "large"
            ? "bottom-4 left-4 sm:bottom-6 sm:left-6"
            : "bottom-3 left-3 sm:bottom-4 sm:left-4"
        }`}
      >
        <h3
          className={`font-semibold leading-tight ${
            size === "large"
              ? "text-lg sm:text-xl md:text-2xl"
              : "text-sm sm:text-base md:text-lg"
          }`}
        >
          {name}
        </h3>
        {role && (
          <p className="text-[10px] sm:text-xs md:text-sm opacity-90">{role}</p>
        )}
      </div>
    </div>
  );
}

export default function SpeakersSection() {
  return (
    <section className="w-full">
      <div className="bg-linear-to-r from-cyan-500 to-teal-300 py-10 sm:py-14 md:py-16 px-4 sm:px-6 md:px-12 lg:px-20">
        <h2 className="text-white text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-light">
          Prominent speakers
        </h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 p-4 sm:p-6 md:p-10 lg:p-12">
        <SpeakerCard
          name="Jim Watson"
          role="Mayor of Ottawa"
          image="/speakers/jim.jpeg"
          size="large"
          priority
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
          {speakers.map((speaker) => (
            <SpeakerCard key={speaker.name} {...speaker} />
          ))}
        </div>
      </div>
    </section>
  );
}
