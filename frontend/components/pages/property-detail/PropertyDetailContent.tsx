import { BathroomIcon, BedroomIcon, CarIcon, LocationIcon, SizeIcon } from "@/components/icons/property";
import SpaceX from "@/components/layout/SpaceX";
import { PropertyData } from "@/types/property";
import ImagesLayout from "./ImagesLayout";
import PropertyMap from "./PropertyMap";
import ValueSection from "./ValueSection";

type PropertyDetailContentProps = {
  property: PropertyData;
};

const Characteristic = ({ icon, label, value }: { icon: React.ReactNode; label: string; value: string | number }) => (
  <div className="flex flex-col items-center text-center p-2">
    <span className="mb-5 [&_svg]:w-7 [&_svg]:h-7 xl:[&_svg]:w-9 xl:[&_svg]:h-9">{icon}</span>
    <span className="text-sm xl:text-base font-bold uppercase tracking-wider text-black/70 mb-1">{label}</span>
    <span className="text-base xl:text-lg font-bold text-black/80">{value}</span>
  </div>
);

const PropertyDetailContent = ({ property }: PropertyDetailContentProps) => {
  return (
    <SpaceX className="pt-[8rem] xl:pt-[10rem] pb-[5rem] xl:pb-[8rem] bg-soft-gray/5">
      <ImagesLayout
        mainImage={property.mainImage}
        images={property.images}
      />

      <div className="grid grid-cols-12 gap-0 lg:gap-4">
        <div className="col-span-12 lg:col-span-8">
          <div className="mb-8 xl:mb-10">
            <div className="flex flex-wrap items-center gap-3 xl:gap-4 mb-4 xl:mb-6">
              <span className="bg-primary text-soft-white text-xs xl:text-sm font-black tracking-widest px-4 xl:px-6 py-2 rounded-xs uppercase shadow-s2">
                {property.type === "ventas" ? "venta" : "alquiler"}
              </span>
              <span className="bg-secondary text-black text-xs xl:text-sm font-black tracking-widest px-4 xl:px-6 py-2 rounded-xs uppercase shadow-s2">
                {property.category}
              </span>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold text-black tracking-tight mb-3 xl:mb-4 leading-[2.2rem] md:leading-[3rem] ">
              {property.name}
            </h1>
            <p className="text-lg xl:text-xl text-black flex items-center gap-1">
              <LocationIcon className="w-6 h-6 xl:w-7 xl:h-7" />
              {property.fullLocation}
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-5 xl:p-8 bg-soft-white shadow-s3 rounded-xs mb-10 xl:mb-14">
            <Characteristic icon={<BedroomIcon className="fill-black" />} label="Dormitorios" value={property.characteristics.bedrooms} />
            <Characteristic icon={<BathroomIcon className="fill-black" />} label="Baños" value={property.characteristics.bathrooms} />
            <Characteristic icon={<SizeIcon className="stroke-black" />} label="Superficie" value={`${property.characteristics.squareMeters} m²`} />
            <Characteristic icon={<CarIcon className="fill-black" />} label="Cochera" value={property.characteristics.garage ? "Sí" : "No"} />
          </div>

          <div className="flex flex-col gap-10 xl:gap-14">
            <div className="space-y-6 xl:space-y-8">
              <h2 className="text-xl xl:text-2xl font-bold text-black border-b border-b-soft-gray/30 pb-2 xl:pb-4">
                Descripción
              </h2>
              <div className="text-base xl:text-lg text-black/80 leading-relaxed">
                <p className="whitespace-pre-line">
                  {property.description}
                </p>
              </div>
            </div>

            <div className="space-y-6 xl:space-y-8">
              <h2 className="text-xl xl:text-2xl font-bold text-black border-b border-b-soft-gray/30 pb-2 xl:pb-4">
                Ubicación
              </h2>
              <PropertyMap fullLocation={property.fullLocation} />
            </div>
          </div>
        </div>

        <ValueSection
          price={property.price}
          propertyName={property.name}
          fullLocation={property.fullLocation}
        />
      </div>
    </SpaceX>
  );
};

export default PropertyDetailContent;