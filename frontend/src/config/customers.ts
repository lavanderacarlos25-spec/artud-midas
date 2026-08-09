import type {
  Customer,
  CustomerFilter,
  CustomerFilterOption,
  CustomerMetric,
} from "@/types/customer";

export const customerStatusFilters: CustomerFilter[] = [
  "todos",
  "activo",
  "vip",
  "inactivo",
];

export const customerFilterLabels: Record<CustomerFilter, string> = {
  todos: "Todos",
  activo: "Activos",
  vip: "VIP",
  inactivo: "Inactivos",
};

export const customerStatusLabels: Record<
  Exclude<CustomerFilter, "todos">,
  string
> = {
  activo: "Activo",
  vip: "VIP",
  inactivo: "Inactivo",
};

export const customerLevelLabels = {
  bronce: "Bronce",
  plata: "Plata",
  oro: "Oro",
  platino: "Platino",
  diamante: "Diamante",
} as const;

/** @deprecated Prefer customerLevelLabels — kept for existing badge imports. */
export const loyaltyLevelLabels = customerLevelLabels;

export const customerBusinessFilterOptions: CustomerFilterOption[] = [
  { id: "all", label: "Todas las empresas" },
  { id: "midnight", label: "Midnight Club" },
  { id: "aurora", label: "Aurora Lounge" },
  { id: "velvet", label: "Velvet Room" },
  { id: "pulse", label: "Pulse Hall" },
];

export const customerCityFilterOptions: CustomerFilterOption[] = [
  { id: "all", label: "Todas las ciudades" },
  { id: "madrid", label: "Madrid" },
  { id: "barcelona", label: "Barcelona" },
  { id: "valencia", label: "Valencia" },
  { id: "sevilla", label: "Sevilla" },
  { id: "malaga", label: "Málaga" },
  { id: "bilbao", label: "Bilbao" },
  { id: "zaragoza", label: "Zaragoza" },
  { id: "alicante", label: "Alicante" },
  { id: "granada", label: "Granada" },
  { id: "murcia", label: "Murcia" },
  { id: "valladolid", label: "Valladolid" },
  { id: "santander", label: "Santander" },
];

export const customerLevelFilterOptions: CustomerFilterOption[] = [
  { id: "all", label: "Todos los niveles" },
  { id: "bronce", label: "Bronce" },
  { id: "plata", label: "Plata" },
  { id: "oro", label: "Oro" },
  { id: "platino", label: "Platino" },
  { id: "diamante", label: "Diamante" },
];

export const customerRrppFilterOptions: CustomerFilterOption[] = [
  { id: "all", label: "Todos los RRPP" },
  { id: "laura", label: "Laura Méndez" },
  { id: "carlos", label: "Carlos Ruiz" },
  { id: "nina", label: "Nina Ortega" },
  { id: "marco", label: "Marco Silva" },
];

export const customerFrequencyFilterOptions: CustomerFilterOption[] = [
  { id: "all", label: "Toda frecuencia" },
  { id: "alta", label: "Alta" },
  { id: "media", label: "Media" },
  { id: "baja", label: "Baja" },
];

export const customerRiskFilterOptions: CustomerFilterOption[] = [
  { id: "all", label: "Todo riesgo" },
  { id: "bajo", label: "Bajo" },
  { id: "medio", label: "Medio" },
  { id: "alto", label: "Alto" },
];

