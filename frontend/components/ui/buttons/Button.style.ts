import { tv } from "tailwind-variants"

export const buttonClass = tv({
  base: "text-base xl:text-lg rounded-sm flex items-center justify-center flex gap-[0.7rem] min-h-[2.5rem] xl:min-h-[3rem] px-[0.8rem] xl:px-[1rem]",

  variants: {
    intent: {
      primary: "bg-primary text-soft-white",
      secondary: "",
    },

    disabled: {
      false: null,
      true: "cursor-not-allowed",
    },

    outline: {
      false: null,
      true: "bg-transparent border",
    },

    full: {
      false: null,
      true: "w-full",
    },

    small: {
      false: null,
      true: "",
    },

    cursorNormal: {
      false: "custom-transition-all hover:scale-105 cursor-pointer",
      true: "cursor-default",
    },
  },

  compoundVariants: [
    {
      intent: "primary",
      outline: true,
      class: "border-secondary-300 text-secondary-300 [&_svg]:stroke-secondary-300",
    },
    {
      intent: "primary",
      small: true,
      class: "min-h-0 !text-xs lg:!text-sm !px-[0.5rem] lg:!px-[1rem]",
    },
    {
      intent: "secondary",
      small: true,
      class: "!h-0 !lg:h-[3rem] !text-xs lg:!text-sm !px-[0.7rem] lg:!px-[1rem]",
    },
  ],

  defaultVariants: {
    intent: "primary",
    disabled: false,
  },
})

export type ButtonVariants = "primary" | "secondary"