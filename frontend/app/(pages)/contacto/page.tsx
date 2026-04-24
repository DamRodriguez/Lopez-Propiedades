import SpaceX from "@/components/layout/SpaceX";
import { MotionOpacity } from "@/components/motion/MotionOpacity";
import MotionSlide from "@/components/motion/MotionSlide";
import ContactMap from "@/components/pages/contact/ContactMap";
import ContactSection from "@/components/pages/contact/ContactSection";

const ContactPage = () => {
  return (
    <section>
      <SpaceX className="flex flex-col pt-[8rem] xl:pt-[10rem] gap-[5rem] xl:gap-[8rem] pb-[5rem] xl:pb-[8rem]">
        <div className="">
          <MotionOpacity order={1} className="uppercase tracking-widest text-primary/60 font-semibold text-xs xl:text-sm mb-2 block">
            Nuestra Trayectoria
          </MotionOpacity>
          <MotionSlide order={0}>
            <h1 className="text-4xl xl:text-6xl leading-[2.6rem] xl:leading-[4.5rem] text-black font-extrabold mb-4">
              Forjando Legados Inmobiliarios
              <br />
              <span className="text-primary-light/70">
                Soluciones a medida
              </span>
            </h1>
          </MotionSlide>
          <MotionOpacity order={1}>
            <p className="text-base lg:text-lg max-w-2xl leading-relaxed text-black/80">
              Desde hace más de tres décadas, Lopez Propiedades redefine el concepto de hogar. No solo gestionamos inmuebles; curamos experiencias de vida y aseguramos patrimonios con la solidez del diseño y la confianza mutua.
            </p>
          </MotionOpacity>
        </div>

        <MotionOpacity order={1}>
          <ContactSection />
        </MotionOpacity>
      </SpaceX>
      <MotionSlide direction="down">
        <ContactMap />
      </MotionSlide>
    </section>
  );
};

export default ContactPage;