"use client";

import { timelineData, TimelineItemType } from "@/lib";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const timelineAnimations = `
  @keyframes fadeSlideDown {
    from { opacity: 0; transform: translateY(-24px); }
    to   { opacity: 1; transform: translateY(0); }
  }
  @keyframes popIn {
    0%   { opacity: 0; transform: scale(0) rotate(-45deg); }
    60%  { transform: scale(1.3) rotate(6deg); }
    100% { opacity: 1; transform: scale(1) rotate(0deg); }
  }
  @keyframes yearPulse {
    0%   { opacity: 0; transform: translateX(-20px) scale(0.85); }
    60%  { transform: translateX(4px) scale(1.04); }
    100% { opacity: 1; transform: translateX(0) scale(1); }
  }
  @keyframes fadeSlideIn {
    from { opacity: 0; transform: translateX(-16px); }
    to   { opacity: 1; transform: translateX(0); }
  }
  @keyframes lineGrow {
    from { transform: scaleY(0); transform-origin: top; }
    to   { transform: scaleY(1); transform-origin: top; }
  }
  @keyframes dotPing {
    0%, 100% { box-shadow: 0 0 0 0px rgba(45,212,191,0.5); }
    50%       { box-shadow: 0 0 0 6px rgba(45,212,191,0); }
  }
`;

export default function PastEventsTimeline() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const eventsPerSlide = 3;
  const totalSlides = Math.ceil(timelineData.length / eventsPerSlide);

  const goToSlide = (index: number) => {
    if (index >= 0 && index < totalSlides) setCurrentSlide(index);
  };

  const getSlideEvents = () => {
    const start = currentSlide * eventsPerSlide;
    return timelineData.slice(start, start + eventsPerSlide);
  };

  return (
    <>
      <style>{timelineAnimations}</style>
      <div className="flex flex-col md:flex-row min-h-screen">
        <div className="hidden md:block w-[50%] relative">
          <Image src="/dance.jpg" alt="event" fill className="object-cover" />
        </div>

        <div className="w-full md:w-[50%] bg-[#F4F1ED] px-10 md:px-16 py-20">
          <h2
            className="text-5xl font-semibold text-purple-600 mb-6"
            style={{ animation: "fadeSlideDown 0.7s cubic-bezier(0.22,1,0.36,1) both" }}
          >
            Past Events
          </h2>

          <div className="relative flex h-full gap-10 justify-center items-center">
            {/* Slide dots */}
            <div className="flex flex-col gap-2">
              {Array.from({ length: totalSlides }).map((_, idx) => (
                <div
                  key={idx}
                  className={`w-3 h-3 rounded-full cursor-pointer transition-all duration-300 ${
                    currentSlide === idx
                      ? "bg-[#6625DD] scale-125"
                      : "border border-[#6625DD] hover:scale-110"
                  }`}
                  onClick={() => goToSlide(idx)}
                />
              ))}
            </div>

            {/* Timeline items — re-mount on slide change to retrigger animations */}
            <div key={currentSlide} className="space-y-12">
              {getSlideEvents().map((item, index) => (
                <TimelineItem
                  key={item.year}
                  {...item}
                  index={index}
                  isLast={index === getSlideEvents().length - 1}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

function TimelineItem({
  year,
  text,
  index,
  isLast,
}: TimelineItemType & { index: number; isLast: boolean }) {
  const [visible, setVisible] = useState(false);
  const itemRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = itemRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry], obs) => {
        if (entry.isIntersecting) {
          setVisible(true);
          obs.disconnect();
        }
      },
      { threshold: 0.15 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const baseDelay = index * 0.18;
  const delay = `${baseDelay}s`;
  const textDelay = `${baseDelay + 0.1}s`;
  const lineDelay = `${baseDelay + 0.05}s`;

  return (
    <div ref={itemRef} className="relative pl-10">
      {/* Connector line — grows downward when visible */}
      {!isLast && (
        <div
          className="absolute left-1.75 top-7 w-0.5 bg-teal-400"
          style={{
            height: "calc(100% + 3rem)",
            ...(visible
              ? { animation: `lineGrow 0.6s cubic-bezier(0.22,1,0.36,1) ${lineDelay} both` }
              : { transform: "scaleY(0)", transformOrigin: "top" }),
          }}
        />
      )}

      {/* Timeline dot — pops in then pulses */}
      <div
        className="absolute left-0 top-3 w-4 h-4 rounded-full border-2 border-teal-400 bg-[#F4F1ED]"
        style={
          visible
            ? {
                animation: `popIn 0.5s cubic-bezier(0.22,1,0.36,1) ${delay} both,
                             dotPing 2s ease-in-out ${baseDelay + 0.6}s 3`,
              }
            : { opacity: 0 }
        }
      />

      {/* Year — slides in from left */}
      <h3
        className="text-3xl md:text-5xl font-semibold text-teal-400 mb-4"
        style={
          visible
            ? { animation: `yearPulse 0.6s cubic-bezier(0.22,1,0.36,1) ${delay} both` }
            : { opacity: 0 }
        }
      >
        {year}
      </h3>

      {/* Text — fades and slides in slightly after year */}
      <p
        className="text-gray-600 leading-relaxed max-w-xl"
        style={
          visible
            ? { animation: `fadeSlideIn 0.6s cubic-bezier(0.22,1,0.36,1) ${textDelay} both` }
            : { opacity: 0 }
        }
      >
        {text}
      </p>
    </div>
  );
}