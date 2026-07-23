import type {
  OperationsAiRecommendation,
  OperationsAttentionBusiness,
  OperationsCampaign,
  OperationsCampaignStatus,
  OperationsDailyPriority,
  OperationsInternalAlert,
  OperationsInternalObjective,
  OperationsNetworkKpi,
  OperationsObjectiveStatus,
  OperationsPriorityLevel,
  OperationsQueueTask,
  OperationsAlertSeverity,
  OperationsTaskStatus,
  OperationsTeamActivity,
} from "@/types/operations-center";

export const operationsPriorityLabels: Record<OperationsPriorityLevel, string> =
  {
    alta: "Alta",
    media: "Media",
    baja: "Baja",
  };

export const operationsAlertSeverityLabels: Record<
  OperationsAlertSeverity,
  string
> = {
  critica: "Crítica",
  alta: "Alta",
  media: "Media",
  info: "Info",
};

export const operationsTaskStatusLabels: Record<OperationsTaskStatus, string> =
  {
    pendiente: "Pendiente",
    en_curso: "En curso",
    bloqueada: "Bloqueada",
  };

export const operationsCampaignStatusLabels: Record<
  OperationsCampaignStatus,
  string
> = {
  activa: "Activa",
  programada: "Programada",
  pausada: "Pausada",
  finalizada: "Finalizada",
};

export const operationsObjectiveStatusLabels: Record<
  OperationsObjectiveStatus,
  string
> = {
  en_curso: "En curso",
  cumplido: "Cumplido",
  en_riesgo: "En riesgo",
};

/** Demo network KPIs for the Operations Center hub. */
export function getOperationsNetworkKpis(): OperationsNetworkKpi[] {
  return [
    {
      id: "ops-businesses",
      label: "Empresas activas",
      value: "284",
      change: "+4",
      trend: "up",
      icon: "building",
    },
    {
      id: "ops-attention",
      label: "Requieren atención",
      value: "12",
      change: "+3",
      trend: "up",
      icon: "bell",
    },
    {
      id: "ops-tasks",
      label: "Tareas abiertas",
      value: "37",
      change: "-5",
      trend: "down",
      icon: "sliders",
    },
    {
      id: "ops-campaigns",
      label: "Campañas activas",
      value: "19",
      change: "+2",
      trend: "up",
      icon: "sparkles",
    },
  ];
}

export function getOperationsDailyPriorities(): OperationsDailyPriority[] {
  return [
    {
      id: "prio_1",
      title: "Revisar onboarding Terraza Marbella",
      owner: "Ops · Sofía",
      level: "alta",
      dueLabel: "Hoy 12:00",
    },
    {
      id: "prio_2",
      title: "Validar campaña VIP Costa Neon",
      owner: "Growth · Marc",
      level: "alta",
      dueLabel: "Hoy 16:00",
    },
    {
      id: "prio_3",
      title: "Actualizar objetivos Q3 red Madrid",
      owner: "Strategy · Ana",
      level: "media",
      dueLabel: "Hoy",
    },
    {
      id: "prio_4",
      title: "Preparar informe interno semanal",
      owner: "Ops · Luis",
      level: "baja",
      dueLabel: "Mañana",
    },
  ];
}

export function getOperationsAttentionBusinesses(): OperationsAttentionBusiness[] {
  return [
    {
      id: "att_1",
      businessName: "Terraza Marbella",
      city: "Málaga",
      reason: "Onboarding incompleto · faltan datos de aforo",
      severity: "alta",
      openTasks: 4,
    },
    {
      id: "att_2",
      businessName: "Puerto Club",
      city: "Valencia",
      reason: "Local inactivo tras reforma · riesgo de churn",
      severity: "critica",
      openTasks: 6,
    },
    {
      id: "att_3",
      businessName: "Bilbao Underground",
      city: "Bilbao",
      reason: "Fidelización pendiente de activación",
      severity: "media",
      openTasks: 2,
    },
    {
      id: "att_4",
      businessName: "Café Central Jazz",
      city: "Madrid",
      reason: "Campaña midweek por debajo del objetivo",
      severity: "media",
      openTasks: 1,
    },
  ];
}

export function getOperationsInternalAlerts(): OperationsInternalAlert[] {
  return [
    {
      id: "alert_1",
      title: "Caída de recurrencia en 3 locales",
      detail: "Madrid y Valencia muestran -9% semanal (demo).",
      severity: "alta",
      relativeTime: "Hace 20 min",
    },
    {
      id: "alert_2",
      title: "SLA de onboarding en riesgo",
      detail: "2 empresas llevan más de 7 días en estado pendiente.",
      severity: "critica",
      relativeTime: "Hace 1 h",
    },
    {
      id: "alert_3",
      title: "Campaña Afterwork lista para revisión",
      detail: "Creatividades y segmentación pendientes de OK interno.",
      severity: "media",
      relativeTime: "Hace 3 h",
    },
    {
      id: "alert_4",
      title: "Nueva solicitud de alta",
      detail: "Un rooftop en Alicante ha solicitado acceso a la red.",
      severity: "info",
      relativeTime: "Hace 5 h",
    },
  ];
}

