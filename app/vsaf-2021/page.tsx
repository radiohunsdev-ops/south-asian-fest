import FestivalSection from "@/components/FestivalSection";
import FooterTalent from "@/components/FooterTalent";
import Hero from "@/components/Hero";
import NowLiveSection from "@/components/NowLiveSection";
import QuoteSection from "@/components/QuoteSection";
import SignupSection from "@/components/SignupSection";
import VideoComponent from "@/components/VideoComponent";

const page = () => {
  return (
    <div>
      <Hero
        bgImage="/vsaf/vsaf.jpg"
        overlayImage="/vsaf/im2.png"
        subtitle="VSAF 2021"
        title={
          <>
            Clear your <br />
            diary and
            <br />
            make an
            <br />
            event of it
          </>
        }
      />
      <NowLiveSection />
      <VideoComponent
        videoUrl="https://www.youtube.com/watch?v=S_E5wYdhbxY&t"
        thumbnail="/video/v2.png"
        showBackground={false}
        title="Episode 2: Jalebi Baby"
        subtitle="Virtual TD South Asian Festival"
      />
      <VideoComponent
        videoUrl="https://www.youtube.com/watch?v=S_E5wYdhbxY&t"
        thumbnail="/video/v1.png"
        showBackground={false}
        title="Episode 1: The Tribute"
        subtitle="Virtual TD South Asian Festival"
      />
      <SignupSection />
      <FestivalSection
        leftImage="/uu.jpg"
        bottomImage="/chidi.png"
        title={`Schedule`}
        description="This year’s festival will see online and radio competitions, with prizes for the best singing, dancing, music skills and art creations, among others. Judges include Ottawa community leaders and international luminaries."
        buttonText="Click to download schedule"
        buttonLink="/20210609-VSAF-Downloadable-Schedule-Placeholder-100.pdf"
        topBg="bg-[#ffffff]"
        bottomBg="bg-[#F58700]"
        textColor="text-purple-600"
        buttonColor="border-purple-600 hover:bg-purple-600"
      />
      <QuoteSection
        quote="“SAF 2019 was only possible by the countless hours of behind-the-scenes work by OSACA's TeamHuns support team.”"
        author="Bundeep Singh Rangar"
        gradientFrom="from-[#631EDC]"
        gradientTo="to-[#A78CEB]"
      />
      <FooterTalent/>
    </div>
  );
};

export default page;
