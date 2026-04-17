import { StarsIcon, TrustIcon } from '@/components/icons/aboutUs';

const HistorySection = () => {
  return (
    <div className="grid grid-cols-1 xl:grid-cols-12 gap-10 xl:gap-16 items-end">
      <div className="xl:col-span-5 text-center md:text-start">
        <h2 className="text-3xl xl:text-4xl font-bold text-black mb-8 leading-[2.4rem] xl:leading-[2.8rem]">
          Somos una inmobiliaria con historia y raíces familiares
        </h2>
        <div className="space-y-4 xl:space-y-6 leading-relaxed text-base xl:text-lg max-w-2xl">
          <p>
            Fundada por Gabriel Lopez en 1994, abogado y martillero público en la UBA, con más de 30 años de experiencia en el rubro. MN. 2054.
          </p>
          <p>
            Contamos con respaldo jurídico profesional, ofreciendo un asesoramiento integral y confiable en cada operación.
          </p>
          <p>
            Hoy continuamos su legado con una mirada renovada, cercana e innovadora pero con los mismos valores de siempre: compromiso y confianza.
          </p>
        </div>
      </div>
      <div className="xl:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-6 xl:gap-8 text-center md:text-start">
        <div className="bg-white p-6 xl:p-10 rounded-xs shadow-s3 flex flex-col justify-center items-center md:items-start gap-2 xl:gap-4">
          <StarsIcon className="fill-secondary-dark w-8 h-8 xl:w-12 xl:h-12" />
          <p className="text-lg xl:text-xl font-bold mt-1 xl:mt-2">
            Curaduría
          </p>
          <p className="text-md">
            No listamos propiedades; seleccionamos piezas arquitectónicas que representen un estilo de vida superior.
          </p>
        </div>
        <div className="bg-white p-6 xl:p-10 rounded-xs shadow-s3 md:mt-12 flex flex-col justify-center items-center md:items-start gap-2 xl:gap-4">
          <TrustIcon className="fill-secondary-dark w-8 h-8 xl:w-12 xl:h-12" />
          <p className="text-lg xl:text-xl font-bold mt-1 xl:mt-2">
            Confianza
          </p>
          <p className="text-md">
            La transparencia es nuestra piedra angular. Construimos relaciones que trascienden una simple transacción.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HistorySection;