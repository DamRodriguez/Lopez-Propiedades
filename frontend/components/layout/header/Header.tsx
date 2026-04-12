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
import MotionFade from "@/components/motion/MotionFade";

const Header = () => {
  const [isMobileNavVisible, setIsMobileNavVisible] = useState(false);
  useCloseMobileNavOnDesktop({ setIsMobileNavVisible });

  return (
    <header className="sticky top-0 z-9999">
      <div className="sticky z-9999 min-h-[4.5rem] xl:min-h-[5.5rem] bg-soft-white flex items-center justify-between px-[2rem] xl:px-[6rem] shadow-s4">
        <LeftItem
          onClick={() => { if (isMobileNavVisible) { setIsMobileNavVisible(false); } }}
        />
        <NavDesk />
        <div className="flex items-center gap-[2rem] ">
          <MotionFade>
            <LinkButton
              href=""
              external
            >
              <WhatsAppIcon className="fill-soft-white" />
              <p>WhatsApp</p>
            </LinkButton>
          </MotionFade>
          <RightSection
            isMobileNavVisible={isMobileNavVisible}
            setIsMobileNavVisible={setIsMobileNavVisible}
          />
        </div>
      </div>

      <Drawer
        visible={isMobileNavVisible}
        onClose={() => { setIsMobileNavVisible(false); }}
        position="right"
        closeButton={null}
        className={clsx("pb-[7rem] bg-soft-white xl:hidden top-[4.5rem]", {
        })}>
        <NavMobile onClose={() => { setIsMobileNavVisible(false); }} />
      </Drawer>
    </header>
  );
};

export default Header;
