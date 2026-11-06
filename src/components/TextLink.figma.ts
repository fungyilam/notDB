// url=https://www.figma.com/design/hDDzBU5oTfRRPQucPD49HT/Deutsche-Bank-Hub?node-id=30-208
// source=src/components/TextLink.tsx
// component=TextLink
import figma from "figma"

const instance = figma.selectedInstance

const label = instance.getString("Label")
const showArrow = instance.getBoolean("Show arrow")
const state = instance.getEnum("State", {
  Default: "default",
  Hover: "hover",
  Focus: "focus",
  Disabled: "disabled",
})

export default {
  example: figma.code`<TextLink label="${label}" ${showArrow ? "" : "showArrow={false}"} state="${state}" />`,
  imports: ['import { TextLink } from "./TextLink"'],
  id: "text-link",
  metadata: { nestable: true },
}
