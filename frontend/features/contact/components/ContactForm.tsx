"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormProvider, useForm } from "react-hook-form";
import Form from "@/components/ui/form/Form";
import Button from "@/components/ui/buttons/Button";
import type { BaseOption } from "@/components/ui/inputs/InputCombobox";
import useFormError from "@/hooks/useFormError";
import { ContactSchema, ContactSchemaFieldNames, ContactSchemaType } from "../schemas/ContactSchema";
import showToast from "@/components/toast/showToast";

const ContactForm = () => {
  const methods = useForm<ContactSchemaType>({
    defaultValues: {
      fullName: "",
      email: "",
      options: undefined,
      message: ""
    },
    resolver: zodResolver(ContactSchema),
    mode: "onSubmit",
    criteriaMode: "all",
    shouldFocusError: false,
    reValidateMode: "onSubmit",
  });
  const { apiErrorMessage } = useFormError(methods.formState);
  const { isSubmitting } = methods.formState;

  const inputCommonProps = {
    error: apiErrorMessage !== undefined,
    errorMessage: apiErrorMessage,
  };

  const consultationOptions = [
    { id: 1, text: "Venta de Propiedad" },
    { id: 2, text: "Alquiler de Propiedad" },
    { id: 3, text: "Asesoramiento Jurídico" },
    { id: 4, text: "Tasación Profesional" },
    { id: 5, text: "Marketing Digital" },
    { id: 6, text: "Otro" }
  ];

  interface ConsultationOptionType extends BaseOption {
    text: string
  }

  const renderAccountOption = (option: BaseOption) => {
    const consultation = option as ConsultationOptionType;
    return <span className="text-sm">{consultation.text}</span>;
  };

  const onSubmit = async (data: ContactSchemaType) => {
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error("Error en la respuesta del servidor");
      }

      showToast("success", "Mensaje enviado con éxito!");
      methods.reset();

    } catch (error) {
      showToast("error", "Ha ocurrido un error, intente nuevamente");
    }
  };

  return (
    <FormProvider {...methods}>
      <Form
        onSubmit={onSubmit}
        methods={methods}
        className="bg-white p-8 md:p-12 rounded-xs shadow-s3 h-full flex flex-col justify-between gap-8"
      >
        <div className="space-y-8 md:space-y-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Form.InputText
              {...inputCommonProps}
              label="Nombre Completo"
              name={ContactSchemaFieldNames.fullName}
              placeholder="Ingrese su nombre"
            />
            <Form.InputText
              {...inputCommonProps}
              label="Email"
              name={ContactSchemaFieldNames.email}
              placeholder="Ingrese su email"
            />
          </div>
          <Form.InputCombobox
            {...inputCommonProps}
            label="Tipo de Consulta"
            name={ContactSchemaFieldNames.options}
            placeholder="Seleccione una opción"
            options={consultationOptions}
            renderOption={renderAccountOption}
            optionsContainerClassName="bg-lighter-gray"
            optionClassName="hover:bg-primary hover:text-soft-white"
          />
          <Form.InputTextArea
            {...inputCommonProps}
            label="Mensaje"
            name={ContactSchemaFieldNames.message}
            placeholder="¿Cómo podemos ayudarle?"
            className="min-h-[10rem]"
          />
        </div>

        <Button
          full
          customUppercase
          type="submit"
          isLoading={isSubmitting}
        >
          <p>
            {isSubmitting ? "Enviando..." : "Enviar Consulta"}
          </p>
        </Button>
      </Form>
    </FormProvider>
  );
};

export default ContactForm;