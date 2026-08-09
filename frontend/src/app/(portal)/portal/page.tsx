import { ExecutiveCommandCenter } from "@/components/executive/ExecutiveCommandCenter";

/**
 * Portal Empresarial home = Executive Command Center.
 * Audiencia: business_owner.
 * Contenedor mínimo (mismo padding que `DashboardShell`) hasta que exista
 * un shell propio del Portal — ver `surfaces/portal/README.md`.
 */
export default function PortalPage() {
  return (
    <div className="mx-auto w-full max-w-7xl p-4 sm:p-6 lg:p-8">
      <ExecutiveCommandCenter />
    </div>
  );
}
