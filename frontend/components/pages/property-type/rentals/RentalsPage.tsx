import Hero from "@/components/pages/common/Hero";
import PropertiesSection from "@/components/pages/property-type/rentals/PropertiesSection";
import ActionFullSection from "@/components/pages/common/ActionFullSection";

const RentalsPage = () => {
  return (
    <section className="flex flex-col gap-[5rem] xl:gap-[8rem]">
      <Hero
        overline="vida excepcional"
        title="Alquileres Curados para Estilos de Vida Exigentes"
        backgroundImage="/images/rentals/hero.webp"
        underTitleComponent={
          <p className="text-soft-white/80 text-base xl:text-lg">
            Experimentá nuestro exclusivo servicio de gestión de alquileres, donde la excelencia arquitectónica se une a transiciones de vida fluidas. Administramos solo las propiedades más prestigiosas de la región.
          </p>
        }
      />
      <PropertiesSection />
      <ActionFullSection
        title="Comenzá tu experiencia de Alquiler"
        subtitle="Ya seas un propietario que busca gestión profesional o un inquilino en busca de un hogar excepcional, nuestro equipo está listo para asesorarte en tu próximo paso"
        buttonText="Consultar por alquileres"
        whatsAppMessage="Hola! Quisiera consultar por un alquiler. Muchas gracias."
      />
    </section>
  );
};

export default RentalsPage;