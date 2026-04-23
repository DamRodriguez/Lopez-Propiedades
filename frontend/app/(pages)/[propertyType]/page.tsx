import SpaceX from "@/components/layout/SpaceX";
import { MotionOpacity } from "@/components/motion/MotionOpacity";
import MotionSlide from "@/components/motion/MotionSlide";
import PropertyTypeContent from "@/components/pages/property-type/PropertyTypeContent";
import RentalsPage from "@/components/pages/property-type/rentals/RentalsPage";
import { propertiesService } from "@/supabase/services/properties";
import { PropertyRoute } from "@/types/property";

interface PageProps {
  params: Promise<{ propertyType: PropertyRoute }>;
}

export default async function PropertyTypePage({ params }: PageProps) {
  const { propertyType } = await params;

  const properties = await propertiesService.getAll();

  const pageTitle = propertyType === "ventas" ?
    "Propiedades en Venta"
    :
    "Propiedades en Alquiler";
  const pageDescription = propertyType === "ventas" ?
    "Descubra una curada selección de residencias de lujo y oportunidades de inversión en las zonas más privilegiadas de Buenos Aires."
    :
    "Descubre una selección editorial de residencias de lujo disponibles para alquiler a largo plazo. Espacios diseñados para una vida extraordinaria."

  return (
    <>
      {propertyType === "ventas" ? (
        <SpaceX className="pt-[8rem] xl:pt-[10rem] pb-[5rem] xl:pb-[8rem]">
          <div className="mb-16 lg:mb-20">
            <MotionOpacity order={1} className="uppercase tracking-widest text-primary/60 font-semibold text-xs mb-2 block">
              CATÁLOGO EXCLUSIVO
            </MotionOpacity>
            <MotionSlide order={0}>
              <h1 className="text-2xl xl:text-5xl font-extrabold text-black mb-4">
                {pageTitle}
              </h1>
            </MotionSlide>
            <MotionOpacity order={1}>
              <p className="max-w-2xl text-base xl:text-lg text-black/80">
                {pageDescription}
              </p>
            </MotionOpacity>
          </div>
          <MotionOpacity order={1}>
            <PropertyTypeContent initialProperties={properties} />
          </MotionOpacity>
        </SpaceX>
      ) : (
        <RentalsPage />
      )}
    </>
  );
}