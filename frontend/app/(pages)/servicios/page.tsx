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
          <MotionOpacity order={1} className="uppercase tracking-widest text-primary/60 font-semibold text-xs xl:text-sm mb-2 block">
            Excelencia Inmobiliaria
          </MotionOpacity>
          <MotionSlide order={0}>
            <h1 className="text-4xl xl:text-6xl leading-[2.6rem] xl:leading-[4.5rem] text-black font-extrabold mb-4">
              Todo lo que necesitás para
              <br />
              <span className="text-primary-light/70">
                operar con seguridad
              </span>
            </h1>
          </MotionSlide>
          <MotionOpacity order={1}>
            <p className="text-base lg:text-lg max-w-2xl leading-relaxed text-black/80">
              Desde la tasación hasta la escritura, manejamos todo internamente. Sin derivar a terceros, sin costos ocultos, sin demoras. Una sola empresa que conoce tu caso de principio a fin
            </p>
          </MotionOpacity>
        </div>

        <MotionOpacity order={1} className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          <MotionSlide className="lg:col-span-8 group relative overflow-hidden rounded-xs group">
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-primary/80 z-10"></div>
            <Image
              src="/images/services/sales.png"
              alt="Imágen de venta de propiedades"
              sizes="(max-width: 768px) 100vw, 50vw"
              fill
              priority
              className="group-hover:scale-110 custom-transition-all object-cover"
            />
            <div className="relative z-20 h-[25rem] flex flex-col justify-end p-8 lg:p-10">
              <h2 className="text-xl xl:text-3xl font-bold text-soft-white mb-4">
                Venta de propiedades
              </h2>
              <p className="text-soft-white/90 max-w-lg text-sm xl:text-base leading-relaxed">
                Nos encargamos de todo: tasación, fotografía profesional, publicación en portales, negociación y cierre. Antes del primer contacto con compradores, nuestro equipo jurídico revisa la documentación completa - para que no aparezcan sorpresas cuando menos te lo esperás.
              </p>
            </div>
          </MotionSlide>

          <MotionSlide direction="right" className="lg:col-span-4 bg-white shadow-s3 p-8 lg:p-10 rounded-xs flex flex-col justify-center">
            <h2 className="text-xl xl:text-3xl font-bold text-black mb-4">
              Alquileres
            </h2>
            <p className="text-black/90 text-sm xl:text-base leading-relaxed">
              <span className="font-semibold">Para propietarios:</span> buscamos al inquilino correcto, redactamos el contrato y hacemos el seguimiento mensual. Tu propiedad, en orden y sin dolores de cabeza.
              <br /><br />
              <span className="font-semibold">Para inquilinos:</span> te encontramos una propiedad que se ajuste a lo que buscás y te acompañamos en cada trámite. Sin letra chica ni cláusulas raras.
            </p>
          </MotionSlide>

          <MotionSlide className="lg:col-span-6 bg-primary rounded-xs flex flex-col lg:flex-row gap-8 items-start group">
            <div className="p-8 lg:p-10">
              <h2 className="text-xl xl:text-3xl font-bold text-soft-white mb-4">
                Asesoramiento Jurídico
              </h2>
              <p className="text-soft-white/90 max-w-lg text-sm xl:text-base leading-relaxed">
                Contás con abogados propios especializados en derecho inmobiliario, civil y laboral. Revisamos contratos, resolvemos conflictos y prevenimos problemas antes de que ocurran. <span className="font-semibold">Sin honorarios separados: el asesoramiento jurídico está incluido en la operación.</span>
              </p>
            </div>
          </MotionSlide>

          <MotionSlide direction="right" className="lg:col-span-6 bg-white shadow-s3 p-8 lg:p-10 rounded-xs flex flex-col justify-center">
            <h2 className="text-xl xl:text-3xl font-bold text-black mb-4">
              Tasaciones Profesionales
            </h2>
            <p className="text-black/90 text-sm xl:text-base leading-relaxed">
              Tasación profesional en menos de 24 horas, realizada por un martillero público matriculado. No solo te decimos cuánto vale - te explicamos cómo posicionarla para atraer más compradores y mejores ofertas.
            </p>
          </MotionSlide>

          <MotionSlide className="lg:col-span-4 relative group overflow-hidden shadow-s3 p-8 lg:p-10 rounded-xs flex flex-col justify-center">
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-primary/80 z-10"></div>
            <Image
              src="/images/services/marketing.png"
              alt="Imágen de marketing digital"
              sizes="(max-width: 768px) 100vw, 50vw"
              fill
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
        buttonText="Consultar sin cargo"
        whatsAppMessage="Hola! Quisiera consultar por sus servicios. Muchas gracias."
      />
    </section>
  );
};

export default ServicesPage;