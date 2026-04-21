import { routes } from "@/constants/routes";
import Link from "next/link";

type LeftItemProps = {
  onClick: () => void;
}

const LeftItem = (props: LeftItemProps) => {
  return (
    <Link
      href={routes.home}
      onClick={() => {
        props.onClick();
        if (window.location.pathname === routes.home) {
          window.scrollTo({ top: 0, behavior: "smooth" });
        }
      }}
      className="text-black text-lg xl:text-xl font-sans flex items-center gap-[0.2rem] xl:gap-[0.5rem]"
    >
      <span className="font-semibold theme-transition-all">
        Lopez Propiedades
      </span>
    </Link>
  );
};

export default LeftItem;

{/*
<Image
        src="/images/logo/logo.png"
        alt=""
        width={72}
        height={72}
      />
*/}