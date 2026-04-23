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
      price: "",
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
        bedrooms: "",
        bathrooms: "",
        squareMeters: "",
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
    { id: 1, text: "Venta" },
    { id: 2, text: "Alquiler" }
  ]

  const propertyCategoriesOptions = [
    { id: 1, text: "Casa" },
    { id: 2, text: "Departamento" },
    { id: 3, text: "PH" },
    { id: 4, text: "Lote" },
  ]

  const onSubmit = async (data: CreatePropertyType) => {
    try {
      const { mainImageUrl, secondaryImageUrls } = await storageService.uploadPropertyImages(
        data.mainImage as unknown as File,
        data.images as unknown as File[]
      );

      const finalData = {
        ...data,
        type: data.type.text.toLowerCase(),
        category: data.category.text.toLowerCase(),
        price: Number(data.price),
        mainImage: mainImageUrl,
        images: secondaryImageUrls,
        isHomeFeatured: {
          main: featuredType === 'main',
          side: featuredType === 'side',
        }
      };
      console.log("Datos que recibe el submit:", finalData);

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
        className="mx-auto p-8 bg-white shadow-s3 rounded-xs space-y-8"
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
          <div className="flex flex-col gap-[0.5rem]">
            <Label>
              <p>Ubicacion</p>
            </Label>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Form.InputText
                {...inputCommonProps}
                name="location.neighborhood"
                placeholder="Barrio"
              />
              <Form.InputText
                {...inputCommonProps}
                name="location.city"
                placeholder="Ciudad"
              />
              <Form.InputText
                {...inputCommonProps}
                name={CreatePropertyFieldNames.fullLocation}
                placeholder="Dirección completa"
              />
            </div>
          </div>

          <div className="flex flex-col gap-[1.5rem]">
            <div className="flex flex-col gap-[0.5rem]">
              <Label>
                <p>Características</p>
              </Label>
              <div className="grid grid-cols-3 gap-4">
                <Form.InputNumber
                  {...inputCommonProps}
                  name="characteristics.bedrooms"
                  placeholder="Habitaciones"
                />
                <Form.InputNumber
                  {...inputCommonProps}
                  name="characteristics.bathrooms"
                  placeholder="Baños"
                />
                <Form.InputNumber
                  {...inputCommonProps}
                  name="characteristics.squareMeters"
                  placeholder="m² totales"
                />
              </div>
            </div>
            <div className="flex items-end">
              <Form.InputCheckBox
                {...inputCommonProps}
                name="characteristics.garage"
                label="¿Tiene Garage?"
                labelClassName="pl-[2rem] xl:pl-[2.5rem]"
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
            className="min-h-[10rem] xl:min-h-[15rem]"
          />

          <div className="flex flex-col justify-center gap-2 xl:gap-8">
            <Form.InputCheckBox
              {...inputCommonProps}
              name="isHomeFeatured.main"
              label="Destacar Principal"
              checked={featuredType === 'main'}
              onChange={() => setFeaturedType(featuredType === 'main' ? 'none' : 'main')}
              labelClassName="pl-[2rem] xl:pl-[2.5rem]"
            />
            <Form.InputCheckBox
              {...inputCommonProps}
              name="isHomeFeatured.side"
              label="Destacar Lateral"
              checked={featuredType === 'side'}
              onChange={() => setFeaturedType(featuredType === 'side' ? 'none' : 'side')}
              labelClassName="pl-[2rem] xl:pl-[2.5rem]"
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