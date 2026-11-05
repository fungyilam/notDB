export type ComparisonRow = {
  label: string;
  value: string;
};

const defaultRows: ComparisonRow[] = [
  { label: "Nettodarlehensbetrag", value: "25.000 EUR" },
  { label: "Effektiver Jahreszins", value: "3,25 %" },
  { label: "Monatliche Rate", value: "243,72 EUR" },
  { label: "Laufzeit", value: "120 Monate" },
];

type ComparisonTableProps = {
  heading?: string;
  valueHeading?: string;
  density?: "comfortable" | "compact";
  rows?: "striped" | "plain";
  items?: ComparisonRow[];
};

export function ComparisonTable({
  heading = "Beispielrechnung",
  valueHeading = "Wert",
  density = "comfortable",
  rows = "striped",
  items = defaultRows,
}: ComparisonTableProps) {
  return (
    <table className={["db-table", `db-table--${rows}`, density === "compact" ? "db-table--compact" : ""].filter(Boolean).join(" ")}>
      <thead>
        <tr>
          <th scope="col">{heading}</th>
          <th scope="col">{valueHeading}</th>
        </tr>
      </thead>
      <tbody>
        {items.map((item) => (
          <tr key={item.label}>
            <td>{item.label}</td>
            <td>{item.value}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