export const demoCustomers: Customer[] = [
  {
    id: "cus_001",
    name: "Lucía Martín",
    city: "Madrid",
    email: "lucia.martin@email.es",
    phone: "+34 612 345 678",
    level: "oro",
    points: 8450,
    visits: 42,
    totalSpend: 3840,
    registeredAt: "2025-03-12",
    lastVisit: "2026-07-18",
    status: "vip",
    avatarInitials: "LM",
    avatarColor: "bg-gold/20 text-gold-light",
    businessName: "Midnight Club",
    rrppName: "Laura Méndez",
    frequency: "alta",
    riskLevel: "bajo",
  },
  {
    id: "cus_002",
    name: "Carlos Ruiz",
    city: "Barcelona",
    email: "carlos.ruiz@email.es",
    phone: "+34 623 891 204",
    level: "plata",
    points: 2150,
    visits: 18,
    totalSpend: 1260,
    registeredAt: "2025-11-03",
    lastVisit: "2026-07-15",
    status: "activo",
    avatarInitials: "CR",
    avatarColor: "bg-sky-500/20 text-sky-300",
    businessName: "Aurora Lounge",
    rrppName: "Carlos Ruiz",
    frequency: "media",
    riskLevel: "bajo",
  },
  {
    id: "cus_003",
    name: "María López",
    city: "Valencia",
    email: "maria.lopez@email.es",
    phone: "+34 634 112 887",
    level: "diamante",
    points: 15200,
    visits: 89,
    totalSpend: 11240,
    registeredAt: "2024-06-21",
    lastVisit: "2026-07-19",
    status: "vip",
    avatarInitials: "ML",
    avatarColor: "bg-violet-500/20 text-violet-300",
    businessName: "Velvet Room",
    rrppName: "Nina Ortega",
    frequency: "alta",
    riskLevel: "bajo",
  },
  {
    id: "cus_004",
    name: "Javier Soto",
    city: "Sevilla",
    email: "javier.soto@email.es",
    phone: "+34 645 778 301",
    level: "bronce",
    points: 420,
    visits: 4,
    totalSpend: 210,
    registeredAt: "2026-06-02",
    lastVisit: "2026-06-28",
    status: "activo",
    avatarInitials: "JS",
    avatarColor: "bg-emerald-500/20 text-emerald-300",
    businessName: "Pulse Hall",
    rrppName: "Marco Silva",
    frequency: "baja",
    riskLevel: "medio",
  },
  {
    id: "cus_005",
    name: "Elena Navarro",
    city: "Málaga",
    email: "elena.navarro@email.es",
    phone: "+34 656 442 019",
    level: "bronce",
    points: 640,
    visits: 6,
    totalSpend: 380,
    registeredAt: "2026-07-05",
    lastVisit: "2026-07-12",
    status: "activo",
    avatarInitials: "EN",
    avatarColor: "bg-amber-500/20 text-amber-300",
    businessName: "Midnight Club",
    rrppName: "Laura Méndez",
    frequency: "media",
    riskLevel: "bajo",
  },
  {
    id: "cus_006",
    name: "Diego Fernández",
    city: "Bilbao",
    email: "diego.fernandez@email.es",
    phone: "+34 667 903 554",
    level: "oro",
    points: 4980,
    visits: 33,
    totalSpend: 2760,
    registeredAt: "2025-05-17",
    lastVisit: "2026-04-11",
    status: "inactivo",
    avatarInitials: "DF",
    avatarColor: "bg-indigo-500/20 text-indigo-300",
    businessName: "Aurora Lounge",
    rrppName: "Carlos Ruiz",
    frequency: "baja",
    riskLevel: "alto",
  },
  {
    id: "cus_007",
    name: "Sofía Romero",
    city: "Zaragoza",
    email: "sofia.romero@email.es",
    phone: "+34 678 215 880",
    level: "platino",
    points: 9760,
    visits: 58,
    totalSpend: 6540,
    registeredAt: "2024-12-01",
    lastVisit: "2026-07-16",
    status: "vip",
    avatarInitials: "SR",
    avatarColor: "bg-fuchsia-500/20 text-fuchsia-300",
    businessName: "Velvet Room",
    rrppName: "Nina Ortega",
    frequency: "alta",
    riskLevel: "bajo",
  },
  {
    id: "cus_008",
    name: "Pablo Iglesias",
    city: "Alicante",
    email: "pablo.iglesias@email.es",
    phone: "+34 689 334 126",
    level: "plata",
    points: 3010,
    visits: 22,
    totalSpend: 1680,
    registeredAt: "2026-02-14",
    lastVisit: "2026-07-08",
    status: "activo",
    avatarInitials: "PI",
    avatarColor: "bg-teal-500/20 text-teal-300",
    businessName: "Pulse Hall",
    rrppName: "Marco Silva",
    frequency: "media",
    riskLevel: "medio",
  },
  {
    id: "cus_009",
    name: "Andrea Castillo",
    city: "Granada",
    email: "andrea.castillo@email.es",
    phone: "+34 690 871 443",
    level: "diamante",
    points: 22140,
    visits: 118,
    totalSpend: 15890,
    registeredAt: "2023-11-28",
    lastVisit: "2026-07-20",
    status: "vip",
    avatarInitials: "AC",
    avatarColor: "bg-gold/20 text-gold-light",
    businessName: "Midnight Club",
    rrppName: "Laura Méndez",
    frequency: "alta",
    riskLevel: "bajo",
  },
  {
    id: "cus_010",
    name: "Miguel Torres",
    city: "Murcia",
    email: "miguel.torres@email.es",
    phone: "+34 601 552 778",
    level: "bronce",
    points: 290,
    visits: 3,
    totalSpend: 145,
    registeredAt: "2026-07-11",
    lastVisit: "2026-07-14",
    status: "activo",
    avatarInitials: "MT",
    avatarColor: "bg-orange-500/20 text-orange-300",
    businessName: "Aurora Lounge",
    rrppName: "Carlos Ruiz",
    frequency: "baja",
    riskLevel: "medio",
  },
  {
    id: "cus_011",
    name: "Lucía Vargas",
    city: "Valladolid",
    email: "lucia.vargas@email.es",
    phone: "+34 612 990 365",
    level: "oro",
    points: 5540,
    visits: 37,
    totalSpend: 3120,
    registeredAt: "2025-08-09",
    lastVisit: "2026-03-22",
    status: "inactivo",
    avatarInitials: "LV",
    avatarColor: "bg-cyan-500/20 text-cyan-300",
    businessName: "Velvet Room",
    rrppName: "Nina Ortega",
    frequency: "baja",
    riskLevel: "alto",
  },
  {
    id: "cus_012",
    name: "Hugo Delgado",
    city: "Santander",
    email: "hugo.delgado@email.es",
    phone: "+34 623 447 812",
    level: "plata",
    points: 1870,
    visits: 14,
    totalSpend: 980,
    registeredAt: "2026-06-28",
    lastVisit: "2026-07-10",
    status: "activo",
    avatarInitials: "HD",
    avatarColor: "bg-lime-500/20 text-lime-300",
    businessName: "Pulse Hall",
    rrppName: "Marco Silva",
    frequency: "media",
    riskLevel: "bajo",
  },
];

