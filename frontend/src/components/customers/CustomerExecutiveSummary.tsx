import { IntelligencePanel } from "@/components/intelligence/IntelligencePanel";
import { MetricTiles } from "@/components/intelligence/MetricTiles";
import type { CustomerMetricTile } from "@/types/customer-crm";
import type { MetricTile } from "@/types/business-360";

type CustomerExecutiveSummaryProps = {
  summary: string;
  kpis: CustomerMetricTile[];
  valueTiles: CustomerMetricTile[];
};

function toMetricTiles(items: CustomerMetricTile[]): MetricTile[] {
  return items.map((item) => ({
    id: item.id,
    label: item.label,
    value: item.value,
    hint: item.hint,
    tone: "neutral",
  }));
}

export function CustomerExecutiveSummary({
  summary,
  kpis,
  valueTiles,
}: CustomerExecutiveSummaryProps) {
  return (
    <div className="grid gap-4 xl:grid-cols-2">
      <IntelligencePanel
        title="Resumen ejecutivo"
        description="Visión consolidada del cliente en Artud Midas."
        icon="users"
      >
        <p className="text-sm leading-relaxed text-muted">{summary}</p>
        <div className="mt-5">
          <MetricTiles metrics={toMetricTiles(kpis)} columns={3} />
        </div>
      </IntelligencePanel>

      <IntelligencePanel
        title="Valor del cliente"
        description="Estimaciones demo de LTV y contribución."
        icon="revenue"
      >
        <MetricTiles metrics={toMetricTiles(valueTiles)} columns={2} />
      </IntelligencePanel>
    </div>
  );
}
