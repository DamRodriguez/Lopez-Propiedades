import clsx from "clsx";
import type { JSX, ReactNode } from "react";
import type { FieldValues, SubmitHandler, UseFormReturn } from "react-hook-form";
import FormField, { type FormFieldProps } from "@/components/ui/form/FormField";
import {
  InputText as InputTextComponent,
  type InputTextProps,
} from "@/components/ui/inputs/InputText";
import {
  InputTextArea as InputTextAreaComponent,
  type InputTextAreaProps,
} from "@/components/ui/inputs/InputTextArea";
import {
  BaseOption,
  InputCombobox as InputComboboxComponent,
  type InputComboboxProps,
} from "@/components/ui/inputs/InputCombobox";
import {
  InputDragFile as InputDragFileComponent,
  type InputDragFileProps,
} from "@/components/ui/inputs/InputDragFile";
import {
  InputCheckbox as InputCheckboxComponent,
  type InputCheckboxProps,
} from "@/components/ui/inputs/InputCheckbox";
import {
  InputNumber as InputNumberComponent,
  type InputNumberProps,
} from "@/components/ui/inputs/InputNumber";

type FormProps<T extends FieldValues> = {
  methods: UseFormReturn<T>;
  onSubmit: SubmitHandler<T>;
  children: ReactNode;
  className?: string;
  id?: string;
  errorMessage?: string;
  isLastErrorMessageField?: boolean;
  labelClassName?: string;
};

function Form<T extends FieldValues>({
  methods,
  onSubmit,
  children,
  className,
  id,
}: FormProps<T>): JSX.Element {
  return (
    <form
      className={clsx("flex flex-col w-full", className)}
      onSubmit={e => {
        e.preventDefault();
        void methods.handleSubmit(onSubmit)(e);
      }}
      id={id}
    >
      {children}
    </form>
  );
}

function createFormInputComponent<
  P extends Record<string, unknown>,
  T extends FieldValues = FieldValues,
>(
  InputComponent: React.ComponentType<P>,
) {
  const Component = ({
    label,
    name,
    error,
    errorMessage,
    isLastErrorMessageField,
    labelClassName,
    ...inputProps
  }: FormFieldProps<T> & P) => (
    <FormField
      label={label}
      name={name}
      error={error}
      errorMessage={errorMessage}
      isLastErrorMessageField={isLastErrorMessageField}
      labelClassName={labelClassName}
      input={props =>
        <InputComponent {...(props as P)} {...(inputProps as P)} />
      }
    />
  );
  Component.displayName = `FormInput${InputComponent.displayName || InputComponent.name || "Component"}`;
  return Component;
}

Form.InputText = createFormInputComponent<InputTextProps>(InputTextComponent);
Form.InputTextArea = createFormInputComponent<InputTextAreaProps>(InputTextAreaComponent);
Form.InputCombobox = createFormInputComponent<InputComboboxProps<any>>(InputComboboxComponent);
Form.InputDragfile = createFormInputComponent<InputDragFileProps>(InputDragFileComponent);
Form.InputCheckBox = createFormInputComponent<InputCheckboxProps>(InputCheckboxComponent);
Form.InputNumber = createFormInputComponent<InputNumberProps>(InputNumberComponent);

export default Form;
