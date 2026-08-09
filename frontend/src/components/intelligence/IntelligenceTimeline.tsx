import { Icon, type IconName } from "@/components/ui/icons";

export type TimelineEntry = {
  id: string;
  title: string;
  description: string;
  relativeTime: string;
  icon: IconName;
};

type IntelligenceTimelineProps = {
  items: TimelineEntry[];
};

/** Reusable timeline for business, customer, campaign activity feeds. */
export function IntelligenceTimeline({ items }: IntelligenceTimelineProps) {
  return (
    <ol className="relative space-y-0 border-l border-border/80 pl-6">
      {items.map((item) => (
        <li key={item.id} className="relative pb-5 last:pb-0">
          <span className="absolute -left-[1.6875rem] top-0 flex size-8 items-center justify-center rounded-full border border-gold/20 bg-surface-elevated">
            <Icon name={item.icon} className="size-3.5 text-gold" />
          </span>
          <div className="space-y-1 pt-0.5">
            <p className="text-sm font-medium text-foreground">{item.title}</p>
            <p className="text-sm text-muted">{item.description}</p>
            <p className="text-xs text-muted-foreground">{item.relativeTime}</p>
          </div>
        </li>
      ))}
    </ol>
  );
}
