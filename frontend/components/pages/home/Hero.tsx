"use client";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { WhatsAppIcon } from "@/components/icons/social";
import SpaceX from "@/components/layout/SpaceX";
import LinkButton from "@/components/ui/buttons/LinkButton";
import Image from "next/image";

const Hero = () => {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const yImage = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);
  const scaleImage = useTransform(scrollYProgress, [0, 1], [1.1, 1.25]);

  const yText = useTransform(scrollYProgress, [0, 1], ["0%", "-10%"]);
  const opacityText = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <div
      ref={containerRef}
      className="relative h-dvh flex items-center justify-center overflow-hidden"
    >
      <motion.div
        style={{
          y: yImage,
          scale: scaleImage,
          transformOrigin: "center center"
        }}
        className="absolute inset-0 z-0"
      >
        <Image
          fill
          src="/images/home/hero.png"
          alt="Imagen de seccion hero de casa"
          className="w-full h-full object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50"></div>
      </motion.div>

      <SpaceX className="relative z-10 w-full text-white">
        <motion.div
          style={{ y: yText, opacity: opacityText }}
          className="max-w-[45rem] flex flex-col gap-[2rem] xl:gap-[3rem]"
        >
          <div className="flex flex-col gap-[1rem]">
            <span className="text-base text-secondary text-shadow-md font-extrabold uppercase">
              Exclusividad & Prestigio
            </span>
            <h1 className="text-5xl xl:text-7xl text-soft-white font-extrabold text-shadow-md leading-[3.5rem] xl:leading-[5rem]">
              Encuentra el hogar de tus sueños
            </h1>
          </div>

          <LinkButton
            href=""
            external
            big
          >
            <WhatsAppIcon className="fill-soft-white w-[1.5rem] h-[1.5rem] xl:w-[2rem] xl:h-[2rem]" />
            <p className="font-semibold">CONTACTAR POR WHATSAPP</p>
          </LinkButton>
        </motion.div>
      </SpaceX>
    </div>
  );
};

export default Hero;