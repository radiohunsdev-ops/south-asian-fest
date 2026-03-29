import ContactCTA from "@/components/ContactCTA";
import FAQ from "@/components/FAQ";
import Hero from "@/components/Hero";

const page = () => {
  return (
    <div>
      <Hero
        bgImage="/vsaf/faq.jpg"
        overlayImage="/vsaf/im2.png"
        subtitle="FAQs"
        title={
          <>
            It is the <br />
            questions
            <br />
            we ask & the
            <br />
            journey we
            <br />
            take
          </>
        }
      />
      <FAQ/>
      <ContactCTA/>
    </div>
  );
};

export default page;
