import { Badge } from "@/components/ui/Badge";
import { customerStatusLabels } from "@/config/customers";
import type { CustomerStatus } from "@/types/customer";

const statusVariant: Record<CustomerStatus, "success" | "gold" | "muted"> = {
  activo: "success",
  vip: "gold",
  inactivo: "muted",
};

type CustomerStatusBadgeProps = {
  status: CustomerStatus;
};

export function CustomerStatusBadge({ status }: CustomerStatusBadgeProps) {
  return (
    <Badge variant={statusVariant[status]}>
      {customerStatusLabels[status]}
    </Badge>
  );
}
