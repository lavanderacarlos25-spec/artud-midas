import {
  businessScoreBandLabels,
} from "@/config/business-360";
import { cn } from "@/lib/utils";
import type { BusinessScoreBand, BusinessScoreSnapshot } from "@/types/business-360";

type ScoreGaugeProps = {
  score: BusinessScoreSnapshot;
  className?: string;
};

const bandStyles: Record<BusinessScoreBand, { ring: string; text: string; badge: string }> =
  {
    excelente: {
      ring: "stroke-emerald-400",
      text: "text-emerald-400",
      badge: "border-emerald-500/25 bg-emerald-500/10 text-emerald-400",
    },
    bueno: {
      ring: "stroke-sky-400",
      text: "text-sky-300",
      badge: "border-sky-500/25 bg-sky-500/10 text-sky-300",
    },
    aceptable: {
      ring: "stroke-yellow-400",
      text: "text-yellow-300",
      badge: "border-yellow-500/25 bg-yellow-500/10 text-yellow-300",
    },
    critico: {
      ring: "stroke-red-400",
      text: "text-red-400",
      badge: "border-red-500/25 bg-red-500/10 text-red-400",
    },
  };

/** Visual 0–100 score gauge reusable across entities. */
export function ScoreGauge({ score, className }: ScoreGaugeProps) {
  const style = bandStyles[score.band];
  const radius = 54;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (score.score / 100) * circumference;

  return (
    <div className={cn("flex flex-col items-center gap-4 sm:flex-row sm:items-center sm:gap-8", className)}>
      <div className="relative size-36 shrink-0">
        <svg viewBox="0 0 140 140" className="size-full -rotate-90">
          <circle
            cx="70"
            cy="70"
            r={radius}
            fill="none"
            stroke="currentColor"
            strokeWidth="10"
            className="text-surface"
          />
          <circle
            cx="70"
            cy="70"
            r={radius}
            fill="none"
            strokeWidth="10"
            strokeLinecap="round"
            strokeDasharray={circumference}
            strokeDashoffset={offset}
            className={style.ring}
          />
        </svg>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <p className="text-3xl font-semibold tracking-tight text-foreground">
            {score.score}
          </p>
          <p className="text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">
            / 100
          </p>
        </div>
      </div>

      <div className="space-y-3 text-center sm:text-left">
        <span
          className={cn(
            "inline-flex rounded-full border px-3 py-1 text-xs font-medium",
            style.badge,
          )}
        >
          {businessScoreBandLabels[score.band]}
        </span>
        <p className="max-w-sm text-sm leading-relaxed text-muted">
          {score.summary}
        </p>
      </div>
    </div>
  );
}
