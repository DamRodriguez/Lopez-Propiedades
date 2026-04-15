"use client";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import SpaceX from "@/components/layout/SpaceX";
import Image from "next/image";
import SearchBar from "./SearchBar";

const HomeHero = () => {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const yImage = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const yText = useTransform(scrollYProgress, [0, 1], ["0%", "-20%"]);

  return (
    <div
      ref={containerRef}
      className="relative h-dvh flex items-center justify-center overflow-hidden"
    >
      <motion.div
        style={{
          y: yImage,
          willChange: "transform",
        }}
        className="absolute inset-0 z-0"
      >
        <Image
          fill
          src="/images/home/hero.png"
          alt="Encuentra el hogar de tus sueños - Lopez Propiedades"
          className="w-full h-full object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/50"></div>
      </motion.div>

      <SpaceX className="relative z-10 w-full text-white">
        <motion.div
          style={{
            y: yText,
            willChange: "transform"
          }}
          className="max-w-[45rem] flex flex-col gap-[2rem] xl:gap-[3rem]"
        >
          <div className="flex flex-col gap-[0.5rem] xl:gap-[1rem]">
            <span className="text-base text-secondary-light text-shadow-sm font-extrabold uppercase">
              Exclusividad & Prestigio
            </span>
            <h1 className="text-5xl xl:text-7xl text-soft-white font-extrabold text-shadow-sm leading-[3.5rem] xl:leading-[5rem]">
              Encuentra el hogar de tus sueños
            </h1>
          </div>
          <SearchBar />
        </motion.div>
      </SpaceX>
    </div >
  );
};

export default HomeHero;