export function getOperationsTaskQueue(): OperationsQueueTask[] {
  return [
    {
      id: "task_1",
      title: "Completar ficha legal",
      businessName: "Terraza Marbella",
      assignee: "Sofía R.",
      status: "en_curso",
      dueLabel: "Hoy",
    },
    {
      id: "task_2",
      title: "Reactivar plan de fidelización",
      businessName: "Puerto Club",
      assignee: "Luis M.",
      status: "pendiente",
      dueLabel: "Mañana",
    },
    {
      id: "task_3",
      title: "Auditar segmentos VIP",
      businessName: "Luna Lounge",
      assignee: "Ana B.",
      status: "bloqueada",
      dueLabel: "Vie",
    },
    {
      id: "task_4",
      title: "Lanzar push Afterwork",
      businessName: "Costa Neon",
      assignee: "Marc P.",
      status: "pendiente",
      dueLabel: "Hoy",
    },
  ];
}

export function getOperationsTeamActivity(): OperationsTeamActivity[] {
  return [
    {
      id: "team_1",
      actor: "Sofía R.",
      action: "Actualizó el checklist de onboarding de Terraza Marbella",
      relativeTime: "Hace 12 min",
      icon: "building",
    },
    {
      id: "team_2",
      actor: "Marc P.",
      action: "Preparó borrador de campaña VIP para Costa Neon",
      relativeTime: "Hace 40 min",
      icon: "sparkles",
    },
    {
      id: "team_3",
      actor: "Ana B.",
      action: "Marcó objetivo Q3 de red Madrid como en riesgo",
      relativeTime: "Hace 2 h",
      icon: "trending-up",
    },
    {
      id: "team_4",
      actor: "Luis M.",
      action: "Asignó tarea de reactivación a Puerto Club",
      relativeTime: "Hace 3 h",
      icon: "users",
    },
  ];
}

export function getOperationsAiRecommendations(): OperationsAiRecommendation[] {
  return [
    {
      id: "ai_1",
      title: "Priorizar reactivación de Puerto Club",
      summary:
        "El modelo simulado estima alto riesgo de churn si no hay contacto en 72 h.",
      confidenceLabel: "Confianza demo · 82%",
    },
    {
      id: "ai_2",
      title: "Empujar Afterwork en Costa Neon",
      summary:
        "Patrones demo sugieren hueco de demanda entre 19:00 y 21:00 los jueves.",
      confidenceLabel: "Confianza demo · 76%",
    },
    {
      id: "ai_3",
      title: "Revisar midweek en Café Central Jazz",
      summary:
        "La ocupación martes-miércoles está por debajo del umbral interno demo.",
      confidenceLabel: "Confianza demo · 71%",
    },
  ];
}

export function getOperationsCampaigns(): OperationsCampaign[] {
  return [
    {
      id: "camp_1",
      name: "VIP Thursdays",
      businessName: "Luna Lounge",
      status: "activa",
      performanceLabel: "+18% vs objetivo",
    },
    {
      id: "camp_2",
      name: "Afterwork Neon",
      businessName: "Costa Neon",
      status: "programada",
      performanceLabel: "Lanza en 2 días",
    },
    {
      id: "camp_3",
      name: "Jazz Midweek",
      businessName: "Café Central Jazz",
      status: "pausada",
      performanceLabel: "-11% asistencia",
    },
    {
      id: "camp_4",
      name: "Reapertura Puerto",
      businessName: "Puerto Club",
      status: "finalizada",
      performanceLabel: "Cerrada · demo",
    },
  ];
}

export function getOperationsInternalObjectives(): OperationsInternalObjective[] {
  return [
    {
      id: "obj_1",
      label: "Onboardings cerrados este mes",
      progress: 70,
      status: "en_curso",
      target: "10 / 14 empresas",
    },
    {
      id: "obj_2",
      label: "Campañas activas en red",
      progress: 100,
      status: "cumplido",
      target: "15 campañas",
    },
    {
      id: "obj_3",
      label: "Reducir empresas en riesgo",
      progress: 35,
      status: "en_riesgo",
      target: "Máx. 8 locales",
    },
    {
      id: "obj_4",
      label: "SLA medio de respuesta Ops",
      progress: 62,
      status: "en_curso",
      target: "< 4 horas",
    },
  ];
}
