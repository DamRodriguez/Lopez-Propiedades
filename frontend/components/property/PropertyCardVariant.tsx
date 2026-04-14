import { routes } from "@/constants/routes";
import { PropertyData } from "@/types/property";
import { formatMoney } from "@/utils/formatMoney";
import Image from "next/image";
import Link from "next/link";

type PropertyCardVariantProps = {
  data: PropertyData
}

const PropertyCardVariant = (props: PropertyCardVariantProps) => {
  const data = props.data;

  return (
    <Link
      href={routes.propertyDetail(data.type, data.id)}
      className="flex gap-4 group cursor-pointer">
      <div className="w-1/3 aspect-square rounded-xs overflow-hidden shadow-s6">
        <Image
          width={200}
          height={200}
          src={data.image}
          alt={`Imagen de ${data.name}`}
          className="w-full h-full object-cover custom-transition-all group-hover:scale-110"
        />
      </div>
      <div className="w-2/3 flex flex-col justify-center">
        <span className="text-[10px] font-bold text-secondary uppercase mb-1">
          {data.type === "ventas" ? "venta" : "alquiler"}
        </span>
        <h4 className="font-bold text-black mb-1">
          {data.name}
        </h4>
        <p className="text-xs text-on-surface-variant mb-2">
          {data.location.neighborhood},{" "}{data.location.city}
        </p>
        <p className="text-lg font-extrabold text-black">
          {formatMoney(data.price)}{" "} USD
          {data.type === "alquileres" && (
            <span
              className="text-xs">
              / mes
            </span>
          )}
        </p>
      </div>
    </Link>
  );
};

export default PropertyCardVariant;