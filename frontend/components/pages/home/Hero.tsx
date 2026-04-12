import { WhatsAppIcon } from "@/components/icons/social";
import SpaceX from "@/components/layout/SpaceX";
import LinkButton from "@/components/ui/buttons/LinkButton";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="relative h-dvh flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          fill
          src="/images/home/hero.png"
          alt="Luxury modern villa"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50"></div>
      </div>
      <SpaceX className="relative z-10 w-full text-white">
        <div className="max-w-[45rem] flex flex-col gap-[2rem] xl:gap-[3rem]">
          <div className="flex flex-col gap-[1rem]">
            <span className="text-base text-secondary text-shadow-md font-extrabold">
              EXCLUSIVIDAD &amp; PRESTIGIO
            </span>
            <h1 className="text-5xl xl:text-7xl text-soft-white font-extrabold text-shadow-md leading-[3.5rem] xl:leading-[5rem] ">
              Encuentra el hogar de tus sueños
            </h1>
          </div>
          <LinkButton
            href=""
            external
            big
          >
            <WhatsAppIcon className="fill-soft-white w-[1.5rem] h-[1.5rem] xl:w-[2rem] xl:h-[2rem] " />
            <p className="font-semibold">
              CONTACTAR POR WHATSAPP
            </p>
          </LinkButton>
        </div>
      </SpaceX>
    </div>
  );
};

export default Hero;