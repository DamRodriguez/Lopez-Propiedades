"use client";
import SpaceX from "@/components/layout/SpaceX";
import Image from "next/image";
import SearchBar from "@/components/pages/home/hero/SearchBar";

const HomeHero = () => {
  return (
    <section className="relative min-h-[100svh] w-full overflow-visible">
      <div
        className="absolute inset-0 [clip-path:inset(0_0_0_0)] pointer-events-none"
        style={{ zIndex: 0 }}
      >
        <div className="fixed inset-0 w-full h-[100lvh] transform-gpu">
          <Image
            fill
            src="/images/home/hero.png"
            alt="Encuentra el hogar de tus sueños - Lopez Propiedades"
            className="object-cover"
            priority
            sizes="100vw"
            quality={90}
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>
      </div>

      <div className="relative z-10 flex flex-col justify-center min-h-[100svh] py-20">
        <SpaceX className="w-full text-white">
          <div className="max-w-[45rem] flex flex-col gap-[1.5rem] xl:gap-[3rem]">
            <div className="flex flex-col gap-[0.5rem] xl:gap-[1rem]">
              <span className="text-sm xl:text-base text-secondary-light text-shadow-sm font-extrabold uppercase tracking-widest">
                Exclusividad & Prestigio
              </span>
              <h1 className="text-5xl xl:text-7xl text-soft-white font-extrabold text-shadow-sm leading-[3.5rem] xl:leading-[5rem]">
                Encuentra el hogar de tus sueños
              </h1>
            </div>
            <SearchBar />
          </div>
        </SpaceX>
      </div>
    </section>
  );
};

export default HomeHero;