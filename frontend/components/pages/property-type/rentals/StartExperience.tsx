import { WhatsAppIcon } from "@/components/icons/social";
import SpaceX from "@/components/layout/SpaceX";
import LinkButton from "@/components/ui/buttons/LinkButton";
import Image from "next/image";

const StartExperience = () => {
  return (
    <SpaceX className="py-[5rem] xl:py-[8rem] bg-primary text-white flex justify-center overflow-hidden relative group">
      <div className="max-w-4xl flex flex-col justify-center items-center text-center z-10">
        <Image
          src="/images/home/appraise.png"
          alt="Tasación de propiedades"
          fill
          className="object-cover -z-20 group-hover:scale-110 custom-transition-all w-full h-full"
        />

        <div className="absolute inset-0 bg-gradient-to-b xl:bg-gradient-to-r from-primary via-primary/85 to-primary-light -z-10" />
        <h3 className="text-3xl xl:text-5xl text-soft-white font-extrabold mb-8">
          Comience su Experiencia de Alquiler
        </h3>
        <p className="text-base xl:text-xl text-soft-white/80 mb-12 font-light">
          Ya sea un propietario que busca gestión profesional o un inquilino en busca de un hogar excepcional, nuestro equipo está listo para asesorarlo en su próximo paso.
        </p>
        <LinkButton
          href=""
          variant="secondary"
          big
        >
          <WhatsAppIcon />
          <p className="font-bold tracking-wider text-sm xl:text-base uppercase">
            Contactar por WhatsApp
          </p>
        </LinkButton>
      </div>
    </SpaceX>
  );
};

export default StartExperience;