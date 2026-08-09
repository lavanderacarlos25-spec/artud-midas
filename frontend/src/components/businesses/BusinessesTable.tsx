"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

import { BusinessStatusBadge } from "@/components/businesses/BusinessStatusBadge";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/icons";
import { cn } from "@/lib/utils";
import type { Business } from "@/types/business";

type BusinessesTableProps = {
  businesses: Business[];
  onDelete: (business: Business) => void;
};

function formatCreatedAt(date: string) {
  const [year, month, day] = date.split("-").map(Number);
  return new Intl.DateTimeFormat("es-ES", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  }).format(new Date(year, month - 1, day));
}

export function BusinessesTable({
  businesses,
  onDelete,
}: BusinessesTableProps) {
  if (businesses.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center gap-3 px-6 py-16 text-center">
        <div className="flex size-12 items-center justify-center rounded-xl bg-gold/10 ring-1 ring-gold/20">
          <Icon name="building" className="size-5 text-gold" />
        </div>
        <div className="space-y-1">
          <p className="text-sm font-medium text-foreground">
            No se encontraron empresas
          </p>
          <p className="text-sm text-muted">
            Prueba con otro término de búsqueda o cambia el filtro de estado.
          </p>
        </div>
      </div>
    );
  }

  return (
    <>
      <div className="hidden overflow-x-auto md:block">
        <table className="w-full min-w-[900px] border-collapse text-left">
          <thead>
            <tr className="border-b border-border">
              {[
                "Logo",
                "Nombre",
                "Ciudad",
                "Tipo",
                "Estado",
                "Fecha de creación",
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
            {businesses.map((business) => (
              <tr
                key={business.id}
                className="transition-colors hover:bg-gold/5"
              >
                <td className="px-5 py-4">
                  <BusinessLogo business={business} />
                </td>
                <td className="px-5 py-4">
                  <Link
                    href={`/businesses/${business.id}`}
                    className="text-sm font-medium text-foreground transition-colors hover:text-gold-light"
                  >
                    {business.name}
                  </Link>
                </td>
                <td className="px-5 py-4 text-sm text-muted">{business.city}</td>
                <td className="px-5 py-4 text-sm text-muted">{business.type}</td>
                <td className="px-5 py-4">
                  <BusinessStatusBadge status={business.status} />
                </td>
                <td className="px-5 py-4 text-sm text-muted">
                  {formatCreatedAt(business.createdAt)}
                </td>
                <td className="px-5 py-4">
                  <BusinessActions business={business} onDelete={onDelete} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <ul className="divide-y divide-border md:hidden">
        {businesses.map((business) => (
          <li key={business.id} className="space-y-4 p-5">
            <div className="flex items-start justify-between gap-3">
              <div className="flex min-w-0 items-center gap-3">
                <BusinessLogo business={business} />
                <div className="min-w-0 space-y-1">
                  <Link
                    href={`/businesses/${business.id}`}
                    className="truncate text-sm font-medium text-foreground hover:text-gold-light"
                  >
                    {business.name}
                  </Link>
                  <p className="text-xs text-muted">
                    {business.city} · {business.type}
                  </p>
                </div>
              </div>
              <BusinessStatusBadge status={business.status} />
            </div>

            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <p className="text-xs text-muted-foreground">
                Creada el {formatCreatedAt(business.createdAt)}
              </p>
              <BusinessActions business={business} onDelete={onDelete} />
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}

function BusinessLogo({ business }: { business: Business }) {
  return (
    <div
      className={cn(
        "flex size-10 items-center justify-center rounded-lg text-xs font-semibold tracking-wide",
        business.logoColor,
      )}
      aria-hidden="true"
    >
      {business.logoInitials}
    </div>
  );
}

function BusinessActions({
  business,
  onDelete,
}: {
  business: Business;
  onDelete: (business: Business) => void;
}) {
  const router = useRouter();

  return (
    <div className="flex flex-wrap items-center gap-1.5">
      <Button
        type="button"
        variant="outline"
        size="sm"
        onClick={() => router.push(`/businesses/${business.id}`)}
        aria-label={`Ver ${business.name}`}
      >
        <Icon name="eye" className="size-3.5" />
        Ver
      </Button>
      <Button
        type="button"
        variant="outline"
        size="sm"
        onClick={() => router.push(`/businesses/${business.id}/editar`)}
        aria-label={`Editar ${business.name}`}
      >
        <Icon name="pencil" className="size-3.5" />
        Editar
      </Button>
      <Button
        type="button"
        variant="ghost"
        size="sm"
        className="text-red-400 hover:bg-red-500/10 hover:text-red-300"
        onClick={() => onDelete(business)}
        aria-label={`Eliminar ${business.name}`}
      >
        <Icon name="trash" className="size-3.5" />
        Eliminar
      </Button>
    </div>
  );
}
