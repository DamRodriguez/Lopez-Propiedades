import { CheckIcon, MarketingIcon, MedalIcon, UserPinIcon } from "@/components/icons/chooseUs";
import SpaceX from "@/components/layout/SpaceX";
import MotionFade from "@/components/motion/MotionFade";
import MotionSlide from "@/components/motion/MotionSlide";
import Title from "@/components/other/Title";
import Image from "next/image";

const ChooseUsSection = () => {
  const items = [
    {
      icon: <MedalIcon />,
      title: "Experiencia",
      description: "30 años operando en el GBA Oeste. Conocemos cada barrio, cada precio, cada trámite. Fundados en 1994 por Gabriel Lopez, abogado y martillero público (UBA, MN. 2054)."
    },
    {
      icon: <UserPinIcon />,
      title: "Atención Personal",
      description: "Sin asistentes rotantes ni operadores. Hablás siempre con la misma persona, que conoce tu caso desde el primer contacto hasta la escritura."
    },
    {
      icon: <MarketingIcon />,
      title: "Marketing Digital",
      description: "Tu propiedad, donde están los compradores: Zonaprop, Argenprop, MercadoLibre, Instagram y Google. Con fotografía profesional incluida y estrategia de presentación pensada para generar más consultas."
    }
  ]

  return (
    <SpaceX className="relative group text-center flex flex-col gap-10 xl:gap-16 bg-primary/90 py-[5rem] xl:py-[8rem] overflow-hidden">

      <div
        className="absolute inset-0 z-0 xl:[clip-path:polygon(60%_0,100%_0,100%_100%,40%_100%)] [clip-path:polygon(80%_0,100%_0,100%_100%,20%_100%)]"
      >
        <Image
          src="/images/home/choose-us.jpg"
          alt="Imágen de elegirnos"
          sizes="100vw"
          fill
          className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 custom-transition-all"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/75 to-black/60" />
      </div>

      <div className="relative z-10 flex flex-col gap-10 xl:gap-14">
        <div className="flex flex-col gap-4 xl:gap-6">
          <Title
            title="¿Por qué elegirnos?"
            titleClassName="text-soft-white"
          />
          <MotionFade>
            <p className="text-soft-white/90 text-base xl:text-lg max-w-3xl mx-auto font-medium">
              En Lopez Propiedades no tercerizamos el aspecto legal: lo hacemos nosotros. Somos inmobiliaria y estudio jurídico notarial bajo el mismo techo. Eso te ahorra tiempo, dinero y la angustia de las sorpresas de último momento.
            </p>
          </MotionFade>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-3 gap-10 xl:gap-16">
          {items.map((item, index) => (
            <MotionSlide direction="down" key={index} className="flex flex-col items-center">
              <div className="w-14 h-14 xl:w-16 xl:h-16 rounded-full bg-secondary-light shadow-sm flex items-center justify-center text-black mb-4 xl:mb-6">
                {item.icon}
              </div>
              <p className="text-lg xl:text-xl font-bold mb-2 xl:mb-3 text-soft-white">
                {item.title}
              </p>
              <p className="text-sm xl:text-base md:w-1/2 xl:w-full text-soft-white/90">
                {item.description}
              </p>
            </MotionSlide>
          ))}
        </div>
      </div>
    </SpaceX>
  );
};

export default ChooseUsSection;