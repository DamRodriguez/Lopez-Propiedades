import clsx from "clsx";
import { inputClass } from "./Input.style"

type InputProps = Omit<React.InputHTMLAttributes<HTMLInputElement>, "value" | "className" | "disabled"> & {
  error?: boolean;
  size?: "small" | "large";
  value?: string;
  className?: string;
  disabled?: boolean;
};

const Input = ({ error, size, value, className, disabled, ...props }: InputProps) => {
  return (
    <input
      value={value}
      {...props}
      className={clsx(inputClass({
        hasError: error,
        hasValue: value ? value.length > 0 : undefined,
        disabled: disabled,
        size: size,
      }), className)}
    />
  );
};

export default Input;
