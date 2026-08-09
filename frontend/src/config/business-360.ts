import type { Business } from "@/types/business";
import type {
  Business360Bundle,
  BusinessAlertItem,
  BusinessExecutiveSnapshot,
  BusinessOperationalStatus,
  BusinessScoreBand,
  BusinessScoreSnapshot,
  MetricTile,
} from "@/types/business-360";

export const businessScoreBandLabels: Record<BusinessScoreBand, string> = {
  excelente: "Excelente",
  bueno: "Bueno",
  aceptable: "Aceptable",
  critico: "Crítico",
};

export const businessOperationalStatusLabels: Record<
  BusinessOperationalStatus,
  string
> = {
  operativo: "Operativo",
  atencion: "Requiere atención",
  critico: "Crítico",
  pausado: "Pausado",
};

export function resolveBusinessScoreBand(score: number): BusinessScoreBand {
  if (score >= 85) {
    return "excelente";
  }
  if (score >= 70) {
    return "bueno";
  }
  if (score >= 50) {
    return "aceptable";
  }
  return "critico";
}

function hashSeed(input: string): number {
  let hash = 0;
  for (let i = 0; i < input.length; i += 1) {
    hash = (hash * 31 + input.charCodeAt(i)) % 1000;
  }
  return hash;
}

function pickOperationalStatus(business: Business): BusinessOperationalStatus {
  if (business.status === "inactiva") {
    return "pausado";
  }
  if (business.status === "pendiente") {
    return "atencion";
  }
  return "operativo";
}

function buildExecutive(business: Business): BusinessExecutiveSnapshot {
  const operationalStatus = pickOperationalStatus(business);
  const healthIndex =
    business.status === "activa"
      ? 87
      : business.status === "pendiente"
        ? 64
        : 41;

  return {
    generalStatus:
      business.status === "activa"
        ? "Negocio en buen estado"
        : business.status === "pendiente"
          ? "Onboarding en curso"
          : "Negocio en pausa operativa",
    healthIndex,
    trend: business.status === "inactiva" ? "down" : "up",
    trendLabel: business.status === "inactiva" ? "-4.2%" : "+6.8%",
    lastUpdatedLabel: "Hoy · 09:40 (demo)",
    riskLevel:
      business.status === "activa"
        ? "Bajo"
        : business.status === "pendiente"
          ? "Medio"
          : "Alto",
    operationalStatus,
    operationalStatusLabel: businessOperationalStatusLabels[operationalStatus],
  };
}

function buildScore(business: Business): BusinessScoreSnapshot {
  const score =
    business.status === "activa"
      ? 88
      : business.status === "pendiente"
        ? 61
        : 38;
  const band = resolveBusinessScoreBand(score);

  return {
    score,
    band,
    summary:
      band === "excelente"
        ? "Rendimiento sólido en clientes, eventos y fidelización (demo)."
        : band === "bueno"
          ? "Buen desempeño con margen de mejora en campañas (demo)."
          : band === "aceptable"
            ? "Señales mixtas; conviene priorizar acciones Ops (demo)."
            : "Indicadores críticos; requiere intervención inmediata (demo).",
  };
}

function buildCustomers(business: Business): MetricTile[] {
  const seed = hashSeed(business.id);
  return [
    {
      id: "reg",
      label: "Clientes registrados",
      value: String(1200 + (seed % 800)),
      tone: "neutral",
    },
    {
      id: "act",
      label: "Clientes activos",
      value: String(640 + (seed % 320)),
      tone: "positive",
    },
    {
      id: "vip",
      label: "Clientes VIP",
      value: String(48 + (seed % 40)),
      tone: "positive",
    },
    {
      id: "rec",
      label: "Clientes recurrentes",
      value: `${62 + (seed % 18)}%`,
      tone: "neutral",
    },
    {
      id: "new",
      label: "Clientes nuevos",
      value: String(36 + (seed % 24)),
      tone: "positive",
    },
    {
      id: "growth",
      label: "Crecimiento mensual",
      value: `+${5 + (seed % 9)}.${seed % 9}%`,
      tone: "positive",
    },
  ];
}

