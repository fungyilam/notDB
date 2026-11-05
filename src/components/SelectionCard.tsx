import type { ButtonHTMLAttributes } from "react";
import type { VisualState } from "./Button";

type SelectionCardProps = Omit<ButtonHTMLAttributes<HTMLButtonElement>, "children"> & {
  label: string;
  description?: string;
  selected?: boolean;
  state?: VisualState;
};

export function SelectionCard({
  label,
  description = "Balance aus Sicherheit und Rendite",
  selected = false,
  state,
  className,
  ...rest
}: SelectionCardProps) {
  return (
    <button
      type="button"
      role="radio"
      aria-checked={selected}
      className={["db-selection", className].filter(Boolean).join(" ")}
      data-state={state && state !== "default" ? state : undefined}
      data-selected={selected || undefined}
      disabled={rest.disabled || state === "disabled"}
      {...rest}
    >
      <span className="db-selection__radio" aria-hidden="true" />
      <span className="db-selection__copy">
        <span className="db-selection__label">{label}</span>
        {description ? <span className="db-selection__description">{description}</span> : null}
      </span>
    </button>
  );
}
