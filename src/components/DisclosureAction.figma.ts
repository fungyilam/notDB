// url=https://www.figma.com/design/hDDzBU5oTfRRPQucPD49HT/Deutsche-Bank-Hub?node-id=30-234
// source=src/components/DisclosureAction.tsx
// component=DisclosureAction
import figma from "figma"

const instance = figma.selectedInstance

const label = instance.getString("Label")
const expanded = instance.getEnum("Expanded", {
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
  example: figma.code`<DisclosureAction label="${label}" expanded={${expanded}} state="${state}" />`,
  imports: ['import { DisclosureAction } from "./DisclosureAction"'],
  id: "disclosure-action",
  metadata: { nestable: true },
}
