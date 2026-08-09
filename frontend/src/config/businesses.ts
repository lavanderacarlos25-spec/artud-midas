import type {
  Business,
  BusinessModule,
  BusinessStatus,
  BusinessStrategyItem,
  BusinessType,
} from "@/types/business";

export const businessStatusLabels: Record<BusinessStatus, string> = {
  activa: "Activa",
  inactiva: "Inactiva",
  pendiente: "Pendiente",
};

export const businessTypeOptions: BusinessType[] = [
  "Discoteca",
  "Club",
  "Bar",
  "Lounge",
  "Rooftop",
  "Pub",
  "Sala de conciertos",
];

export const businessStatusFilters: Array<BusinessStatus | "todas"> = [
  "todas",
  "activa",
  "inactiva",
  "pendiente",
];

export const businessLogoColors = [
  "bg-violet-500/20 text-violet-300",
  "bg-rose-500/20 text-rose-300",
  "bg-amber-500/20 text-amber-300",
  "bg-sky-500/20 text-sky-300",
  "bg-emerald-500/20 text-emerald-300",
  "bg-teal-500/20 text-teal-300",
  "bg-indigo-500/20 text-indigo-300",
  "bg-fuchsia-500/20 text-fuchsia-300",
] as const;

export const businessStrategyItems: BusinessStrategyItem[] = [
  { key: "monthlyGoal", label: "Objetivo mensual" },
  { key: "idealAudience", label: "Público ideal" },
  { key: "strengths", label: "Fortalezas" },
  { key: "weaknesses", label: "Debilidades" },
  { key: "opportunities", label: "Oportunidades" },
  { key: "risks", label: "Riesgos" },
];

export const upcomingBusinessModules: BusinessModule[] = [
  {
    key: "locales",
    label: "Locales",
    description: "Gestiona sedes y espacios físicos de la empresa.",
    icon: "building",
  },
  {
    key: "rrpp",
    label: "RRPP",
    description: "Coordina relaciones públicas y promotores.",
    icon: "sparkles",
  },
  {
    key: "empleados",
    label: "Empleados",
    description: "Administra el equipo y roles operativos.",
    icon: "users",
  },
  {
    key: "clientes",
    label: "Clientes",
    description: "Consulta la base de clientes del local.",
    icon: "users",
  },
  {
    key: "eventos",
    label: "Eventos",
    description: "Planifica noches, fiestas y reservas especiales.",
    icon: "calendar",
  },
  {
    key: "fidelizacion",
    label: "Fidelización",
    description: "Configura recompensas y niveles del programa.",
    icon: "award",
  },
  {
    key: "analitica",
    label: "Analítica",
    description: "Métricas de rendimiento y consumo.",
    icon: "chart",
  },
];

type DemoBusinessSeed = Omit<
  Business,
  | "legalName"
  | "taxId"
  | "brand"
  | "openingYear"
  | "capacity"
  | "averageTicket"
  | "openingHours"
  | "openingDays"
  | "hasTerrace"
  | "employeeCount"
  | "manager"
  | "website"
  | "province"
  | "country"
  | "monthlyGoal"
  | "idealAudience"
  | "strengths"
  | "weaknesses"
  | "opportunities"
  | "risks"
> &
  Partial<
    Pick<
      Business,
      | "legalName"
      | "taxId"
      | "brand"
      | "openingYear"
      | "capacity"
      | "averageTicket"
      | "openingHours"
      | "openingDays"
      | "hasTerrace"
      | "employeeCount"
      | "manager"
      | "website"
      | "province"
      | "country"
      | "monthlyGoal"
      | "idealAudience"
      | "strengths"
      | "weaknesses"
      | "opportunities"
      | "risks"
    >
  >;

export function createDefaultBusinessProfile(
  input: Pick<Business, "name" | "city" | "type" | "address" | "email" | "phone">,
): Pick<
  Business,
  | "legalName"
  | "taxId"
  | "brand"
  | "openingYear"
  | "capacity"
  | "averageTicket"
  | "openingHours"
  | "openingDays"
  | "hasTerrace"
  | "employeeCount"
  | "manager"
  | "website"
  | "province"
  | "country"
  | "monthlyGoal"
  | "idealAudience"
  | "strengths"
  | "weaknesses"
  | "opportunities"
  | "risks"
