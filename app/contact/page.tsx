import Footer from "@/components/ContactFooter";
import Hero from "@/components/Hero";
const page = () => {
  return (
    <div>
      <Hero
        bgImage="/landing-page/contact.webp"
        overlayImage="/vsaf/contact2.png"
        subtitle="Contact"
        title={
          <>
           Get in <br />
           touch
            <br />
          </>
        }
      />
      <Footer />
    </div>
  );
};

export default page;
