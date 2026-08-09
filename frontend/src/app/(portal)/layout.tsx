import type { ReactNode } from "react";

/**
 * Portal Empresarial route group (business_owner).
 * No shell propio todavía (ver `surfaces/portal/README.md`) — se define
 * en un bloque posterior. Por ahora, pass-through como `(auth)`.
 */
export default function PortalGroupLayout({ children }: { children: ReactNode }) {
  return children;
}
