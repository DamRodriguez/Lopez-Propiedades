export type PropertyType = "venta" | "alquiler";
export type PropertyRoute = "ventas" | "alquileres";

export interface PropertyCharacteristics {
  bedrooms: number;
  bathrooms: number;
  squareMeters: number;
  garage: boolean;
}

export type PropertyCategories = "casa" | "departamento" | "ph" | "lote"

//con isHomeFeatured se fijan los detacados del home de la sección del layout grid, main para la principal, side para los demás
export interface PropertyData {
  id: number;
  type: PropertyType;
  name: string;
  price: number;
  location: {
    neighborhood: string;
    city: string;
  };
  fullLocation: string;
  category: PropertyCategories,
  characteristics: PropertyCharacteristics;
  mainImage: string;
  images: string[];
  description: string;
  isHomeFeatured?: {
    main: boolean;
    side: boolean;
  }
  createdAt?: string;
}