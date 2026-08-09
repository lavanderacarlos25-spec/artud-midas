import type {
  AnalyticsChartsBundle,
  AnalyticsComparisonItem,
  AnalyticsDemoBundle,
  AnalyticsFiltersState,
  AnalyticsKpi,
  AnalyticsPerformanceItem,
  AnalyticsPeriod,
  AnalyticsPredictionItem,
  AnalyticsTrendItem,
} from "@/types/analytics";

export const analyticsPeriodLabels: Record<AnalyticsPeriod, string> = {
  hoy: "Hoy",
  semana: "Semana",
  mes: "Mes",
  trimestre: "Trimestre",
  ano: "Año",
};

export const analyticsPeriodOptions: AnalyticsPeriod[] = [
  "hoy",
  "semana",
  "mes",
  "trimestre",
  "ano",
];

export const defaultAnalyticsFilters: AnalyticsFiltersState = {
  period: "mes",
  businessId: "all",
  cityId: "all",
  businessTypeId: "all",
};

function getKpis(): AnalyticsKpi[] {
  return [
    {
      id: "revenue",
      label: "Facturación",
      value: "48.250 €",
      change: "+12.4%",
      trend: "up",
    },
    {
      id: "forecast",
      label: "Ingresos previstos",
      value: "52.800 €",
      change: "+6.1%",
      trend: "up",
    },
    {
      id: "active-customers",
      label: "Clientes activos",
      value: "1.284",
      change: "+8.2%",
      trend: "up",
    },
    {
      id: "new-customers",
      label: "Clientes nuevos",
      value: "146",
      change: "+11.0%",
      trend: "up",
    },
    {
      id: "recurrence",
      label: "Recurrencia",
      value: "73%",
      change: "+2.4%",
      trend: "up",
    },
    {
      id: "ticket",
      label: "Ticket medio",
      value: "42 €",
      change: "+1.8%",
      trend: "up",
    },
    {
      id: "occupancy",
      label: "Ocupación",
      value: "78%",
      change: "-3.1%",
      trend: "down",
    },
    {
      id: "events",
      label: "Eventos activos",
      value: "6",
      change: "+2",
      trend: "up",
    },
    {
      id: "campaigns",
      label: "Campañas",
      value: "4",
      change: "0",
      trend: "flat",
    },
    {
      id: "rrpp",
      label: "RRPP activos",
      value: "9",
      change: "+1",
      trend: "up",
    },
  ];
}

function getCharts(): AnalyticsChartsBundle {
  return {
    monthlyRevenue: [
      { label: "Ene", value: 31200 },
      { label: "Feb", value: 29800 },
      { label: "Mar", value: 34500 },
      { label: "Abr", value: 36100 },
      { label: "May", value: 38900 },
      { label: "Jun", value: 42100 },
      { label: "Jul", value: 48250 },
    ],
    newCustomers: [
      { label: "Ene", value: 98 },
      { label: "Feb", value: 112 },
      { label: "Mar", value: 104 },
      { label: "Abr", value: 121 },
      { label: "May", value: 133 },
      { label: "Jun", value: 128 },
      { label: "Jul", value: 146 },
    ],
    recurringCustomers: [
      { label: "Ene", value: 62 },
      { label: "Feb", value: 64 },
      { label: "Mar", value: 66 },
      { label: "Abr", value: 68 },
      { label: "May", value: 70 },
      { label: "Jun", value: 71 },
      { label: "Jul", value: 73 },
    ],
    weeklyOccupancy: [
      { label: "Lun", value: 42 },
      { label: "Mar", value: 38 },
      { label: "Mié", value: 51 },
      { label: "Jue", value: 67 },
      { label: "Vie", value: 88 },
      { label: "Sáb", value: 94 },
      { label: "Dom", value: 61 },
    ],
    revenueByEvent: [
      { name: "Viernes Premium", value: 12800 },
      { name: "Guest DJ", value: 11200 },
      { name: "Afterwork Gold", value: 6400 },
      { name: "Brunch Neon", value: 3900 },
      { name: "Ladies Night", value: 5100 },
    ],
    salesByChannel: [
      { name: "Puerta", value: 38 },
      { name: "RRPP", value: 27 },
      { name: "App", value: 18 },
      { name: "Reservas", value: 12 },
      { name: "Otros", value: 5 },
    ],
    campaignConversion: [
      { name: "VIP Thursdays", value: 14.2 },
      { name: "Afterwork", value: 11.8 },
      { name: "Cócteles", value: 9.4 },
      { name: "Midweek Jazz", value: 6.1 },
      { name: "Reactivación VIP", value: 12.5 },
    ],
    vipDistribution: [
      { name: "Bronce", value: 420 },
      { name: "Plata", value: 310 },
      { name: "Oro", value: 240 },
      { name: "Platino", value: 140 },
      { name: "Diamante", value: 74 },
    ],
  };
}

