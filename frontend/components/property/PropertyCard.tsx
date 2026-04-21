import Image from "next/image";
import { BathroomIcon, BedroomIcon, LocationIcon, SizeIcon } from "../icons/property";
import { PropertyData } from "@/types/property";
import clsx from "clsx";
import Link from "next/link";
import { routes } from "@/constants/routes";
import { formatMoney } from "@/utils/formatMoney";

type PropertyCardProps = {
  data: PropertyData;
  containerClassName?: string;
  infoContainerClassName?: string;
  imageContainerClassName?: string;
  showType?: boolean;
  hideSeparator?: boolean;
}

const PropertyCard = (props: PropertyCardProps) => {
  const data = props.data;

  return (
    <Link
      href={routes.propertyDetail(data.type, data.id)}
      className={clsx("flex flex-col gap-3 xl:gap-4 group cursor-pointer rounded-xs", props.containerClassName)}>
      <div className={clsx("relative rounded-xs overflow-hidden w-full h-full shadow-s6", props.imageContainerClassName)}>
        <Image
          fill
          src={data.mainImage}
          alt={`Imagen de ${data.name}`}
          className="w-full h-full object-cover custom-transition-all group-hover:scale-110 bg-soft-gray/10"
        />
        {props.showType && (
          <div className="absolute m-2 xl:m-4">
            <span className="bg-secondary-light shadow-s2 text-black text-xs font-bold tracking-widest px-3 py-1 rounded-xs uppercase">
              {data.type === "ventas" ? "venta" : "alquiler"}
            </span>
          </div>
        )}
      </div>
      <div className={clsx("flex flex-col gap-1 xl:gap-2", props.infoContainerClassName)}>
        <div className="flex flex-wrap items-center justify-between gap-2 xl:gap-4 w-full mb-1 xl:mb-2">
          <p className="text-lg xl:text-xl font-bold text-black truncate">
            {data.name}
          </p>
          <span className="shrink-0 whitespace-nowrap text-lg xl:text-xl font-extrabold text-black">
            {formatMoney(data.price)}{" "}
          </span>
        </div>
        <div className="flex items-center gap-1">
          <LocationIcon className="stroke-black" />
          <p className="text-sm xl:text-base text-black truncate">
            {data.location.neighborhood},{" "}{data.location.city}
          </p>
        </div>
        <div>
          {!props.hideSeparator && (
            <div className="h-[0.05rem] w-full bg-soft-gray/20 my-2" />
          )}
        </div>
        <div className="flex flex-wrap items-center gap-x-5 xl:gap-x-6 gap-y-3 text-xs xl:text-sm font-semibold text-black/80">
          <div className="flex items-center gap-1">
            <SizeIcon className="stroke-black/80" />
            <p>
              {data.characteristics.squareMeters} m²
            </p>
          </div>
          {data.characteristics.bedrooms && (
            <div className="flex items-center gap-1">
              <BedroomIcon className="fill-black/80" />
              <p>
                {data.characteristics.bedrooms} Dorm.
              </p>
            </div>
          )}
          {data.characteristics.bathrooms !== undefined && (
            <div className="flex items-center gap-1">
              <BathroomIcon className="fill-black/80" />
              <p>
                {data.characteristics.bathrooms}{" "}
                {data.characteristics.bathrooms > 1 ? "Baños" : "Baño"}
              </p>
            </div>
          )}
        </div>
      </div>
    </Link>
  );
};

export default PropertyCard;