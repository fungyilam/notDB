type GlobalHeaderProps = {
  size?: "desktop" | "compact";
  audience?: string;
  searchLabel?: string;
  loginLabel?: string;
  showLogin?: boolean;
  items?: string[];
  onSearch?: () => void;
  onLogin?: () => void;
};

const defaultItems = ["Konto & Karte", "Sparen & Anlegen", "Kredit & Immobilien", "Vorsorge", "Service"];

export function GlobalHeader({
  size = "desktop",
  audience = "Privatkunden",
  searchLabel = "Suche",
  loginLabel = "Login",
  showLogin = true,
  items = defaultItems,
  onSearch,
  onLogin,
}: GlobalHeaderProps) {
  return (
    <header className="db-header" data-size={size}>
      <div className="db-header__bar">
        <span className="db-header__mark" aria-hidden="true">
          <span />
        </span>
        <p className="db-header__audience">{audience}</p>
        <div className="db-header__tools">
          <button type="button" className="db-header__search" onClick={onSearch}>
            {searchLabel}
          </button>
          {showLogin ? (
            <button type="button" className="db-header__login" onClick={onLogin}>
              {loginLabel}
            </button>
          ) : null}
        </div>
      </div>
      <nav className="db-header__nav" aria-label="Hauptnavigation">
        {items.map((item) => (
          <a key={item} className="db-header__link" href={`#${item.toLowerCase().replace(/\s+/g, "-")}`}>
            {item}
          </a>
        ))}
      </nav>
    </header>
  );
}
