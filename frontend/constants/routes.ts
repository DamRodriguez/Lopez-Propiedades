import { PropertyType } from "@/types/property";

export const routes = {
  home: "/",
  services: "/servicios",
  contact: "/contacto",
  aboutUs: "/sobre-nosotros",
  propertyType: (type: PropertyType) => `/${type}`,
  propertyDetail: (type: PropertyType, id: number) => `/${type}/${id}`,
};
