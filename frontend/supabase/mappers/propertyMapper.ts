import { PropertyData } from '@/types/property';

export const propertyMapper = {
  // Convierte lo que viene de Supabase (Snake Case) a la interfaz del Front (Camel Case)
  toFront(db: any): PropertyData {
    return {
      id: db.id,
      type: db.type,
      name: db.name,
      price: Number(db.price),
      fullLocation: db.full_location,
      category: db.category,
      mainImage: db.main_image,
      images: db.images,
      description: db.description,
      location: db.location,
      characteristics: {
        bedrooms: db.characteristics.bedrooms,
        bathrooms: db.characteristics.bathrooms,
        squareMeters: db.characteristics.square_meters,
        garage: db.characteristics.garage,
      },
      isHomeFeatured: db.is_home_featured,
      createdAt: db.created_at,
    };
  },

  // Convierte la interfaz del Front a lo que Supabase espera (Snake Case)
  toDB(front: Omit<PropertyData, 'id' | 'createdAt'>) {
    return {
      type: (front.type).toLowerCase,
      name: front.name,
      price: front.price,
      full_location: front.fullLocation,
      category: (front.category).toLocaleLowerCase,
      main_image: front.mainImage,
      images: front.images,
      description: front.description,
      location: front.location,
      characteristics: {
        bedrooms: front.characteristics.bedrooms,
        bathrooms: front.characteristics.bathrooms,
        square_meters: front.characteristics.squareMeters,
        garage: front.characteristics.garage,
      },
      is_home_featured: front.isHomeFeatured,
    };
  }
};