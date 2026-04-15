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
              bgHover
              containerClassName="h-[25rem] xl:h-[30rem] bg-soft-white shadow-s3"
              infoContainerClassName="px-5 pb-5"
              imageContainerClassName="rounded-b-none"
            />
          ))}
        </div>
      ) : (
        <div className="flex-1 flex flex-col gap-4 xl:gap-6 items-center justify-center bg-soft-white rounded-xs shadow-s3 p-10 h-full">
          <p className="text-base xl:text-lg font-semibold text-black">
            No se encontraron resultados
          </p>
          <p className="text-black text-center max-w-md text-sm xl:text-base">
            No encontramos coincidencias para tu búsqueda actual.
            Intente modificar los filtros para ver más opciones.
          </p>
        </div>
      )}
    </div>
  );
}