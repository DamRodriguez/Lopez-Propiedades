"use client";
import { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { WhatsAppIcon } from "@/components/icons/social";
import SpaceX from "@/components/layout/SpaceX";
import LinkButton from "@/components/ui/buttons/LinkButton";
import Image from "next/image";
import config from "@/config/config";

const HomeHero = () => {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const smoothScroll = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const yImage = useTransform(smoothScroll, [0, 1], ["0%", "15%"]);
  const scaleImage = useTransform(smoothScroll, [0, 1], [1.1, 1.25]);
  const yText = useTransform(smoothScroll, [0, 1], ["0%", "-15%"]);

  return (
    <div
      ref={containerRef}
      className="relative h-dvh flex items-center justify-center overflow-hidden"
    >
      <motion.div
        style={{
          y: yImage,
          scale: scaleImage,
          transformOrigin: "center center",
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
          <div className="flex flex-col gap-[1rem]">
            <span className="text-base text-secondary-light text-shadow-sm font-extrabold uppercase">
              Exclusividad & Prestigio
            </span>
            <h1 className="text-5xl xl:text-7xl text-soft-white font-extrabold text-shadow-sm leading-[3.5rem] xl:leading-[5rem]">
              Encuentra el hogar de tus sueños
            </h1>
          </div>

          <LinkButton
            href={config.urls.whatsApp}
            external
            big
          >
            <WhatsAppIcon />
            <span className="font-semibold text-white">CONTACTAR POR WHATSAPP</span>
          </LinkButton>
        </motion.div>
      </SpaceX>
    </div>
  );
};

export default HomeHero;