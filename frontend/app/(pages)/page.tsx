import Hero from "@/components/pages/common/Hero";
import AppraiseProperty from "@/components/pages/home/AppraiseProperty";
import ChooseUsSection from "@/components/pages/home/ChooseUsSection";
import FeaturedProperties from "@/components/pages/home/FeaturedProperties";
import SearchBar from "@/components/pages/home/hero/SearchBar";

const HomePage = () => {
  return (
    <section className="flex flex-col gap-[5rem] xl:gap-[8rem] mb-[5rem] xl:mb-[8rem]">
      <Hero
        overline="30 años en el GBA Oeste ∙ Inmobiliaria + Estudio Jurídico"
        title="Vendé, comprá o alquilá con respaldo jurídico"
        subtitle="Somos la única inmobiliaria del GBA Oeste con estudio jurídico y notarial propio. Más de 30 años cuidando tu inversión, sin intermediarios y sin sorpresas."
        backgroundImage="/images/home/hero.jpg"
        underTitleComponent={<SearchBar />}
      />
      <FeaturedProperties />
      <ChooseUsSection />
      <AppraiseProperty />
    </section>
  );
};

export default HomePage;