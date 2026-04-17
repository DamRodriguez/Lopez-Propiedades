"use client";
import clsx from "clsx";

type SpaceXProps = {
  children: React.ReactNode;
  className?: string;
  id?: string;
  onClick?: () => void;
};

const SpaceX = ({ children, className, id, onClick }: SpaceXProps) => {
  return (
    <div
      id={id}
      onClick={onClick}
      className={clsx("px-[1rem] scroll-mt-[8.5rem] xl:scroll-mt-[14rem]",
        "md:px-[6rem]",
        "xl:px-[9rem]",
        "4xl:px-[20rem]",
        className)}
    >
      {children}
    </div>
  );
};

export default SpaceX;
