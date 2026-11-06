// url=https://www.figma.com/design/hDDzBU5oTfRRPQucPD49HT/Deutsche-Bank-Hub?node-id=30-194
// source=src/components/Button.tsx
// component=Button
import figma from "figma"

const instance = figma.selectedInstance

const label = instance.getString("Label")
const variant = instance.getEnum("Type", {
  Primary: "primary",
  Secondary: "secondary",
})
const size = instance.getEnum("Size", {
  Large: "large",
  Small: "small",
})
const state = instance.getEnum("State", {
  Default: "default",
  Hover: "hover",
  Pressed: "pressed",
  Focus: "focus",
  Disabled: "disabled",
})

export default {
  example: figma.code`<Button label="${label}" variant="${variant}" size="${size}" state="${state}" />`,
  imports: ['import { Button } from "./Button"'],
  id: "button",
  metadata: { nestable: true },
}
