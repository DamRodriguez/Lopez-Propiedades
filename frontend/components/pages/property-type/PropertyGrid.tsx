import { PropertyData } from "@/types/property";
import PropertyCard from "@/components/property/PropertyCard";

interface PropertyGridProps {
  properties: PropertyData[];
}

export default function PropertyGrid({ properties }: PropertyGridProps) {
  return (
    <div className="flex-grow">
      {properties.length !== 0 && (
        <div className="mb-8 text-center lg:text-start">
          <span className="text-on-surface-variant text-sm font-medium">
            Mostrando
            {" "}<span className="font-semibold">{properties.length}</span>{" "}
            {properties.length > 1 ? "propiedades" : "propiedad"}
          </span>
        </div>
      )}

      {properties.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {properties.map((property) => (
            <PropertyCard
              key={property.id}
              data={property}
              containerClassName="h-[25rem] xl:h-[30rem] bg-soft-white shadow-s3"
              infoContainerClassName="px-5 pb-5"
              imageContainerClassName="rounded-b-none"
            />
          ))}
        </div>
      ) : (
        <div className="text-center py-20 bg-soft-white rounded-xs shadow-s3">
          <h3 className="text-base xl:text-xl">No se encontraron resultados</h3>
        </div>
      )}
    </div>
  );
}