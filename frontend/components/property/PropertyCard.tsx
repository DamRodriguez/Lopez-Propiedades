import Image from "next/image";
import { BathroomIcon, BedroomIcon, LocationIcon, RulerIcon } from "../icons/property";
import { PropertyData } from "@/types/property";
import clsx from "clsx";
import Link from "next/link";
import { routes } from "@/constants/routes";
import { formatMoney } from "@/utils/formatMoney";

type PropertyCardProps = {
  data: PropertyData;
  containerClassName?: string;
  infoContainerClassName?: string;
  showType?: boolean;
  hideSeparator?: boolean;
}

const PropertyCard = (props: PropertyCardProps) => {
  const data = props.data;

  return (
    <Link
      href={routes.propertyDetail(data.type, data.id)}
      className={clsx("flex flex-col gap-4 group cursor-pointer rounded-xl", props.containerClassName)}>
      <div className="relative rounded-xl overflow-hidden w-full h-full shadow-s6">
        <Image
          fill
          src={data.image}
          alt={`Imagen de ${data.name}`}
          className="w-full h-full object-cover custom-transition-all group-hover:scale-110"
        />
        {props.showType && (
          <div className="absolute m-4">
            <span className="bg-primary shadow-s2 text-soft-white text-xs font-bold tracking-widest px-3 py-1 rounded-xs uppercase">
              {data.type === "ventas" ? "Venta" : "Alquiler"}
            </span>
          </div>
        )}
      </div>
      <div className={clsx("flex flex-col gap-2", props.infoContainerClassName)}>
        <div className="flex items-center justify-between gap-4 w-full">
          <p className="text-lg xl:text-2xl font-bold text-black truncate">
            {data.name}
          </p>
          <span className="shrink-0 whitespace-nowrap text-lg xl:text-2xl font-extrabold text-black">
            {formatMoney(data.price)}{" "}{data.currency}
          </span>
        </div>
        <div className="flex items-center gap-1">
          <LocationIcon />
          <p className="text-sm xl:text-base">
            {data.location.neighborhood},{" "}{data.location.city}
          </p>
        </div>
        <div>
          {!props.hideSeparator && (
            <div className="h-[0.05rem] w-full bg-soft-gray/30 my-2" />
          )}
        </div>
        <div className="flex items-center gap-6 text-xs xl:text-sm font-semibold text-dark-gray">
          <div className="flex items-center gap-1">
            <RulerIcon />
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
              {data.characteristics.bathrooms} Baños
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default PropertyCard;