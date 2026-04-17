"use client";
import { WhatsAppIcon } from "@/components/icons/social";
import Button from "@/components/ui/buttons/Button";
import config from "@/config/config";
import { formatMoney } from "@/utils/formatMoney";
import { formatWpp } from "@/utils/formatWpp";
import { openWhatsApp } from "@/utils/openWhatsapp";

type ValueSectionProps = {
  price: number;
  propertyName: string;
  fullLocation: string;
}

const ValueSection = ({ price, propertyName, fullLocation }: ValueSectionProps) => {
  const handleConsultation = () => {
    const mensaje = `Hola! Quisiera consultar por la propiedad "${propertyName}" ubicada en ${fullLocation}. Muchas gracias.`;
    openWhatsApp(formatWpp(config.info.whatsApp), mensaje);
  };

  return (
    <div className="col-span-12 lg:col-span-4 mt-10 lg:mt-0 text-center lg:text-start">
      <div className="sticky top-28 space-y-6">
        <div className="bg-white p-6 xl:p-8 rounded-xs shadow-s3">
          <div className="mb-8">
            <span className="text-xs xl:text-sm font-bold text-black tracking-widest uppercase">
              VALOR
            </span>
            <div className="mt-2">
              <span className="text-2xl xl:text-3xl font-extrabold text-primary">
                {formatMoney(price)}
              </span>
            </div>
          </div>

          <Button
            onClick={handleConsultation}
            big
            full
            customUppercase
          >
            <WhatsAppIcon />
            <p>
              Consultar
            </p>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ValueSection;