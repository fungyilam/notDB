import { Button, ContentCard, TextLink, Wordmark } from "../components";

const steps = [
  {
    number: "01",
    title: "Daten eingeben",
    body: "Erzähl uns kurz, wer du bist. Das dauert etwa 3 Minuten.",
  },
  {
    number: "02",
    title: "Identität bestätigen",
    body: "Einfach sicher per Video-Ident – direkt auf deinem Handy.",
  },
  {
    number: "03",
    title: "Loslegen",
    body: "App laden, Karte aktivieren und dein Geld selbst regeln.",
  },
];

export function AccountPage() {
  return (
    <div className="account">
      <header className="site-header">
        <div className="site-header__inner">
          <a href="#top" aria-label="First Bank, zur Startseite">
            <Wordmark />
          </a>
          <nav className="site-nav" aria-label="Hauptnavigation">
            <TextLink href="#vorteile" label="Deine Vorteile" showArrow={false} />
            <TextLink href="#schritte" label="So geht's" showArrow={false} />
            <TextLink href="#eroeffnen" label="Konto eröffnen" showArrow={false} />
            <TextLink href="#hilfe" label="Hilfe" showArrow={false} />
          </nav>
          <div className="site-actions">
            <TextLink href="#eroeffnen" label="Login" showArrow={false} />
            <Button href="#eroeffnen" label="Konto eröffnen" icon="→" />
          </div>
        </div>
      </header>

      <main id="top">
        <section className="hero" aria-label="Dein erstes Konto">
          <div className="hero__copy">
            <p className="eyebrow">DEIN ERSTES KONTO</p>
            <h1>Mehr du. Mehr drin.</h1>
            <p className="hero__lead">
              Dein Geld, deine Pläne, dein Konto. Kostenlos für alle unter 25 und in wenigen Minuten digital eröffnet.
            </p>
            <div className="hero__actions">
              <Button href="#eroeffnen" label="Jetzt Konto eröffnen" icon="→" />
              <TextLink href="#vorteile" label="Erst mal entdecken" />
            </div>
            <p className="hero__trust">
              <span className="hero__check" aria-hidden="true">
                ✓
              </span>
              <span>0 € Kontoführung bis 25</span>
              <span className="hero__dot" aria-hidden="true" />
              <span>Debitkarte inklusive</span>
              <span className="hero__dot" aria-hidden="true" />
              <span>In 8 Minuten startklar</span>
            </p>
          </div>
          <div className="hero__visual" aria-label="Vorschau auf dein mobiles Banking">
            <div className="hero__ring hero__ring--large" />
            <div className="hero__ring hero__ring--small" />
            <article className="phone">
              <div className="phone__status">
                <span>9:41</span>
                <span>● ◒ ▰</span>
              </div>
              <p className="phone__hello">Hi, Alex</p>
              <p className="phone__label">DEIN GUTHABEN</p>
              <p className="phone__balance">1.284,60 €</p>
              <div className="phone__actions">
                <span className="phone__action">
                  <i>↑</i>Senden
                </span>
                <span className="phone__action">
                  <i>↓</i>Anfordern
                </span>
                <span className="phone__action">
                  <i>+</i>Mehr
                </span>
              </div>
              <p className="phone__activity">Letzte Aktivitäten</p>
              <div className="phone__row">
                <span className="phone__avatar">C</span>
                <span className="phone__meta">
                  <strong>Coffee Club</strong>
                  <span>Heute, 08:42</span>
                </span>
                <span className="phone__amount">− 4,80 €</span>
              </div>
              <div className="phone__row">
                <span className="phone__avatar phone__avatar--in">↓</span>
                <span className="phone__meta">
                  <strong>Nebenjob</strong>
                  <span>Gestern</span>
                </span>
                <span className="phone__amount phone__amount--in">+ 340,00 €</span>
              </div>
              <div className="phone__row">
                <span className="phone__avatar">M</span>
                <span className="phone__meta">
                  <strong>Music+</strong>
                  <span>12. Mai</span>
                </span>
                <span className="phone__amount">− 10,99 €</span>
              </div>
            </article>
            <aside className="savings">
              <span className="savings__icon" aria-hidden="true">
                ↗
              </span>
              <span>
                <strong>Schon 120 € gespart</strong>
                <span>Festival-Fund</span>
              </span>
            </aside>
            <article className="debit" aria-label="Debitkarte">
              <div className="debit__top">
                <span className="bank-mark bank-mark--inverse" aria-hidden="true">
                  <span className="bank-mark__slash" />
                </span>
                <span className="debit__waves" aria-hidden="true">
                  )))
                </span>
              </div>
              <div className="debit__chip" />
              <p className="debit__number">•••• •••• •••• 2406</p>
              <div className="debit__bottom">
                <span className="debit__name">ALEX MORGEN</span>
                <span className="debit__circles" aria-hidden="true">
                  <i />
                  <b />
                </span>
              </div>
            </article>
          </div>
        </section>

        <section className="stats" id="vorteile" aria-label="Die wichtigsten Vorteile">
          <div>
            <strong>0 €</strong>
            <span>Kontoführung bis 25</span>
          </div>
          <div>
            <strong>8 Min.</strong>
            <span>digitale Eröffnung</span>
          </div>
          <div>
            <strong>24 / 7</strong>
            <span>Banking per App</span>
          </div>
          <div>
            <strong>100 %</strong>
            <span>du selbst</span>
          </div>
        </section>

        <section className="features">
          <div className="section-wrap">
            <div className="feature-intro">
              <div>
                <p className="eyebrow">ALLES, WAS DU BRAUCHST</p>
                <h2>Ein Konto, das mit dir geht.</h2>
              </div>
              <p>
                Vom ersten Gehalt bis zur großen Reise: Du behältst den Überblick und entscheidest, was mit deinem Geld
                passiert.
              </p>
            </div>
            <div className="feature-grid">
              <ContentCard
                href="#vorteile"
                eyebrow="01"
                heading="Einfach bezahlen"
                body="Mit deiner Debitkarte oder deinem Smartphone – online, im Café und unterwegs."
                linkLabel="↗"
                aria-label="Einfach bezahlen"
              />
              <ContentCard
                href="#vorteile"
                eyebrow="02"
                heading="Alles im Blick"
                body="Sieh sofort, was reinkommt, was rausgeht und wie viel dir noch bleibt."
                linkLabel="◎"
                aria-label="Alles im Blick"
              />
              <ContentCard
                href="#vorteile"
                eyebrow="03"
                heading="Ziele erreichen"
                body="Lege Geld für deine Wünsche beiseite und sieh deinen Fortschritt wachsen."
                linkLabel="+"
                aria-label="Ziele erreichen"
              />
            </div>
          </div>
        </section>

        <section className="steps" id="schritte">
          <div className="section-wrap steps__grid">
            <div className="steps__intro">
              <p className="eyebrow">SCHNELL STARTKLAR</p>
              <h2>Dein Konto in drei Schritten.</h2>
              <p>Du brauchst nur dein Smartphone, einen gültigen Ausweis und ein paar Minuten Zeit.</p>
            </div>
            <ol className="steps__list">
              {steps.map((step) => (
                <li key={step.number}>
                  <span>{step.number}</span>
                  <div>
                    <h3>{step.title}</h3>
                    <p>{step.body}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="cta-wrap" id="eroeffnen">
          <div className="cta">
            <div>
              <p className="eyebrow">BEREIT, WENN DU ES BIST</p>
              <h2>Mach dein Geld zu deinem Ding.</h2>
              <p>Kostenlos bis 25. Ohne Papierkram. Mit allem, was dein erstes Konto können muss.</p>
            </div>
            <Button href="#eroeffnen" label="Konto eröffnen" icon="→" />
          </div>
        </section>
      </main>

      <footer className="footer" id="hilfe">
        <div className="footer__inner">
          <a href="#top" aria-label="First Bank">
            <Wordmark />
          </a>
          <p className="footer__copy">© 2026 First Bank</p>
          <nav className="footer__links" aria-label="Rechtliches">
            <TextLink href="#hilfe" label="Hilfe" showArrow={false} />
            <TextLink href="#hilfe" label="Datenschutz" showArrow={false} />
            <TextLink href="#hilfe" label="Impressum" showArrow={false} />
          </nav>
        </div>
      </footer>
    </div>
  );
}
