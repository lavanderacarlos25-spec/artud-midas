export type CustomerStatus = "activo" | "vip" | "inactivo";

export type LoyaltyLevel =
  | "bronce"
  | "plata"
  | "oro"
  | "platino"
  | "diamante";

export type CustomerFrequency = "alta" | "media" | "baja";

export type CustomerRiskLevel = "bajo" | "medio" | "alto";

export type Customer = {
  id: string;
  name: string;
  city: string;
  email: string;
  phone: string;
  level: LoyaltyLevel;
  points: number;
  visits: number;
  totalSpend: number;
  registeredAt: string;
  lastVisit: string;
  status: CustomerStatus;
  avatarInitials: string;
  avatarColor: string;
  businessName: string;
  rrppName: string;
  frequency: CustomerFrequency;
  riskLevel: CustomerRiskLevel;
};

export type CustomerFilter = CustomerStatus | "todos";

export type CustomerListFilters = {
  search: string;
  status: CustomerFilter;
  businessId: string;
  cityId: string;
  levelId: string;
  rrppId: string;
  frequencyId: string;
  riskId: string;
};

export type CustomerMetric = {
  id: string;
  label: string;
  value: string;
  icon: "users" | "award" | "trending-up" | "sparkles";
};

export type CustomerFilterOption = {
  id: string;
  label: string;
};
