// url=https://www.figma.com/design/hDDzBU5oTfRRPQucPD49HT/Deutsche-Bank-Hub?node-id=30-415
// source=src/components/SelectionCard.tsx
// component=SelectionCard
import figma from "figma"

const instance = figma.selectedInstance

const label = instance.getString("Label")
const description = instance.getString("Description")
const selected = instance.getEnum("Selected", {
  True: "true",
  False: "false",
})
const state = instance.getEnum("State", {
  Default: "default",
  Hover: "hover",
  Focus: "focus",
  Disabled: "disabled",
})

export default {
  example: figma.code`<SelectionCard label="${label}" description="${description}" selected={${selected}} state="${state}" />`,
  imports: ['import { SelectionCard } from "./SelectionCard"'],
  id: "selection-card",
  metadata: { nestable: true },
}
