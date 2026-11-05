type BankMarkProps = {
  variant?: "solid" | "inverse";
};

export function BankMark({ variant = "solid" }: BankMarkProps) {
  return (
    <span className={`bank-mark bank-mark--${variant}`} aria-hidden="true">
      <span className="bank-mark__slash" />
    </span>
  );
}

export function Wordmark() {
  return (
    <span className="wordmark">
      <BankMark />
      <span className="wordmark__name">First Bank</span>
    </span>
  );
}
