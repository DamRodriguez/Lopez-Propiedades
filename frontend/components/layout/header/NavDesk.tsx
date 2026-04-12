"use client";
import { usePathname } from "next/navigation";
import MotionStagger from "@/components/motion/MotionStagger";
import { routeItems } from "@/constants/routeItems";
import clsx from "clsx";
import Link from "next/link";

const NavDesk = () => {
  const pathname = usePathname();

  return (
    <nav className="hidden xl:flex">
      <ul className="text-lg font-medium">
        <li>
          <MotionStagger className="flex gap-[4rem]" direction="up" duration={0.3}>
            {routeItems.map((item, index) => {
              const normalizedLabel = item.label
                .toLowerCase()
                .normalize("NFD")
                .replace(/[\u0300-\u036f]/g, "")
                .replace(/\s+/g, "-");

              const isActive =
                item.href === "/"
                  ? pathname === "/"
                  : pathname.includes(normalizedLabel) || pathname === item.href;

              return (
                <div
                  key={index}
                  className={clsx(
                    "flex items-center justify-center flex-col group relative custom-transition-all",
                    {
                      "text-black": isActive,
                      "text-dark-gray/80 hover:text-black": !isActive,
                    }
                  )}
                >
                  <Link
                    href={item.href}
                    className="cursor-pointer relative"
                  >
                    {item.label}
                    <span
                      className={clsx(
                        "absolute bottom-0 left-0 w-full h-[2px] bg-black custom-transition-all origin-center",
                        {
                          "scale-x-100": isActive,
                          "scale-x-0 group-hover:scale-x-100": !isActive,
                        }
                      )}
                    />
                  </Link>
                </div>
              );
            })}
          </MotionStagger>
        </li>
      </ul>
    </nav>
  );
};

export default NavDesk;