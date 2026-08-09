import type {
  ExecutiveAlert,
  ExecutiveAiRecommendation,
  ExecutiveActivityItem,
  ExecutiveCommandBundle,
  ExecutiveGoal,
  ExecutiveGoalHorizon,
  ExecutiveKpi,
  ExecutiveQuickAction,
  ExecutiveUpcomingEvent,
  MidasScore,
  MidasScoreStatus,
} from "@/types/executive-command";

export const midasScoreStatusLabels: Record<MidasScoreStatus, string> = {
  excelente: "Excelente",
  bueno: "Bueno",
  en_riesgo: "En riesgo",
  critico: "Crítico",
};

export const executiveGoalHorizonLabels: Record<ExecutiveGoalHorizon, string> =
  {
    semanal: "Semanal",
    mensual: "Mensual",
    trimestral: "Trimestral",
    anual: "Anual",
  };

export const executiveAlertToneLabels = {
  rojo: "Prioridad alta",
  amarillo: "Atención",
  verde: "Oportunidad",
} as const;

function getMidasScore(): MidasScore {
  return {
    score: 86,
    status: "excelente",
    headline: "Tu negocio está en buen ritmo",
    explanation:
      "Facturación y recurrencia por encima del objetivo. La ocupación midweek es el único punto a vigilar esta semana (datos demo).",
  };
}

function getKpis(): ExecutiveKpi[] {
  return [
    {
      id: "revenue",
      label: "Facturación",
      value: "48.250 €",
      change: "+12%",
      trend: "up",
      icon: "revenue",
    },
    {
      id: "customers",
      label: "Clientes activos",
      value: "1.284",
      change: "+8%",
      trend: "up",
      icon: "users",
    },
    {
      id: "occupancy",
      label: "Ocupación",
      value: "78%",
      change: "+3%",
      trend: "up",
      icon: "building",
    },
    {
      id: "recurrence",
      label: "Recurrencia",
      value: "73%",
      change: "+2%",
      trend: "up",
      icon: "trending-up",
    },
    {
      id: "events",
      label: "Eventos activos",
      value: "6",
      change: "+2",
      trend: "up",
      icon: "calendar",
    },
    {
      id: "campaigns",
      label: "Campañas",
      value: "4",
      change: "0",
      trend: "flat",
      icon: "sparkles",
    },
    {
      id: "rrpp",
      label: "RRPP activos",
      value: "9",
      change: "+1",
      trend: "up",
      icon: "users",
    },
    {
      id: "forecast",
      label: "Ingresos previstos",
      value: "52.800 €",
      change: "+6%",
      trend: "up",
      icon: "chart",
    },
  ];
}

function getAlerts(): ExecutiveAlert[] {
  return [
    {
      id: "alert_red",
      tone: "rojo",
      title: "Ocupación baja el martes",
      detail: "Un 18% por debajo del objetivo en la última semana (demo).",
      priorityLabel: "Actuar hoy",
    },
    {
      id: "alert_yellow",
      tone: "amarillo",
      title: "VIP sin visita reciente",
      detail: "12 clientes Diamante llevan más de 14 días sin acudir (demo).",
      priorityLabel: "Esta semana",
    },
    {
      id: "alert_green",
      tone: "verde",
      title: "Afterwork en tendencia",
      detail: "La campaña de cócteles supera la media de conversión (demo).",
      priorityLabel: "Escalar",
    },
  ];
}

function getRecommendations(): ExecutiveAiRecommendation[] {
  return [
    {
      id: "rec_1",
      title: "Lanza un Afterwork el jueves",
      summary:
        "El modelo estima un hueco de demanda entre 19:00 y 21:00 con alta probabilidad de llenado.",
      impactLabel: "Impacto estimado · +9% ocupación",
    },
    {
      id: "rec_2",
      title: "Reactiva a tus VIP inactivos",
      summary:
        "Un mensaje personalizado a 12 perfiles Diamante podría recuperar visitas esta semana.",
      impactLabel: "Impacto estimado · +1.4k €",
    },
    {
      id: "rec_3",
      title: "Refuerza RRPP en puerta el viernes",
      summary:
        "Los viernes con más presencia RRPP correlacionan con mayor ticket medio en tu histórico demo.",
      impactLabel: "Impacto estimado · +6% ticket",
    },
  ];
}

