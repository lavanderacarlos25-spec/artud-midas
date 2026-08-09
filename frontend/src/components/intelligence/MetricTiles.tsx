import { cn } from "@/lib/utils";
import type { MetricTile, MetricTone } from "@/types/business-360";

const toneStyles: Record<MetricTone, string> = {
  positive: "text-emerald-400",
  neutral: "text-foreground",
  warning: "text-orange-300",
  negative: "text-red-400",
};

type MetricTilesProps = {
  metrics: MetricTile[];
  columns?: 2 | 3;
};

/** Reusable metric tile grid for Clientes, Eventos, RRPP, Campañas, etc. */
export function MetricTiles({ metrics, columns = 2 }: MetricTilesProps) {
  return (
    <div
      className={cn(
        "grid gap-3",
        columns === 3 ? "sm:grid-cols-2 xl:grid-cols-3" : "sm:grid-cols-2",
      )}
    >
      {metrics.map((metric) => (
        <div
          key={metric.id}
          className="rounded-xl border border-border/70 bg-surface/50 p-3.5"
        >
          <p className="text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">
            {metric.label}
          </p>
          <p
            className={cn(
              "mt-2 text-lg font-semibold tracking-tight",
              toneStyles[metric.tone ?? "neutral"],
            )}
          >
            {metric.value}
          </p>
          {metric.hint ? (
            <p className="mt-1 text-xs text-muted-foreground">{metric.hint}</p>
          ) : null}
        </div>
      ))}
    </div>
  );
}
