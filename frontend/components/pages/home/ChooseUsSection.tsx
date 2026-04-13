import { CheckIcon, MarketingIcon, MedalIcon, UserPinIcon } from "@/components/icons/chooseUs";
import SpaceX from "@/components/layout/SpaceX";
import Title from "@/components/other/Title";

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
    <SpaceX className="text-center flex flex-col gap-10 xl:gap-16 bg-gradient-to-b from-soft-gray/10 to-soft-gray/25 py-[5rem] xl:py-[8rem] ">
      <Title title="Por qué elegirnos" />
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-12">
        {items.map((item, index) => (
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 rounded-xl bg-soft-white shadow-sm flex items-center justify-center text-black mb-6">
              {item.icon}
            </div>
            <p className="text-lg xl:text-xl font-bold mb-3 text-black">
              {item.title}
            </p>
            <p className="text-xs xl:text-sm w-1/2 xl:w-full">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </SpaceX>
  );
};

export default ChooseUsSection;