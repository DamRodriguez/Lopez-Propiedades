import AppraiseProperty from "@/components/pages/home/AppraiseProperty";
import ChooseUsSection from "@/components/pages/home/ChooseUsSection";
import FeaturedProperties from "@/components/pages/home/FeaturedProperties";
import HomeHero from "@/components/pages/home/HomeHero";

const HomePage = () => {
  return (
    <section className="flex flex-col gap-[5rem] xl:gap-[8rem] mb-[5rem] xl:mb-[8rem]">
      <HomeHero />
      <FeaturedProperties />
      <ChooseUsSection />
      <AppraiseProperty />
    </section>
  );
};

export default HomePage;