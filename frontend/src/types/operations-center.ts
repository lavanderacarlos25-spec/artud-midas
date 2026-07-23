import type { IconName } from "@/components/ui/icons";

export type OperationsPriorityLevel = "alta" | "media" | "baja";

export type OperationsAlertSeverity = "critica" | "alta" | "media" | "info";

export type OperationsTaskStatus = "pendiente" | "en_curso" | "bloqueada";

export type OperationsCampaignStatus =
  | "activa"
  | "programada"
  | "pausada"
  | "finalizada";

export type OperationsObjectiveStatus = "en_curso" | "cumplido" | "en_riesgo";

export type OperationsNetworkKpi = {
  id: string;
  label: string;
  value: string;
  change: string;
  trend: "up" | "down" | "flat";
  icon: IconName;
};

export type OperationsDailyPriority = {
  id: string;
  title: string;
  owner: string;
  level: OperationsPriorityLevel;
  dueLabel: string;
};

export type OperationsAttentionBusiness = {
  id: string;
  businessName: string;
  city: string;
  reason: string;
  severity: OperationsAlertSeverity;
  openTasks: number;
};

export type OperationsInternalAlert = {
  id: string;
  title: string;
  detail: string;
  severity: OperationsAlertSeverity;
  relativeTime: string;
};

export type OperationsQueueTask = {
  id: string;
  title: string;
  businessName: string;
  assignee: string;
  status: OperationsTaskStatus;
  dueLabel: string;
};

export type OperationsTeamActivity = {
  id: string;
  actor: string;
  action: string;
  relativeTime: string;
  icon: IconName;
};

export type OperationsAiRecommendation = {
  id: string;
  title: string;
  summary: string;
  confidenceLabel: string;
};

export type OperationsCampaign = {
  id: string;
  name: string;
  businessName: string;
  status: OperationsCampaignStatus;
  performanceLabel: string;
};

export type OperationsInternalObjective = {
  id: string;
  label: string;
  progress: number;
  status: OperationsObjectiveStatus;
  target: string;
};
