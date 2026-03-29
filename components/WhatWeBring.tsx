"use client";

import { Sparkles, Grid3X3, Flower, Sun } from "lucide-react";

const items = [
  {
    icon: Sparkles,
    title: "Barrier free access",
    desc: `All our family friendly events encourage access to allow cultural exploration, discovery, dialogues, discussions and workshops for everyone to access and enjoy in a barrier-free setting.`,
  },
  {
    icon: Grid3X3,
    title: "Entertainment",
    desc: `SouthAsianFest brings you the arts, entertainment, music, dance, workshops and demonstrations of all kinds. The cultural content entails canada’s top artists and a sprinkle from across the globe.`,
  },
  {
    icon: Flower,
    title: "Local Talent",
    desc: `We love showing what Ottawa can do! From our Art Exhibition to the MirchMasalaMela, we’re all about showcasing local talent.`,
  },
  {
    icon: Sun,
    title: "Family Fun",
    desc: `All SouthAsianFest events are focused on bringing family-friendly fun to our nation’s capital. So everyone can enjoy!`,
  },
];

export default function WhatWeBring() {
  return (
    <section className="w-full py-16 md:py-24 lg:py-32 px-4 sm:px-6 bg-[linear-gradient(to_bottom,#F5F1E9_50%,#7C3AED_50%)]">
      <div className="text-center mb-12 md:mb-16">
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium text-[#5A0FDA]">
          What we bring
        </h2>
      </div>

      <div className="max-w-7xl mx-auto bg-[#D8CBB8] py-10 sm:py-12 md:py-16 px-4 sm:px-6 md:px-10 rounded-2xl">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 sm:gap-12 md:gap-16 text-center">
          {items.map(({ icon: Icon, title, desc }, index) => (
            <div
              key={index}
              className="flex flex-col items-center px-2 sm:px-4 relative"
            >
              {index !== 0 && (
                <div className="hidden lg:block absolute left-0 top-1/2 -translate-y-1/2 h-20 xl:h-24 w-px bg-gray-400/40" />
              )}

              <Icon
                className="w-7 h-7 sm:w-8 sm:h-8 text-orange-500 mb-4 sm:mb-6"
                strokeWidth={1}
              />

              <h3 className="text-base sm:text-lg font-semibold text-[#5A0FDA] mb-2 sm:mb-3">
                {title}
              </h3>

              <p className="text-xs sm:text-sm text-gray-700 leading-relaxed max-w-xs">
                {desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
