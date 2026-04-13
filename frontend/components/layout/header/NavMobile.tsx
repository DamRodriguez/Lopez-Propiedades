"use client";
import Link from "next/link";
import MotionSlide from "@/components/motion/MotionSlide";
import { routeItems } from "@/constants/routeItems";
import SocialButtons from "@/components/other/SocialButtons";
import MotionStagger from "@/components/motion/MotionStagger";

type NavMobileProps = {
  onClose: () => void;
};

const NavMobile = ({ onClose }: NavMobileProps) => {
  return (
    <div className="pt-[3rem] px-[2rem] flex flex-col h-full">
      <nav>
        <ul>
          <MotionStagger
            direction="right"
            order={0}
            className="flex flex-col items-end text-end text-lg gap-[1rem] font-semibold"
          >
            {routeItems.map(({ href, label }) => (
              <li key={href} className="w-full group">
                <Link
                  href={href}
                  onClick={onClose}
                  className="cursor-pointer text-black">
                  {label}
                </Link>
                <div className="h-[0.05rem] bg-soft-gray/50 my-[0.5rem] w-[8.5rem]" />
              </li>
            ))}
          </MotionStagger>
        </ul>
      </nav>
      <MotionSlide
        direction="down"
        order={1}
        className="pt-[8rem]"
      >
        <SocialButtons />
      </MotionSlide>
    </div>
  );
};

export default NavMobile;
