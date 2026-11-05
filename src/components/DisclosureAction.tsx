import { useState } from "react";
import type { ButtonHTMLAttributes } from "react";
import type { VisualState } from "./Button";

type DisclosureActionProps = Omit<ButtonHTMLAttributes<HTMLButtonElement>, "children"> & {
  label?: string;
  expanded?: boolean;
  defaultExpanded?: boolean;
  onExpandedChange?: (expanded: boolean) => void;
  state?: VisualState;
};

export function DisclosureAction({
  label = "Weitere Details",
  expanded,
  defaultExpanded = false,
  onExpandedChange,
  state,
  className,
  disabled,
  onClick,
  ...rest
}: DisclosureActionProps) {
  const [internal, setInternal] = useState(defaultExpanded);
  const isExpanded = expanded ?? internal;

  return (
    <button
      {...rest}
      type="button"
      className={["db-disclosure", className].filter(Boolean).join(" ")}
      data-state={state && state !== "default" ? state : undefined}
      aria-expanded={isExpanded}
      disabled={disabled || state === "disabled"}
      onClick={(event) => {
        const next = !isExpanded;
        if (expanded === undefined) setInternal(next);
        onExpandedChange?.(next);
        onClick?.(event);
      }}
    >
      <span>{label}</span>
      <span className="db-disclosure__chevron" aria-hidden="true">
        ⌄
      </span>
    </button>
  );
}
