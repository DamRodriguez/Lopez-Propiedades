import { CheckIcon } from "@/components/icons/rentalsPage";
import SpaceX from "@/components/layout/SpaceX";
import MotionSlide from "@/components/motion/MotionSlide";
import Image from "next/image";

const PropertiesSection = () => {
  const iconClassName = "w-[1rem] h-[1rem] xl:w-[1.5rem] xl:h-[1.5rem] stroke-black/80";

  return (
    <SpaceX className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10">

      <MotionSlide className="lg:col-span-7 flex flex-col justify-center bg-white p-12  rounded-xs shadow-s3">
        <h2 className="text-xl xl:text-3xl font-bold text-black mb-6">
          El Estándar Exclusivo
        </h2>
        <p className="leading-relaxed text-base xl:text-lg mb-6 text-black/80">
          En Lopez Propiedades, no solo listamos propiedades; curamos experiencias. Nuestra cartera de alquileres es estrictamente exclusiva, garantizando que cada residencia cumpla con nuestros rigurosos estándares de diseño, ubicación y mantenimiento.
        </p>
        <ul className="space-y-4 text-black/80 text-base">
          <li className="flex items-center gap-3">
            <div>
              <CheckIcon className={iconClassName} />
            </div>
            <span>Selección exhaustiva e informes de antecedentes de inquilinos</span>
          </li>
          <li className="flex items-center gap-3">
            <div>
              <CheckIcon className={iconClassName} />
            </div>
            <span>Fotografía arquitectónica profesional y puesta en escena</span>
          </li>
          <li className="flex items-center gap-3">
            <div>
              <CheckIcon className={iconClassName} />
            </div>
            <span>Gestión integral de contratos y supervisión legal</span>
          </li>
        </ul>
      </MotionSlide>

      <MotionSlide direction="right" className="lg:col-span-5 rounded-xs overflow-hidden h-full shadow-s3 aspect-square">
        <Image
          src="/images/rentals/house1.jpg"
          alt="Imágen de alquiler primera"
          width={400}
          height={400}
          className="w-full h-full object-cover hover:scale-110 custom-transition-all"
        />
      </MotionSlide>

      <MotionSlide direction="left" className="lg:col-span-4 rounded-xs overflow-hidden h-full shadow-s3 aspect-square">
        <Image
          src="/images/rentals/house2.jpg"
          alt="Imágen de alquiler segunda"
          width={400}
          height={400}
          className="w-full h-full object-cover hover:scale-110 custom-transition-all"
        />
      </MotionSlide>

      <MotionSlide direction="right" className="lg:col-span-8 bg-white p-12 rounded-xs flex flex-col justify-center shadow-s3">
        <h2 className="text-xl xl:text-3xl font-bold text-black mb-6">
          Valorización Estratégica de Activos
        </h2>
        <p className="leading-relaxed text-base xl:text-lg text-black/80">
          Tratamos su propiedad como un activo de alto rendimiento. Nuestro equipo de gestión se enfoca en la preservación del valor a largo plazo, asegurando que su inversión continúe apreciándose mientras genera rendimientos por alquiler de nivel premium. Desde el mantenimiento preventivo hasta la relación con el inquilino de nivel concierge, brindamos una experiencia sin preocupaciones para los propietarios.
        </p>
      </MotionSlide>

    </SpaceX>
  );
};

export default PropertiesSection;