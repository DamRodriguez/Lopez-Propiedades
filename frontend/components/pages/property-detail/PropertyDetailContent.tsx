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
    <span className="mb-5 [&_svg]:w-6 [&_svg]:h-6 xl:[&_svg]:w-8 xl:[&_svg]:h-8">{icon}</span>
    <span className="text-sm xl:text-base font-bold uppercase tracking-wider text-black/60 mb-1">{label}</span>
    <span className="text-base xl:text-lg font-headline font-bold text-primary">{value}</span>
  </div>
);

const PropertyDetailContent = ({ property }: PropertyDetailContentProps) => {
  return (
    <SpaceX className="pt-[8rem] xl:pt-[10rem] pb-[5rem] xl:pb-[8rem] bg-soft-gray/5">
      <ImagesLayout
        mainImage={property.mainImage}
        images={property.images}
      />

      <div className="grid grid-cols-12 gap-8 lg:gap-4">
        <div className="col-span-12 lg:col-span-8">
          <div className="mb-8 xl:mb-10">
            <div className="flex flex-wrap items-center gap-4 mb-4 xl:mb-6">
              <span className="bg-primary text-soft-white text-xs xl:text-sm font-black tracking-widest px-4 xl:px-6 py-2 rounded-xs uppercase shadow-s2">
                {property.type === "ventas" ? "VENTA" : "ALQUILER"}
              </span>
              <span className="bg-secondary text-black text-xs xl:text-sm font-black tracking-widest px-4 xl:px-6 py-2 rounded-xs uppercase shadow-s2">
                {property.category}
              </span>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold text-black tracking-tight mb-4">
              {property.name}
            </h1>
            <p className="text-base xl:text-lg text-black flex items-center gap-2">
              <LocationIcon />
              {property.fullLocation}
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-8 bg-soft-white shadow-s3 rounded-xs mb-12">
            <Characteristic icon={<BedroomIcon />} label="Dormitorios" value={property.characteristics.bedrooms} />
            <Characteristic icon={<BathroomIcon />} label="Baños" value={property.characteristics.bathrooms} />
            <Characteristic icon={<SizeIcon />} label="Superficie" value={`${property.characteristics.squareMeters} m²`} />
            <Characteristic icon={<CarIcon />} label="Cochera" value={property.characteristics.garage ? "Sí" : "No"} />
          </div>

          <div className="flex flex-col gap-10 xl:gap-15">
            <div className="space-y-6 xl:space-y-8">
              <h2 className="text-xl xl:text-2xl font-bold text-black border-b border-b-soft-gray/30 pb-4">
                Descripción
              </h2>
              <div className="text-base xl:text-lg text-black/80 leading-relaxed">
                <p className="whitespace-pre-line">
                  {property.description}
                </p>
              </div>
            </div>

            <div className="space-y-6 xl:space-y-8">
              <h2 className="text-xl xl:text-2xl font-bold text-black border-b border-b-soft-gray/30 pb-4">
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