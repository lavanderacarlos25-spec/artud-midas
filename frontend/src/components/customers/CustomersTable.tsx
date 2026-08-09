import { CustomerLevelBadge } from "@/components/customers/CustomerLevelBadge";
import { CustomerStatusBadge } from "@/components/customers/CustomerStatusBadge";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/icons";
import { cn } from "@/lib/utils";
import {
  customerFrequencyLabels,
  customerRiskLabels,
} from "@/config/customer-crm";
import type { Customer, CustomerRiskLevel } from "@/types/customer";

type CustomersTableProps = {
  customers: Customer[];
  onView: (customer: Customer) => void;
  onEdit: (customer: Customer) => void;
  onDelete: (customer: Customer) => void;
};

const riskStyles: Record<CustomerRiskLevel, string> = {
  bajo: "text-emerald-400",
  medio: "text-orange-300",
  alto: "text-red-400",
};

function formatDate(date: string) {
  const [year, month, day] = date.split("-").map(Number);
  return new Intl.DateTimeFormat("es-ES", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  }).format(new Date(year, month - 1, day));
}

function formatCurrency(amount: number) {
  return new Intl.NumberFormat("es-ES", {
    style: "currency",
    currency: "EUR",
    maximumFractionDigits: 0,
  }).format(amount);
}

export function CustomersTable({
  customers,
  onView,
  onEdit,
  onDelete,
}: CustomersTableProps) {
  if (customers.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center gap-3 px-6 py-16 text-center">
        <div className="flex size-12 items-center justify-center rounded-xl bg-gold/10 ring-1 ring-gold/20">
          <Icon name="users" className="size-5 text-gold" />
        </div>
        <div className="space-y-1">
          <p className="text-sm font-medium text-foreground">
            No se encontraron clientes
          </p>
          <p className="text-sm text-muted">
            Prueba con otro término de búsqueda o ajusta los filtros CRM.
          </p>
        </div>
      </div>
    );
  }

  return (
    <>
      <div className="hidden overflow-x-auto xl:block">
        <table className="w-full min-w-[1280px] border-collapse text-left">
          <thead>
            <tr className="border-b border-border">
              {[
                "Cliente",
                "Empresa",
                "Ciudad",
                "Nivel",
                "RRPP",
                "Frecuencia",
                "Riesgo",
                "Consumo",
                "Estado",
                "Acciones",
              ].map((heading) => (
                <th
                  key={heading}
                  className="px-5 py-3 text-[10px] font-semibold uppercase tracking-widest text-muted-foreground"
                >
                  {heading}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            {customers.map((customer) => (
              <tr
                key={customer.id}
                className="transition-colors hover:bg-gold/5"
              >
                <td className="px-5 py-4">
                  <div className="flex items-center gap-3">
                    <CustomerAvatar customer={customer} />
                    <div className="min-w-0 space-y-0.5">
                      <p className="text-sm font-medium text-foreground">
                        {customer.name}
                      </p>
                      <p className="truncate text-xs text-muted">
                        {customer.email}
                      </p>
                    </div>
                  </div>
                </td>
                <td className="px-5 py-4 text-sm text-muted">
                  {customer.businessName}
                </td>
                <td className="px-5 py-4 text-sm text-muted">{customer.city}</td>
                <td className="px-5 py-4">
                  <CustomerLevelBadge level={customer.level} />
                </td>
                <td className="px-5 py-4 text-sm text-muted">
                  {customer.rrppName}
                </td>
                <td className="px-5 py-4 text-sm text-muted">
                  {customerFrequencyLabels[customer.frequency]}
                </td>
                <td
                  className={cn(
                    "px-5 py-4 text-sm font-medium",
                    riskStyles[customer.riskLevel],
                  )}
                >
                  {customerRiskLabels[customer.riskLevel]}
                </td>
                <td className="px-5 py-4 text-sm text-muted">
                  {formatCurrency(customer.totalSpend)}
                </td>
                <td className="px-5 py-4">
                  <CustomerStatusBadge status={customer.status} />
                </td>
                <td className="px-5 py-4">
                  <CustomerActions
                    customer={customer}
                    onView={onView}
                    onEdit={onEdit}
                    onDelete={onDelete}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <ul className="divide-y divide-border xl:hidden">
        {customers.map((customer) => (
          <li key={customer.id} className="space-y-4 p-5">
            <div className="flex items-start justify-between gap-3">
              <div className="flex min-w-0 items-center gap-3">
                <CustomerAvatar customer={customer} />
                <div className="min-w-0 space-y-1">
                  <p className="truncate text-sm font-medium text-foreground">
                    {customer.name}
                  </p>
                  <p className="truncate text-xs text-muted">
                    {customer.businessName} · {customer.city}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    RRPP {customer.rrppName}
                  </p>
                </div>
              </div>
              <CustomerStatusBadge status={customer.status} />
            </div>

            <div className="flex flex-wrap items-center gap-2">
              <CustomerLevelBadge level={customer.level} />
              <span className="text-xs text-muted">
                Frecuencia {customerFrequencyLabels[customer.frequency]}
              </span>
              <span className="text-xs text-muted">·</span>
              <span className={cn("text-xs font-medium", riskStyles[customer.riskLevel])}>
                Riesgo {customerRiskLabels[customer.riskLevel]}
              </span>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <div className="space-y-0.5 text-xs text-muted-foreground">
                <p>Consumo: {formatCurrency(customer.totalSpend)}</p>
                <p>Última visita: {formatDate(customer.lastVisit)}</p>
              </div>
              <CustomerActions
                customer={customer}
                onView={onView}
                onEdit={onEdit}
                onDelete={onDelete}
              />
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}

function CustomerAvatar({ customer }: { customer: Customer }) {
  return (
    <div
      className={cn(
        "flex size-10 items-center justify-center rounded-full text-xs font-semibold tracking-wide",
        customer.avatarColor,
      )}
      aria-hidden="true"
    >
      {customer.avatarInitials}
    </div>
  );
}

function CustomerActions({
  customer,
  onView,
  onEdit,
  onDelete,
}: {
  customer: Customer;
  onView: (customer: Customer) => void;
  onEdit: (customer: Customer) => void;
  onDelete: (customer: Customer) => void;
}) {
  return (
    <div className="flex flex-wrap items-center gap-1.5">
      <Button
        type="button"
        variant="outline"
        size="sm"
        onClick={() => onView(customer)}
        aria-label={`Ver ${customer.name}`}
      >
        <Icon name="eye" className="size-3.5" />
        Ver
      </Button>
      <Button
        type="button"
        variant="outline"
        size="sm"
        onClick={() => onEdit(customer)}
        aria-label={`Editar ${customer.name}`}
      >
        <Icon name="pencil" className="size-3.5" />
        Editar
      </Button>
      <Button
        type="button"
        variant="ghost"
        size="sm"
        className="text-red-400 hover:bg-red-500/10 hover:text-red-300"
        onClick={() => onDelete(customer)}
        aria-label={`Eliminar ${customer.name}`}
      >
        <Icon name="trash" className="size-3.5" />
        Eliminar
      </Button>
    </div>
  );
}
