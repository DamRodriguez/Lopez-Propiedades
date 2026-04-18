import { routes } from "@/constants/routes";

export const routeItems = [
  { href: routes.propertyType("ventas"), label: "Ventas" },
  { href: routes.propertyType("alquileres"), label: "Alquileres" },
  { href: routes.services, label: "Servicios" },
  { href: routes.aboutUs, label: "Sobre Nosotros" },
  { href: routes.contact, label: "Contacto" },
] as const;

export const homeRoute = { href: routes.home, label: "Inicio" } as const;

export type RouteLabel = typeof routeItems[number]["label"];