"use client";
import { routes } from "@/constants/routes";
import Link from "next/link";
import { CallIcon, CodeIcon, EmailIcon, LocationIcon } from "../icons/footer";
import config from "@/config/config";
import { useSmoothScroll } from "@/hooks/useSmoothScroll";
import { InstagramIcon, WhatsAppIcon } from "../icons/social";

const Footer = () => {
  const { handleSmoothScroll } = useSmoothScroll();

  const companyItems = [
    {
      text: "Inicio",
      href: routes.home,
    },
    {
      text: "Servicios",
      href: routes.services
    },
    {
      text: "Sobre Nosotros",
      href: routes.aboutUs
    }
  ]

  const stateItems = [
    {
      text: "Ventas",
      href: routes.propertyType("ventas")
    },
    {
      text: "Alquileres",
      href: routes.propertyType("alquileres")
    },
  ]

  const contactItems = [
    {
      text: config.info.address,
      link: config.urls.googleMaps,
      icon: <LocationIcon />
    },
    {
      text: config.info.whatsApp,
      link: config.urls.whatsApp,
      icon: <WhatsAppIcon className="fill-soft-white w-[15px] h-[15px] " />
    },
    {
      text: config.info.phone,
      icon: <CallIcon />
    },
    {
      text: config.info.instagram,
      link: config.urls.instagram,
      icon: <InstagramIcon />
    },
    {
      text: config.info.email,
      link: config.urls.email,
      icon: <EmailIcon />
    }
  ]

  return (
    <footer className="bg-gradient-to-b from-primary to-black w-full shadow-s7">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-12 px-6 md:px-12 w-full max-w-7xl mx-auto">
        <div className="flex items-center">
          <span className="text-lg font-semibold text-soft-white">
            Lopez Propiedades
          </span>
        </div>
        <div className="grid grid-cols-2 gap-8">
          <div>
            <p className="font-bold text-soft-white mb-4 text-xs tracking-widest uppercase">
              Empresa
            </p>
            <ul className="flex flex-col gap-2 text-sm text-soft-white">
              {companyItems.map((item, index) => (
                <li key={index}>
                  <Link
                    href={item.href}
                    onClick={(e) => handleSmoothScroll(e, item.href)}
                    className="hover:underline custom-transition-all"
                  >
                    {item.text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex flex-col gap-4">
            <p className="font-bold text-soft-white text-xs tracking-widest uppercase">
              Inmuebles
            </p>
            <ul className="flex flex-col gap-2 text-sm text-soft-white">
              {stateItems.map((item, index) => (
                <li key={index}>
                  <Link
                    href={item.href}
                    onClick={(e) => handleSmoothScroll(e, item.href)}
                    className="hover:underline"
                  >
                    {item.text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <p className="font-bold text-soft-white text-xs tracking-widest uppercase">
            Contacto
          </p>
          <div className="flex flex-col gap-3">
            {contactItems.map((item, index) => (
              <div
                key={index}
                className="flex items-center gap-2 text-sm text-soft-white"
              >
                <div className="min-w-[1.5rem] flex justify-center">
                  {item.icon}
                </div>
                {item.link ? (
                  <Link
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline"
                  >
                    {item.text}
                  </Link>
                ) : (
                  <span>
                    {item.text}
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="border-t border-soft-gray/30 bg-white py-6">
        <div className="container mx-auto flex flex-col items-center justify-evenly gap-4 px-4 md:flex-row text-xs xl:text-sm text-soft-white">
          <p className="text-center">
            © {new Date().getFullYear()} <span className="font-semibold">Lopez Propiedades</span>. <br className="flex xl:hidden" />Todos los derechos reservados.
          </p>
          <div className="flex items-center gap-2">
            <CodeIcon />
            <p className="font-medium">
              Desarrollado por{" "}
              <Link
                href={config.urls.damrod}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline font-semibold custom-transition-all"
              >
                damrod
              </Link>
            </p>
          </div>

        </div>
      </div>
    </footer >
  );
};

export default Footer;