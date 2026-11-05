import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";

export type ButtonVariant = "primary" | "secondary";
export type ButtonSize = "large" | "small";
export type VisualState = "default" | "hover" | "pressed" | "focus" | "disabled";

type Shared = {
  label: string;
  variant?: ButtonVariant;
  size?: ButtonSize;
  state?: VisualState;
  icon?: ReactNode;
  className?: string;
};

type ButtonAsButton = Shared &
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, "className" | "children"> & {
    href?: undefined;
  };

type ButtonAsLink = Shared &
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "className" | "children"> & {
    href: string;
  };

export type ButtonProps = ButtonAsButton | ButtonAsLink;

function classes({ variant = "primary", size = "large", className }: Shared) {
  return ["db-button", `db-button--${variant}`, `db-button--${size}`, className]
    .filter(Boolean)
    .join(" ");
}

function content(label: string, icon?: ReactNode) {
  return (
    <>
      <span>{label}</span>
      {icon ? (
        <span className="db-button__icon" aria-hidden="true">
          {icon}
        </span>
      ) : null}
    </>
  );
}

export function Button(props: ButtonProps) {
  const { label, variant, size, state, icon, className, ...rest } = props;
  const dataState = state && state !== "default" ? state : undefined;
  const classNames = classes({ label, variant, size, className });

  if ("href" in props && props.href) {
    const { onClick, ...anchorRest } = rest as AnchorHTMLAttributes<HTMLAnchorElement>;
    const disabled = state === "disabled";
    return (
      <a
        {...anchorRest}
        className={classNames}
        data-state={dataState}
        aria-disabled={disabled || undefined}
        onClick={(event) => {
          if (disabled) event.preventDefault();
          onClick?.(event);
        }}
      >
        {content(label, icon)}
      </a>
    );
  }

  const { type = "button", disabled, onClick, ...buttonRest } = rest as ButtonHTMLAttributes<HTMLButtonElement>;
  return (
    <button
      {...buttonRest}
      type={type}
      className={classNames}
      data-state={dataState}
      disabled={disabled || state === "disabled"}
      onClick={onClick}
    >
      {content(label, icon)}
    </button>
  );
}
