import { useState } from "react";
import type { VisualState } from "./Button";

type StepperInputProps = {
  label?: string;
  value?: number;
  defaultValue?: number;
  min?: number;
  max?: number;
  step?: number;
  suffix?: string;
  state?: VisualState;
  onValueChange?: (value: number) => void;
};

const formatter = new Intl.NumberFormat("de-DE");

export function StepperInput({
  label = "Monatlicher Beitrag",
  value,
  defaultValue = 50,
  min = 10,
  max = 500,
  step = 10,
  suffix = " €",
  state,
  onValueChange,
}: StepperInputProps) {
  const [internal, setInternal] = useState(defaultValue);
  const current = value ?? internal;
  const atMin = current <= min || state === "disabled";
  const atMax = current >= max || state === "disabled";

  function update(next: number) {
    const clamped = Math.min(max, Math.max(min, next));
    if (value === undefined) setInternal(clamped);
    onValueChange?.(clamped);
  }

  return (
    <div className="db-field" data-state={state && state !== "default" ? state : undefined}>
      <span className="db-field__label">{label}</span>
      <div className="db-stepper__control">
        <button
          type="button"
          className="db-stepper__button"
          aria-label="Verringern"
          disabled={atMin}
          onClick={() => update(current - step)}
        >
          −
        </button>
        <span className="db-stepper__value">
          {formatter.format(current)}
          {suffix}
        </span>
        <button
          type="button"
          className="db-stepper__button"
          aria-label="Erhöhen"
          disabled={atMax}
          onClick={() => update(current + step)}
        >
          +
        </button>
      </div>
    </div>
  );
}
