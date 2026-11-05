import { useState } from "react";
import type { VisualState } from "./Button";

type AccordionProps = {
  question?: string;
  answer?: string;
  expanded?: boolean;
  defaultExpanded?: boolean;
  state?: VisualState;
  onExpandedChange?: (expanded: boolean) => void;
};

export function Accordion({
  question = "Welche Voraussetzungen gelten?",
  answer = "Sie sind volljährig, handeln auf eigene Rechnung und haben einen Wohnsitz in Deutschland.",
  expanded,
  defaultExpanded = true,
  state,
  onExpandedChange,
}: AccordionProps) {
  const [internal, setInternal] = useState(defaultExpanded);
  const isExpanded = expanded ?? internal;

  return (
    <div className="db-accordion" data-state={state && state !== "default" ? state : undefined}>
      <h3>
        <button
          type="button"
          className="db-accordion__trigger"
          aria-expanded={isExpanded}
          onClick={() => {
            const next = !isExpanded;
            if (expanded === undefined) setInternal(next);
            onExpandedChange?.(next);
          }}
        >
          <span className="db-accordion__symbol" aria-hidden="true">
            {isExpanded ? "−" : "+"}
          </span>
          <span className="db-accordion__question">{question}</span>
        </button>
      </h3>
      {isExpanded ? <p className="db-accordion__answer">{answer}</p> : null}
    </div>
  );
}
