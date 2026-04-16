import Hero from "@/components/pages/common/Hero";
import AppraiseProperty from "@/components/pages/home/AppraiseProperty";
import ChooseUsSection from "@/components/pages/home/ChooseUsSection";
import FeaturedProperties from "@/components/pages/home/FeaturedProperties";
import SearchBar from "@/components/pages/home/hero/SearchBar";

const HomePage = () => {
  return (
    <section className="flex flex-col gap-[5rem] xl:gap-[8rem] mb-[5rem] xl:mb-[8rem]">
      <Hero
        overline="Exclusividad & Prestigio"
        title="Encuentra el hogar de tus sueños"
        backgroundImage="/images/home/hero.png"
        underTitleComponent={<SearchBar />}
      />
      <FeaturedProperties />
      <ChooseUsSection />
      <AppraiseProperty />
    </section>
  );
};

export default HomePage;