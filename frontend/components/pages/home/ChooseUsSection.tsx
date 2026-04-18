import { CheckIcon, MarketingIcon, MedalIcon, UserPinIcon } from "@/components/icons/chooseUs";
import SpaceX from "@/components/layout/SpaceX";
import MotionSlide from "@/components/motion/MotionSlide";
import Title from "@/components/other/Title";
import Image from "next/image";

const ChooseUsSection = () => {
  const items = [
    {
      icon: <CheckIcon />,
      title: "Confianza",
      description: "Más de 20 años construyendo relaciones basadas en la honestidad y la transparencia total"
    },
    {
      icon: <MedalIcon />,
      title: "Experiencia",
      description: "Expertos en el mercado inmobiliario de alta gama con un historial comprobado de éxito."
    },
    {
      icon: <UserPinIcon />,
      title: "Atención Personal",
      description: "Cada cliente es único. Diseñamos estrategias a medida para cumplir tus objetivos específicos."
    },
    {
      icon: <MarketingIcon />,
      title: "Marketing Digital",
      description: "Exposición máxima con fotografía profesional y posicionamiento en los principales portales."
    }
  ]

  return (
    <SpaceX className="relative group text-center flex flex-col gap-10 xl:gap-16 bg-gradient-to-r from-secondary-dark to-primary py-[5rem] xl:py-[8rem] overflow-hidden">

      <div
        className="absolute inset-0 z-0"
        style={{
          clipPath: "polygon(50% 0, 100% 0, 100% 100%, 45% 100%)"
        }}
      >
        <Image
          fill
          src="/images/home/hero.png"
          alt="Background"
          className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 custom-transition-all"
        />
        <div className="absolute inset-0 bg-primary-light/80" />
      </div>

      <div className="relative z-10 flex flex-col gap-10 xl:gap-14">
        <Title
          title="Por qué elegirnos"
          titleClassName="text-soft-white"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-10 xl:gap-16">
          {items.map((item, index) => (
            <MotionSlide direction="down" key={index} className="flex flex-col items-center">
              <div className="w-14 h-14 xl:w-16 xl:h-16 rounded-full bg-white shadow-sm flex items-center justify-center text-black mb-4 xl:mb-6">
                {item.icon}
              </div>
              <p className="text-lg xl:text-xl font-bold mb-2 xl:mb-3 text-soft-white">
                {item.title}
              </p>
              <p className="text-xs xl:text-sm w-1/2 xl:w-full text-soft-white/90">
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