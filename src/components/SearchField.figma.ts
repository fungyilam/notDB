// url=https://www.figma.com/design/hDDzBU5oTfRRPQucPD49HT/Deutsche-Bank-Hub?node-id=30-294
// source=src/components/SearchField.tsx
// component=SearchField
import figma from "figma"

const instance = figma.selectedInstance

const placeholder = instance.getString("Placeholder")
const value = instance.getString("Value")
const size = instance.getEnum("Size", {
  Large: "large",
  Compact: "compact",
})
const figmaState = instance.getEnum("State", {
  Default: "default",
  Filled: "filled",
  Focus: "focus",
  Disabled: "disabled",
})
const state = figmaState === "filled" ? "default" : figmaState

export default {
  example: figma.code`<SearchField placeholder="${placeholder}" size="${size}" state="${state}"${figmaState === "filled" ? figma.code` defaultValue="${value}"` : ""} />`,
  imports: ['import { SearchField } from "./SearchField"'],
  id: "search-field",
  metadata: { nestable: true },
}
