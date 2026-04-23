import { StarsIcon, TrustIcon } from '@/components/icons/aboutUs';
import MotionFade from '@/components/motion/MotionFade';
import { MotionOpacity } from '@/components/motion/MotionOpacity';
import MotionSlide from '@/components/motion/MotionSlide';
import MotionStagger from '@/components/motion/MotionStagger';
import Image from 'next/image';

const HistorySection = () => {
  return (
    <div className="grid grid-cols-1 xl:grid-cols-12 gap-10 xl:gap-16 items-end">
      <div className="xl:col-span-5">
        <MotionSlide>
          <h2 className="text-3xl xl:text-4xl font-bold text-black mb-8 leading-[2.4rem] xl:leading-[2.8rem]">
            Somos una inmobiliaria con historia y raíces familiares
          </h2>
        </MotionSlide>
        <MotionOpacity className="space-y-4 xl:space-y-6 leading-relaxed text-base xl:text-lg max-w-2xl">
          <p>
            En 1994, Gabriel Lopez abrió esta inmobiliaria con una convicción: que vender o comprar una propiedad no debería ser un proceso lleno de incertidumbre legal. Abogado y martillero público recibido en la UBA (MN. 2054), Gabriel construyó una empresa donde el respaldo jurídico no es un extra - es parte del servicio desde el primer día.
            <br /><br />
            Hoy, sus hijos Agustín y Belén continúan ese legado. La misma dedicación de siempre, con una mirada más joven y herramientas más modernas. Seguimos siendo la misma inmobiliaria de barrio que conoce cada calle de Caseros - solo que ahora también usamos Instagram.
          </p>
        </MotionOpacity>
      </div>
      <MotionFade className="xl:col-span-7">
        <div className="relative overflow-hidden bg-white rounded-xs shadow-s3 aspect-video w-full">
          <Image
            src="/images/team/equipo.jpeg"
            alt="Imágen del equipo Lopez Propiedades"
            sizes="(max-width: 768px) 100vw, 50vw"
            fill
            className="object-cover hover:scale-110 custom-transition-all"
          />
        </div>
      </MotionFade>
    </div>
  );
};

export default HistorySection;