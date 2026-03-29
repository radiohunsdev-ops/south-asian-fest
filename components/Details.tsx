"use client";

import Image from "next/image";
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";

type Event = {
  date: string;
  title: string;
  description: string;
};

const events: Event[] = [
  {
    date: "Friday, August 09 2019  7 PM",
    title: "SPLASH! Dinner & Dance Boat Cruise",
    description: "(799 RUE JACQUES–CARTIES)",
  },
  {
    date: "Sunday, August 11 2019  NOON",
    title: "Your Free Ticket to Cricket",
    description: "Watch a Live Match, Learn Cricket, & More! (RIDEAU HALL)",
  },
  {
    date: "Monday, August 12 2019  5PM - 7PM",
    title: "Women of Influence",
    description: "A Panel of Inspirational Women Speakers (NAC)",
  },
];

const icons = [
  { Icon: FaFacebookF },
  { Icon: FaTwitter },
  { Icon: FaInstagram },
  { Icon: FaYoutube },
];

export default function Details() {
  return (
    <main className="min-h-screen grid grid-cols-1 md:grid-cols-2">
      <div className="bg-[#F3F3F3] flex items-center py-12 md:py-0">
        <div className="px-6 sm:px-10 md:px-16 max-w-xl w-full">
          <h1 className="text-3xl sm:text-4xl md:text-[64px] leading-tight text-purple-600 font-medium">
            2019 Mela Schedule
          </h1>

          <div className="mt-8 md:mt-10 space-y-6 md:space-y-8">
            {events.map((event, i) => (
              <div key={i}>
                <p className="text-orange-500 text-base sm:text-lg font-medium">
                  {event.date}
                </p>
                <p className="mt-2 md:mt-3 text-gray-500 text-base sm:text-lg leading-relaxed">
                  {event.title}
                  <br />
                  {event.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="grid grid-rows-2 h-[60vh] md:h-auto">
        <div className="relative h-full min-h-62.5 md:min-h-0">
          <Image src="/up.jpg" alt="event" fill className="object-cover" />

          <div className="absolute bottom-0 left-0 w-full sm:w-2/3 md:w-1/2 h-24 sm:h-32 md:h-40 bg-linear-to-b from-yellow-400 to-orange-500 flex items-center justify-center gap-4 sm:gap-6">
            {icons.map(({ Icon }, i) => (
              <div
                key={i}
                className="w-8 h-8 sm:w-10 sm:h-10 border border-purple-600 rounded-full flex items-center justify-center text-purple-600"
              >
                <Icon className="w-3 h-3 sm:w-4 sm:h-4" />
              </div>
            ))}
          </div>
        </div>

        <div className="relative h-full min-h-62.5 md:min-h-0">
          <Image src="/down.png" alt="event" fill className="object-cover" />
        </div>
      </div>
    </main>
  );
}