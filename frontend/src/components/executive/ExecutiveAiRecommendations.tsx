import { IntelligencePanel } from "@/components/intelligence/IntelligencePanel";
import { Badge } from "@/components/ui/Badge";
import type { ExecutiveAiRecommendation } from "@/types/executive-command";

type ExecutiveAiRecommendationsProps = {
  recommendations: ExecutiveAiRecommendation[];
};

export function ExecutiveAiRecommendations({
  recommendations,
}: ExecutiveAiRecommendationsProps) {
  return (
    <IntelligencePanel
      title="Recomendaciones IA"
      description="Sugerencias estratégicas como si la inteligencia ya estuviera conectada."
      icon="sparkles"
      action={<Badge variant="muted">IA demo</Badge>}
    >
      <ul className="space-y-3">
        {recommendations.map((item) => (
          <li
            key={item.id}
            className="space-y-2 rounded-xl border border-gold/20 bg-gold/5 p-4"
          >
            <p className="text-sm font-medium text-foreground">{item.title}</p>
            <p className="text-sm leading-relaxed text-muted">{item.summary}</p>
            <p className="text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">
              {item.impactLabel}
            </p>
          </li>
        ))}
      </ul>
    </IntelligencePanel>
  );
}
