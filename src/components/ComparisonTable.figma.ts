// url=https://www.figma.com/design/hDDzBU5oTfRRPQucPD49HT/Deutsche-Bank-Hub?node-id=30-887
// source=src/components/ComparisonTable.tsx
// component=ComparisonTable
import figma from "figma"

const instance = figma.selectedInstance

const heading = instance.getString("Heading")
const valueHeading = instance.getString("Value heading")
const row1Label = instance.getString("Row 1 label")
const row1Value = instance.getString("Row 1 value")
const row2Label = instance.getString("Row 2 label")
const row2Value = instance.getString("Row 2 value")
const row3Label = instance.getString("Row 3 label")
const row3Value = instance.getString("Row 3 value")
const row4Label = instance.getString("Row 4 label")
const row4Value = instance.getString("Row 4 value")
const density = instance.getEnum("Density", {
  Comfortable: "comfortable",
  Compact: "compact",
})
const rows = instance.getEnum("Rows", {
  Striped: "striped",
  Plain: "plain",
})

export default {
  example: figma.code`<ComparisonTable heading="${heading}" valueHeading="${valueHeading}" density="${density}" rows="${rows}" items={[{ label: "${row1Label}", value: "${row1Value}" }, { label: "${row2Label}", value: "${row2Value}" }, { label: "${row3Label}", value: "${row3Value}" }, { label: "${row4Label}", value: "${row4Value}" }]} />`,
  imports: ['import { ComparisonTable } from "./ComparisonTable"'],
  id: "comparison-table",
  metadata: { nestable: false },
}
