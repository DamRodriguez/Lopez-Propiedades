"use client";
import clsx from "clsx";
import type { ReactNode } from "react";
import { buttonClass, type ButtonVariants } from "@/components/ui/buttons/Button.style";
import Link from "next/link";

type LinkButtonProps = {
  children: ReactNode;
  href: string;
  className?: string;
  variant?: ButtonVariants;
  outline?: boolean;
  full?: boolean;
  small?: boolean;
  cursorNormal?: boolean;
  external?: boolean;
  big?: boolean;
};

const LinkButton = ({
  cursorNormal = false,
  ...props
}: LinkButtonProps) => {
  const className = clsx(buttonClass({
    intent: props.variant,
    outline: props.outline,
    full: props.full,
    small: props.small,
    cursorNormal: cursorNormal,
    big: props.big,
  }), props.className);
  return (
    <Link
      href={props.href}
      target={props.external ? "_blank" : ""}
      className={clsx("", className)}
      rel="noopener noreferrer"
    >
      {props.children}
    </Link>
  );
};

export default LinkButton;
