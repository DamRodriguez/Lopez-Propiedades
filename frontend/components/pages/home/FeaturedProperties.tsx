import SpaceX from "@/components/layout/SpaceX";
import salesData from "@/data/salesProperties.json";
import rentalsData from "@/data/rentalsProperties.json";
import PropertyCard from "@/components/property/PropertyCard";
import PropertyCardVariant from "@/components/property/PropertyCardVariant";
import { PropertyData } from "@/types/property";
import Title from "@/components/other/Title";

const FeaturedProperties = () => {
  const allProperties = [
    ...(salesData as PropertyData[]),
    ...(rentalsData as PropertyData[])
  ];

  const mainProperty = allProperties.find(
    (prop) => prop.isHomeFeatured?.main === true
  );

  const sideProperties = allProperties
    .filter(
      (prop) =>
        prop.isHomeFeatured?.side === true &&
        prop.id !== mainProperty?.id
    )
    .slice(0, 4);

  if (!mainProperty && sideProperties.length === 0) return null;

  return (
    <SpaceX className="flex flex-col gap-10 xl:gap-16">

      <Title
        title="Propiedades Destacadas"
        withUnderline
      />

      <div className="grid grid-cols-1 xl:grid-cols-12 gap-10 xl:gap-8">
        {mainProperty && (
          <PropertyCard
            data={mainProperty}
            showType
            containerClassName="md:col-span-8 h-[30rem] xl:h-full"
          />
        )}

        <div className="xl:col-span-4 flex flex-col gap-8">
          {sideProperties.map((prop) => (
            <PropertyCardVariant
              key={prop.id}
              data={prop}
            />
          ))}
        </div>
      </div>
    </SpaceX>
  );
};

export default FeaturedProperties;