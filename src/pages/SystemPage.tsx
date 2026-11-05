import { useState } from "react";
import {
  Accordion,
  Button,
  ComparisonTable,
  ContentCard,
  DisclosureAction,
  GlobalHeader,
  IconTile,
  SearchField,
  SelectionCard,
  StepperInput,
  TextInput,
  TextLink,
} from "../components";
import type { IconTileKind } from "../components/IconTile";
import type { ButtonSize, ButtonVariant, VisualState } from "../components/Button";

const colors: Array<[string, string]> = [
  ["surface/page", "var(--surface-page)"],
  ["surface/soft", "var(--surface-soft)"],
  ["surface/support", "var(--surface-support)"],
  ["surface/brand", "var(--surface-brand)"],
  ["surface/selected", "var(--surface-selected)"],
  ["text/primary", "var(--text-primary)"],
  ["text/secondary", "var(--text-secondary)"],
  ["text/muted", "var(--text-muted)"],
  ["action/default", "var(--action-default)"],
  ["action/hover", "var(--action-hover)"],
  ["action/pressed", "var(--action-pressed)"],
  ["action/fill", "var(--action-fill)"],
  ["border/default", "var(--border-default)"],
  ["border/control", "var(--border-control)"],
  ["status/error", "var(--status-error)"],
  ["accent/inverse", "var(--accent-inverse)"],
];

const buttonStates: VisualState[] = ["default", "hover", "pressed", "focus", "disabled"];
const buttonVariants: ButtonVariant[] = ["primary", "secondary"];
const buttonSizes: ButtonSize[] = ["large", "small"];
const tileKinds: IconTileKind[] = ["investment", "credit", "online-banking", "service"];

