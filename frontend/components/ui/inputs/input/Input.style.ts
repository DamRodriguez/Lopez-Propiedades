import { tv } from "tailwind-variants"

export const inputClass = tv({
  base: "rounded-xs shadow-s2 bg-light-gray min-h-[2.5rem] py-[0.5rem] px-[1rem] group-focus-within:bg-lighter-gray outline-none custom-transition-all text-sm sm:text-base placeholder:text-soft-gray placeholder:text-xs sm:placeholder:text-sm",
  variants: {
    intent: {
      default: "",
    },
    size: {
      small: "",
      large: "w-full",
    },
    disabled: {
      true: "cursor-not-allowed",
    },
    hasValue: {
      true: "bg-lighter-gray",
    },
    hasError: {
      true: "bg-error/5",
    },
  },
  defaultVariants: {
    intent: "default",
    size: "large",
  }
})