function buildEvents(business: Business): MetricTile[] {
  return [
    {
      id: "active",
      label: "Eventos activos",
      value: business.status === "activa" ? "4" : "1",
      tone: "neutral",
    },
    {
      id: "next",
      label: "Próximo evento",
      value: "Viernes Premium",
      hint: "En 2 días (demo)",
      tone: "neutral",
    },
    {
      id: "avg",
      label: "Asistencia media",
      value: `${68 + (hashSeed(business.name) % 20)}%`,
      tone: "positive",
    },
    {
      id: "last",
      label: "Último evento",
      value: "Afterwork Gold",
      hint: "Hace 5 días",
      tone: "neutral",
    },
    {
      id: "occupancy",
      label: "Ocupación media",
      value: `${71 + (hashSeed(business.city) % 15)}%`,
      tone: "positive",
    },
  ];
}

function buildCampaigns(business: Business): MetricTile[] {
  return [
    {
      id: "active",
      label: "Campañas activas",
      value: business.status === "activa" ? "3" : "0",
      tone: "positive",
    },
    {
      id: "done",
      label: "Campañas finalizadas",
      value: "11",
      tone: "neutral",
    },
    {
      id: "conv",
      label: "Conversión",
      value: `${8 + (hashSeed(business.id) % 7)}.${hashSeed(business.id) % 9}%`,
      tone: "positive",
    },
    {
      id: "best",
      label: "Mejor campaña",
      value: "VIP Thursdays",
      tone: "positive",
    },
    {
      id: "perf",
      label: "Rendimiento general",
      value: "+14% vs mes anterior",
      tone: "positive",
    },
  ];
}

function buildRrpp(business: Business): MetricTile[] {
  return [
    {
      id: "active",
      label: "RRPP activos",
      value: String(6 + (hashSeed(business.id) % 5)),
      tone: "neutral",
    },
    {
      id: "captured",
      label: "Clientes captados",
      value: String(120 + (hashSeed(business.name) % 90)),
      tone: "positive",
    },
    {
      id: "conv",
      label: "Conversión",
      value: `${18 + (hashSeed(business.city) % 12)}%`,
      tone: "positive",
    },
    {
      id: "best",
      label: "Mejor RRPP",
      value: "Laura M. (demo)",
      tone: "neutral",
    },
    {
      id: "weekly",
      label: "Actividad semanal",
      value: `${40 + (hashSeed(business.id) % 30)} check-ins`,
      tone: "neutral",
    },
  ];
}

function buildLoyalty(business: Business): MetricTile[] {
  return [
    {
      id: "users",
      label: "Usuarios fidelizados",
      value: String(820 + (hashSeed(business.id) % 400)),
      tone: "positive",
    },
    {
      id: "rewards",
      label: "Premios entregados",
      value: String(64 + (hashSeed(business.name) % 50)),
      tone: "neutral",
    },
    {
      id: "level",
      label: "Nivel medio",
      value: "Oro",
      tone: "positive",
    },
    {
      id: "recurrence",
      label: "Recurrencia",
      value: `${70 + (hashSeed(business.city) % 16)}%`,
      tone: "positive",
    },
    {
      id: "participation",
      label: "Participación",
      value: `${54 + (hashSeed(business.id) % 20)}%`,
      tone: "neutral",
    },
  ];
}

function buildSales(business: Business): MetricTile[] {
  const ticket = business.averageTicket;
  return [
    {
      id: "revenue",
      label: "Facturación mensual",
      value: `${(32 + (hashSeed(business.id) % 28)).toLocaleString("es-ES")}.400 €`,
      tone: "positive",
    },
    {
      id: "ticket",
      label: "Ticket medio",
      value: `${ticket} €`,
      tone: "neutral",
    },
    {
      id: "consumptions",
      label: "Consumos",
      value: String(1800 + (hashSeed(business.name) % 900)),
      tone: "neutral",
    },
    {
      id: "estimated",
      label: "Ingresos estimados",
      value: `${(38 + (hashSeed(business.city) % 20)).toLocaleString("es-ES")}.200 €`,
      hint: "Proyección demo 30 días",
      tone: "positive",
    },
    {
      id: "variation",
      label: "Variación mensual",
      value: business.status === "inactiva" ? "-9.4%" : "+7.2%",
      tone: business.status === "inactiva" ? "negative" : "positive",
    },
  ];
}

