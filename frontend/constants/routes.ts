import { Property } from "@/types/property";

export const routes = {
  home: "/",
  services: "/servicios",
  contact: "/contacto",
  aboutUs: "/sobre-nosotros",
  propertyType: (type: Property) => `/${type}`,
  propertyDetail: (type: Property, id: number) => `/${type}/${id}`,
};
