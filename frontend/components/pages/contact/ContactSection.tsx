import { CallIcon, EmailIcon, LocationIcon } from "@/components/icons/footer";
import { InstagramIcon } from "@/components/icons/social";
import MotionSlide from "@/components/motion/MotionSlide";
import config from "@/config/config";
import ContactForm from "@/features/contact/components/ContactForm";

const CONTACT_INFO = [
  {
    id: 1,
    title: "Sede Principal",
    content: <>{config.info.address}</>,
    icon: <LocationIcon className="stroke-black/90 w-6 h-6 xl:w-8 xl:h-8" />,
  },
  {
    id: 2,
    title: "Correo Electrónico",
    content: <>{config.info.email}</>,
    icon: <EmailIcon className="fill-black/90 w-6 h-6 xl:w-8 xl:h-8" />,
  },
  {
    id: 3,
    title: "Teléfonos",
    content: <>
      <p>{config.info.phone}</p>
      <p>{config.info.whatsApp} (WhatsApp)</p>
    </>,
    icon: <CallIcon className="stroke-black/90 w-6 h-6 xl:w-8 xl:h-8" />,
  },
  {
    id: 4,
    title: "Instagram",
    content: config.info.instagram,
    icon: <InstagramIcon className="stroke-black/90 w-6 h-6 xl:w-8 xl:h-8" />,
  },
];

const ContactSection = () => {
  return (
    <div className="grid grid-cols-1 xl:grid-cols-2 gap-16 items-center">
      <div className="space-y-12">
        <div>
          <span className="text-sm xl:text-base uppercase tracking-[0.05em] text-primary/60 font-bold mb-2 xl:mb-3 block">
            Contacto
          </span>
          <h2 className="text-3xl xl:text-5xl font-extrabold text-black leading-[2rem] xl:leading-[3rem] mb-4 xl:mb-6 tracking-tighter">
            Hablemos de su próximo paso
          </h2>
          <p className="text-base xl:text-lg text-black/80 max-w-md">
            Estamos aquí para asesorarle de forma personalizada. Elija el canal que prefiera para conectar con nosotros.
          </p>
        </div>

        <div className="space-y-6 xl:space-y-8">
          {CONTACT_INFO.map((item) => (
            <MotionSlide direction="down" key={item.id} className="flex items-center gap-4">
              <div className="p-4 xl:p-5 bg-secondary-light/80 flex items-center justify-center rounded-xs shadow-s3 shrink-0">
                {item.icon}
              </div>
              <div className="flex flex-col gap-1">
                <p className="font-bold text-black text-sm xl:text-base">
                  {item.title}
                </p>
                <div className="text-xs xl:text-sm text-black/80">
                  {item.content}
                </div>
              </div>
            </MotionSlide>
          ))}
        </div>
      </div>

      <MotionSlide direction="right">
        <ContactForm />
      </MotionSlide>
    </div>
  );
};

export default ContactSection;