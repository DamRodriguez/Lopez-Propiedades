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
      description: "Mas de 30 años de experiencia en el rubro  inmobiliario y de asesoramiento juridico integral."
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
    <SpaceX className="relative group text-center flex flex-col gap-10 xl:gap-16 bg-gradient-to-r from-secondary to-black/90 py-[5rem] xl:py-[8rem] overflow-hidden">

      <div
        className="absolute inset-0 z-0"
        style={{
          clipPath: "polygon(50% 0, 100% 0, 100% 100%, 45% 100%)"
        }}
      >
        <Image
          src="/images/home/hero.png"
          alt="Imágen de elegirnos"
          sizes="100vw"
          fill
          className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 custom-transition-all"
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>

      <div className="relative z-10 flex flex-col gap-10 xl:gap-14">
        <div className="flex flex-col gap-4 xl:gap-6">
          <Title
            title="¿Por qué elegirnos?"
            titleClassName="text-soft-white"
          />
          <MotionFade>
            <p className="text-soft-white text-base xl:text-lg max-w-3xl mx-auto font-medium">
              Buscamos combinar seguridad y  confianza a través de nuestros conocimientos. No solo somos una inmobiliaria, también un estudio jurídico notarial.
            </p>
          </MotionFade>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-3 gap-10 xl:gap-16">
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