> {
  const domain = input.email.includes("@")
    ? input.email.split("@")[1]
    : "demo-artudmidas.es";

  return {
    legalName: `${input.name} S.L. (demo)`,
    taxId: "B12345678 (demo)",
    brand: `${input.name} (demo)`,
    openingYear: 2019,
    capacity: 180,
    averageTicket: 42,
    openingHours: "22:00 – 04:00 (demo)",
    openingDays: "Jueves a sábado (demo)",
    hasTerrace: false,
    employeeCount: 12,
    manager: "Responsable demo",
    website: `https://www.${domain}`,
    province: input.city,
    country: "España",
    monthlyGoal: "Incrementar ticket medio un 8% (demo)",
    idealAudience: "Público urbano 25-40 años (demo)",
    strengths: "Ubicación y experiencia de marca (demo)",
    weaknesses: "Dependencia de fines de semana (demo)",
    opportunities: "Campañas de fidelización digital (demo)",
    risks: "Estacionalidad y competencia local (demo)",
  };
}

function withProfile(seed: DemoBusinessSeed): Business {
  const defaults = createDefaultBusinessProfile(seed);
  return {
    ...defaults,
    ...seed,
    legalName: seed.legalName ?? defaults.legalName,
    taxId: seed.taxId ?? defaults.taxId,
    brand: seed.brand ?? defaults.brand,
    openingYear: seed.openingYear ?? defaults.openingYear,
    capacity: seed.capacity ?? defaults.capacity,
    averageTicket: seed.averageTicket ?? defaults.averageTicket,
    openingHours: seed.openingHours ?? defaults.openingHours,
    openingDays: seed.openingDays ?? defaults.openingDays,
    hasTerrace: seed.hasTerrace ?? defaults.hasTerrace,
    employeeCount: seed.employeeCount ?? defaults.employeeCount,
    manager: seed.manager ?? defaults.manager,
    website: seed.website ?? defaults.website,
    province: seed.province ?? defaults.province,
    country: seed.country ?? defaults.country,
    monthlyGoal: seed.monthlyGoal ?? defaults.monthlyGoal,
    idealAudience: seed.idealAudience ?? defaults.idealAudience,
    strengths: seed.strengths ?? defaults.strengths,
    weaknesses: seed.weaknesses ?? defaults.weaknesses,
    opportunities: seed.opportunities ?? defaults.opportunities,
    risks: seed.risks ?? defaults.risks,
  };
}

