export type BusinessStatus = "activa" | "inactiva" | "pendiente";

export type BusinessType =
  | "Discoteca"
  | "Club"
  | "Bar"
  | "Lounge"
  | "Rooftop"
  | "Pub"
  | "Sala de conciertos";

export type Business = {
  id: string;
  name: string;
  city: string;
  type: BusinessType;
  status: BusinessStatus;
  createdAt: string;
  logoInitials: string;
  logoColor: string;
  address: string;
  email: string;
  phone: string;
  description: string;
  legalName: string;
  taxId: string;
  brand: string;
  openingYear: number;
  capacity: number;
  averageTicket: number;
  openingHours: string;
  openingDays: string;
  hasTerrace: boolean;
  employeeCount: number;
  manager: string;
  website: string;
  province: string;
  country: string;
  monthlyGoal: string;
  idealAudience: string;
  strengths: string;
  weaknesses: string;
  opportunities: string;
  risks: string;
};

export type BusinessInput = {
  name: string;
  city: string;
  type: BusinessType;
  status: BusinessStatus;
  address: string;
  email: string;
  phone: string;
  description: string;
};

export type BusinessModuleKey =
  | "locales"
  | "rrpp"
  | "empleados"
  | "clientes"
  | "eventos"
  | "fidelizacion"
  | "analitica";

export type BusinessModule = {
  key: BusinessModuleKey;
  label: string;
  description: string;
  icon:
    | "building"
    | "users"
    | "award"
    | "chart"
    | "sparkles"
    | "bell"
    | "calendar";
};

export type BusinessStrategyItem = {
  key: keyof Pick<
    Business,
    | "monthlyGoal"
    | "idealAudience"
    | "strengths"
    | "weaknesses"
    | "opportunities"
    | "risks"
  >;
  label: string;
};
