import type { AnchorHTMLAttributes } from "react";
import type { VisualState } from "./Button";

export type IconTileKind = "investment" | "credit" | "online-banking" | "service";

const kinds: Record<IconTileKind, { symbol: string; label: string; description: string }> = {
  investment: { symbol: "€", label: "Geldanlage", description: "Sparen und investieren" },
  credit: { symbol: "↗", label: "Kredit", description: "Finanzielle Spielräume" },
  "online-banking": { symbol: "□", label: "Online-Banking", description: "Banking jederzeit" },
  service: { symbol: "?", label: "Service", description: "Schnell Hilfe finden" },
};

type IconTileProps = Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "children"> & {
  kind?: IconTileKind;
  label?: string;
  description?: string;
  showDescription?: boolean;
  state?: VisualState;
};

export function IconTile({
  kind = "investment",
  label,
  description,
  showDescription = true,
  state,
  className,
  href = "#",
  ...rest
}: IconTileProps) {
  const preset = kinds[kind];
  const disabled = state === "disabled";
  const { onClick, ...anchorRest } = rest;
  return (
    <a
      {...anchorRest}
      href={href}
      className={["db-tile", className].filter(Boolean).join(" ")}
      data-state={state && state !== "default" ? state : undefined}
      aria-disabled={disabled || undefined}
      onClick={(event) => {
        if (disabled) event.preventDefault();
        onClick?.(event);
      }}
    >
      <span className="db-tile__mark" aria-hidden="true">
        {preset.symbol}
      </span>
      <span className="db-tile__label">{label ?? preset.label}</span>
      {showDescription ? (
        <span className="db-tile__description">{description ?? preset.description}</span>
      ) : null}
    </a>
  );
}
