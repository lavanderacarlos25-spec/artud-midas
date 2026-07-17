export type StatTrend = "up" | "down" | "neutral";

export type StatItem = {
  id: string;
  label: string;
  value: string;
  change: string;
  trend: StatTrend;
  icon: "users" | "building" | "award" | "revenue";
};

export type ActivityItem = {
  id: string;
  title: string;
  description: string;
  time: string;
  type: "customer" | "loyalty" | "business" | "system";
};

export type QuickAction = {
  id: string;
  label: string;
  description: string;
  href: string;
  icon: "users" | "award" | "chart" | "sparkles";
};

export const dashboardStats: StatItem[] = [
  {
    id: "customers",
    label: "Total Customers",
    value: "12,847",
    change: "+12.5%",
    trend: "up",
    icon: "users",
  },
  {
    id: "businesses",
    label: "Active Businesses",
    value: "284",
    change: "+4.2%",
    trend: "up",
    icon: "building",
  },
  {
    id: "loyalty",
    label: "Loyalty Members",
    value: "8,392",
    change: "+18.1%",
    trend: "up",
    icon: "award",
  },
  {
    id: "revenue",
    label: "Monthly Revenue",
    value: "€142.8K",
    change: "+7.8%",
    trend: "up",
    icon: "revenue",
  },
];

export const recentActivity: ActivityItem[] = [
  {
    id: "1",
    title: "New loyalty tier unlocked",
    description: "Club Nova — 50 members reached Gold status",
    time: "2 min ago",
    type: "loyalty",
  },
  {
    id: "2",
    title: "Customer profile updated",
    description: "Maria Santos redeemed 500 reward points",
    time: "18 min ago",
    type: "customer",
  },
  {
    id: "3",
    title: "Business onboarded",
    description: "Luna Lounge joined the Midas network",
    time: "1 hr ago",
    type: "business",
  },
  {
    id: "4",
    title: "Weekly report generated",
    description: "Analytics snapshot ready for 12 venues",
    time: "3 hr ago",
    type: "system",
  },
  {
    id: "5",
    title: "Campaign launched",
    description: "Weekend VIP access promo is now live",
    time: "5 hr ago",
    type: "loyalty",
  },
];

export const quickActions: QuickAction[] = [
  {
    id: "add-customer",
    label: "Add Customer",
    description: "Register a new guest profile",
    href: "/customers",
    icon: "users",
  },
  {
    id: "loyalty-campaign",
    label: "Create Campaign",
    description: "Launch a loyalty promotion",
    href: "/loyalty",
    icon: "award",
  },
  {
    id: "view-analytics",
    label: "View Analytics",
    description: "Explore performance insights",
    href: "/analytics",
    icon: "chart",
  },
  {
    id: "ask-ai",
    label: "Ask AI Assistant",
    description: "Get business recommendations",
    href: "/ai-assistant",
    icon: "sparkles",
  },
];
