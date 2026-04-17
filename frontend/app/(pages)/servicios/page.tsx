import { CheckIcon } from "@/components/icons/rentalsPage";
import SpaceX from "@/components/layout/SpaceX";
import ActionFullSection from "@/components/pages/common/ActionFullSection";
import Image from "next/image";

const ServicesPage = () => {
  const marketingItems = ["Tasaciones Judiciales", "Tasaciones", "Sucesiones y Divorcios", "Despidos y accidentes laborales", "Revisión de documentos", "Derecho civil y comercial", "Operaciones Inmobiliarias", "Administración de Alquileres", "Gestión integral de escrituras"]

  return (
    <section>
      <SpaceX className="pt-[8rem] xl:pt-[10rem] pb-[5rem] xl:pb-[8rem]">
        <div className="mb-16 lg:mb-20">
          <span className="uppercase tracking-widest text-secondary-dark font-semibold text-sm xl:text-base mb-2 block">
            Excelencia Inmobiliaria
          </span>
          <h1 className="text-5xl xl:text-7xl text-black font-extrabold leading-[3.2rem] xl:leading-[4.5rem] mb-4">
            Nuestros Servicios
            <br />
            <span className="text-primary-light/70">
              Soluciones a medida
            </span>
          </h1>
          <p className="text-lg lg:text-xl max-w-2xl leading-relaxed text-black/80">
            Brindamos un servicio inmobiliario integral, combinando experiencia en el mercado con estrategias de comercialización para lograr resultados concretos.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          <div className="lg:col-span-8 group relative overflow-hidden rounded-xs group">
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
          </div>

          <div className="lg:col-span-4 bg-white shadow-s3 p-8 lg:p-10 rounded-xs flex flex-col justify-center">
            <h2 className="text-xl xl:text-3xl font-bold text-black mb-4">
              Alquileres
            </h2>
            <p className="text-black/90 text-sm xl:text-base leading-relaxed">
              Gestionamos alquileres de forma eficiente y segura. Nos ocupamos de la publicación, evaluación de inquilinos, contratos y seguimiento, brindando tranquilidad tanto a propietarios como a inquilinos.
            </p>
          </div>

          <div className="lg:col-span-6 bg-gradient-to-r from-primary to-primary-light rounded-xs flex flex-col lg:flex-row gap-8 items-center group">
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
          </div>

          <div className="lg:col-span-6 bg-white shadow-s3 p-8 lg:p-10 rounded-xs flex flex-col justify-center">
            <h2 className="text-xl xl:text-3xl font-bold text-black mb-4">
              Tasaciones Profesionales
            </h2>
            <p className="text-black/90 text-sm xl:text-base leading-relaxed">
              Realizamos Tasaciones precisas basadas en análisis de mercado, ubicación y características del inmueble. Asegurando valores reales.
            </p>
          </div>

          <div className="relative group overflow-hidden lg:col-span-12 bg-gradient-to-t from-primary to-primary-light shadow-s3 p-8 lg:p-10 rounded-xs flex flex-col justify-center min-h-[20rem] ">
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
              <p className="text-soft-white/90 text-sm xl:text-base leading-relaxed mb-6 max-w-3xl">
                Potenciamos cada propiedad con estrategias de marketing digital. Publicaciones en portales, redes sociales y contenido visual de calidad para lograr mayor alcance y mejores resultados.
              </p>
              <div className="flex flex-col md:flex-row flex-wrap gap-4 xl:gap-y-4 xl:gap-x-6 max-w-5xl">
                {marketingItems.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-2"
                  >
                    <CheckIcon className="stroke-soft-white/90" />
                    <p
                      className="text-soft-white/90 text-sm"
                    >
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
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