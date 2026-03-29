import ClientsGrid from "@/components/ClientsGrid";
import Hero from "@/components/Hero";
const page = () => {
  return (
    <div>
      <Hero
        bgImage="/landing-page/sponser.webp"
        overlayImage="/vsaf/im2.png"
        subtitle="Sponsors"
        title={
          <>
            The people <br />
            that make it
            <br />
            all possible
          </>
        }
      />
      <ClientsGrid/>
    </div>
  );
};

export default page;
