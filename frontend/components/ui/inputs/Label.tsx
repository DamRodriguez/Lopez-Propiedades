import clsx from "clsx";

type LabelProps = {
  htmlFor?: string;
  className?: string;
  children: React.ReactNode;
  error?: boolean;
  hasValue?: boolean;
};

const Label = ({ htmlFor, children, hasValue, className }: LabelProps) => {
  return (
    <label
      htmlFor={htmlFor}
      className={clsx("text-base leading-[1.5rem] group-focus-within:text-black custom-transition-all w-fit", className, {
        "text-black": hasValue,
        "text-black/60": !hasValue,
      })}
    >
      {children}
    </label>
  );
};

export default Label;
