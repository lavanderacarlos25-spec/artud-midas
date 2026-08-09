import { OperationsCenter } from "@/components/operations/OperationsCenter";

/**
 * Dashboard home = Centro de Operaciones (internal surface).
 * Audiencia: admin y staff. El Executive Command Center (business_owner)
 * vive en `(portal)` -> `/portal`. Navigation and other module routes
 * remain unchanged.
 */
export default function DashboardPage() {
  return <OperationsCenter />;
}
