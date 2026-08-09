import type { Customer, LoyaltyLevel } from "@/types/customer";
import type { Customer360Bundle } from "@/types/customer-crm";

export const customerFrequencyLabels = {
  alta: "Alta",
  media: "Media",
  baja: "Baja",
} as const;

export const customerRiskLabels = {
  bajo: "Bajo",
  medio: "Medio",
  alto: "Alto",
} as const;

function hashSeed(input: string): number {
  let hash = 0;
  for (let i = 0; i < input.length; i += 1) {
    hash = (hash * 31 + input.charCodeAt(i)) % 1000;
  }
  return hash;
}

function segmentForLevel(level: LoyaltyLevel): string {
  if (level === "diamante" || level === "platino") {
    return "VIP alto valor";
  }
  if (level === "oro") {
    return "Engagement medio-alto";
  }
  if (level === "plata") {
    return "Recurrente emergente";
  }
  return "Nuevo / exploración";
}

/** Builds a Customer 360° demo profile from list customer data. */
export function getCustomer360Bundle(customer: Customer): Customer360Bundle {
  const seed = hashSeed(customer.id);
  const churn =
    customer.riskLevel === "alto"
      ? 72
      : customer.riskLevel === "medio"
        ? 41
        : 14;

  return {
    customer,
    executiveSummary:
      customer.status === "vip"
        ? `${customer.name} es un perfil de alto valor con fuerte recurrencia en ${customer.businessName}.`
        : customer.status === "inactivo"
          ? `${customer.name} muestra señales de desenganche. Conviene una reactivación personalizada.`
          : `${customer.name} mantiene un ritmo estable de visitas en ${customer.city}.`,
    healthLabel:
      customer.riskLevel === "bajo"
        ? "Salud excelente"
        : customer.riskLevel === "medio"
          ? "Salud aceptable"
          : "Riesgo de abandono",
    kpis: [
      {
        id: "visits",
        label: "Visitas",
        value: customer.visits.toLocaleString("es-ES"),
      },
      {
        id: "spend",
        label: "Consumo total",
        value: `${customer.totalSpend.toLocaleString("es-ES")} €`,
      },
      {
        id: "points",
        label: "Puntos",
        value: customer.points.toLocaleString("es-ES"),
      },
      {
        id: "ticket",
        label: "Ticket medio",
        value: `${Math.max(18, Math.round(customer.totalSpend / Math.max(customer.visits, 1)))} €`,
      },
      {
        id: "frequency",
        label: "Frecuencia",
        value: customerFrequencyLabels[customer.frequency],
      },
      {
        id: "risk",
        label: "Riesgo",
        value: customerRiskLabels[customer.riskLevel],
      },
    ],
    valueTiles: [
      {
        id: "ltv",
        label: "Valor de vida (LTV)",
        value: `${(customer.totalSpend * 1.8 + seed).toLocaleString("es-ES", { maximumFractionDigits: 0 })} €`,
        hint: "Estimación demo",
      },
      {
        id: "avg-month",
        label: "Gasto medio mensual",
        value: `${Math.round(customer.totalSpend / 8 + seed / 20)} €`,
      },
      {
        id: "rank",
        label: "Percentil de valor",
        value: `Top ${Math.max(5, 40 - (seed % 30))}%`,
      },
    ],
    timeline: [
      {
        id: "tl1",
        title: "Última visita registrada",
        detail: `${customer.businessName} · check-in demo`,
        relativeTime: "Reciente",
        icon: "map-pin",
      },
      {
        id: "tl2",
        title: "Campaña recibida",
        detail: "VIP Thursdays · apertura (demo)",
        relativeTime: "Hace 3 días",
        icon: "sparkles",
      },
      {
        id: "tl3",
        title: "Recompensa canjeada",
        detail: `Copa cortesía nivel ${customer.level}`,
        relativeTime: "Hace 1 semana",
        icon: "gift",
      },
      {
        id: "tl4",
        title: "Evento asistido",
        detail: "Viernes Premium",
        relativeTime: "Hace 2 semanas",
        icon: "calendar",
      },
      {
        id: "tl5",
        title: "Alta en fidelización",
        detail: "Nivel inicial registrado",
        relativeTime: customer.registeredAt,
        icon: "award",
      },
    ],
    purchases: [
      {
        id: "p1",
        label: "Mesa VIP + botella",
        amount: `${120 + (seed % 80)} €`,
        dateLabel: "Hace 4 días",
      },
      {
        id: "p2",
        label: "Cócteles + afterwork",
        amount: `${48 + (seed % 30)} €`,
        dateLabel: "Hace 9 días",
      },
      {
        id: "p3",
        label: "Entrada + consumición",
        amount: `${28 + (seed % 20)} €`,
        dateLabel: "Hace 16 días",
      },
    ],
    events: [
      {
        id: "e1",
        name: "Viernes Premium",
        dateLabel: "Vie 26 jul",
        status: "Asistió",
      },
      {
        id: "e2",
        name: "Afterwork Gold",
        dateLabel: "Jue 18 jul",
        status: "Asistió",
      },
      {
        id: "e3",
        name: "Guest DJ Night",
        dateLabel: "Sáb 12 jul",
        status: customer.status === "inactivo" ? "No show" : "Asistió",
      },
    ],
    campaigns: [
      {
        id: "c1",
        name: "VIP Thursdays",
        result: "Abierta · convertida",
      },
      {
        id: "c2",
        name: "Reactivación midweek",
        result: customer.riskLevel === "alto" ? "Pendiente" : "Ignorada",
      },
      {
        id: "c3",
        name: "Cócteles premium",
        result: "Clic · sin reserva",
      },
    ],
    rewards: [
      {
        id: "r1",
        name: "Copa cortesía",
        dateLabel: "Hace 7 días",
      },
      {
        id: "r2",
        name: "Acceso fila preferente",
        dateLabel: "Hace 21 días",
      },
      {
        id: "r3",
        name: "Upgrade mesa",
        dateLabel: "Hace 45 días",
      },
    ],
    intelligence: {
      churnProbability: `${churn}%`,
      churnLabel:
        churn >= 60
          ? "Alto riesgo de abandono"
          : churn >= 35
            ? "Riesgo moderado"
            : "Bajo riesgo",
      nextVisitPrediction:
        customer.frequency === "alta"
          ? "En 3–5 días"
          : customer.frequency === "media"
            ? "En 7–12 días"
            : "Incierto · +21 días",
      ltv: `${(customer.totalSpend * 1.8 + seed).toLocaleString("es-ES", { maximumFractionDigits: 0 })} €`,
      segment: segmentForLevel(customer.level),
      recommendations: [
        customer.riskLevel === "alto"
          ? "Enviar incentivo personalizado de reactivación en 24 h."
          : "Invitar al próximo evento premium alineado a su nivel.",
        `Asignar seguimiento a RRPP ${customer.rrppName}.`,
        customer.level === "oro" || customer.level === "plata"
          ? "Proponer misión de ascenso de nivel con premio claro."
          : "Proteger relación VIP con detalle de hospitalidad.",
      ],
    },
  };
}