const demoBusinessSeeds: DemoBusinessSeed[] = [
  {
    id: "biz_001",
    name: "Luna Lounge",
    city: "Madrid",
    type: "Lounge",
    status: "activa",
    createdAt: "2025-11-12",
    logoInitials: "LL",
    logoColor: "bg-violet-500/20 text-violet-300",
    address: "Calle de Serrano 42",
    email: "hola@lunalounge.es",
    phone: "+34 910 234 567",
    description:
      "Lounge premium en el barrio de Salamanca con coctelería de autor y ambiente exclusivo.",
    legalName: "Luna Nightlife Madrid S.L. (demo)",
    taxId: "B87124563 (demo)",
    brand: "Luna Lounge (demo)",
    openingYear: 2018,
    capacity: 220,
    averageTicket: 58,
    openingHours: "20:00 – 03:00 (demo)",
    openingDays: "Miércoles a sábado (demo)",
    hasTerrace: true,
    employeeCount: 18,
    manager: "Ana Beltrán (demo)",
    website: "https://www.lunalounge.es",
    province: "Madrid",
    country: "España",
    monthlyGoal: "12.000 € de facturación en barra (demo)",
    idealAudience: "Profesionales 28-45 años, afterwork premium (demo)",
    strengths: "Ubicación Salamanca y carta de cócteles (demo)",
    weaknesses: "Aforo limitado en picos de demanda (demo)",
    opportunities: "Eventos privados corporativos (demo)",
    risks: "Competencia de rooftops cercanos (demo)",
  },
  {
    id: "biz_002",
    name: "Opium Barcelona",
    city: "Barcelona",
    type: "Discoteca",
    status: "activa",
    createdAt: "2025-09-03",
    logoInitials: "OB",
    logoColor: "bg-rose-500/20 text-rose-300",
    address: "Passeig Marítim de la Barceloneta 34",
    email: "info@opiumbarcelona.es",
    phone: "+34 932 456 780",
    description:
      "Discoteca frente al mar con DJs internacionales y aforo elevado para noches premium.",
    legalName: "Opium Beach Club BCN S.L. (demo)",
    taxId: "B65981234 (demo)",
    brand: "Opium Barcelona (demo)",
    openingYear: 2012,
    capacity: 1200,
    averageTicket: 75,
    openingHours: "23:30 – 06:00 (demo)",
    openingDays: "Viernes y sábado (demo)",
    hasTerrace: true,
    employeeCount: 65,
    manager: "Marc Puig (demo)",
    website: "https://www.opiumbarcelona.es",
    province: "Barcelona",
    country: "España",
    monthlyGoal: "Ocupación media del 85% (demo)",
    idealAudience: "Turistas y locales 21-35 años (demo)",
    strengths: "Ubicación frente al mar y booking internacional (demo)",
    weaknesses: "Costes de producción elevados (demo)",
    opportunities: "Residencias de DJs y pases VIP (demo)",
    risks: "Regulación de ruido y aforo (demo)",
  },
  {
    id: "biz_003",
    name: "Terraza Marbella",
    city: "Málaga",
    type: "Rooftop",
    status: "pendiente",
    createdAt: "2026-06-18",
    logoInitials: "TM",
    logoColor: "bg-amber-500/20 text-amber-300",
    address: "Avenida del Mar 18, Marbella",
    email: "reservas@terrazamarbella.es",
    phone: "+34 952 887 341",
    description:
      "Rooftop de costa con vistas al Mediterráneo, en proceso de onboarding en Artud Midas.",
    legalName: "Costa Vista Marbella S.L. (demo)",
    taxId: "B92441780 (demo)",
    brand: "Terraza Marbella (demo)",
    openingYear: 2024,
    capacity: 350,
    averageTicket: 64,
    openingHours: "18:00 – 02:00 (demo)",
    openingDays: "Todos los días en temporada (demo)",
    hasTerrace: true,
    employeeCount: 28,
    manager: "Sofía Herrera (demo)",
    website: "https://www.terrazamarbella.es",
    province: "Málaga",
    country: "España",
    monthlyGoal: "Completar onboarding y primeras 20 noches (demo)",
    idealAudience: "Turismo premium y residentes de costa (demo)",
    strengths: "Vistas y terraza amplia (demo)",
    weaknesses: "Equipo aún en formación (demo)",
    opportunities: "Alianzas con hoteles de lujo (demo)",
    risks: "Estacionalidad fuerte de verano (demo)",
  },
  {
    id: "biz_004",
    name: "Café Central Jazz",
    city: "Madrid",
    type: "Sala de conciertos",
    status: "activa",
    createdAt: "2025-04-21",
    logoInitials: "CC",
    logoColor: "bg-sky-500/20 text-sky-300",
    address: "Plaza del Ángel 10",
    email: "contacto@cafecentraljazz.es",
    phone: "+34 913 690 415",
    description:
      "Sala histórica de jazz en vivo con programación diaria y público fiel.",
    legalName: "Central Jazz Madrid S.L. (demo)",
    taxId: "B80333421 (demo)",
    brand: "Café Central (demo)",
    openingYear: 1982,
    capacity: 90,
    averageTicket: 36,
    openingHours: "19:00 – 01:00 (demo)",
    openingDays: "Martes a domingo (demo)",
    hasTerrace: false,
    employeeCount: 14,
    manager: "Luis Romero (demo)",
    website: "https://www.cafecentraljazz.es",
    province: "Madrid",
    country: "España",
    monthlyGoal: "90% de aforo en sesiones de fin de semana (demo)",
    idealAudience: "Amantes del jazz 30-60 años (demo)",
    strengths: "Marca histórica y programación estable (demo)",
    weaknesses: "Espacio reducido para eventos grandes (demo)",
    opportunities: "Packs cena + concierto (demo)",
    risks: "Envejecimiento de la audiencia habitual (demo)",
  },
  {
    id: "biz_005",
    name: "Puerto Club",
    city: "Valencia",
    type: "Club",
    status: "inactiva",
    createdAt: "2024-12-08",
    logoInitials: "PC",
    logoColor: "bg-emerald-500/20 text-emerald-300",
    address: "Muelle de la Aduana 5",
    email: "hola@puertoclub.es",
    phone: "+34 961 223 098",
    description:
      "Club portuario temporalmente inactivo tras reforma de instalaciones.",
    legalName: "Puerto Nightlife Valencia S.L. (demo)",
    taxId: "B97812045 (demo)",
    brand: "Puerto Club (demo)",
    openingYear: 2016,
    capacity: 800,
    averageTicket: 48,
    openingHours: "Cerrado temporalmente (demo)",
    openingDays: "Pendiente de reapertura (demo)",
    hasTerrace: false,
    employeeCount: 8,
    manager: "Elena Costa (demo)",
    website: "https://www.puertoclub.es",
    province: "Valencia",
    country: "España",
    monthlyGoal: "Reabrir con 4 noches semanales (demo)",
    idealAudience: "Público electrónico 20-32 años (demo)",
    strengths: "Ubicación portuaria icónica (demo)",
    weaknesses: "Inactividad comercial actual (demo)",
    opportunities: "Rebranding post reforma (demo)",
    risks: "Pérdida de hábitos del público (demo)",
  },
  {
    id: "biz_006",
    name: "El Jardín Secreto",
    city: "Sevilla",
    type: "Bar",
    status: "activa",
    createdAt: "2026-01-15",
    logoInitials: "JS",
    logoColor: "bg-teal-500/20 text-teal-300",
    address: "Calle Mateos Gago 7",
    email: "info@eljardinsecreto.es",
    phone: "+34 954 112 667",
    description:
      "Bar de patio andaluz con cócteles de temporada y ambiente íntimo.",
    legalName: "Jardín Secreto Sevilla S.L. (demo)",
    taxId: "B91455602 (demo)",
    brand: "El Jardín Secreto (demo)",
    openingYear: 2021,
    capacity: 110,
    averageTicket: 29,
    openingHours: "18:00 – 01:30 (demo)",
    openingDays: "Martes a domingo (demo)",
    hasTerrace: true,
    employeeCount: 11,
    manager: "Carmen Núñez (demo)",
    website: "https://www.eljardinsecreto.es",
    province: "Sevilla",
    country: "España",
    monthlyGoal: "Subir consumo medio a 32 € (demo)",
    idealAudience: "Parejas y grupos reducidos 25-40 (demo)",
    strengths: "Patio andaluz y atmósfera íntima (demo)",
    weaknesses: "Baja capacidad en temporada alta (demo)",
    opportunities: "Menú degustación de cócteles (demo)",
    risks: "Dependencia del turismo de casco antiguo (demo)",
  },
  {
    id: "biz_007",
    name: "Bilbao Underground",
    city: "Bilbao",
    type: "Pub",
    status: "pendiente",
    createdAt: "2026-07-02",
    logoInitials: "BU",
    logoColor: "bg-indigo-500/20 text-indigo-300",
    address: "Calle Licenciado Poza 22",
    email: "hola@bilbaounderground.es",
    phone: "+34 944 567 210",
    description:
      "Pub underground con programación indie y foco en fidelización local.",
    legalName: "Underground Bilbao S.L. (demo)",
    taxId: "B95677801 (demo)",
    brand: "Bilbao Underground (demo)",
    openingYear: 2025,
    capacity: 160,
    averageTicket: 24,
    openingHours: "19:00 – 02:00 (demo)",
    openingDays: "Jueves a domingo (demo)",
    hasTerrace: false,
    employeeCount: 9,
    manager: "Iker Madariaga (demo)",
    website: "https://www.bilbaounderground.es",
    province: "Bizkaia",
    country: "España",
    monthlyGoal: "Activar 500 miembros en fidelización (demo)",
    idealAudience: "Escena indie local 20-35 años (demo)",
    strengths: "Comunidad local comprometida (demo)",
    weaknesses: "Marca aún poco conocida (demo)",
    opportunities: "Ciclos de conciertos íntimos (demo)",
    risks: "Rotación alta de público joven (demo)",
  },
  {
    id: "biz_008",
    name: "Costa Neon",
    city: "Alicante",
    type: "Discoteca",
    status: "activa",
    createdAt: "2025-08-27",
    logoInitials: "CN",
    logoColor: "bg-fuchsia-500/20 text-fuchsia-300",
    address: "Explanada de España 9",
    email: "reservas@costaneon.es",
    phone: "+34 965 334 891",
    description:
      "Discoteca costera con estética neon y noches temáticas de alto consumo.",
    legalName: "Neon Coast Alicante S.L. (demo)",
    taxId: "B03889124 (demo)",
    brand: "Costa Neon (demo)",
    openingYear: 2019,
    capacity: 950,
    averageTicket: 52,
    openingHours: "23:00 – 06:00 (demo)",
    openingDays: "Viernes, sábado y vísperas (demo)",
    hasTerrace: true,
    employeeCount: 42,
    manager: "Paula Gimeno (demo)",
    website: "https://www.costaneon.es",
    province: "Alicante",
    country: "España",
    monthlyGoal: "15 noches temáticas vendidas al mes (demo)",
    idealAudience: "Público festivo 18-30 años (demo)",
    strengths: "Estética diferencial y noches temáticas (demo)",
    weaknesses: "Alta dependencia del verano (demo)",
    opportunities: "Expansión de merchandising y app VIP (demo)",
    risks: "Coste energético y seguridad (demo)",
  },
];

export const demoBusinesses: Business[] =
  demoBusinessSeeds.map(withProfile);