function getGoals(): ExecutiveGoal[] {
  return [
    {
      id: "goal_w",
      horizon: "semanal",
      label: "Objetivo semanal",
      target: "Ocupación media 75%",
      progress: 68,
    },
    {
      id: "goal_m",
      horizon: "mensual",
      label: "Objetivo mensual",
      target: "48.000 € de facturación",
      progress: 100,
    },
    {
      id: "goal_q",
      horizon: "trimestral",
      label: "Objetivo trimestral",
      target: "2.500 clientes activos",
      progress: 54,
    },
    {
      id: "goal_y",
      horizon: "anual",
      label: "Objetivo anual",
      target: "Expansión fidelización Diamante",
      progress: 41,
    },
  ];
}

function getActivity(): ExecutiveActivityItem[] {
  return [
    {
      id: "act_1",
      title: "Cliente VIP registrado",
      detail: "Nuevo perfil Diamante en tu base",
      relativeTime: "Hace 35 min",
      icon: "award",
    },
    {
      id: "act_2",
      title: "Campaña VIP Thursdays activa",
      detail: "Segmento Oro y Platino en circulación",
      relativeTime: "Hace 2 h",
      icon: "sparkles",
    },
    {
      id: "act_3",
      title: "Evento Viernes Premium publicado",
      detail: "Cartelera actualizada para este fin de semana",
      relativeTime: "Ayer",
      icon: "calendar",
    },
    {
      id: "act_4",
      title: "Premio canjeado",
      detail: "Recompensa nivel Oro entregada en barra",
      relativeTime: "Hace 2 días",
      icon: "gift",
    },
    {
      id: "act_5",
      title: "Objetivo mensual alcanzado",
      detail: "Facturación del mes cerrada por encima del target",
      relativeTime: "Hace 3 días",
      icon: "trending-up",
    },
  ];
}

function getUpcomingEvents(): ExecutiveUpcomingEvent[] {
  return [
    {
      id: "ev_1",
      name: "Viernes Premium",
      whenLabel: "Vie 26 jul · 23:30",
      venue: "Sala principal",
      occupancyLabel: "82% reservas",
    },
    {
      id: "ev_2",
      name: "Afterwork Gold",
      whenLabel: "Jue 25 jul · 19:00",
      venue: "Terraza",
      occupancyLabel: "64% reservas",
    },
    {
      id: "ev_3",
      name: "Sesión Guest DJ",
      whenLabel: "Sáb 27 jul · 01:00",
      venue: "Pista VIP",
      occupancyLabel: "91% reservas",
    },
  ];
}

function getQuickActions(): ExecutiveQuickAction[] {
  return [
    {
      id: "qa_event",
      label: "Crear evento",
      description: "Publica una noche o reserva especial",
      href: "/businesses",
      icon: "calendar",
    },
    {
      id: "qa_campaign",
      label: "Nueva campaña",
      description: "Activa promoción o fidelización",
      href: "/loyalty",
      icon: "sparkles",
    },
    {
      id: "qa_customer",
      label: "Nuevo cliente",
      description: "Registra un perfil en tu base",
      href: "/customers",
      icon: "users",
    },
    {
      id: "qa_business",
      label: "Nueva empresa",
      description: "Da de alta un local en la red",
      href: "/businesses/nueva",
      icon: "building",
    },
    {
      id: "qa_intel",
      label: "Ver Inteligencia",
      description: "Abre la ficha 360° de tu negocio",
      href: "/businesses/biz_001",
      icon: "chart",
    },
  ];
}

/** Demo bundle for the Executive Command Center. Ready to swap for API data. */
export function getExecutiveCommandBundle(): ExecutiveCommandBundle {
  return {
    midasScore: getMidasScore(),
    kpis: getKpis(),
    alerts: getAlerts(),
    recommendations: getRecommendations(),
    goals: getGoals(),
    activity: getActivity(),
    upcomingEvents: getUpcomingEvents(),
    quickActions: getQuickActions(),
  };
}

export function getGreetingPeriod(date = new Date()): string {
  const hour = date.getHours();
  if (hour < 12) {
    return "Buenos días";
  }
  if (hour < 20) {
    return "Buenas tardes";
  }
  return "Buenas noches";
}

export function getFirstName(fullName: string | null | undefined): string {
  if (!fullName?.trim()) {
    return "Carlos";
  }
  return fullName.trim().split(/\s+/)[0] ?? "Carlos";
}
