import { routes } from "@/constants/routes";
import Image from "next/image";
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
      <div className="flex items-center justify-center relative xl:w-[5.5rem] w-[4.5rem] aspect-square">
        <Image
          src="/images/logo/logo-ajustado.jpg"
          alt="Logo de Lopez Inmobiliaria"
          fill
          priority
          quality={80}
          className="object-contain"
          sizes="(max-width: 1280px) 4.5rem, 5.5rem"
        />
      </div>
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