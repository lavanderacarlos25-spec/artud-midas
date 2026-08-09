import type { Business } from "@/types/business";
import type {
  BusinessHealthLevel,
  BusinessHealthSnapshot,
  BusinessIntelligenceInsight,
} from "@/types/business-intelligence";

export const businessHealthLevelLabels: Record<BusinessHealthLevel, string> = {
  excelente: "Excelente",
  bueno: "Bueno",
  mejorable: "Mejorable",
  riesgo: "Riesgo",
};

export function resolveBusinessHealthLevel(score: number): BusinessHealthLevel {
  if (score >= 85) {
    return "excelente";
  }
  if (score >= 70) {
    return "bueno";
  }
  if (score >= 50) {
    return "mejorable";
  }
  return "riesgo";
}

/**
 * Demo health snapshot. Ready to swap for live analytics later.
 */
export function getBusinessHealthSnapshot(
  _business: Business,
): BusinessHealthSnapshot {
  const score = 87;
  const maxScore = 100;

  return {
    score,
    maxScore,
    level: resolveBusinessHealthLevel(score),
    indicators: [
      {
        id: "revenue",
        label: "Facturación",
        value: "+12%",
        tone: "positive",
      },
      {
        id: "active-customers",
        label: "Clientes activos",
        value: "+8%",
        tone: "positive",
      },
      {
        id: "recurrence",
        label: "Recurrencia",
        value: "73%",
        tone: "neutral",
      },
      {
        id: "goals",
        label: "Objetivos",
        value: "4/5 cumplidos",
        tone: "positive",
      },
      {
        id: "marketing",
        label: "Marketing",
        value: "Activo",
        tone: "positive",
      },
      {
        id: "ai",
        label: "IA",
        value: "Operativa",
        tone: "positive",
      },
      {
        id: "risk",
        label: "Riesgo",
        value: "Bajo",
        tone: "neutral",
      },
    ],
  };
}

/**
 * Demo AI recommendations. Structure prepared for future model output.
 */
export function getBusinessIntelligenceInsights(
  _business: Business,
): BusinessIntelligenceInsight[] {
  return [
    {
      id: "insight_thursday_attendance",
      severity: "warning",
      message:
        "La asistencia de los jueves está un 15% por debajo del objetivo.",
    },
    {
      id: "insight_vip_inactive",
      severity: "action",
      message: "Los clientes VIP llevan varios días sin visitar el local.",
    },
    {
      id: "insight_cocktail_campaign",
      severity: "positive",
      message:
        "La campaña de cócteles está funcionando por encima de la media.",
    },
    {
      id: "insight_afterwork",
      severity: "opportunity",
      message: "Se recomienda lanzar un evento Afterwork la próxima semana.",
    },
  ];
}
