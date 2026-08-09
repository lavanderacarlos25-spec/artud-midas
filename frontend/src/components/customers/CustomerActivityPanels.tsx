import { IntelligencePanel } from "@/components/intelligence/IntelligencePanel";
import { IntelligenceTimeline } from "@/components/intelligence/IntelligenceTimeline";
import type {
  CustomerCampaignItem,
  CustomerEventItem,
  CustomerPurchaseItem,
  CustomerRewardItem,
  CustomerTimelineItem,
} from "@/types/customer-crm";

type CustomerActivityPanelsProps = {
  timeline: CustomerTimelineItem[];
  purchases: CustomerPurchaseItem[];
  events: CustomerEventItem[];
  campaigns: CustomerCampaignItem[];
  rewards: CustomerRewardItem[];
};

export function CustomerActivityPanels({
  timeline,
  purchases,
  events,
  campaigns,
  rewards,
}: CustomerActivityPanelsProps) {
  return (
    <div className="grid gap-4 xl:grid-cols-2">
      <IntelligencePanel
        title="Timeline"
        description="Historial reciente de interacción."
        icon="calendar"
        className="xl:row-span-2"
      >
        <IntelligenceTimeline
          items={timeline.map((item) => ({
            id: item.id,
            title: item.title,
            description: item.detail,
            relativeTime: item.relativeTime,
            icon: item.icon,
          }))}
        />
      </IntelligencePanel>

      <IntelligencePanel
        title="Compras"
        description="Tickets y consumos demo."
        icon="revenue"
      >
        <ul className="space-y-3">
          {purchases.map((item) => (
            <li
              key={item.id}
              className="flex items-center justify-between gap-3 rounded-xl border border-border/70 bg-surface/50 px-3.5 py-3"
            >
              <div className="min-w-0">
                <p className="text-sm font-medium text-foreground">
                  {item.label}
                </p>
                <p className="text-xs text-muted-foreground">{item.dateLabel}</p>
              </div>
              <p className="shrink-0 text-sm font-medium text-gold-light">
                {item.amount}
              </p>
            </li>
          ))}
        </ul>
      </IntelligencePanel>

      <IntelligencePanel
        title="Eventos"
        description="Asistencia a noches y activaciones."
        icon="sparkles"
      >
        <ul className="space-y-3">
          {events.map((item) => (
            <li
              key={item.id}
              className="flex items-center justify-between gap-3 rounded-xl border border-border/70 bg-surface/50 px-3.5 py-3"
            >
              <div className="min-w-0">
                <p className="text-sm font-medium text-foreground">
                  {item.name}
                </p>
                <p className="text-xs text-muted-foreground">{item.dateLabel}</p>
              </div>
              <p className="shrink-0 text-xs font-medium text-muted">
                {item.status}
              </p>
            </li>
          ))}
        </ul>
      </IntelligencePanel>

      <IntelligencePanel
        title="Campañas"
        description="Respuesta a campañas CRM."
        icon="bell"
      >
        <ul className="space-y-3">
          {campaigns.map((item) => (
            <li
              key={item.id}
              className="flex items-center justify-between gap-3 rounded-xl border border-border/70 bg-surface/50 px-3.5 py-3"
            >
              <p className="text-sm font-medium text-foreground">{item.name}</p>
              <p className="shrink-0 text-xs text-muted">{item.result}</p>
            </li>
          ))}
        </ul>
      </IntelligencePanel>

      <IntelligencePanel
        title="Recompensas"
        description="Beneficios canjeados en fidelización."
        icon="gift"
      >
        <ul className="space-y-3">
          {rewards.map((item) => (
            <li
              key={item.id}
              className="flex items-center justify-between gap-3 rounded-xl border border-border/70 bg-surface/50 px-3.5 py-3"
            >
              <p className="text-sm font-medium text-foreground">{item.name}</p>
              <p className="shrink-0 text-xs text-muted-foreground">
                {item.dateLabel}
              </p>
            </li>
          ))}
        </ul>
      </IntelligencePanel>
    </div>
  );
}
