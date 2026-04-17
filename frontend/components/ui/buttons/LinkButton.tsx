"use client";
import clsx from "clsx";
import type { ReactNode } from "react";
import { buttonClass, type ButtonVariants } from "@/components/ui/buttons/Button.style";
import Link from "next/link";

type LinkButtonProps = {
  children: ReactNode;
  href: string;
  query?: Record<string, string | number | boolean | undefined>;
  className?: string;
  variant?: ButtonVariants;
  outline?: boolean;
  full?: boolean;
  small?: boolean;
  cursorNormal?: boolean;
  external?: boolean;
  big?: boolean;
  customUppercase?: boolean;
};

const LinkButton = ({
  cursorNormal = false,
  query,
  ...props
}: LinkButtonProps) => {
  const cleanQuery = query
    ? Object.fromEntries(
      Object.entries(query).filter(([_, value]) => value !== undefined && value !== null && value !== "")
    )
    : undefined;

  const className = clsx(buttonClass({
    intent: props.variant,
    outline: props.outline,
    full: props.full,
    small: props.small,
    cursorNormal: cursorNormal,
    big: props.big,
    customUppercase: props.customUppercase,
  }), props.className);

  return (
    <Link
      href={{
        pathname: props.href,
        query: Object.keys(cleanQuery || {}).length > 0 ? cleanQuery : undefined,
      }}
      target={props.external ? "_blank" : undefined}
      className={className}
      rel={props.external ? "noopener noreferrer" : undefined}
    >
      {props.children}
    </Link>
  );
};

export default LinkButton;