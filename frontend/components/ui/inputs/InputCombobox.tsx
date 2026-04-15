import { useEffect, useRef, useState } from "react";
import clsx from "clsx";
import { inputClass } from "./input/Input.style";
import { MotionHeight } from "../../motion/MotionHeight";
import { AnimatePresence } from "framer-motion";
import "../../../styles/scrollbarVertical.css";
import { useClickOutside } from "@/hooks/useClickOutside";
import { DownArrowIcon, UpArrowIcon } from "@/components/icons/filter";

export interface BaseOption {
  id: string | number;
}

export type InputComboboxProps<T extends BaseOption> = {
  name?: string;
  options: T[];
  value?: T;
  onChange?: (option: T) => void;
  renderOption: (option: T) => React.ReactNode;
  disabled?: boolean;
  containerClassName?: string;
  error?: boolean;
  placeholder?: string;
  inputClassName?: string;
  optionsContainerClassName?: string;
  optionClassName?: string;
  placeholderClassName?: string;
  placeholderLeftIcon?: React.ReactNode;
};

export const InputCombobox = <T extends BaseOption>({
  name,
  options,
  value,
  onChange,
  renderOption,
  disabled,
  containerClassName,
  error,
  placeholder,
  inputClassName,
  optionsContainerClassName,
  optionClassName,
  placeholderClassName,
  placeholderLeftIcon
}: InputComboboxProps<T>) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState<T | undefined>(value);
  const wrapperRef = useRef<HTMLDivElement>(null);
  useClickOutside(wrapperRef, () => setIsOpen(false));
  const filteredOptions = options.filter((o) => o.id !== selected?.id);

  useEffect(() => {
    if (value && value.id) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setSelected(value);
    } else {
      setSelected(undefined);
    }
  }, [value]);

  const handleSelect = (option: T) => {
    setSelected(option);
    onChange?.(option);
    setIsOpen(false);
  };

  const getArrowIconClassName = () => {
    const defaultClassName = "w-4 h-4";
    if (selected?.id || isOpen) return `fill-black ${defaultClassName}`;
    return `fill-soft-gray ${defaultClassName}`;
  };

  return (
    <div ref={wrapperRef} className={clsx("relative w-full", containerClassName)}>
      <button
        type="button"
        disabled={disabled}
        onClick={() => setIsOpen((prev) => !prev)}
        className={clsx(
          inputClass({
            hasError: error,
            hasValue: selected?.id !== undefined,
            disabled: disabled,
          }),
          inputClassName,
          "flex items-center justify-between cursor-pointer w-full border-none shadow-s2 rounded-xs"
        )}
      >
        <div className="flex-1 text-left overflow-hidden">
          {selected ? (
            renderOption(selected)
          ) : (
            placeholder && (
              <div className="flex items-center gap-2">
                {placeholderLeftIcon}
                <span className={clsx("text-soft-gray text-xs sm:text-sm truncate", placeholderClassName)}>
                  {placeholder}
                </span>
              </div>
            )
          )}
        </div>

        <div className="ml-4 flex-shrink-0">
          {isOpen ? (
            <UpArrowIcon className={getArrowIconClassName()} />
          ) : (
            <DownArrowIcon className={getArrowIconClassName()} />
          )}
        </div>
      </button>

      <AnimatePresence>
        {isOpen && (
          <div className="absolute z-50 mt-1 w-full border-none shadow-s2 rounded-xs overflow-hidden">
            <MotionHeight duration={0.3}>
              <div className={clsx("max-h-[10.5rem] sm:max-h-[13rem] scrollbarCustom overflow-y-auto", optionsContainerClassName)}>
                {filteredOptions.length > 0 ? (
                  filteredOptions.map((option) => (
                    <div
                      key={option.id}
                      onClick={() => handleSelect(option)}
                      className={clsx("py-[0.5rem] px-[1rem] cursor-pointer custom-transition-all", optionClassName)}
                    >
                      {renderOption(option)}
                    </div>
                  ))
                ) : (
                  <div className="py-2 px-4 text-sm text-soft-gray">
                    No hay más opciones
                  </div>
                )}
              </div>
            </MotionHeight>
          </div>
        )}
      </AnimatePresence>

      <input
        type="hidden"
        name={name}
        value={selected?.id || ""}
      />
    </div>
  );
};