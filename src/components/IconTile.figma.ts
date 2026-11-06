// url=https://www.figma.com/design/hDDzBU5oTfRRPQucPD49HT/Deutsche-Bank-Hub?node-id=30-708
// source=src/components/IconTile.tsx
// component=IconTile
import figma from "figma"

const instance = figma.selectedInstance

const kind = instance.getEnum("Kind", {
  Investment: "investment",
  Credit: "credit",
  "Online banking": "online-banking",
  Service: "service",
})
const labels = {
  investment: instance.getString("Investment label"),
  credit: instance.getString("Credit label"),
  "online-banking": instance.getString("Online banking label"),
  service: instance.getString("Service label"),
}
const descriptions = {
  investment: instance.getString("Investment description"),
  credit: instance.getString("Credit description"),
  "online-banking": instance.getString("Online banking description"),
  service: instance.getString("Service description"),
}
const showDescription = instance.getBoolean("Show description")
const state = instance.getEnum("State", {
  Default: "default",
  Hover: "hover",
  Focus: "focus",
  Disabled: "disabled",
})

export default {
  example: figma.code`<IconTile kind="${kind}" label="${labels[kind]}" description="${descriptions[kind]}" ${showDescription ? "" : "showDescription={false}"} state="${state}" />`,
  imports: ['import { IconTile } from "./IconTile"'],
  id: "icon-tile",
  metadata: { nestable: true },
}
