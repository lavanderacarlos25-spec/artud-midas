import { Badge } from "@/components/ui/Badge";
import { loyaltyMemberStatusLabels } from "@/config/loyalty";
import type { LoyaltyMemberStatus } from "@/types/loyalty";

const statusVariant: Record<
  LoyaltyMemberStatus,
  "success" | "gold" | "muted"
> = {
  activo: "success",
  vip: "gold",
  inactivo: "muted",
};

type LoyaltyStatusBadgeProps = {
  status: LoyaltyMemberStatus;
};

export function LoyaltyStatusBadge({ status }: LoyaltyStatusBadgeProps) {
  return (
    <Badge variant={statusVariant[status]}>
      {loyaltyMemberStatusLabels[status]}
    </Badge>
  );
}
