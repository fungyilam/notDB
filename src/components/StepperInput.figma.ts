// url=https://www.figma.com/design/hDDzBU5oTfRRPQucPD49HT/Deutsche-Bank-Hub?node-id=30-475
// source=src/components/StepperInput.tsx
// component=StepperInput
import figma from "figma"

const instance = figma.selectedInstance

function euros(text) {
  const normalized = String(text).replace(/[^\d,.-]/g, "").replace(/\./g, "").replace(",", ".")
  const parsed = Number(normalized)
  return Number.isFinite(parsed) ? String(parsed) : "0"
}

const label = instance.getString("Label")
const valueText = instance.getString("Value")
const minimumText = instance.getString("Minimum value")
const maximumText = instance.getString("Maximum value")
const figmaState = instance.getEnum("State", {
  Default: "default",
  Focus: "focus",
  Minimum: "minimum",
  Maximum: "maximum",
  Disabled: "disabled",
})
const displayed =
  figmaState === "minimum" ? minimumText : figmaState === "maximum" ? maximumText : valueText
const state = figmaState === "minimum" || figmaState === "maximum" ? "default" : figmaState

export default {
  example: figma.code`<StepperInput label="${label}" value={${euros(displayed)}} min={${euros(minimumText)}} max={${euros(maximumText)}} state="${state}" />`,
  imports: ['import { StepperInput } from "./StepperInput"'],
  id: "stepper-input",
  metadata: { nestable: true },
}
