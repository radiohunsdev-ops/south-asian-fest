"use client";

import {
  Sparkles,
  Grid3X3,
  ShoppingBag,
  PartyPopper,
  Flower,
} from "lucide-react";

const items = [
  { icon: Sparkles, title: "Free Admission" },
  { icon: Grid3X3, title: "Food" },
  { icon: ShoppingBag, title: "Shopping" },
  { icon: PartyPopper, title: "Entertainment" },
  { icon: Flower, title: "Workshops" },
];

export default function WhatToExpect() {
  return (
    <section className="relative overflow-hidden bg-[#EAE5DD] py-16 sm:py-20 md:py-24">
      
      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 h-24 sm:h-32 md:h-40 w-full bg-gradient-to-r from-[#5A0FDA] to-purple-300" />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 md:px-10 lg:px-16 text-center">
        
        {/* Heading */}
        <h2 className="mb-12 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium text-[#5A0FDA]">
          What to expect
        </h2>

        {/* Items Container */}
        <div className="grid grid-cols-2 gap-10 rounded-sm bg-[#D8CFC1] px-6 py-10 sm:grid-cols-3 md:grid-cols-5 md:gap-6 md:px-8 md:py-12">
          
          {items.map(({ icon: Icon, title }, index) => (
            <div
              key={title}
              className="relative flex flex-col items-center text-center"
            >
              
              {/* Divider (only desktop) */}
              {index !== 0 && (
                <div className="absolute left-0 top-1/2 hidden h-10 w-px -translate-y-1/2 bg-gray-400 md:block" />
              )}

              {/* Icon */}
              <Icon
                className="mb-3 h-8 w-8 sm:h-10 sm:w-10 text-orange-500"
                strokeWidth={1}
              />

              {/* Title */}
              <p className="text-sm sm:text-base md:text-md tracking-widest text-[#5A0FDA]">
                {title}
              </p>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}