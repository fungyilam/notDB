import { AccountPage } from "./pages/AccountPage";
import { SystemPage } from "./pages/SystemPage";

export function App() {
  const isSystem = window.location.pathname.replace(/\/$/, "").endsWith("/system");
  return isSystem ? <SystemPage /> : <AccountPage />;
}
