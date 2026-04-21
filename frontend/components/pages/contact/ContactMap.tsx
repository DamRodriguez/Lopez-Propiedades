"use client";
import { LocationIcon } from "@/components/icons/property";
import config from "@/config/config";

const ContactMap = () => {
  const location = config.info.address;
  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(location)}`;

  return (
    <div className="w-full">
      <div
        onClick={() => window.open(googleMapsUrl, '_blank')}
        className="relative w-full h-[30rem] xl:h-[40rem] overflow-hidden cursor-pointer shadow-s3 group"
      >
        <div className="absolute inset-0 bg-black/10 group-hover:bg-black/30 custom-transition-all z-10 flex flex-col justify-center items-center">
          <div className="bg-soft-white p-6 xl:p-10 shadow-s3 rounded-xs text-center flex flex-col items-center gap-2 xl:gap-4">
            <LocationIcon className="stroke-black w-7 h-7 xl:w-10 xl:h-10" />
            <div className="flex flex-col gap-1">
              <p className="font-semibold text-base xl:text-lg">
                Nuestra Oficina
              </p>
              <p className="text-sm xl:text-base text-black/80">
                {location}
              </p>
            </div>
          </div>
        </div>

        <iframe
          width="100%"
          height="100%"
          style={{ border: 0 }}
          loading="lazy"
          allowFullScreen
          referrerPolicy="no-referrer-when-downgrade"
          src={`https://maps.google.com/maps?q=${encodeURIComponent(location)}&t=&z=16&ie=UTF8&iwloc=near&output=embed`}
        />
      </div>
    </div>
  );
};

export default ContactMap;