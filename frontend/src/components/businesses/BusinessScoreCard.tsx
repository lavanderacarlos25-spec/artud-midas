import { IntelligencePanel } from "@/components/intelligence/IntelligencePanel";
import { ScoreGauge } from "@/components/intelligence/ScoreGauge";
import type { BusinessScoreSnapshot } from "@/types/business-360";

type BusinessScoreCardProps = {
  score: BusinessScoreSnapshot;
};

export function BusinessScoreCard({ score }: BusinessScoreCardProps) {
  return (
    <IntelligencePanel
      title="Business Score"
      description="Indicador ejecutivo 0–100 con banda de calidad (demo)."
      icon="award"
    >
      <ScoreGauge score={score} />
    </IntelligencePanel>
  );
}
