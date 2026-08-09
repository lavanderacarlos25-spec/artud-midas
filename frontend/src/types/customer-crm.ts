import type { IconName } from "@/components/ui/icons";
import type { Customer } from "@/types/customer";

export type CustomerMetricTile = {
  id: string;
  label: string;
  value: string;
  hint?: string;
};

export type CustomerTimelineItem = {
  id: string;
  title: string;
  detail: string;
  relativeTime: string;
  icon: IconName;
};

export type CustomerPurchaseItem = {
  id: string;
  label: string;
  amount: string;
  dateLabel: string;
};

export type CustomerEventItem = {
  id: string;
  name: string;
  dateLabel: string;
  status: string;
};

export type CustomerCampaignItem = {
  id: string;
  name: string;
  result: string;
};

export type CustomerRewardItem = {
  id: string;
  name: string;
  dateLabel: string;
};

export type CustomerIntelligence = {
  churnProbability: string;
  churnLabel: string;
  nextVisitPrediction: string;
  ltv: string;
  segment: string;
  recommendations: string[];
};

export type Customer360Bundle = {
  customer: Customer;
  executiveSummary: string;
  healthLabel: string;
  kpis: CustomerMetricTile[];
  valueTiles: CustomerMetricTile[];
  timeline: CustomerTimelineItem[];
  purchases: CustomerPurchaseItem[];
  events: CustomerEventItem[];
  campaigns: CustomerCampaignItem[];
  rewards: CustomerRewardItem[];
  intelligence: CustomerIntelligence;
};
