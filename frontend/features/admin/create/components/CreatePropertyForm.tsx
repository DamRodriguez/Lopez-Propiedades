"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormProvider, useForm } from "react-hook-form";
import Form from "@/components/ui/form/Form";
import Button from "@/components/ui/buttons/Button";
import useFormError from "@/hooks/useFormError";
import { CreatePropertySchema, CreatePropertyFieldNames, CreatePropertyType } from "@/features/admin/create/schemas/CreatePropertySchema";
import Label from "@/components/ui/inputs/Label";
import { useState } from "react";
import { storageService } from "@/supabase/storage";
import { propertiesService } from "@/supabase/services/properties";

const CreatePropertyForm = () => {
  const methods = useForm<CreatePropertyType>({
    defaultValues: {
      name: "",
      price: 0,
      type: undefined,
      category: undefined,
      description: "",
      fullLocation: "",
      mainImage: "",
      location: {
        neighborhood: "",
        city: "",
      },
      characteristics: {
        bedrooms: 0,
        bathrooms: 0,
        squareMeters: 0,
        garage: false,
      },
      images: [],
      isHomeFeatured: {
        main: false,
        side: false,
      },
    },
    resolver: zodResolver(CreatePropertySchema),
    mode: "onSubmit",
    criteriaMode: "all",
    shouldFocusError: false,
    reValidateMode: "onSubmit",
  });
  const { apiErrorMessage } = useFormError(methods.formState);
  const { isSubmitting } = methods.formState;
  const [featuredType, setFeaturedType] = useState<'main' | 'side' | 'none'>('none');

  const inputCommonProps = {
    error: apiErrorMessage !== undefined,
    errorMessage: apiErrorMessage,
  };

  const propertyTypeOptions = [
    { id: "1", text: "venta" },
    { id: "2", text: "alquiler" }
  ]

  const propertyCategoriesOptions = [
    { id: "1", text: "casa" },
    { id: "2", text: "Departamento" },
    { id: "3", text: "PH" },
    { id: "4", text: "Lote" },

  ]

  const onSubmit = async (data: CreatePropertyType) => {
    try {
      const { mainImageUrl, secondaryImageUrls } = await storageService.uploadPropertyImages(
        data.mainImage as unknown as File,
        data.images as unknown as File[]
      );

      // 2. Construir el objeto para la DB (Mapeo manual)
      const finalData = {
        ...data,
        price: Number(data.price),
        mainImage: mainImageUrl, // Reemplazamos File por URL
        images: secondaryImageUrls, // Reemplazamos File[] por URL[]
        isHomeFeatured: {
          main: featuredType === 'main',
          side: featuredType === 'side',
        }
      };
      console.log("Datos que recibe el submit:", data);

      // 3. Enviar a Supabase
      await propertiesService.create(finalData as any);

      alert("¡Propiedad creada!");
      methods.reset();
      setFeaturedType('none');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <FormProvider {...methods}>
      <Form
        onSubmit={onSubmit}
        methods={methods}
        className="max-w-4xl mx-auto p-8 bg-white shadow-s3 rounded-xs space-y-8"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Form.InputText
            {...inputCommonProps}
            label="Nombre de la propiedad"
            name={CreatePropertyFieldNames.name}
            placeholder="Ingrese un nombre"
          />
          <Form.InputNumber
            {...inputCommonProps}
            label="Precio (USD)"
            name={CreatePropertyFieldNames.price}
            placeholder="Ingrese un precio"
          />
          <Form.InputCombobox
            {...inputCommonProps}
            label="Tipo de propiedad"
            name={CreatePropertyFieldNames.type}
            placeholder="Seleccione una opción"
            options={propertyTypeOptions}
            renderOption={(option) => <span>{option.text}</span>}
            optionsContainerClassName="bg-lighter-gray"
            optionClassName="hover:bg-primary hover:text-soft-white"
          />
          <div className="flex flex-col gap-2">
            <Form.InputCombobox
              {...inputCommonProps}
              label="Categoría"
              name={CreatePropertyFieldNames.category}
              placeholder="Seleccione una opción"
              options={propertyCategoriesOptions}
              renderOption={(option) => <span>{option.text}</span>}
              optionsContainerClassName="bg-lighter-gray"
              optionClassName="hover:bg-primary hover:text-soft-white"
            />
          </div>

          <div>
            <Label>
              <p>Ubicacion</p>
            </Label>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Form.InputText
                {...inputCommonProps}
                name={CreatePropertyFieldNames.location[0]}
                placeholder="Barrio"
              />
              <Form.InputText
                {...inputCommonProps}
                name={CreatePropertyFieldNames.location[1]}
                placeholder="Ciudad"
              />
              <Form.InputText
                {...inputCommonProps}
                name={CreatePropertyFieldNames.fullLocation}
                placeholder="Dirección completa"
              />
            </div>
          </div>

          <div>
            <Label>
              <p>Características</p>
            </Label>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <Form.InputNumber
                {...inputCommonProps}
                name={CreatePropertyFieldNames.characteristics[0]}
                placeholder="Habitaciones"
              />
              <Form.InputNumber
                {...inputCommonProps}
                name={CreatePropertyFieldNames.characteristics[1]}
                placeholder="Baños"
              />
              <Form.InputNumber
                {...inputCommonProps}
                name={CreatePropertyFieldNames.characteristics[2]}
                placeholder="m² totales"
              />
              <Form.InputCheckBox
                {...inputCommonProps}
                name={CreatePropertyFieldNames.characteristics[3]}
                label="¿Tiene Garage?"
              />
            </div>
          </div>

          <Form.InputDragfile
            {...inputCommonProps}
            name={CreatePropertyFieldNames.mainImage}
            label="Imágen principal (Portada)"
          />

          <Form.InputDragfile
            {...inputCommonProps}
            name={CreatePropertyFieldNames.images}
            label="Galería de imágenes"
            multiple
          />

          <Form.InputTextArea
            {...inputCommonProps}
            label="Descripción"
            name={CreatePropertyFieldNames.description}
            placeholder="Ingrese una descripción"
            className="min-h-[15rem]"
          />

          <div className="flex gap-8">
            <Form.InputCheckBox
              {...inputCommonProps}
              name={CreatePropertyFieldNames.isHomeFeatured[0]}
              label="Destacar Principal (Reemplaza al anterior)"
              checked={featuredType === 'main'}
              onChange={() => setFeaturedType(featuredType === 'main' ? 'none' : 'main')}
            />
            <Form.InputCheckBox
              {...inputCommonProps}
              name={CreatePropertyFieldNames.isHomeFeatured[0]}
              label="Destacar Lateral (Máx 4)"
              checked={featuredType === 'side'}
              onChange={() => setFeaturedType(featuredType === 'side' ? 'none' : 'side')}
            />
          </div>
        </div>

        <Button
          full
          customUppercase
          type="submit"
          isLoading={isSubmitting}
        >
          <p>
            {isSubmitting ? "Creando..." : "Crear Propiedad"}
          </p>
        </Button>
      </Form>
    </FormProvider>
  );
};

export default CreatePropertyForm;