// url=https://www.figma.com/design/hDDzBU5oTfRRPQucPD49HT/Deutsche-Bank-Hub?node-id=30-761
// source=src/components/GlobalHeader.tsx
// component=GlobalHeader
import figma from "figma"

const instance = figma.selectedInstance

const audience = instance.getString("Audience")
const searchLabel = instance.getString("Search label")
const loginLabel = instance.getString("Login label")
const navigation1 = instance.getString("Navigation 1")
const navigation2 = instance.getString("Navigation 2")
const navigation3 = instance.getString("Navigation 3")
const navigation4 = instance.getString("Navigation 4")
const navigation5 = instance.getString("Navigation 5")
const showLogin = instance.getBoolean("Show login")
const size = instance.getEnum("Size", {
  Desktop: "desktop",
  Compact: "compact",
})

export default {
  example: figma.code`<GlobalHeader size="${size}" audience="${audience}" searchLabel="${searchLabel}" loginLabel="${loginLabel}" ${showLogin ? "" : "showLogin={false}"} items={["${navigation1}", "${navigation2}", "${navigation3}", "${navigation4}", "${navigation5}"]} />`,
  imports: ['import { GlobalHeader } from "./GlobalHeader"'],
  id: "global-header",
  metadata: { nestable: false },
}
