import SpaceX from "@/components/layout/SpaceX";
import HistorySection from "@/components/pages/about-us/HistorySection";
import TeamSection from "@/components/pages/about-us/TeamSection";
import ActionFullSection from "@/components/pages/common/ActionFullSection";
import Hero from "@/components/pages/common/Hero";

const AboutUsPage = () => {
  return (
    <section className="flex flex-col gap-[5rem] xl:gap-[8rem]">
      <Hero
        overline="nuestra trayectoria"
        title="Nuestra Historia"
        backgroundImage="/images/home/hero.png"
      />
      <SpaceX className="flex flex-col gap-[5rem] xl:gap-[8rem]">
        <HistorySection />
        <TeamSection />
      </SpaceX>
      <ActionFullSection
        title="¿Listo para encontrar tu próximo Hogar?"
        backgroundImage="/images/home/appraise.png"
        whatsAppMessage="Hola! Quisiera realizar una consulta. Muchas gracias."
      />
    </section>
  );
};

export default AboutUsPage;