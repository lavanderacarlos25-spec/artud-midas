import { loyaltyMemberLevelLabels } from "@/config/loyalty";
import { cn } from "@/lib/utils";
import type { LoyaltyMemberLevel } from "@/types/loyalty";

const levelStyles: Record<LoyaltyMemberLevel, string> = {
  bronce: "border-orange-500/25 bg-orange-500/10 text-orange-300",
  plata: "border-stone-400/25 bg-stone-400/10 text-stone-300",
  oro: "border-gold/25 bg-gold/10 text-gold-light",
  diamante: "border-cyan-400/25 bg-cyan-400/10 text-cyan-300",
};

type LoyaltyLevelBadgeProps = {
  level: LoyaltyMemberLevel;
};

export function LoyaltyLevelBadge({ level }: LoyaltyLevelBadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-medium",
        levelStyles[level],
      )}
    >
      {loyaltyMemberLevelLabels[level]}
    </span>
  );
}
