// url=https://www.figma.com/design/hDDzBU5oTfRRPQucPD49HT/Deutsche-Bank-Hub?node-id=30-346
// source=src/components/TextInput.tsx
// component=TextInput
import figma from "figma"

const instance = figma.selectedInstance

const label = instance.getString("Label")
const placeholder = instance.getString("Placeholder")
const value = instance.getString("Value")
const helper = instance.getString("Helper")
const errorMessage = instance.getString("Error message")
const showHelper = instance.getBoolean("Show helper")
const state = instance.getEnum("State", {
  Default: "default",
  Filled: "filled",
  Hover: "hover",
  Focus: "focus",
  Error: "error",
  Disabled: "disabled",
})

export default {
  example: figma.code`<TextInput label="${label}" placeholder="${placeholder}" state="${state}" ${showHelper ? figma.code`helper="${helper}"` : 'helper=""'} ${state === "error" ? figma.code`errorMessage="${errorMessage}"` : ""} ${state === "filled" ? figma.code`defaultValue="${value}"` : ""} />`,
  imports: ['import { TextInput } from "./TextInput"'],
  id: "text-input",
  metadata: { nestable: true },
}
