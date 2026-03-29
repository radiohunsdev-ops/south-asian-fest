"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { faqs } from "@/lib";



export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="w-full  bg-[#d9d4cd] flex items-center justify-center px-6 py-16">
      <div className="w-full max-w-7xl">
        <h2 className="text-center text-4xl md:text-6xl font-extralight text-[#5A0FDA] mb-16">
          Your questions answered
        </h2>

        <div className="flex flex-col gap-8">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div key={index} className="border-b border-gray-500 pb-6">
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full flex items-center justify-between text-left"
                >
                  <span className="text-[#5A0FDA] text-lg md:text-xl">
                    {faq.question}
                  </span>

                  <span className="w-10 h-10 flex items-center justify-center border border-orange-400 rounded-full">
                    <ChevronDown
                      className={`text-orange-400 transition-transform duration-300 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </span>
                </button>

                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    isOpen ? "max-h-40 mt-4" : "max-h-0"
                  }`}
                >
                  <p className="text-gray-700 text-sm md:text-base">
                    {faq.answer}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
