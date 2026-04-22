"use client";
import Image from "next/image";
import SpaceX from "@/components/layout/SpaceX";
import { openWhatsApp } from "@/utils/openWhatsapp";
import { formatWpp } from "@/utils/formatWpp";
import config from "@/config/config";
import Button from "@/components/ui/buttons/Button";
import MotionFade from "@/components/motion/MotionFade";

const AppraiseProperty = () => {
  const handleAppraise = () => {
    const mensaje = "Hola! Quisiera solicitar una tasación con ustedes. ¿Qué información necesitan para comenzar? Muchas gracias.";
    openWhatsApp(formatWpp(config.info.whatsApp), mensaje);
  };

  return (
    <SpaceX className="mx-auto">
      <MotionFade className="relative rounded-xs p-8 xl:p-14 overflow-hidden shadow-s6 group min-h-[20rem] flex items-center">
        <Image
          src="/images/home/appraise.png"
          alt="Imágen de tasación de propiedades"
          sizes="(max-width: 768px) 100vw, 50vw"
          fill
          className="object-cover -z-20 group-hover:scale-110 custom-transition-all"
        />

        <div className="absolute inset-0 bg-gradient-to-b xl:bg-gradient-to-r from-primary via-primary/85 to-primary-light -z-10" />

        <div className="z-10 flex flex-col xl:flex-row items-center justify-between gap-10 w-full">
          <div className="text-soft-white w-full xl:w-3/5 space-y-4 text-center xl:text-start">
            <h3 className="text-3xl xl:text-4xl font-bold tracking-tight">
              ¿Querés tasar tu propiedad?
            </h3>
            <p className="text-base xl:text-lg text-soft-white/90 max-w-xl leading-relaxed">
              Realizamos tasaciones profesionales en el día para que conozcas el
              <span className="font-semibold text-soft-white">
                {" "}valor real{" "}
              </span>
              de tu inversión en el mercado actual.
            </p>
          </div>

          <Button
            onClick={handleAppraise}
            variant="secondary"
            big
            customUppercase
          >
            <p>
              Solicitar Tasación
            </p>
          </Button>
        </div>
      </MotionFade>
    </SpaceX>
  );
};

export default AppraiseProperty;