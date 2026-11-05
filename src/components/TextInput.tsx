import type { InputHTMLAttributes } from "react";
import type { VisualState } from "./Button";

type TextInputProps = InputHTMLAttributes<HTMLInputElement> & {
  label: string;
  helper?: string;
  errorMessage?: string;
  state?: VisualState | "error" | "filled";
};

export function TextInput({
  label,
  helper = "Wie im Ausweisdokument",
  errorMessage = "Bitte überprüfen Sie Ihre Eingabe",
  state,
  id,
  disabled,
  ...rest
}: TextInputProps) {
  const fieldId = id ?? label.toLowerCase().replace(/\s+/g, "-");
  const isError = state === "error";
  const isDisabled = disabled || state === "disabled";
  const message = isError ? errorMessage : helper;

  return (
    <label className="db-field" data-state={state && state !== "default" ? state : undefined} htmlFor={fieldId}>
      <span className="db-field__label">{label}</span>
      <input
        id={fieldId}
        className="db-field__control"
        disabled={isDisabled}
        aria-invalid={isError || undefined}
        {...rest}
      />
      {message ? (
        <span className={isError ? "db-field__helper db-field__helper--error" : "db-field__helper"}>
          {message}
        </span>
      ) : null}
    </label>
  );
}
