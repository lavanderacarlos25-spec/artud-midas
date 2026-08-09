import { IntelligencePanel } from "@/components/intelligence/IntelligencePanel";
import { IntelligenceTimeline } from "@/components/intelligence/IntelligenceTimeline";
import type { Business360TimelineItem } from "@/types/business-360";

type Business360TimelineProps = {
  items: Business360TimelineItem[];
};

export function Business360Timeline({ items }: Business360TimelineProps) {
  return (
    <IntelligencePanel
      title="Timeline 360°"
      description="Cronología operativa del local con eventos demo."
      icon="calendar"
    >
      <IntelligenceTimeline items={items} />
    </IntelligencePanel>
  );
}
