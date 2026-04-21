import { z } from "zod";
import { PropertyData } from "@/types/property";

// Creamos un tipo que mapea las keys de PropertyData a esquemas de Zod
type ZodShape<T> = {
  [K in keyof T]: z.ZodType<T[K]>;
};

// Definimos el Schema forzando que cumpla con la forma de PropertyData
// Omitimos 'id' y 'createdAt' porque no vienen del formulario
export const CreatePropertySchema = z.object({
  name: z.string().min(3, "El nombre es muy corto"),
  price: z.any(),
  type: z.any()
    .refine((val) => val !== undefined && val !== null, {
      message: "Debe seleccionar una opción",
    }),
  category: z.any()
    .refine((val) => val !== undefined && val !== null, {
      message: "Debe seleccionar una opción",
    }),
  description: z.string(),
  fullLocation: z.string(),
  mainImage: z.any()
    .refine((file) => file instanceof File, "La imagen es obligatoria")
    .refine((file) => file?.size > 0, "El archivo no puede estar vacío"),
  location: z.object({
    neighborhood: z.string(),
    city: z.string()
  }),
  characteristics: z.object({
    bedrooms: z.number(),
    bathrooms: z.number(),
    squareMeters: z.number(),
    garage: z.boolean()
  }),
  images: z.array(z.any())
    .min(1, "Debes subir al menos una imagen") // Valida que el array no esté vacío
    .refine(
      (files) => files.every((file) => file instanceof File),
      "Todos los elementos deben ser archivos"
    )
    .refine(
      (files) => files.every((file) => file.size > 0),
      "Los archivos no pueden estar vacíos"
    ),
  isHomeFeatured: z.object({
    main: z.boolean(),
    side: z.boolean()
  })
} satisfies ZodShape<Omit<PropertyData, 'id' | 'createdAt'>>);

// Para los Enums de los campos (útil para react-hook-form)
export const CreatePropertyFieldNames = CreatePropertySchema.keyof().enum;

// El Type sale directamente del Schema
export type CreatePropertyType = z.infer<typeof CreatePropertySchema>;