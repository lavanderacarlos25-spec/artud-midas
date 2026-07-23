import { OperationsPanel } from "@/components/operations/OperationsPanel";
import { Icon } from "@/components/ui/icons";
import { getOperationsTeamActivity } from "@/config/operations-center";

export function OperationsTeamFeed() {
  const activity = getOperationsTeamActivity();

  return (
    <OperationsPanel
      title="Actividad del equipo"
      description="Timeline de acciones internas recientes (demo)."
      icon="users"
    >
      <ol className="relative space-y-0 border-l border-border/80 pl-6">
        {activity.map((item) => (
          <li key={item.id} className="relative pb-5 last:pb-0">
            <span className="absolute -left-[1.6875rem] top-0 flex size-8 items-center justify-center rounded-full border border-gold/20 bg-surface-elevated">
              <Icon name={item.icon} className="size-3.5 text-gold" />
            </span>
            <div className="space-y-1 pt-0.5">
              <p className="text-sm text-foreground">
                <span className="font-medium">{item.actor}</span>{" "}
                <span className="text-muted">{item.action}</span>
              </p>
              <p className="text-xs text-muted-foreground">
                {item.relativeTime}
              </p>
            </div>
          </li>
        ))}
      </ol>
    </OperationsPanel>
  );
}
