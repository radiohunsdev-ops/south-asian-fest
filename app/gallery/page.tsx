/* eslint-disable @next/next/no-img-element */
import GallerySection from "@/components/GallerySection";
import Hero from "@/components/Hero";
import PastEvents from "@/components/PastEvents";
import QuoteSection from "@/components/QuoteSection";
import SponserSection from "@/components/SponserSection";
import VideoComponent from "@/components/VideoComponent";
const slides = [
  {
    id: "1",
    images: [
      { id: "1", url: "/img/a1.jpg" },
      { id: "2", url: "/img/a2.jpg" },
      { id: "3", url: "/img/a3.jpg" },
      { id: "4", url: "/img/a4.jpg" },
      { id: "5", url: "/img/a5.jpg" },
    ],
  },
  {
    id: "2",
    images: [
      { id: "1", url: "/img/b1.jpg" },
      { id: "2", url: "/img/b2.jpg" },
      { id: "3", url: "/img/b3.jpg" },
      { id: "4", url: "/img/b4.jpg" },
      { id: "5", url: "/img/b5.jpg" },
    ],
  },
];

const page = () => {
  return (
    <div>
      <Hero
        bgImage="/landing-page/gallery.webp"
        overlayImage="/vsaf/im2.png"
        subtitle="Gallery"
        title={
          <>
            A look back at
            <br />
            those <br />
            memorable <br />
            moments
          </>
        }
      />
      <VideoComponent
        videoUrl="https://www.youtube.com/watch?v=S_E5wYdhbxY&t"
        thumbnail="/A.jpg"
        showBackground={true}
      />
      <PastEvents />

      <GallerySection
        slides={slides}
        title="Festival gallery"
        fromColor="#2CD1DF"
        toColor="#2CD1DF"
        accentColor="#9B79E9"
      />
      <QuoteSection
        quote="“SAF2019 was only possible by the countless hours of behind-the-scenes work by OSACA's TeamHuns support team.”"
        author="Bundeep Singh Rangar"
        gradientFrom="from-[#6522DC]"
        gradientTo="to-[#A78BEB]"
      />
      <SponserSection
        title={`Thank you to \nour wonderful \nsponsors`}
        buttonText="Find out more"
        buttonLink="/sponsors"
        bottomImage="/flowers/chidi.webp"
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
      <section>
        <div className="w-full h-62.5 sm:h-87.5 md:h-112.5 lg:h-150 xl:h-180">
          <img src="kk.jpg" alt="" className="w-full h-full object-cover" />
        </div>
      </section>
    </div>
  );
};

export default page;
