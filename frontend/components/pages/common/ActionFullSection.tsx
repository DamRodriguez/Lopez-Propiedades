"use client";
import { WhatsAppIcon } from "@/components/icons/social";
import SpaceX from "@/components/layout/SpaceX";
import MotionFade from "@/components/motion/MotionFade";
import Button from "@/components/ui/buttons/Button";
import config from "@/config/config";
import { formatWpp } from "@/utils/formatWpp";
import { openWhatsApp } from "@/utils/openWhatsapp";
import clsx from "clsx";
import Image from "next/image";

type ActionFullSectionProps = {
  title: string;
  subtitle?: string;
  backgroundImage: string;
  whatsAppMessage: string;
  overlayClassName?: string;
}

const ActionFullSection = (props: ActionFullSectionProps) => {
  const handleConsultation = () => {
    openWhatsApp(formatWpp(config.info.whatsApp), props.whatsAppMessage);
  };

  return (
    <SpaceX className="py-[5rem] xl:py-[8rem] bg-primary text-white flex justify-center overflow-hidden relative group top-1">
      <div className="max-w-4xl text-center z-10">
        <Image
          src={props.backgroundImage}
          alt={`Imagen de ${props.title}`}
          fill
          className="object-cover -z-20 group-hover:scale-110 custom-transition-all w-full h-full"
        />

        <div className={clsx("absolute inset-0 bg-gradient-to-t from-primary via-primary/85 to-primary-light -z-10", props.overlayClassName)} />
        <MotionFade className="flex flex-col justify-center items-center">
          <h3 className="text-3xl xl:text-5xl text-soft-white font-extrabold mb-8">
            {props.title}
          </h3>
          {props.subtitle && (
            <p className="text-base xl:text-xl text-soft-white/80 mb-12 font-light">
              {props.subtitle}
            </p>
          )}
          <Button
            onClick={handleConsultation}
            variant="secondary"
            big
            customUppercase
          >
            <WhatsAppIcon />
            <p>
              Contactar por WhatsApp
            </p>
          </Button>
        </MotionFade>
      </div>
    </SpaceX>
  );
};

export default ActionFullSection;