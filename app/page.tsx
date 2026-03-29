/* eslint-disable @next/next/no-img-element */
import Footer from "@/components/ContactFooter";
import Details from "@/components/Details";
import DiscriptionSection from "@/components/DiscriptionSection";
import FestivalSection from "@/components/FestivalSection";
import GallerySection from "@/components/GallerySection";
import Hero from "@/components/Hero";
import Patnership from "@/components/Patnership";
import QuoteSection from "@/components/QuoteSection";
import SpeakersSection from "@/components/SpeakersSection";
import SponserSection from "@/components/SponserSection";
import VideoComponent from "@/components/VideoComponent";
import WhatToExpect from "@/components/WhatToExpect";
import WhatWeBring from "@/components/WhatWeBring";
import { slides } from "@/lib";

export default function Home() {
  return (
    <main>
      <Hero
        bgImage="/home/landing.jpg"
        overlayImage="/home/flower.png"
        subtitle="Welcome"
        title={
          <>
            Celebrating <br />
            life in
            <br />
            abundance
          </>
        }
      />
      <DiscriptionSection
        title="Our annual event is the largest South Asian gathering in North America. Held during the Summer in the heart of downtown Ottawa, this Annual Festival is open to the public and attracts crowds from diverse cultural backgrounds."
        showButton={true}
        buttonText="About"
        buttonLink="/about"
      />
      <VideoComponent
        videoUrl="https://www.youtube.com/watch?v=S_E5wYdhbxY&t"
        thumbnail="/home/video-1.jpg"
        showBackground={true}
        title="Virtual TD South Asian Festival"
        subtitle="Episode 2: Jalebi Baby"
      />
      <WhatToExpect />
      <SpeakersSection />
      <FestivalSection
        leftImage="/festival-left.jpg"
        bottomImage="/chidi.png"
        title={`TD Virtual \nSouthAsianFestival 2021`}
        description="In 2021, OSACA will conduct a virtual festival so that SAF can be held in a Covid safe manner. We believe this best reflects the values of OSACA to put the safety, health and well-being of the community and families first."
        buttonText="VSAF"
        buttonLink="/vsaf-2021"
        topBg="bg-[#dedbd4]"
        bottomBg="bg-gradient-to-r from-orange-500 via-orange-400 to-yellow-400"
        textColor="text-purple-600"
        buttonColor="border-purple-600 hover:bg-purple-600"
      />
      <GallerySection
        slides={slides}
        title="Gallery"
        fromColor="#641FDC"
        toColor="#946EE7"
        accentColor="#F3B500"
      />
      <WhatWeBring />
      <Details />
      <QuoteSection
        quote="“Hunsdeep Rangar invited me to participate in South Asian Fest, an event of which he was very proud. Later, he would invite me on his famous local Ottawa radio show. His purpose in all of these things was to bring the South Asian community together, introduce other Canadians to that community and to raise money for local charities.”"
        author="Pierre Poilievre, MP (Ontario)"
        gradientFrom="from-[#f5b100]"
        gradientTo="to-[#f97316]"
      />
      <SponserSection
        title={`Thank you to \nour wonderful \nsponsors`}
        buttonText="Become a sponsor"
        buttonLink="/sponsor"
        bottomImage="/chidi.png"
        sponsors={[
          {
            type: "image",
            image: "/sponsers/s3.png",
          },
          {
            type: "image",
            image: "/sponsers/s1.png",
          },
          {
            type: "image",
            image: "/sponsers/s2.png",
          },
        ]}
      />
      <Patnership />
      <section>
        <div className="w-full aspect-video sm:aspect-16/8 md:aspect-16/7 lg:aspect-16/6">
          <img src="im.jpg" alt="" className="w-full h-full object-cover" />
        </div>
      </section>
      <Footer />
    </main>
  );
}
