import type { AnchorHTMLAttributes } from "react";
import type { VisualState } from "./Button";

export type CardTone = "support" | "brand" | "neutral";

type ContentCardProps = Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "children"> & {
  eyebrow?: string;
  heading?: string;
  body?: string;
  linkLabel?: string;
  showLink?: boolean;
  tone?: CardTone;
  state?: VisualState;
};

export function ContentCard({
  eyebrow = "GELDANLAGE",
  heading = "Vermögen aufbauen",
  body = "Anlegen mit einem Plan, der zu Ihren Zielen und Ihrem Leben passt.",
  linkLabel = "Mehr erfahren →",
  showLink = true,
  tone = "support",
  state,
  className,
  href = "#",
  ...rest
}: ContentCardProps) {
  return (
    <a
      href={href}
      className={["db-card", `db-card--${tone}`, className].filter(Boolean).join(" ")}
      data-state={state && state !== "default" ? state : undefined}
      {...rest}
    >
      <p className="db-card__eyebrow">{eyebrow}</p>
      <div className="db-card__heading-wrap">
        <h3 className="db-card__heading">{heading}</h3>
      </div>
      <p className="db-card__body">{body}</p>
      {showLink ? <span className="db-card__action">{linkLabel}</span> : null}
    </a>
  );
}
