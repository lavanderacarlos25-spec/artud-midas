import type { IconName } from "@/components/ui/icons";

export type MidasScoreStatus =
  | "excelente"
  | "bueno"
  | "en_riesgo"
  | "critico";

export type ExecutiveAlertTone = "rojo" | "amarillo" | "verde";

export type ExecutiveGoalHorizon =
  | "semanal"
  | "mensual"
  | "trimestral"
  | "anual";

export type ExecutiveKpi = {
  id: string;
  label: string;
  value: string;
  change: string;
  trend: "up" | "down" | "flat";
  icon: IconName;
};

export type MidasScore = {
  score: number;
  status: MidasScoreStatus;
  headline: string;
  explanation: string;
};

export type ExecutiveAlert = {
  id: string;
  tone: ExecutiveAlertTone;
  title: string;
  detail: string;
  priorityLabel: string;
};

export type ExecutiveAiRecommendation = {
  id: string;
  title: string;
  summary: string;
  impactLabel: string;
};

export type ExecutiveGoal = {
  id: string;
  horizon: ExecutiveGoalHorizon;
  label: string;
  target: string;
  progress: number;
};

export type ExecutiveActivityItem = {
  id: string;
  title: string;
  detail: string;
  relativeTime: string;
  icon: IconName;
};

export type ExecutiveUpcomingEvent = {
  id: string;
  name: string;
  whenLabel: string;
  venue: string;
  occupancyLabel: string;
};

export type ExecutiveQuickAction = {
  id: string;
  label: string;
  description: string;
  href: string;
  icon: IconName;
};

export type ExecutiveCommandBundle = {
  midasScore: MidasScore;
  kpis: ExecutiveKpi[];
  alerts: ExecutiveAlert[];
  recommendations: ExecutiveAiRecommendation[];
  goals: ExecutiveGoal[];
  activity: ExecutiveActivityItem[];
  upcomingEvents: ExecutiveUpcomingEvent[];
  quickActions: ExecutiveQuickAction[];
};
