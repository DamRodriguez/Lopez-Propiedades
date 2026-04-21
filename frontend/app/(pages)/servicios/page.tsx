import { CheckIcon } from "@/components/icons/rentalsPage";
import SpaceX from "@/components/layout/SpaceX";
import { MotionOpacity } from "@/components/motion/MotionOpacity";
import MotionSlide from "@/components/motion/MotionSlide";
import ActionFullSection from "@/components/pages/common/ActionFullSection";
import Image from "next/image";

const ServicesPage = () => {
  const marketingItems = ["Tasaciones Judiciales", "Tasaciones", "Sucesiones y Divorcios", "Despidos y accidentes laborales", "Revisión de documentos", "Derecho civil y comercial", "Operaciones Inmobiliarias", "Administración de Alquileres", "Gestión integral de escrituras"]

  return (
    <section>
      <SpaceX className="flex flex-col pt-[8rem] xl:pt-[10rem] gap-[5rem] xl:gap-[8rem] pb-[5rem] xl:pb-[8rem]">
        <div className="">
          <MotionOpacity order={1} className="uppercase tracking-widest text-primary/60 font-semibold text-sm xl:text-base mb-2 block">
            Excelencia Inmobiliaria
          </MotionOpacity>
          <MotionSlide order={0}>
            <h1 className="text-5xl xl:text-7xl text-black font-extrabold leading-[3.2rem] xl:leading-[4.5rem] mb-4">
              Nuestros Servicios
              <br />
              <span className="text-primary-light/70">
                Soluciones a medida
              </span>
            </h1>
          </MotionSlide>
          <MotionOpacity order={1}>
            <p className="text-lg lg:text-xl max-w-2xl leading-relaxed text-black/80">
              Brindamos un servicio inmobiliario integral, combinando experiencia en el mercado con estrategias de comercialización para lograr resultados concretos.
            </p>
          </MotionOpacity>
        </div>

        <MotionOpacity order={1} className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          <MotionSlide className="lg:col-span-8 group relative overflow-hidden rounded-xs group">
            <div className="absolute inset-0 bg-gradient-to-t from-primary to-primary-light/50 z-10"></div>
            <Image
              fill
              alt="Ventas"
              src="https://picsum.photos/seed/v6/800/600"
              className="group-hover:scale-110 custom-transition-all"
            />
            <div className="relative z-20 h-[25rem] flex flex-col justify-end p-8 lg:p-10">
              <h2 className="text-xl xl:text-3xl font-bold text-soft-white mb-4">
                Venta de propiedades
              </h2>
              <p className="text-soft-white/90 max-w-lg text-sm xl:text-base leading-relaxed">
                Nos encargamos de todo el proceso de venta: Desde la Tasación inicial hasta el cierre de la operación. Diseñamos estrategias personalizadas para cada propiedad.
                Revisión de documentación y lo necesario para solucionar cualquier inconveniente jurídico que aparezca en  el inmueble.
              </p>
            </div>
          </MotionSlide>

          <MotionSlide direction="right" className="lg:col-span-4 bg-white shadow-s3 p-8 lg:p-10 rounded-xs flex flex-col justify-center">
            <h2 className="text-xl xl:text-3xl font-bold text-black mb-4">
              Alquileres
            </h2>
            <p className="text-black/90 text-sm xl:text-base leading-relaxed">
              Gestionamos alquileres de forma eficiente y segura. Nos ocupamos de la publicación, evaluación de inquilinos, contratos y seguimiento, brindando tranquilidad tanto a propietarios como a inquilinos.
            </p>
          </MotionSlide>

          <MotionSlide className="lg:col-span-6 bg-gradient-to-r from-primary to-primary-light rounded-xs flex flex-col lg:flex-row gap-8 items-start group">
            <div className="p-8 lg:p-10">
              <h2 className="text-xl xl:text-3xl font-bold text-soft-white mb-4">
                Asesoramiento Jurídico
              </h2>
              <p className="text-soft-white/90 max-w-lg text-sm xl:text-base leading-relaxed">
                Acompañamos a cada cliente en la toma de decisiones, ya sea para comprar, vender o invertir.
              </p>
            </div>
            <div className="w-full hidden 2xl:flex lg:w-1/3 h-full rounded-xs overflow-hidden grayscale opacity-50">
              <Image
                fill
                alt="Legal"
                className="w-full h-full object-cover group-hover:scale-110 custom-transition-all"
                src="https://picsum.photos/seed/v6/800/600"
              />
            </div>
          </MotionSlide>

          <MotionSlide direction="right" className="lg:col-span-6 bg-white shadow-s3 p-8 lg:p-10 rounded-xs flex flex-col justify-center">
            <h2 className="text-xl xl:text-3xl font-bold text-black mb-4">
              Tasaciones Profesionales
            </h2>
            <p className="text-black/90 text-sm xl:text-base leading-relaxed">
              Realizamos Tasaciones precisas basadas en análisis de mercado, ubicación y características del inmueble. Asegurando valores reales.
            </p>
          </MotionSlide>

          <MotionSlide className="lg:col-span-4 relative group overflow-hidden bg-gradient-to-t from-primary to-primary-light shadow-s3 p-8 lg:p-10 rounded-xs flex flex-col justify-center">
            <div className="absolute inset-0 bg-gradient-to-t from-primary to-primary/70 z-10"></div>
            <Image
              fill
              alt="Ventas"
              src="https://picsum.photos/seed/v6/800/600"
              className="group-hover:scale-110 custom-transition-all"
            />
            <div className="z-20">
              <h2 className="text-xl xl:text-3xl font-bold text-soft-white mb-4">
                Marketing Digital
              </h2>
              <p className="text-soft-white/90 text-sm xl:text-base leading-relaxed max-w-3xl">
                Potenciamos cada propiedad con estrategias de marketing digital. Publicaciones en portales, redes sociales y contenido visual de calidad para lograr mayor alcance y mejores resultados.
              </p>
            </div>
          </MotionSlide>

          <MotionSlide direction="right" className="lg:col-span-8 bg-white shadow-s3 p-8 lg:p-10 rounded-xs grid md:grid-cols-2 gap-y-2 gap-x-5">
            {marketingItems.map((item, index) => (
              <div
                key={index}
                className="flex items-center gap-2"
              >
                <div>
                  <CheckIcon className="stroke-black/80" />
                </div>
                <p
                  className="text-black/90 text-sm xl:text-base leading-relaxed"
                >
                  {item}
                </p>
              </div>
            ))}
          </MotionSlide>
        </MotionOpacity>
      </SpaceX>

      <ActionFullSection
        title="¿Por qué elegirnos?"
        subtitle="Porque combinamos experiencia inmobiliaria con respaldo juridico, cuidando tu propiedad y tus operaciones desde el primer contacto hasta el cierre. Contamos con 30 años de experiencia. Trabajamos de manera clara, profesional y personalizada, acompañandote en cada desicion."
        backgroundImage="/images/home/appraise.png"
        whatsAppMessage="Hola! Quisiera consultar por sus servicios. Muchas gracias."
      />
    </section>
  );
};

export default ServicesPage;