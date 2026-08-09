import { IntelligencePanel } from "@/components/intelligence/IntelligencePanel";
import { MetricTiles } from "@/components/intelligence/MetricTiles";
import type { IconName } from "@/components/ui/icons";
import type { MetricTile } from "@/types/business-360";

type DomainMetricsCardProps = {
  title: string;
  description: string;
  icon: IconName;
  metrics: MetricTile[];
  columns?: 2 | 3;
};

/** Domain metrics card wrapper reusable for future modules. */
export function DomainMetricsCard({
  title,
  description,
  icon,
  metrics,
  columns = 2,
}: DomainMetricsCardProps) {
  return (
    <IntelligencePanel title={title} description={description} icon={icon}>
      <MetricTiles metrics={metrics} columns={columns} />
    </IntelligencePanel>
  );
}
