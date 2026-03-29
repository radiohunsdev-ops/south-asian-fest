"use client";

import Image from "next/image";

const items = [
  { image: "/partner/1.png" },
  { image: "/partner/2.png" },
  { image: "/partner/3.png" },
];

export default function Patnership() {
  return (
    <section className="w-full py-16 sm:py-20 md:py-28 px-4 sm:px-6 bg-[linear-gradient(to_bottom,#F5F1E9_50%,#7C3AED_50%)]">
      <div className="max-w-7xl mx-auto bg-[#D8CBB8] py-10 sm:py-14 md:py-20 px-6 sm:px-10 rounded-2xl">
        
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 sm:gap-12 md:gap-16 place-items-center">
          {items.map(({ image }, index) => (
            <div key={index} className="flex items-center justify-center">
              <Image
                src={image}
                alt="partner"
                width={140}
                height={140}
                className="w-20 sm:w-24 md:w-28 lg:w-32 h-auto object-contain"
              />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}