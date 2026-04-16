import { notFound } from "next/navigation";
import rentalsPropertiesRaw from "@/data/rentalsProperties.json";
import salesPropertiesRaw from "@/data/salesProperties.json";
import { PropertyData, PropertyType } from "@/types/property";
import PropertyDetailContent from "@/components/pages/property-detail/PropertyDetailContent";

const rentalsProperties = rentalsPropertiesRaw as unknown as PropertyData[];
const salesProperties = salesPropertiesRaw as unknown as PropertyData[];

interface PropertyPageProps {
  params: Promise<{
    propertyType: string;
    propertyId: string;
  }>;
}

export async function generateStaticParams() {
  const rentalParams = rentalsProperties.map((prop) => ({
    propertyType: "alquileres",
    propertyId: prop.id.toString(),
  }));

  const salesParams = salesProperties.map((prop) => ({
    propertyType: "ventas",
    propertyId: prop.id.toString(),
  }));

  return [...rentalParams, ...salesParams];
}

export default async function PropertyDetailPage({ params }: PropertyPageProps) {
  const { propertyType, propertyId } = await params;

  const propertiesData =
    propertyType === "ventas" ? salesProperties :
      propertyType === "alquileres" ? rentalsProperties :
        null;

  if (!propertiesData) {
    notFound();
  }

  const property = propertiesData.find((p) => p.id.toString() === propertyId);

  if (!property) {
    notFound();
  }

  return (
    <>
      <PropertyDetailContent property={property} />
    </>
  );
}