export function getCustomerById(id: string): Customer | undefined {
  return demoCustomers.find((customer) => customer.id === id);
}

export function getCustomerMetrics(customers: Customer[]): CustomerMetric[] {
  const now = new Date();
  const currentMonth = now.getMonth();
  const currentYear = now.getFullYear();

  const total = customers.length;
  const active = customers.filter((c) => c.status === "activo").length;
  const vip = customers.filter((c) => c.status === "vip").length;
  const newThisMonth = customers.filter((customer) => {
    const [year, month] = customer.registeredAt.split("-").map(Number);
    return year === currentYear && month - 1 === currentMonth;
  }).length;

  return [
    {
      id: "total",
      label: "Clientes totales",
      value: total.toLocaleString("es-ES"),
      icon: "users",
    },
    {
      id: "active",
      label: "Clientes activos",
      value: active.toLocaleString("es-ES"),
      icon: "trending-up",
    },
    {
      id: "vip",
      label: "Clientes VIP",
      value: vip.toLocaleString("es-ES"),
      icon: "sparkles",
    },
    {
      id: "new",
      label: "Nuevos este mes",
      value: newThisMonth.toLocaleString("es-ES"),
      icon: "award",
    },
  ];
}

function normalize(value: string) {
  return value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase();
}

export function matchesCustomerBusiness(
  customer: Customer,
  businessId: string,
): boolean {
  if (businessId === "all") return true;
  const map: Record<string, string> = {
    midnight: "Midnight Club",
    aurora: "Aurora Lounge",
    velvet: "Velvet Room",
    pulse: "Pulse Hall",
  };
  return customer.businessName === map[businessId];
}

export function matchesCustomerCity(customer: Customer, cityId: string): boolean {
  if (cityId === "all") return true;
  return normalize(customer.city) === cityId;
}

export function matchesCustomerRrpp(customer: Customer, rrppId: string): boolean {
  if (rrppId === "all") return true;
  const map: Record<string, string> = {
    laura: "Laura Méndez",
    carlos: "Carlos Ruiz",
    nina: "Nina Ortega",
    marco: "Marco Silva",
  };
  return customer.rrppName === map[rrppId];
}