function getPerformance(): AnalyticsPerformanceItem[] {
  return [
    { id: "best-day", label: "Mejor día", value: "Sábado" },
    { id: "worst-day", label: "Peor día", value: "Martes" },
    { id: "peak-hour", label: "Hora pico", value: "01:00 – 02:30" },
    { id: "low-hour", label: "Hora baja", value: "19:00 – 20:30" },
    {
      id: "top-event",
      label: "Evento con mayor facturación",
      value: "Viernes Premium · 12.800 €",
    },
    {
      id: "top-campaign",
      label: "Campaña con mayor ROI",
      value: "VIP Thursdays · +214%",
    },
    {
      id: "top-rrpp",
      label: "RRPP destacado",
      value: "Laura M. · 86 captaciones",
    },
    {
      id: "top-vip",
      label: "Cliente VIP destacado",
      value: "Andrea Castillo · Diamante",
    },
  ];
}

function getComparisons(): AnalyticsComparisonItem[] {
  return [
    {
      id: "vs-week",
      label: "Semana anterior",
      current: "12.480 €",
      previous: "11.210 €",
      changePercent: 11.3,
      direction: "up",
    },
    {
      id: "vs-month",
      label: "Mes anterior",
      current: "48.250 €",
      previous: "42.100 €",
      changePercent: 14.6,
      direction: "up",
    },
    {
      id: "vs-quarter",
      label: "Trimestre anterior",
      current: "129.400 €",
      previous: "131.200 €",
      changePercent: -1.4,
      direction: "down",
    },
    {
      id: "vs-customers",
      label: "Clientes activos vs mes anterior",
      current: "1.284",
      previous: "1.186",
      changePercent: 8.3,
      direction: "up",
    },
    {
      id: "vs-occupancy",
      label: "Ocupación vs mes anterior",
      current: "78%",
      previous: "81%",
      changePercent: -3.7,
      direction: "down",
    },
    {
      id: "vs-ticket",
      label: "Ticket medio vs mes anterior",
      current: "42 €",
      previous: "42 €",
      changePercent: 0,
      direction: "flat",
    },
  ];
}

function getTrends(): AnalyticsTrendItem[] {
  return [
    {
      id: "t1",
      title: "Facturación creciendo",
      detail: "Séptimo mes consecutivo al alza en la red demo.",
      tone: "positive",
    },
    {
      id: "t2",
      title: "Clientes VIP aumentando",
      detail: "+9% de perfiles Oro y Diamante este trimestre.",
      tone: "positive",
    },
    {
      id: "t3",
      title: "Menor ocupación martes",
      detail: "El martes sigue siendo el día más flojo de la semana.",
      tone: "warning",
    },
    {
      id: "t4",
      title: "Mayor conversión jueves",
      detail: "Las campañas midweek convierten mejor los jueves.",
      tone: "positive",
    },
    {
      id: "t5",
      title: "Mayor consumo viernes",
      detail: "Ticket medio pico entre 00:30 y 02:00 los viernes.",
      tone: "neutral",
    },
  ];
}

function getPredictions(): AnalyticsPredictionItem[] {
  return [
    {
      id: "p1",
      title: "Alta probabilidad de llenar el viernes",
      detail:
        "El modelo demo estima ocupación superior al 90% con la cartelera actual.",
      confidenceLabel: "Confianza demo · 84%",
    },
    {
      id: "p2",
      title: "Se recomienda lanzar campaña el martes",
      detail:
        "Un incentivo midweek podría recuperar 8–12 puntos de ocupación.",
      confidenceLabel: "Confianza demo · 77%",
    },
    {
      id: "p3",
      title: "Posible aumento del ticket medio",
      detail:
        "Upsell de cócteles premium en afterwork muestra potencial +5%.",
      confidenceLabel: "Confianza demo · 71%",
    },
    {
      id: "p4",
      title: "Mayor potencial en clientes Oro",
      detail:
        "El segmento Oro concentra la mejor ratio de conversión a Diamante.",
      confidenceLabel: "Confianza demo · 79%",
    },
  ];
}

/**
 * Demo analytics bundle. Filters are UI-ready; data stays static until APIs exist.
 */
export function getAnalyticsDemoBundle(
  filters: AnalyticsFiltersState = defaultAnalyticsFilters,
): AnalyticsDemoBundle {
  void filters;

  return {
    kpis: getKpis(),
    charts: getCharts(),
    performance: getPerformance(),
    comparisons: getComparisons(),
    trends: getTrends(),
    predictions: getPredictions(),
    businesses: [
      { id: "all", label: "Todas las empresas" },
      { id: "biz_001", label: "Luna Lounge" },
      { id: "biz_002", label: "Opium Barcelona" },
      { id: "biz_008", label: "Costa Neon" },
    ],
    cities: [
      { id: "all", label: "Todas las ciudades" },
      { id: "madrid", label: "Madrid" },
      { id: "barcelona", label: "Barcelona" },
      { id: "alicante", label: "Alicante" },
    ],
    businessTypes: [
      { id: "all", label: "Todos los tipos" },
      { id: "discoteca", label: "Discoteca" },
      { id: "lounge", label: "Lounge" },
      { id: "rooftop", label: "Rooftop" },
    ],
  };
}
