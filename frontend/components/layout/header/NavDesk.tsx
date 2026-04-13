"use client";
import { usePathname } from "next/navigation";
import { routeItems } from "@/constants/routeItems";
import clsx from "clsx";
import Link from "next/link";

const NavDesk = () => {
  const pathname = usePathname();

  return (
    <nav className="hidden xl:flex">
      <ul className="text-base font-medium">
        <li className="flex gap-[4rem]">
          {routeItems.map((item, index) => {
            const isActive = pathname === item.href;

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
        </li>
      </ul>
    </nav>
  );
};

export default NavDesk;