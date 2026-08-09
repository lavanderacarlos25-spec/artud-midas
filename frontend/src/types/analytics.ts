export type AnalyticsPeriod = "hoy" | "semana" | "mes" | "trimestre" | "ano";

export type AnalyticsTrendDirection = "up" | "down" | "flat";

export type AnalyticsKpi = {
  id: string;
  label: string;
  value: string;
  change: string;
  trend: AnalyticsTrendDirection;
};

export type AnalyticsChartPoint = {
  label: string;
  value: number;
  secondary?: number;
};

export type AnalyticsNamedValue = {
  name: string;
  value: number;
};

export type AnalyticsPerformanceItem = {
  id: string;
  label: string;
  value: string;
};

export type AnalyticsComparisonItem = {
  id: string;
  label: string;
  current: string;
  previous: string;
  changePercent: number;
  direction: AnalyticsTrendDirection;
};

export type AnalyticsTrendItem = {
  id: string;
  title: string;
  detail: string;
  tone: "positive" | "warning" | "neutral";
};

export type AnalyticsPredictionItem = {
  id: string;
  title: string;
  detail: string;
  confidenceLabel: string;
};

export type AnalyticsFilterOption = {
  id: string;
  label: string;
};

export type AnalyticsFiltersState = {
  period: AnalyticsPeriod;
  businessId: string;
  cityId: string;
  businessTypeId: string;
};

export type AnalyticsChartsBundle = {
  monthlyRevenue: AnalyticsChartPoint[];
  newCustomers: AnalyticsChartPoint[];
  recurringCustomers: AnalyticsChartPoint[];
  weeklyOccupancy: AnalyticsChartPoint[];
  revenueByEvent: AnalyticsNamedValue[];
  salesByChannel: AnalyticsNamedValue[];
  campaignConversion: AnalyticsNamedValue[];
  vipDistribution: AnalyticsNamedValue[];
};

export type AnalyticsDemoBundle = {
  kpis: AnalyticsKpi[];
  charts: AnalyticsChartsBundle;
  performance: AnalyticsPerformanceItem[];
  comparisons: AnalyticsComparisonItem[];
  trends: AnalyticsTrendItem[];
  predictions: AnalyticsPredictionItem[];
  businesses: AnalyticsFilterOption[];
  cities: AnalyticsFilterOption[];
  businessTypes: AnalyticsFilterOption[];
};
