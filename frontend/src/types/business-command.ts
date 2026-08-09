import type { IconName } from "@/components/ui/icons";
import type { BusinessModuleKey } from "@/types/business";

export type BusinessKpiTrend = "up" | "down" | "flat";

export type BusinessKpi = {
  id: string;
  label: string;
  value: string;
  change: string;
  trend: BusinessKpiTrend;
  icon: IconName;
};

export type BusinessGoalStatus = "en_curso" | "cumplido" | "retrasado";

export type BusinessGoal = {
  id: string;
  label: string;
  progress: number;
  status: BusinessGoalStatus;
  target: string;
};

export type BusinessActivityItem = {
  id: string;
  description: string;
  relativeTime: string;
  icon: IconName;
};

export type BusinessQuickAction = {
  id: string;
  label: string;
  description: string;
  icon: IconName;
  actionKey:
    | "create_event"
    | "create_campaign"
    | "register_customer"
    | "add_rrpp"
    | "view_analytics";
};

export type BusinessModuleRuntimeStatus =
  | "activo"
  | "en_configuracion"
  | "disponible";

export type BusinessModuleProgress = {
  key: BusinessModuleKey;
  status: BusinessModuleRuntimeStatus;
  progress: number;
};
