import { cn } from "@/lib/utils";
import { loyaltyLevelLabels } from "@/config/customers";
import type { LoyaltyLevel } from "@/types/customer";

const levelStyles: Record<LoyaltyLevel, string> = {
  bronce: "border-orange-500/25 bg-orange-500/10 text-orange-300",
  plata: "border-stone-400/25 bg-stone-400/10 text-stone-300",
  oro: "border-gold/25 bg-gold/10 text-gold-light",
  platino: "border-slate-300/25 bg-slate-300/10 text-slate-200",
  diamante: "border-cyan-400/25 bg-cyan-400/10 text-cyan-300",
};

type CustomerLevelBadgeProps = {
  level: LoyaltyLevel;
};

export function CustomerLevelBadge({ level }: CustomerLevelBadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-medium",
        levelStyles[level],
      )}
    >
      {loyaltyLevelLabels[level]}
    </span>
  );
}
