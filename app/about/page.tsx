import Footer from "@/components/ContactFooter";
import DiscriptionSection from "@/components/DiscriptionSection";
import FestivalSection from "@/components/FestivalSection";
import Hero from "@/components/Hero";
import PastEventsTimeline from "@/components/PastEventsTimeline";
import QuoteSection from "@/components/QuoteSection";
import VideoComponent from "@/components/VideoComponent";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About-South Asian Fest",
  description: "Our annual event is the largest South Asian gathering in North America. Held during the Summer in the heart of downtown Ottawa, this Annual Festival is open to the public and attracts crowds from diverse cultural backgrounds.",
};


const page = () => {
  return (
    <div>
      <Hero
        bgImage="/about/about-main.jpg"
        overlayImage="/about/about.png"
        subtitle="About Us"
        title={
          <>
            The largest <br />
            South Asian
            <br />
            gathering
          </>
        }
      />
      <DiscriptionSection
        title="Our Vision is to bring to the Canadian Mainstream, a quality oriented annual event that is reflective of the South Asian Diaspora, while growing in a sustainable manner."
        showButton={false}
      />
      <PastEventsTimeline />
      <VideoComponent
        videoUrl="https://www.youtube.com/watch?v=S_E5wYdhbxY&t"
        thumbnail="/A.jpg"
        showBackground={true}
        gradientFrom="#5F18DA"
        gradientVia="#814FE1"
        gradientTo="#AA92EB"
        title="2019 SAF Recap"
      />
      <FestivalSection
        leftImage="/bundeep.jpg"
        bottomImage="/chidi.png"
        title={`Community Profile`}
        description="The South Asian community in Ottawa is 75,000 strong. Extremely vibrant and affluent, South Asians are represented in professional ranks in the public and private sectors of the National Capital Region. South Asians make up the largest visible minority in Canada and their culture has a definite mainstream appeal with music, dance, arts, fashion and culinary delights among the favourites for all Canadians from coast to coast!"
        buttonText=""
        buttonLink=""
        topBg="bg-[#dedbd4]"
        bottomBg="bg-[#94E7ED]"
        textColor="text-purple-600"
        buttonColor="border-purple-600 hover:bg-purple-600"
      />
      <QuoteSection
        quote="“Huns was a champion of the South Asian community and the primary organizer of Ottawa's annual South Asian Fest. Huns was also a businessman, a public servant and the host of Mirch Masala Mix and Bhangra Nation on CHIN 97.9 FM. He had a deep passion for sharing South Asian culture and was always looking for new ways to put Ottawa on the map”"
        author="Bob Saroya"
        gradientFrom="from-[#631EDC]"
        gradientTo="to-[#A78CEB]"
      />
      <Footer />
    </div>
  );
};

export default page;
