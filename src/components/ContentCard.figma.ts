// url=https://www.figma.com/design/hDDzBU5oTfRRPQucPD49HT/Deutsche-Bank-Hub?node-id=30-559
// source=src/components/ContentCard.tsx
// component=ContentCard
import figma from "figma"

const instance = figma.selectedInstance

const eyebrow = instance.getString("Eyebrow")
const heading = instance.getString("Heading")
const body = instance.getString("Body")
const linkLabel = instance.getString("Link label")
const showLink = instance.getBoolean("Show link")
const tone = instance.getEnum("Tone", {
  Support: "support",
  Brand: "brand",
  Neutral: "neutral",
})
const state = instance.getEnum("State", {
  Default: "default",
  Hover: "hover",
  Focus: "focus",
})

export default {
  example: figma.code`<ContentCard eyebrow="${eyebrow}" heading="${heading}" body="${body}" linkLabel="${linkLabel}" ${showLink ? "" : "showLink={false}"} tone="${tone}" state="${state}" />`,
  imports: ['import { ContentCard } from "./ContentCard"'],
  id: "content-card",
  metadata: { nestable: false },
}
