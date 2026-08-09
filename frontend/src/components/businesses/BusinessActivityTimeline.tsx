import { BusinessSectionCard } from "@/components/businesses/BusinessSectionCard";
import { Icon } from "@/components/ui/icons";
import { getBusinessRecentActivity } from "@/config/business-command";
import type { Business } from "@/types/business";

type BusinessActivityTimelineProps = {
  business: Business;
};

export function BusinessActivityTimeline({
  business,
}: BusinessActivityTimelineProps) {
  const activity = getBusinessRecentActivity(business);

  return (
    <BusinessSectionCard
      className="w-full"
      title="Actividad reciente"
      description="Timeline operativa del negocio (datos demo)."
      icon="bell"
    >
      <ol className="relative space-y-0 border-l border-border/80 pl-6">
        {activity.map((item) => (
          <li key={item.id} className="relative pb-6 last:pb-0">
            <span className="absolute -left-[1.6875rem] top-0 flex size-8 items-center justify-center rounded-full border border-gold/20 bg-surface-elevated">
              <Icon name={item.icon} className="size-3.5 text-gold" />
            </span>
            <div className="space-y-1 pt-0.5">
              <p className="text-sm font-medium text-foreground">
                {item.description}
              </p>
              <p className="text-xs text-muted-foreground">
                {item.relativeTime}
              </p>
            </div>
          </li>
        ))}
      </ol>
    </BusinessSectionCard>
  );
}
