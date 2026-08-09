import { Badge } from "@/components/ui/Badge";
import { businessStatusLabels } from "@/config/businesses";
import type { BusinessStatus } from "@/types/business";

const statusVariant: Record<
  BusinessStatus,
  "success" | "muted" | "gold"
> = {
  activa: "success",
  inactiva: "muted",
  pendiente: "gold",
};

type BusinessStatusBadgeProps = {
  status: BusinessStatus;
};

export function BusinessStatusBadge({ status }: BusinessStatusBadgeProps) {
  return (
    <Badge variant={statusVariant[status]}>
      {businessStatusLabels[status]}
    </Badge>
  );
}
