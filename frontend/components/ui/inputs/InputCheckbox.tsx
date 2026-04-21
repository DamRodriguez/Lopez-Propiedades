import type { RefCallBack } from "react-hook-form";
import Input from "@/components/ui/inputs/input/Input";

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
    <div className="flex items-center gap-2">
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
        className={className || "w-5 h-5 cursor-pointer accent-black"}
      />
      {label && (
        <label htmlFor={id} className="cursor-pointer font-medium text-black">
          {label}
        </label>
      )}
    </div>
  );
};