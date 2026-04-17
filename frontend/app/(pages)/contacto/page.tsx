import SpaceX from "@/components/layout/SpaceX";
import ContactMap from "@/components/pages/contact/ContactMap";
import ContactSection from "@/components/pages/contact/ContactSection";

const ContactPage = () => {
  return (
    <section>
      <SpaceX className="flex flex-col pt-[8rem] xl:pt-[10rem] gap-[5rem] xl:gap-[8rem] pb-[5rem] xl:pb-[8rem]">
        <div className="">
          <span className="uppercase tracking-widest text-primary/60 font-semibold text-sm xl:text-base mb-2 block">
            Nuestra Trayectoria
          </span>
          <h1 className="text-5xl xl:text-7xl text-black font-extrabold leading-[3.2rem] xl:leading-[4.5rem] mb-4">
            Forjando Legados Inmobiliarios
            <br />
            <span className="text-primary-light/70">
              Soluciones a medida
            </span>
          </h1>
          <p className="text-lg lg:text-xl max-w-2xl leading-relaxed text-black/80">
            Desde hace más de tres décadas, Lopez Propiedades redefine el concepto de hogar. No solo gestionamos inmuebles; curamos experiencias de vida y aseguramos patrimonios con la solidez del diseño y la confianza mutua.
          </p>
        </div>

        <ContactSection />
      </SpaceX>
      <ContactMap />
    </section>
  );
};

export default ContactPage;