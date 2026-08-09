import { IntelligencePanel } from "@/components/intelligence/IntelligencePanel";
import { Icon } from "@/components/ui/icons";
import type { ExecutiveUpcomingEvent } from "@/types/executive-command";

type ExecutiveUpcomingEventsProps = {
  events: ExecutiveUpcomingEvent[];
};

export function ExecutiveUpcomingEvents({
  events,
}: ExecutiveUpcomingEventsProps) {
  return (
    <IntelligencePanel
      title="Próximos eventos"
      description="Agenda inmediata de tu local."
      icon="calendar"
    >
      <ul className="space-y-3">
        {events.map((event) => (
          <li
            key={event.id}
            className="flex gap-4 rounded-xl border border-border/70 bg-surface/50 p-4 transition-colors hover:border-gold/25"
          >
            <div className="flex size-11 shrink-0 items-center justify-center rounded-lg bg-gold/10 ring-1 ring-gold/20">
              <Icon name="calendar" className="size-5 text-gold" />
            </div>
            <div className="min-w-0 space-y-1">
              <p className="text-sm font-medium text-foreground">{event.name}</p>
              <p className="text-xs text-muted">{event.whenLabel}</p>
              <div className="flex flex-wrap gap-3 text-xs text-muted-foreground">
                <span>{event.venue}</span>
                <span>{event.occupancyLabel}</span>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </IntelligencePanel>
  );
}
