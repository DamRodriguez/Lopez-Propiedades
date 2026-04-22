import { CloseIcon, HamburgerIcon } from "@/components/icons/header";
import { InstagramIcon, WhatsAppIcon } from "@/components/icons/social";
import LinkButton from "@/components/ui/buttons/LinkButton";
import config from "@/config/config";

type RightSectionProps = {
  isMobileNavVisible: boolean;
  setIsMobileNavVisible: React.Dispatch<React.SetStateAction<boolean>>;
}

const RightSection = (props: RightSectionProps) => {
  return (
    <div className="flex items-center gap-[1rem]">
      <div className="flex items-center gap-[0.5rem] xl:gap-[1rem]">
        <LinkButton
          href={config.urls.whatsApp}
          external
          className="!rounded-full !px-4 xl:!px-5"
        >
          <WhatsAppIcon className="!w-5 !h-5 xl:!w-6 xl:!h-6" />
        </LinkButton>
        <LinkButton
          href={config.urls.instagram}
          external
          className="!rounded-full !px-4 xl:!px-5"
        >
          <InstagramIcon className="!w-5 !h-5 xl:!w-6 xl:!h-6" />
        </LinkButton>
      </div>
      <div className="flex xl:hidden">
        {props.isMobileNavVisible ? (
          <button
            onClick={() => { props.setIsMobileNavVisible(false); }}
            className="cursor-pointer"
            aria-label="Cerrar menú de navegación"
          >
            <CloseIcon className="fill-black" />
          </button>
        ) : (
          <button
            onClick={() => { props.setIsMobileNavVisible(true); }}
            className="cursor-pointer"
            aria-label="Abrir menú de navegación"
          >
            <HamburgerIcon className="fill-black" />
          </button>
        )}
      </div>
    </div>
  );
};

export default RightSection;