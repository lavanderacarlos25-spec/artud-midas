export type LoyaltyMemberStatus = "activo" | "vip" | "inactivo";

export type LoyaltyMemberLevel = "bronce" | "plata" | "oro" | "diamante";

export type LoyaltyMember = {
  id: string;
  name: string;
  city: string;
  email: string;
  level: LoyaltyMemberLevel;
  points: number;
  visits: number;
  totalSpend: number;
  lastVisit: string;
  status: LoyaltyMemberStatus;
  avatarInitials: string;
  avatarColor: string;
  pointsEarnedThisMonth: number;
  rewardsRedeemed: number;
};

export type LoyaltyLevelFilter = LoyaltyMemberLevel | "todos";

export type LoyaltyMetric = {
  id: string;
  label: string;
  value: string;
  icon: "users" | "trending-up" | "award" | "gift";
};
