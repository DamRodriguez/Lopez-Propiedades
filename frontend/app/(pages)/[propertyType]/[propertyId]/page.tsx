import { notFound } from "next/navigation";
// import rentalsProperties from "@/data/rentalsProperties.json";
import salesProperties from "@/data/salesProperties.json";
import { PropertyType } from "@/types/property";

interface PropertyPageProps {
  params: Promise<{
    propertyType: string;
    propertyId: string;
  }>;
}

export async function generateStaticParams() {
  {/*
    const rentalParams = rentalsProperties.map((prop) => ({
    propertyType: "alquileres" as PropertyType,
    propertyId: prop.id.toString(),
  }));
  */}

  const salesParams = salesProperties.map((prop) => ({
    propertyType: "ventas" as PropertyType,
    propertyId: prop.id.toString(),
  }));

  // return [...rentalParams, ...salesParams];
  return [...salesParams];
}

export default async function PropertyDetailPage({ params }: PropertyPageProps) {
  const { propertyType, propertyId } = await params;

  const validTypes = ["venta", "alquiler"];
  if (!validTypes.includes(propertyType)) {
    notFound();
  }

  return (
    <div>
      <p>
        {propertyType}
      </p>
      <p>
        {propertyId}
      </p>
    </div>
  );
}