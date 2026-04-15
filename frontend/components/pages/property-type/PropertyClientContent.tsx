"use client";
import { useState, useMemo, useEffect } from "react";
import { PropertyCategories, PropertyData } from "@/types/property";
import PropertyGrid from "@/components/pages/property-type/PropertyGrid";
import PropertyFilters, { LocationOption } from "@/components/pages/property-type/PropertyFilters";
import { useSearchParams } from "next/navigation";

interface PropertyClientContentProps {
  initialProperties: PropertyData[];
}

export default function PropertyClientContent({ initialProperties }: PropertyClientContentProps) {
  const searchParams = useSearchParams();
  const locationParamFilter = searchParams.get("locationFilter");
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

  const [locationFilter, setLocationFilter] = useState<LocationOption>(() => {
    if (locationParamFilter) {
      const match = locationOptions.find(
        (opt) => opt.name.toLowerCase() === locationParamFilter.toLowerCase()
      );
      if (match) return match;
    }
    return locationOptions[0];
  });

  useEffect(() => {
    if (locationParamFilter) {
      const match = locationOptions.find(
        (opt) => opt.name.toLowerCase() === locationParamFilter.toLowerCase()
      );
      if (match) {
        setLocationFilter(match);
        return;
      }
    }
    setLocationFilter(locationOptions[0]);
  }, [locationParamFilter, locationOptions]);

  const filteredProperties = useMemo(() => {
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
  }, [initialProperties, locationFilter, priceFilter, bedroomsFilter, categoryFilter]);

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

      <PropertyGrid properties={filteredProperties} />
    </div>
  );
}