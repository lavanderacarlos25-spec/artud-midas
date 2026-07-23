import { OperationsPanel } from "@/components/operations/OperationsPanel";
import { Badge } from "@/components/ui/Badge";
import { getOperationsAiRecommendations } from "@/config/operations-center";

export function OperationsAiRecommendations() {
  const recommendations = getOperationsAiRecommendations();

  return (
    <OperationsPanel
      title="Recomendaciones futuras de IA"
      description="Espacio preparado para inteligencia operativa. Contenido 100% simulado."
      icon="sparkles"
      action={<Badge variant="muted">IA demo</Badge>}
    >
      <ul className="grid gap-3 lg:grid-cols-3">
        {recommendations.map((item) => (
          <li
            key={item.id}
            className="space-y-3 rounded-xl border border-gold/15 bg-gold/5 p-4"
          >
            <p className="text-sm font-medium text-foreground">{item.title}</p>
            <p className="text-sm leading-relaxed text-muted">{item.summary}</p>
            <p className="text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">
              {item.confidenceLabel}
            </p>
          </li>
        ))}
      </ul>
    </OperationsPanel>
  );
}
