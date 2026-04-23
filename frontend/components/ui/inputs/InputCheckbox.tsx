import type { RefCallBack } from "react-hook-form";
import Input from "@/components/ui/inputs/input/Input";
import Label from "./Label";
import clsx from "clsx";

export type InputCheckboxProps = {
  name?: string;
  label?: string;
  className?: string;
  id?: string;
  onFocus?: React.FocusEventHandler<HTMLInputElement>;
  onBlur?: React.FocusEventHandler<HTMLInputElement>;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  checked?: boolean;
  disabled?: boolean;
  ref?: RefCallBack;
  error?: boolean;
};

export const InputCheckbox = ({
  name,
  label,
  id,
  ref,
  checked,
  onFocus,
  onBlur,
  onChange,
  disabled,
  error,
  className,
}: InputCheckboxProps) => {
  return (
    <div className="relative">
      <Input
        id={id}
        type="checkbox"
        name={name}
        ref={ref}
        checked={checked}
        disabled={disabled}
        onChange={onChange}
        onBlur={onBlur}
        onFocus={onFocus}
        error={error}
        className={clsx("cursor-pointer accent-primary !w-[1.5rem] xl:!w-[2rem] !shadow-none absolute bottom-0 left-0", className)}
      />
    </div>
  );
};