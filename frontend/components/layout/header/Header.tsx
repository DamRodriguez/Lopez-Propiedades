"use client";
import clsx from "clsx";
import { useState } from "react";
import NavMobile from "@/components/layout/header/NavMobile";
import Drawer from "@/components/other/Drawer";
import NavDesk from "@/components/layout/header/NavDesk";
import LeftItem from "@/components/layout/header/LeftItem";
import useCloseMobileNavOnDesktop from "@/hooks/useCloseMobileNavOnDesktop";
import LinkButton from "@/components/ui/buttons/LinkButton";
import { WhatsAppIcon } from "@/components/icons/social";
import RightSection from "@/components/layout/header/RightSection";
import config from "@/config/config";
import MotionSlide from "@/components/motion/MotionSlide";

const Header = () => {
  const [isMobileNavVisible, setIsMobileNavVisible] = useState(false);
  useCloseMobileNavOnDesktop({ setIsMobileNavVisible });

  return (
    <header>
      <MotionSlide
        direction="up"
        className="z-9999 fixed w-full min-w-[20rem] max-w-[120rem] min-h-[4.5rem] xl:min-h-[5.5rem] bg-soft-white/90 backdrop-blur-[0.5rem] flex items-center justify-between px-[1rem] md:px-[6rem] shadow-s3"
      >
        <LeftItem
          onClick={() => { if (isMobileNavVisible) { setIsMobileNavVisible(false); } }}
        />
        <NavDesk />
        <RightSection
          isMobileNavVisible={isMobileNavVisible}
          setIsMobileNavVisible={setIsMobileNavVisible}
        />
      </MotionSlide>

      <Drawer
        visible={isMobileNavVisible}
        onClose={() => { setIsMobileNavVisible(false); }}
        position="right"
        closeButton={null}
        hideOverlay
        className={clsx("pb-[7rem] bg-soft-white/90 backdrop-blur-[0.5rem] xl:hidden top-[4.5rem]", {
        })}>
        <NavMobile onClose={() => { setIsMobileNavVisible(false); }} />
      </Drawer>
    </header>
  );
};

export default Header;
