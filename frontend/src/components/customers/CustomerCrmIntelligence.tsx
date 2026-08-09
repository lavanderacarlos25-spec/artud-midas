import { IntelligencePanel } from "@/components/intelligence/IntelligencePanel";
import { cn } from "@/lib/utils";
import type { CustomerIntelligence } from "@/types/customer-crm";

type CustomerCrmIntelligenceProps = {
  intelligence: CustomerIntelligence;
};

export function CustomerCrmIntelligence({
  intelligence,
}: CustomerCrmIntelligenceProps) {
  const churnValue = Number.parseInt(intelligence.churnProbability, 10);
  const churnTone =
    churnValue >= 60
      ? "text-red-400"
      : churnValue >= 35
        ? "text-orange-300"
        : "text-emerald-400";

  return (
    <IntelligencePanel
      title="CRM Intelligence"
      description="Predicciones y recomendaciones IA (demo)."
      icon="sparkles"
    >
      <div className="grid gap-4 lg:grid-cols-4">
        <IntelTile
          label="Predicción de abandono"
          value={intelligence.churnProbability}
          hint={intelligence.churnLabel}
          valueClassName={churnTone}
        />
        <IntelTile
          label="Próxima visita"
          value={intelligence.nextVisitPrediction}
          hint="Ventana estimada"
        />
        <IntelTile
          label="Valor de vida (LTV)"
          value={intelligence.ltv}
          hint="Proyección demo"
          valueClassName="text-gold-light"
        />
        <IntelTile
          label="Segmentación automática"
          value={intelligence.segment}
          hint="Cluster CRM"
        />
      </div>

      <div className="mt-6 space-y-3">
        <p className="text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">
          Recomendaciones IA
        </p>
        <ul className="space-y-2">
          {intelligence.recommendations.map((item) => (
            <li
              key={item}
              className="rounded-xl border border-gold/15 bg-gold/5 px-4 py-3 text-sm leading-relaxed text-muted"
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
    </IntelligencePanel>
  );
}

function IntelTile({
  label,
  value,
  hint,
  valueClassName,
}: {
  label: string;
  value: string;
  hint: string;
  valueClassName?: string;
}) {
  return (
    <div className="rounded-xl border border-border/70 bg-surface/50 p-4">
      <p className="text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">
        {label}
      </p>
      <p
        className={cn(
          "mt-2 text-lg font-semibold tracking-tight text-foreground",
          valueClassName,
        )}
      >
        {value}
      </p>
      <p className="mt-1 text-xs text-muted-foreground">{hint}</p>
    </div>
  );
}
