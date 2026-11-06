// url=https://www.figma.com/design/hDDzBU5oTfRRPQucPD49HT/Deutsche-Bank-Hub?node-id=30-820
// source=src/components/Accordion.tsx
// component=Accordion
import figma from "figma"

const instance = figma.selectedInstance

const question = instance.getString("Question")
const answer = instance.getString("Answer")
const expanded = instance.getEnum("Expanded", {
  True: "true",
  False: "false",
})
const state = instance.getEnum("State", {
  Default: "default",
  Hover: "hover",
  Focus: "focus",
})

export default {
  example: figma.code`<Accordion question="${question}" answer="${answer}" expanded={${expanded}} state="${state}" />`,
  imports: ['import { Accordion } from "./Accordion"'],
  id: "accordion",
  metadata: { nestable: false },
}
