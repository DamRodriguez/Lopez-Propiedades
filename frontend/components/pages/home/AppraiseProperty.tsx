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

        <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-primary/80 -z-10" />

        <div className="z-10 flex flex-col items-center gap-10 w-full">
          <div className="text-soft-white w-full space-y-4 text-center">
            <h3 className="flex flex-col text-3xl xl:text-4xl font-bold tracking-tight leading-[2.3rem] xl:leading-[3rem]">
              Sabé cuánto vale tu propiedad hoy
              <span>
                {" "}sin costo y sin compromiso
              </span>
            </h3>
            <p className="text-base xl:text-lg text-soft-white/90 max-w-xl leading-relaxed">
              Tasación profesional en menos de 24 horas, realizada por un martillero público matriculado. Solo el valor real de tu inmueble en el mercado actual - sin letra chica, sin presión de venta.
            </p>
          </div>

          <Button
            onClick={handleAppraise}
            variant="secondary"
            big
            customUppercase
          >
            <p>
              Quiero conocer el valor de mi propiedad
            </p>
          </Button>
        </div>
      </MotionFade>
    </SpaceX>
  );
};

export default AppraiseProperty;