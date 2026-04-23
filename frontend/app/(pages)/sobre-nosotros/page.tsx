import SpaceX from "@/components/layout/SpaceX";
import HistorySection from "@/components/pages/about-us/HistorySection";
import TeamSection from "@/components/pages/about-us/TeamSection";
import ActionFullSection from "@/components/pages/common/ActionFullSection";
import Hero from "@/components/pages/common/Hero";

const AboutUsPage = () => {
  return (
    <section className="flex flex-col gap-[5rem] xl:gap-[8rem]">
      <Hero
        overline="una empresa familiar con raíces en el GBA Oeste"
        title="Nuestra Historia"
        backgroundImage="/images/about-us/hero.jpg"
      />
      <SpaceX className="flex flex-col gap-[5rem] xl:gap-[8rem]">
        <HistorySection />
        <TeamSection />
      </SpaceX>
      <ActionFullSection
        title="¿Querés hablar con alguien que conoce la zona hace 30 años?"
        subtitle="Consultá sin cargo. Sin formularios interminables. Solo escribinos y hablamos."
        buttonText="Hablar con un asesor"
        whatsAppMessage="Hola! Quisiera realizar una consulta. Muchas gracias."
      />
    </section>
  );
};

export default AboutUsPage;