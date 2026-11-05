import type { InputHTMLAttributes } from "react";
import searchIcon from "../assets/search.svg";
import type { VisualState } from "./Button";

type SearchFieldProps = Omit<InputHTMLAttributes<HTMLInputElement>, "size"> & {
  size?: "large" | "compact";
  state?: VisualState;
};

export function SearchField({
  size = "large",
  state,
  placeholder = "Suchbegriff eingeben",
  className,
  disabled,
  ...rest
}: SearchFieldProps) {
  const isDisabled = disabled || state === "disabled";
  return (
    <label
      className={["db-search", size === "compact" ? "db-search--compact" : "", className]
        .filter(Boolean)
        .join(" ")}
      data-state={state && state !== "default" ? state : undefined}
    >
      <img className="db-search__icon" src={searchIcon} alt="" width={20} height={20} />
      <input
        className="db-search__input"
        type="search"
        placeholder={placeholder}
        disabled={isDisabled}
        {...rest}
      />
    </label>
  );
}
