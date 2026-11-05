import type { AnchorHTMLAttributes } from "react";
import type { VisualState } from "./Button";

type TextLinkProps = Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "children"> & {
  label: string;
  showArrow?: boolean;
  state?: VisualState;
};

export function TextLink({
  label,
  showArrow = true,
  state,
  className,
  href = "#",
  ...rest
}: TextLinkProps) {
  const disabled = state === "disabled";
  const { onClick, ...anchorRest } = rest;
  return (
    <a
      {...anchorRest}
      href={href}
      className={["db-text-link", className].filter(Boolean).join(" ")}
      data-state={state && state !== "default" ? state : undefined}
      aria-disabled={disabled || undefined}
      onClick={(event) => {
        if (disabled) event.preventDefault();
        onClick?.(event);
      }}
    >
      <span>{label}</span>
      {showArrow ? <span aria-hidden="true">→</span> : null}
    </a>
  );
}