export function SystemPage() {
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const [plan, setPlan] = useState("balanced");
  const [open, setOpen] = useState(true);

  return (
    <div className="system" data-theme={theme}>
      <div className="system__bar">
        <a href="/">← First Bank</a>
        <div className="theme-toggle" role="group" aria-label="Farbmodus">
          <button type="button" aria-pressed={theme === "light"} onClick={() => setTheme("light")}>
            Light
          </button>
          <button type="button" aria-pressed={theme === "dark"} onClick={() => setTheme("dark")}>
            Dark
          </button>
        </div>
      </div>
      <main className="system__main">
        <header>
          <p className="db-eyebrow">DEUTSCHE BANK / WEB FOUNDATIONS</p>
          <h1>Design System</h1>
          <p className="system__lead">
            Komponenten, Schrift und Variablen aus dem Figma-System. Light und Dark nutzen dieselben Rollen.
          </p>
        </header>

        <section>
          <h2>Farben</h2>
          <p className="system__note">Semantische Rollen. Der Schalter oben tauscht die Werte.</p>
          <div className="swatches">
            {colors.map(([name, value]) => (
              <div className="swatch" key={name}>
                <i style={{ background: value }} />
                <strong>{name}</strong>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2>Schrift</h2>
          <div className="type-list">
            <div>
              <span>Display · 56 / 64 · Medium</span>
              <strong className="db-display">Finanzielle Freiheit</strong>
            </div>
            <div>
              <span>Section · 34 / 42 · Medium</span>
              <strong className="db-section">Ihre Zukunft im Blick</strong>
            </div>
            <div>
              <span>Card · 26 / 34 · Medium</span>
              <strong className="db-card-type">Chancen entdecken</strong>
            </div>
            <div>
              <span>Subheading · 18 / 26 · Medium</span>
              <strong className="db-subheading">Persönlich für Sie da</strong>
            </div>
            <div>
              <span>Body · 16 / 24 · Regular</span>
              <span className="db-body">Banking, Geldanlage und Beratung – passend zu Ihrem Leben.</span>
            </div>
            <div>
              <span>Small · 14 / 22 · Regular</span>
              <span className="db-small">Mehr erfahren · Online beantragen</span>
            </div>
            <div>
              <span>Caption · 11 / 17 · Regular</span>
              <span className="db-caption">Weitere Informationen und rechtliche Hinweise.</span>
            </div>
            <div>
              <span>Eyebrow · 10 / 16 · Medium</span>
              <span className="db-eyebrow">GELDANLAGE</span>
            </div>
          </div>
        </section>

        <section>
          <h2>Abstände und Radien</h2>
          <p className="system__note">4 · 8 · 12 · 16 · 24 · 32 · 40 · 48. Radien: Fläche 0, Eingabe 2, Button 3, Suche 5.</p>
          <div className="space-row">
            {[4, 8, 12, 16, 24, 32, 40, 48].map((size) => (
              <div key={size}>
                <i style={{ height: size }} />
                <span>{size}</span>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2>Button</h2>
          <p className="system__note">Primary / Secondary · Large / Small · Default, Hover, Pressed, Focus, Disabled.</p>
          <div className="specimen-grid">
            {buttonVariants.map((variant) =>
              buttonSizes.map((size) =>
                buttonStates.map((state) => (
                  <div className="specimen" key={`${variant}-${size}-${state}`}>
                    <span className="db-caption">
                      {variant} · {size} · {state}
                    </span>
                    <Button variant={variant} size={size} state={state} label="Online beantragen" />
                  </div>
                )),
              ),
            )}
          </div>
        </section>

        <section>
          <h2>Text link und Disclosure</h2>
          <div className="specimen-grid">
            <div className="specimen">
              <TextLink label="Wie funktioniert es?" />
            </div>
            <div className="specimen">
              <TextLink label="Wie funktioniert es?" state="disabled" />
            </div>
            <div className="specimen">
              <DisclosureAction />
            </div>
            <div className="specimen">
              <DisclosureAction label="Weitere Details" defaultExpanded />
            </div>
          </div>
        </section>

        <section>
          <h2>Suche und Eingaben</h2>
          <div className="specimen-grid">
            <div className="specimen specimen--wide">
              <SearchField />
            </div>
            <div className="specimen">
              <SearchField size="compact" placeholder="Suche" />
            </div>
            <div className="specimen">
              <SearchField state="disabled" />
            </div>
            <div className="specimen">
              <TextInput label="Vorname" placeholder="Vorname eingeben" />
            </div>
            <div className="specimen">
              <TextInput label="Vorname" placeholder="Alex" defaultValue="Alex" state="filled" />
            </div>
            <div className="specimen">
              <TextInput label="Vorname" placeholder="Vorname eingeben" state="error" />
            </div>
            <div className="specimen">
              <TextInput label="Vorname" placeholder="Vorname eingeben" state="disabled" />
            </div>
            <div className="specimen">
              <StepperInput />
            </div>
            <div className="specimen">
              <StepperInput label="Monatlicher Beitrag" defaultValue={10} state="focus" />
            </div>
          </div>
        </section>

        <section>
          <h2>Auswahl</h2>
          <div className="stack" role="radiogroup" aria-label="Anlagestrategie">
            <SelectionCard
              label="Ausgewogen"
              selected={plan === "balanced"}
              onClick={() => setPlan("balanced")}
            />
            <SelectionCard
              label="Wachstum"
              description="Höhere Chancen, höhere Schwankung"
              selected={plan === "growth"}
              onClick={() => setPlan("growth")}
            />
            <SelectionCard label="Sicherheit" description="Stabilität vor Rendite" state="disabled" />
          </div>
        </section>

        <section>
          <h2>Content card</h2>
          <div className="specimen-grid">
            <ContentCard />
            <ContentCard tone="brand" state="hover" />
            <ContentCard tone="neutral" state="focus" />
          </div>
        </section>

        <section>
          <h2>Icon tile</h2>
          <div className="specimen-grid">
            {tileKinds.map((kind) => (
              <IconTile key={kind} kind={kind} />
            ))}
            <IconTile kind="service" state="disabled" />
          </div>
        </section>

        <section>
          <h2>Global header</h2>
          <GlobalHeader />
          <div style={{ height: 24 }} />
          <GlobalHeader size="compact" />
        </section>

        <section>
          <h2>Accordion</h2>
          <div className="stack">
            <Accordion expanded={open} onExpandedChange={setOpen} />
            <Accordion
              question="Wie lange dauert die Eröffnung?"
              answer="Die digitale Eröffnung dauert etwa acht Minuten."
              defaultExpanded={false}
            />
          </div>
        </section>

        <section>
          <h2>Comparison table</h2>
          <ComparisonTable />
          <div style={{ height: 24 }} />
          <ComparisonTable density="compact" rows="plain" heading="Konditionen" />
        </section>
      </main>
    </div>
  );
}
