import { notFound } from "next/navigation";

interface PropertyPageProps {
  params: Promise<{
    propertyType: string;
    propertyId: string;
  }>;
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