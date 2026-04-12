import MotionFade from "@/components/motion/MotionFade";
import { routes } from "@/constants/routes";
import Link from "next/link";

type LeftItemProps = {
  onClick: () => void;
}

const LeftItem = (props: LeftItemProps) => {
  return (
    <MotionFade>
      <Link
        href={routes.home}
        onClick={props.onClick}
        className="text-black text-lg xl:text-xl font-fira-code flex items-center gap-[0.2rem] xl:gap-[0.5rem]"
      >
        <div>
          <p className="font-semibold theme-transition-all">
            Lopez Propiedades
          </p>
        </div>
      </Link>
    </MotionFade>
  );
};

export default LeftItem;