import { Icon } from "@/components/ui/icons";
import { midasScoreStatusLabels } from "@/config/executive-command";
import { cn } from "@/lib/utils";
import type { MidasScore, MidasScoreStatus } from "@/types/executive-command";

type ExecutiveMidasScoreProps = {
  score: MidasScore;
};

const statusStyles: Record<
  MidasScoreStatus,
  { badge: string; ring: string; glow: string }
> = {
  excelente: {
    badge: "border-emerald-500/25 bg-emerald-500/10 text-emerald-400",
    ring: "stroke-emerald-400",
    glow: "bg-emerald-500/10",
  },
  bueno: {
    badge: "border-sky-500/25 bg-sky-500/10 text-sky-300",
    ring: "stroke-sky-400",
    glow: "bg-sky-500/10",
  },
  en_riesgo: {
    badge: "border-yellow-500/25 bg-yellow-500/10 text-yellow-300",
    ring: "stroke-yellow-400",
    glow: "bg-yellow-500/10",
  },
  critico: {
    badge: "border-red-500/25 bg-red-500/10 text-red-400",
    ring: "stroke-red-400",
    glow: "bg-red-500/10",
  },
};

export function ExecutiveMidasScore({ score }: ExecutiveMidasScoreProps) {
  const style = statusStyles[score.status];
  const radius = 58;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (score.score / 100) * circumference;

  return (
    <section className="overflow-hidden rounded-xl border border-border/80 bg-surface-elevated/90 shadow-sm shadow-black/20">
      <div className="grid gap-8 p-6 lg:grid-cols-[auto_1fr] lg:items-center lg:p-8">
        <div
          className={cn(
            "relative mx-auto flex size-44 items-center justify-center rounded-full",
            style.glow,
          )}
        >
          <svg viewBox="0 0 150 150" className="size-full -rotate-90">
            <circle
              cx="75"
              cy="75"
              r={radius}
              fill="none"
              strokeWidth="11"
              className="stroke-surface"
            />
            <circle
              cx="75"
              cy="75"
              r={radius}
              fill="none"
              strokeWidth="11"
              strokeLinecap="round"
              strokeDasharray={circumference}
              strokeDashoffset={offset}
              className={style.ring}
            />
          </svg>
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <p className="text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">
              MIDAS Score
            </p>
            <p className="text-4xl font-semibold tracking-tight text-foreground">
              {score.score}
            </p>
          </div>
        </div>

        <div className="space-y-5 text-center lg:text-left">
          <div className="space-y-3">
            <span
              className={cn(
                "inline-flex items-center gap-2 rounded-full border px-3 py-1 text-sm font-medium",
                style.badge,
              )}
            >
              <span className="size-2 rounded-full bg-current" aria-hidden />
              {midasScoreStatusLabels[score.status]}
            </span>
            <h3 className="text-2xl font-semibold tracking-tight text-foreground">
              {score.headline}
            </h3>
            <p className="max-w-2xl text-sm leading-relaxed text-muted sm:text-base">
              {score.explanation}
            </p>
          </div>
          <div className="inline-flex items-center gap-2 text-xs text-muted-foreground">
            <Icon name="sparkles" className="size-3.5 text-gold" />
            Lectura ejecutiva generada para tu negocio · datos demo
          </div>
        </div>
      </div>
    </section>
  );
}
