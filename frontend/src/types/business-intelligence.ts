export type BusinessHealthLevel =
  | "excelente"
  | "bueno"
  | "mejorable"
  | "riesgo";

export type BusinessHealthIndicatorTone =
  | "positive"
  | "neutral"
  | "warning"
  | "negative";

export type BusinessHealthIndicator = {
  id: string;
  label: string;
  value: string;
  tone: BusinessHealthIndicatorTone;
};

export type BusinessHealthSnapshot = {
  score: number;
  maxScore: number;
  level: BusinessHealthLevel;
  indicators: BusinessHealthIndicator[];
};

export type BusinessIntelligenceSeverity =
  | "opportunity"
  | "warning"
  | "positive"
  | "action";

export type BusinessIntelligenceInsight = {
  id: string;
  severity: BusinessIntelligenceSeverity;
  message: string;
};
