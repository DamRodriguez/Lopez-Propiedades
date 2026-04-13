import { CloseIcon, HamburgerIcon } from "@/components/icons/header";

type RightSectionProps = {
  isMobileNavVisible: boolean;
  setIsMobileNavVisible: React.Dispatch<React.SetStateAction<boolean>>;
}

const RightSection = (props: RightSectionProps) => {
  return (
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
  );
};

export default RightSection;