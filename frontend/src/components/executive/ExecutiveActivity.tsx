import { IntelligencePanel } from "@/components/intelligence/IntelligencePanel";
import { IntelligenceTimeline } from "@/components/intelligence/IntelligenceTimeline";
import type { ExecutiveActivityItem } from "@/types/executive-command";

type ExecutiveActivityProps = {
  activity: ExecutiveActivityItem[];
};

export function ExecutiveActivity({ activity }: ExecutiveActivityProps) {
  return (
    <IntelligencePanel
      title="Actividad reciente"
      description="Timeline de lo que está ocurriendo en tu negocio."
      icon="bell"
    >
      <IntelligenceTimeline
        items={activity.map((item) => ({
          id: item.id,
          title: item.title,
          description: item.detail,
          relativeTime: item.relativeTime,
          icon: item.icon,
        }))}
      />
    </IntelligencePanel>
  );
}
