import { LoyaltyLevelBadge } from "@/components/loyalty/LoyaltyLevelBadge";
import { LoyaltyStatusBadge } from "@/components/loyalty/LoyaltyStatusBadge";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/icons";
import { cn } from "@/lib/utils";
import type { LoyaltyMember } from "@/types/loyalty";

type LoyaltyTableProps = {
  members: LoyaltyMember[];
  onView: (member: LoyaltyMember) => void;
  onEdit: (member: LoyaltyMember) => void;
  onAdjustPoints: (member: LoyaltyMember) => void;
  onDelete: (member: LoyaltyMember) => void;
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

function formatPoints(points: number) {
  return points.toLocaleString("es-ES");
}

export function LoyaltyTable({
  members,
  onView,
  onEdit,
  onAdjustPoints,
  onDelete,
}: LoyaltyTableProps) {
  if (members.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center gap-3 px-6 py-16 text-center">
        <div className="flex size-12 items-center justify-center rounded-xl bg-gold/10 ring-1 ring-gold/20">
          <Icon name="award" className="size-5 text-gold" />
        </div>
        <div className="space-y-1">
          <p className="text-sm font-medium text-foreground">
            No se encontraron miembros
          </p>
          <p className="text-sm text-muted">
            Prueba con otro término de búsqueda o cambia el filtro de nivel.
          </p>
        </div>
      </div>
    );
  }

  return (
    <>
      <div className="hidden overflow-x-auto xl:block">
        <table className="w-full min-w-[1200px] border-collapse text-left">
          <thead>
            <tr className="border-b border-border">
              {[
                "Cliente",
                "Nivel",
                "Puntos",
                "Visitas",
                "Consumo total",
                "Última visita",
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
            {members.map((member) => (
              <tr
                key={member.id}
                className="transition-colors hover:bg-gold/5"
              >
                <td className="px-5 py-4">
                  <div className="flex min-w-0 items-center gap-3">
                    <MemberAvatar member={member} />
                    <div className="min-w-0 space-y-0.5">
                      <p className="text-sm font-medium text-foreground">
                        {member.name}
                      </p>
                      <p className="truncate text-xs text-muted">
                        {member.city} · {member.email}
                      </p>
                    </div>
                  </div>
                </td>
                <td className="px-5 py-4">
                  <LoyaltyLevelBadge level={member.level} />
                </td>
                <td className="px-5 py-4 text-sm text-muted">
                  {formatPoints(member.points)}
                </td>
                <td className="px-5 py-4 text-sm text-muted">{member.visits}</td>
                <td className="px-5 py-4 text-sm text-muted">
                  {formatCurrency(member.totalSpend)}
                </td>
                <td className="px-5 py-4 text-sm text-muted">
                  {formatDate(member.lastVisit)}
                </td>
                <td className="px-5 py-4">
                  <LoyaltyStatusBadge status={member.status} />
                </td>
                <td className="px-5 py-4">
                  <MemberActions
                    member={member}
                    onView={onView}
                    onEdit={onEdit}
                    onAdjustPoints={onAdjustPoints}
                    onDelete={onDelete}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <ul className="divide-y divide-border xl:hidden">
        {members.map((member) => (
          <li key={member.id} className="space-y-4 p-5">
            <div className="flex items-start justify-between gap-3">
              <div className="flex min-w-0 items-center gap-3">
                <MemberAvatar member={member} />
                <div className="min-w-0 space-y-1">
                  <p className="truncate text-sm font-medium text-foreground">
                    {member.name}
                  </p>
                  <p className="truncate text-xs text-muted">
                    {member.city} · {member.email}
                  </p>
                </div>
              </div>
              <LoyaltyStatusBadge status={member.status} />
            </div>

            <div className="flex flex-wrap items-center gap-2">
              <LoyaltyLevelBadge level={member.level} />
              <span className="text-xs text-muted">
                {formatPoints(member.points)} pts
              </span>
              <span className="text-xs text-muted">·</span>
              <span className="text-xs text-muted">{member.visits} visitas</span>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <div className="space-y-0.5 text-xs text-muted-foreground">
                <p>Consumo: {formatCurrency(member.totalSpend)}</p>
                <p>Última visita: {formatDate(member.lastVisit)}</p>
              </div>
              <MemberActions
                member={member}
                onView={onView}
                onEdit={onEdit}
                onAdjustPoints={onAdjustPoints}
                onDelete={onDelete}
              />
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}

function MemberAvatar({ member }: { member: LoyaltyMember }) {
  return (
    <div
      className={cn(
        "flex size-10 shrink-0 items-center justify-center rounded-full text-xs font-semibold tracking-wide",
        member.avatarColor,
      )}
      aria-hidden="true"
    >
      {member.avatarInitials}
    </div>
  );
}

function MemberActions({
  member,
  onView,
  onEdit,
  onAdjustPoints,
  onDelete,
}: {
  member: LoyaltyMember;
  onView: (member: LoyaltyMember) => void;
  onEdit: (member: LoyaltyMember) => void;
  onAdjustPoints: (member: LoyaltyMember) => void;
  onDelete: (member: LoyaltyMember) => void;
}) {
  return (
    <div className="flex flex-wrap items-center gap-1.5">
      <Button
        type="button"
        variant="outline"
        size="sm"
        onClick={() => onView(member)}
        aria-label={`Ver ${member.name}`}
      >
        <Icon name="eye" className="size-3.5" />
        Ver
      </Button>
      <Button
        type="button"
        variant="outline"
        size="sm"
        onClick={() => onEdit(member)}
        aria-label={`Editar ${member.name}`}
      >
        <Icon name="pencil" className="size-3.5" />
        Editar
      </Button>
      <Button
        type="button"
        variant="outline"
        size="sm"
        onClick={() => onAdjustPoints(member)}
        aria-label={`Ajustar puntos de ${member.name}`}
      >
        <Icon name="sliders" className="size-3.5" />
        Ajustar puntos
      </Button>
      <Button
        type="button"
        variant="ghost"
        size="sm"
        className="text-red-400 hover:bg-red-500/10 hover:text-red-300"
        onClick={() => onDelete(member)}
        aria-label={`Eliminar ${member.name}`}
      >
        <Icon name="trash" className="size-3.5" />
        Eliminar
      </Button>
    </div>
  );
}
