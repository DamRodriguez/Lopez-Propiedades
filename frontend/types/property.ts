export type PropertyType = "ventas" | "alquileres";

export interface PropertyCharacteristics {
  bedrooms: number;
  bathrooms: number;
  squareMeters: number;
}

export type PropertyCategories = "casa" | "apartamento" | "ph" | "terreno"

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
  category: PropertyCategories,
  characteristics: PropertyCharacteristics;
  image: string;
  isHomeFeatured?: {
    main: boolean;
    side: boolean;
  }
}