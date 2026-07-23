/**
 * Surface contracts for Artud Midas.
 *
 * Sprint 4 introduces the three-world model without changing routes or navigation.
 * See `frontend/ARCHITECTURE.md` for the full architecture.
 */

export const ARTUD_SURFACES = [
  "operations",
  "portal",
  "consumer",
] as const;

export type ArtudSurface = (typeof ARTUD_SURFACES)[number];

export type ArtudSurfaceDefinition = {
  id: ArtudSurface;
  name: string;
  audience: string;
  purpose: string;
  /**
   * Current or planned App Router mount.
   * `operations` maps to the existing `(dashboard)` group today.
   */
  routeGroup: "(dashboard)" | "(portal)" | "(consumer)";
  /**
   * Planned URL prefix for future migration. Operations keeps current paths for now.
   */
  plannedPathPrefix: "/" | "/portal" | "/app";
  status: "active" | "planned";
};

export const artudSurfaces: Record<ArtudSurface, ArtudSurfaceDefinition> = {
  operations: {
    id: "operations",
    name: "Centro de Operaciones Artud Midas",
    audience: "Equipo interno Artud Midas (admin, staff)",
    purpose:
      "Gestión e inteligencia de la red: empresas, clientes, campañas, IA, analítica y automatizaciones.",
    routeGroup: "(dashboard)",
    plannedPathPrefix: "/",
    status: "active",
  },
  portal: {
    id: "portal",
    name: "Portal Empresarial",
    audience: "Propietario / operador del negocio",
    purpose:
      "Confianza y resultados: KPIs, objetivos, ROI, acciones de Artud Midas, informes y mensajería.",
    routeGroup: "(portal)",
    plannedPathPrefix: "/portal",
    status: "planned",
  },
  consumer: {
    id: "consumer",
    name: "App Cliente Final",
    audience: "Clientes que visitan los locales",
    purpose:
      "Engagement: perfil, QR, eventos, ranking, recompensas, comunidad y notificaciones.",
    routeGroup: "(consumer)",
    plannedPathPrefix: "/app",
    status: "planned",
  },
};

/** Everything built so far belongs to the Operations surface. */
export const CURRENT_PRODUCT_SURFACE: ArtudSurface = "operations";
