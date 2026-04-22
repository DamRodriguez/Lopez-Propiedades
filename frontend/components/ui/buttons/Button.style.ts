import { tv } from "tailwind-variants"

export const buttonClass = tv({
  base: "text-sm xl:text-lg rounded-xs flex items-center justify-center flex gap-[0.5rem] xl:gap-[0.7rem] shadow-s2 custom-transition-all",

  variants: {
    intent: {
      primary: "bg-primary text-soft-white [&_svg]:fill-soft-white [&_svg]:stroke-soft-white hover:bg-primary-light",
      secondary: "bg-secondary-light text-black [&_svg]:fill-black [&_svg]:stroke-black hover:bg-white",
      tertiary: "bg-secondary text-black [&_svg]:fill-black [&_svg]:stroke-black hover:bg-secondary-light",
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
      false: "w-fit",
      true: "w-full",
    },

    small: {
      false: null,
      true: "",
    },

    big: {
      false: "px-[0.6rem] xl:px-[1rem] min-h-[2.2rem] xl:min-h-[3rem] [&_svg]:w-[1rem] [&_svg]:h-[1rem] xl:[&_svg]:w-[1.5rem] xl:[&_svg]:h-[1.5rem]",
      true: "px-[1.5rem] xl:px-[2rem] min-h-[4rem] xl:min-h-[4.5rem] [&_svg]:w-[1.5rem] [&_svg]:h-[1.5rem] xl:[&_svg]:w-[2rem] xl:[&_svg]:h-[2rem]"
    },

    customUppercase: {
      false: null,
      true: "font-bold tracking-wider text-sm xl:text-base uppercase"
    },

    cursorNormal: {
      false: "cursor-pointer",
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

export type ButtonVariants = "primary" | "secondary" | "tertiary"