function buildAlerts(business: Business): BusinessAlertItem[] {
  return [
    {
      id: "risk_1",
      kind: "riesgo",
      title: "Baja ocupación midweek",
      detail: `Los martes en ${business.city} están un 12% bajo el objetivo (demo).`,
      status: "Abierta",
      priority: "alta",
    },
    {
      id: "opp_1",
      kind: "oportunidad",
      title: "Hueco Afterwork",
      detail: "Demanda estimada alta entre 19:00 y 21:00 los jueves (demo).",
      status: "Detectada",
      priority: "media",
    },
    {
      id: "act_1",
      kind: "accion",
      title: "Reactivar VIP inactivos",
      detail: "14 clientes VIP sin visita en 21 días (demo).",
      status: "Recomendada",
      priority: "alta",
    },
    {
      id: "opp_2",
      kind: "oportunidad",
      title: "Campaña cócteles",
      detail: "Rendimiento por encima de la media de red (demo).",
      status: "En seguimiento",
      priority: "baja",
    },
  ];
}

/**
 * Full Business Intelligence 360° demo bundle.
 * Swap internals later for API responses without changing UI contracts.
 */
export function getBusiness360Bundle(business: Business): Business360Bundle {
  return {
    executive: buildExecutive(business),
    score: buildScore(business),
    customers: buildCustomers(business),
    events: buildEvents(business),
    campaigns: buildCampaigns(business),
    rrpp: buildRrpp(business),
    loyalty: buildLoyalty(business),
    sales: buildSales(business),
    alerts: buildAlerts(business),
    quickActions: [
      { id: "qa_event", label: "Nuevo evento", icon: "calendar", actionKey: "new_event" },
      {
        id: "qa_campaign",
        label: "Nueva campaña",
        icon: "sparkles",
        actionKey: "new_campaign",
      },
      {
        id: "qa_customer",
        label: "Nuevo cliente",
        icon: "users",
        actionKey: "new_customer",
      },
      { id: "qa_rrpp", label: "Añadir RRPP", icon: "plus", actionKey: "add_rrpp" },
      {
        id: "qa_analytics",
        label: "Ver analítica",
        icon: "chart",
        actionKey: "view_analytics",
      },
      {
        id: "qa_promo",
        label: "Crear promoción",
        icon: "gift",
        actionKey: "create_promo",
      },
    ],
    timeline: [
      {
        id: "tl_1",
        title: "Cliente VIP registrado",
        description: `${business.name} · alta Diamante (demo)`,
        relativeTime: "Hace 1 h",
        icon: "award",
      },
      {
        id: "tl_2",
        title: "Evento publicado",
        description: "Viernes Premium visible en cartelera (demo)",
        relativeTime: "Hace 3 h",
        icon: "calendar",
      },
      {
        id: "tl_3",
        title: "Campaña iniciada",
        description: "VIP Thursdays en marcha (demo)",
        relativeTime: "Ayer",
        icon: "sparkles",
      },
      {
        id: "tl_4",
        title: "Premio entregado",
        description: "Canje de nivel Oro (demo)",
        relativeTime: "Hace 2 días",
        icon: "gift",
      },
      {
        id: "tl_5",
        title: "Nuevo RRPP",
        description: "Incorporación al equipo de puerta (demo)",
        relativeTime: "Hace 3 días",
        icon: "users",
      },
      {
        id: "tl_6",
        title: "Actualización de objetivos",
        description: "Meta mensual revisada por Ops (demo)",
        relativeTime: "Hace 4 días",
        icon: "trending-up",
      },
    ],
  };
}
