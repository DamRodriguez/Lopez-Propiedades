"use client";
import { useState, useMemo, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { PropertyCategories, PropertyData } from "@/types/property";
import PropertyGrid from "@/components/pages/property-type/PropertyGrid";
import PropertyFilters, { LocationOption } from "@/components/pages/property-type/PropertyFilters";
import Spinner from "@/components/spinner/Spinner";

interface PropertyTypeContentProps {
  initialProperties: PropertyData[];
}

function PropertyContentInner({ initialProperties }: { initialProperties: PropertyData[] }) {
  const searchParams = useSearchParams();
  const locationParamFilter = searchParams.get("localidad");

  const initialPriceFilter = 3000000;
  const [priceFilter, setPriceFilter] = useState<number>(initialPriceFilter);
  const [bedroomsFilter, setBedroomsFilter] = useState<number>(0);
  const [categoryFilter, setCategoryFilter] = useState<PropertyCategories[]>([]);

  const locationOptions = useMemo(() => {
    const unique = new Set(initialProperties.map((p) => p.location.neighborhood));
    const options: LocationOption[] = Array.from(unique).sort().map((name) => ({
      id: name,
      name: name,
    }));
    return [{ id: "all", name: "Todas las ubicaciones" }, ...options];
  }, [initialProperties]);

  const [locationFilter, setLocationFilter] = useState<LocationOption>(locationOptions[0]);

  const isInvalidLocation = locationFilter.id === "not-found";

  useEffect(() => {
    if (locationParamFilter) {
      const match = locationOptions.find(
        (opt) => opt.name.toLowerCase() === locationParamFilter.toLowerCase()
      );

      if (match) {
        setLocationFilter(match);
      } else {
        setLocationFilter({ id: "not-found", name: locationParamFilter });
      }
    } else {
      setLocationFilter(locationOptions[0]);
    }
  }, [locationParamFilter, locationOptions]);

  const filteredProperties = useMemo(() => {
    if (isInvalidLocation) return [];

    return initialProperties.filter((property) => {
      const matchLocation =
        locationFilter.id === "all" ||
        property.location.neighborhood === locationFilter.name;

      const matchPrice = property.price <= priceFilter;
      const matchBedrooms = property.characteristics.bedrooms >= bedroomsFilter;
      const matchCategory =
        categoryFilter.length === 0 || categoryFilter.includes(property.category);

      return matchLocation && matchPrice && matchBedrooms && matchCategory;
    });
  }, [initialProperties, locationFilter, priceFilter, bedroomsFilter, categoryFilter, isInvalidLocation]);

  const handleCategoryChange = (category: PropertyCategories) => {
    setCategoryFilter((prev) =>
      prev.includes(category) ? prev.filter((c) => c !== category) : [...prev, category]
    );
  };

  const clearFilters = () => {
    setLocationFilter(locationOptions[0]);
    setPriceFilter(initialPriceFilter);
    setBedroomsFilter(0);
    setCategoryFilter([]);
  };

  return (
    <div className="flex flex-col lg:flex-row gap-4 lg:gap-12">
      <PropertyFilters
        locationOptions={locationOptions}
        locationFilter={locationFilter}
        setLocationFilter={setLocationFilter}
        priceFilter={priceFilter}
        setPriceFilter={setPriceFilter}
        bedroomsFilter={bedroomsFilter}
        setBedroomsFilter={setBedroomsFilter}
        categoryFilter={categoryFilter}
        handleCategoryChange={handleCategoryChange}
        clearFilters={clearFilters}
      />

      {isInvalidLocation ? (
        <div className="flex-1 flex flex-col gap-4 xl:gap-6 items-center justify-center bg-soft-white rounded-xs shadow-s3 p-10">
          <p className="text-base xl:text-lg font-semibold text-black">
            Ubicación no encontrada
          </p>
          <p className="text-black text-center max-w-md text-sm xl:text-base">
            No logramos encontrar propiedades en la zona de <span className="font-semibold text-dark-gray">"{locationFilter.name}"</span>.
            Por favor, seleccione otra ubicación desde los filtros.
          </p>
        </div>
      ) : (
        <PropertyGrid properties={filteredProperties} />
      )}
    </div>
  );
}

export default function PropertyTypeContent(props: PropertyTypeContentProps) {
  return (
    <Suspense
      fallback={
        <div className="min-h-dvh flex items-start justify-center">
          <Spinner size={40} color="#000" />
        </div>
      }>
      <PropertyContentInner {...props} />
    </Suspense>
  );
}