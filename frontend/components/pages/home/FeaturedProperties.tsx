import SpaceX from "@/components/layout/SpaceX";
import Image from "next/image";
import salesData from "@/data/salesProperties.json";
import rentalsData from "@/data/rentalsProperties.json";
import PropertyCard from "@/components/property/PropertyCard";
import PropertyCardVariant from "@/components/property/PropertyCardVariant";
import TitleWithUnderline from "@/components/other/TitleWithUnderline";
import { PropertyData } from "@/types/property";

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
    .slice(0, 3);

  if (!mainProperty && sideProperties.length === 0) return null;

  return (
    <SpaceX className="flex flex-col gap-[3rem]">

      <TitleWithUnderline title="Propiedades Destacadas" />

      <div className="grid grid-cols-1 xl:grid-cols-12 gap-10 xl:gap-8">
        {mainProperty && (
          <PropertyCard
            data={mainProperty}
            showType
            containerClassName="md:col-span-7 h-[30rem] xl:h-full"
          />
        )}

        <div className="xl:col-span-5 flex flex-col gap-8">
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