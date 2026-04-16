"use client";

interface PropertyMapProps {
  fullLocation: string;
}

const PropertyMap = ({ fullLocation }: PropertyMapProps) => {
  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(fullLocation)}`;

  return (
    <div className="w-full space-y-4">
      <div
        onClick={() => window.open(googleMapsUrl, '_blank')}
        className="relative w-full h-[20rem] xl:h-[30rem] rounded-xs overflow-hidden cursor-pointer group border border-black/5"
      >
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 custom-transition-all z-10 flex items-center justify-center">
          <div className="opacity-0 group-hover:opacity-100 bg-primary px-4 py-2 rounded-xs shadow-s3 custom-transition-all">
            <p className="text-sm font-semibold text-soft-white">
              Abrir ubicación
            </p>
          </div>
        </div>

        <iframe
          width="100%"
          height="100%"
          style={{ border: 0 }}
          loading="lazy"
          allowFullScreen
          referrerPolicy="no-referrer-when-downgrade"
          src={`https://maps.google.com/maps?q=${encodeURIComponent(fullLocation)}&t=&z=16&ie=UTF8&iwloc=near&output=embed`}
        />
      </div>
    </div>
  );
};

export default PropertyMap;