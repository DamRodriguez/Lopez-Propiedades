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
  bgHover?: boolean;
}

const PropertyCard = (props: PropertyCardProps) => {
  const data = props.data;

  return (
    <Link
      href={routes.propertyDetail(data.type, data.id)}
      className={clsx("flex flex-col gap-4 group cursor-pointer rounded-xs", props.containerClassName, {
        "": props.bgHover
      })}>
      <div className={clsx("relative rounded-xs overflow-hidden w-full h-full shadow-s6", props.imageContainerClassName)}>
        <Image
          fill
          src={data.mainImage}
          alt={`Imagen de ${data.name}`}
          className="w-full h-full object-cover custom-transition-all group-hover:scale-110 bg-soft-gray/10"
        />
        {props.showType && (
          <div className="absolute m-4">
            <span className="bg-primary-light shadow-s2 text-soft-white text-xs font-bold tracking-widest px-3 py-1 rounded-xs uppercase">
              {data.type === "ventas" ? "Venta" : "Alquiler"}
            </span>
          </div>
        )}
      </div>
      <div className={clsx("flex flex-col gap-2", props.infoContainerClassName)}>
        <div className="flex flex-wrap items-center justify-between gap-4 w-full">
          <p className="text-lg xl:text-xl font-bold text-black truncate">
            {data.name}
          </p>
          <span className="shrink-0 whitespace-nowrap text-lg xl:text-xl font-extrabold text-black">
            {formatMoney(data.price)}{" "}
          </span>
        </div>
        <div className="flex items-center gap-1">
          <LocationIcon />
          <p className="text-sm xl:text-base text-dark-gray">
            {data.location.neighborhood},{" "}{data.location.city}
          </p>
        </div>
        <div>
          {!props.hideSeparator && (
            <div className="h-[0.05rem] w-full bg-soft-gray/20 my-2" />
          )}
        </div>
        <div className="flex flex-wrap items-center gap-x-6 gap-y-3 text-xs xl:text-sm font-semibold text-dark-gray">
          <div className="flex items-center gap-1">
            <SizeIcon />
            <p>
              {data.characteristics.squareMeters} m²
            </p>
          </div>
          <div className="flex items-center gap-1">
            <BedroomIcon />
            <p>
              {data.characteristics.bedrooms} Dorm.
            </p>
          </div>
          <div className="flex items-center gap-1">
            <BathroomIcon />
            <p>
              {data.characteristics.bathrooms}{" "}
              {data.characteristics.bathrooms > 1 ? "Baños" : "Baño"}
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default PropertyCard;