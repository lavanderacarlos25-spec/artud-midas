/**
 * Portal Empresarial surface barrel.
 *
 * Sprint 5 (Bloque 1): montado en `app/(portal)/page.tsx` -> `/portal`,
 * reutilizando `ExecutiveCommandCenter` (sin shell propio todavía).
 */
export const PORTAL_SURFACE_ID = "portal" as const;
export { ExecutiveCommandCenter } from "@/components/executive/ExecutiveCommandCenter";
