/* eslint-disable @next/next/no-img-element */
"use client";

import { useState } from "react";

type Card = {
  id: number;
  title: string;
  subtitle: string;
  image: string;
  videolink?: string;
  description: string;
};

export default function PastEvents() {
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

  const normalizeYouTubeUrl = (url: string) => {
    const shortMatch = url.match(/youtu\.be\/([a-zA-Z0-9_-]+)/);
    const watchMatch = url.match(/v=([a-zA-Z0-9_-]+)/);

    const videoId = shortMatch?.[1] || watchMatch?.[1];
    return videoId ? `https://www.youtube.com/embed/${videoId}` : null;
  };

  const cards: Card[] = [
    {
      id: 1,
      title: "LIVE PERFORMANCE",
      subtitle: "BY JAZ DHAMI, PANJABI MC, RANJIT MANI (2017)",
      image: "/events/event6.jpg",
      videolink: "https://www.youtube.com/embed/P39IVtKd9Sc",
      description:
        "ARJUN captured the audiences with his debut performance in Canada’s Capital and unique style of R&B Hindi and Punjabi to ensure the SouthAsianFest tradition of roaring crowds continued at City Hall..!",
    },
    {
      id: 2,
      title: "LIVE PERFORMANCE",
      subtitle: "BY ARJUN (2016)",
      image: "/events/event3.jpg",
      videolink: "https://youtu.be/D0hr71CXVNE",
      description:
        "The R&B Singer made his Ottawa debut and thousands in the audience felt the VIBE with the appeal of the Hindi, Punjabi and English Lyrics on Stage. Accompanied by a dance troupe from LA, the performance was one that will be remembered for many years to come..!",
    },
    {
      id: 3,
      title: "LIVE PERFORMANCE",
      subtitle: "BY JAY SEAN (2014)",
      image: "/events/event4.jpg",
      videolink: "https://www.youtube.com/watch?v=D0hr71CXVNE",
      description:
        "The R&B Singer made his Ottawa debut and thousands in the audience felt the VIBE with the appeal of the Hindi, Punjabi and English Lyrics on Stage. Accompanied by a dance troupe from LA, the performance was one that will be remembered for many years to come..!",
    },
    {
      id: 4,
      title: "LIVE PERFORMANCE",
      subtitle: "BY IMRAN KHAN (2013)",
      image: "/events/event5.jpg",
      videolink: "https://www.youtube.com/watch?v=rYSg1ovTfI8",
      description:
        "The Urban Punjabi Star had starved the Ottawa fans for years, and made the trip from the Hague in the Netherlands to Ottawa’s SouthAsianFest on Saturday August 17th…and history was made at Confederation Park as over 7500 fans applauded the Dutch Music Sensation in Canada’s Capital.",
    },
    {
      id: 5,
      title: "LIVE PERFORMANCE",
      subtitle: "BY RAGHAV (2012)",
      image: "/events/event1.jpg",
      videolink: "https://www.youtube.com/watch?v=K_IJLUU4TGg",
      description:
        "With his unique fusion of hip-hop, R&B, and Bollywood, the multi-talented Raghav became one of the biggest Asian crossover artists in the U.K., with a string of hit singles such as “So Much”, featuring Kardinal Offishall and most recently “Fire”.",
    },
    {
      id: 6,
      title: "GUEST MC",
      subtitle: "COMEDIAN JUS REIGN (2012)",
      image: "/events/event2.jpg",
      videolink: "https://www.youtube.com/watch?v=WiSDc8VYgY4",
      description:
        "With his unique fusion of hip-hop, R&B, and Bollywood, the multi-talented Raghav became one of the biggest Asian crossover artists in the U.K., with a string of hit singles such as “So Much”, featuring Kardinal Offishall and most recently “Fire”.",
    },
  ];

  return (
    <section className="bg-[#f5f5f5] px-6 md:px-12 py-20">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-extralight text-[#5A0FDA] mb-14">
          Past Events 2009–2019
        </h1>
        <div className="grid md:grid-cols-3 space-y-10">
          {cards.map((card) => (
            <div
              key={card.id}
              className="group relative overflow-hidden  cursor-pointer"
              onClick={() => card.videolink && setSelectedVideo(normalizeYouTubeUrl(card.videolink))}
            >
              <img
                src={card.image}
                alt={card.title}
                className="w-full h-80 object-cover transition-transform duration-700 ease-out group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-[#611BDB] flex items-center justify-center p-6 text-center opacity-0 translate-y-6 transition-all duration-500 ease-in-out group-hover:opacity-100 group-hover:translate-y-0">
                <p className="text-white text-lg leading-relaxed">
                  {card.description}
                </p>
              </div>
              <div className="bg-[#611BDB] p-6">
                <div className="transition-all duration-500 ease-in-out group-hover:-translate-y-10 group-hover:opacity-0">
                  <h3 className="text-orange-400 text-lg font-semibold tracking-wide">
                    {card.title}
                  </h3>
                  <p className="text-white text-sm mt-1 leading-snug">
                    {card.subtitle}
                  </p>
                  <p className="text-white mt-4 text-sm opacity-80">Watch →</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedVideo && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4">
          <div className="relative w-full max-w-4xl mx-auto bg-black rounded-lg  overflow-hidden">
            <button
              onClick={() => setSelectedVideo(null)}
              className="absolute top-3 right-3 text-white text-3xl font-bold z-10"
            >
              &times;
            </button>
            <iframe
              src={`${selectedVideo}?autoplay=1`}
              title="Video"
              allow="autoplay; encrypted-media"
              allowFullScreen
              className="w-full h-[70vh] md:h-[80vh]"
            ></iframe>
          </div>
        </div>
      )}
    </section>
  );
}