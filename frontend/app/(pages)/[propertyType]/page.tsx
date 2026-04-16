import SpaceX from "@/components/layout/SpaceX";
import PropertyClientContent from "@/components/pages/property-type/PropertyClientContent";
import RentalsPage from "@/components/pages/property-type/rentals/RentalsPage";
import rentalsProperties from "@/data/rentalsProperties.json";
import salesProperties from "@/data/salesProperties.json";
import { PropertyData, PropertyType } from "@/types/property";

interface PageProps {
  params: Promise<{ propertyType: PropertyType }>;
}

export async function generateStaticParams() {
  const types: PropertyType[] = ["ventas", "alquileres"];
  return types.map((type) => ({
    propertyType: type,
  }));
}

export default async function PropertyTypePage({ params }: PageProps) {
  const { propertyType } = await params;

  const propertiesData: PropertyData[] =
    propertyType === "ventas"
      ? (salesProperties as PropertyData[])
      : (rentalsProperties as PropertyData[]);

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
        <SpaceX className="flex-grow pt-[8rem] xl:pt-[10rem] pb-[5rem] xl:pb-[8rem] bg-soft-gray/5">
          <div className="mb-16 lg:mb-20">
            <span className="uppercase tracking-widest text-secondary-dark font-semibold text-xs mb-2 block">
              CATÁLOGO EXCLUSIVO
            </span>
            <h1 className="text-2xl xl:text-5xl font-extrabold text-primary mb-4">
              {pageTitle}
            </h1>
            <p className="max-w-2xl text-base xl:text-lg">
              {pageDescription}
            </p>
          </div>
          <PropertyClientContent initialProperties={propertiesData} />
        </SpaceX>
      ) : (
        <RentalsPage />
      )}
    </>
  );
}