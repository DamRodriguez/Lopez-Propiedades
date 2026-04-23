import { z } from "zod";

export const CreatePropertySchema = z.object({
  name: z.string().min(1, "Debe ingresar un nombre"),
  price: z.string().min(1, "Debe ingresar un precio"),
  type: z.any()
    .refine((val) => val !== undefined && val !== null, {
      message: "Debe seleccionar una opción",
    }),
  category: z.any()
    .refine((val) => val !== undefined && val !== null, {
      message: "Debe seleccionar una opción",
    }),
  description: z.string().min(1, "Debe ingresar una descripción"),
  fullLocation: z.string().min(1, "Debe ingresar una dirección"),
  mainImage: z.any()
    .refine((file) => file instanceof File, "Debe subir una imágen")
    .refine((file) => file?.size > 0, "Imágen no válida"),
  location: z.object({
    neighborhood: z.string().min(1, "Debe ingresar un barrio"),
    city: z.string().min(1, "Debe ingresar una ciudad")
  }),
  characteristics: z.object({
    bedrooms: z.string().min(1, "Debe ingresar un valor"),
    bathrooms: z.string().min(1, "Debe ingresar un valor"),
    squareMeters: z.string().min(1, "Debe ingresar un valor"),
    garage: z.boolean().optional()
  }),
  images: z.array(z.any())
    .min(1, "Debe subir una imágen")
    .refine(
      (files) => files.every((file) => file instanceof File),
      "Imágen/es no válida/s"
    )
    .refine(
      (files) => files.every((file) => file.size > 0),
      "Imágen/es no válida/s"
    ),
  isHomeFeatured: z.object({
    main: z.boolean(),
    side: z.boolean()
  })
});

export const CreatePropertyFieldNames = CreatePropertySchema.keyof().enum;

export type CreatePropertyType = z.infer<typeof CreatePropertySchema>;