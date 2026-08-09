import type { IconName } from "@/components/ui/icons";

export type BusinessScoreBand =
  | "excelente"
  | "bueno"
  | "aceptable"
  | "critico";

export type BusinessOperationalStatus =
  | "operativo"
  | "atencion"
  | "critico"
  | "pausado";

export type BusinessTrendDirection = "up" | "down" | "flat";

export type MetricTone = "positive" | "neutral" | "warning" | "negative";

/** Reusable metric tile — usable across Empresas, Clientes, Eventos, RRPP, Campañas. */
export type MetricTile = {
  id: string;
  label: string;
  value: string;
  tone?: MetricTone;
  hint?: string;
};

export type BusinessExecutiveSnapshot = {
  generalStatus: string;
  healthIndex: number;
  trend: BusinessTrendDirection;
  trendLabel: string;
  lastUpdatedLabel: string;
  riskLevel: string;
  operationalStatus: BusinessOperationalStatus;
  operationalStatusLabel: string;
};

export type BusinessScoreSnapshot = {
  score: number;
  band: BusinessScoreBand;
  summary: string;
};

export type BusinessAlertItem = {
  id: string;
  kind: "riesgo" | "oportunidad" | "accion";
  title: string;
  detail: string;
  status: string;
  priority: "alta" | "media" | "baja";
};

export type Business360QuickAction = {
  id: string;
  label: string;
  icon: IconName;
  actionKey: string;
};

export type Business360TimelineItem = {
  id: string;
  title: string;
  description: string;
  relativeTime: string;
  icon: IconName;
};

export type Business360Bundle = {
  executive: BusinessExecutiveSnapshot;
  score: BusinessScoreSnapshot;
  customers: MetricTile[];
  events: MetricTile[];
  campaigns: MetricTile[];
  rrpp: MetricTile[];
  loyalty: MetricTile[];
  sales: MetricTile[];
  alerts: BusinessAlertItem[];
  quickActions: Business360QuickAction[];
  timeline: Business360TimelineItem[];
};
