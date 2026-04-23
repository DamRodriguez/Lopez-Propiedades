import { PropertyRoute } from "@/types/property";

export const routes = {
  home: "/",
  services: "/servicios",
  contact: "/contacto",
  aboutUs: "/sobre-nosotros",
  propertyType: (type: PropertyRoute) => `/${type}`,
  propertyDetail: (type: PropertyRoute, id: number) => `/${type}/${id}`,
};
