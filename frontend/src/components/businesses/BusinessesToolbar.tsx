import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/icons";
import {
  businessStatusFilters,
  businessStatusLabels,
} from "@/config/businesses";
import { cn } from "@/lib/utils";
import type { BusinessStatus } from "@/types/business";

type StatusFilter = BusinessStatus | "todas";

type BusinessesToolbarProps = {
  search: string;
  statusFilter: StatusFilter;
  onSearchChange: (value: string) => void;
  onStatusFilterChange: (value: StatusFilter) => void;
  resultCount: number;
};

export function BusinessesToolbar({
  search,
  statusFilter,
  onSearchChange,
  onStatusFilterChange,
  resultCount,
}: BusinessesToolbarProps) {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div className="relative w-full sm:max-w-sm">
          <Icon
            name="search"
            className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted"
          />
          <input
            type="search"
            value={search}
            onChange={(event) => onSearchChange(event.target.value)}
            placeholder="Buscar por nombre, ciudad o tipo..."
            className="h-10 w-full rounded-lg border border-border bg-surface pl-9 pr-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-gold/40 focus:outline-none focus:ring-2 focus:ring-ring"
            aria-label="Buscar empresas"
          />
        </div>

        <p className="text-xs text-muted-foreground sm:text-sm">
          {resultCount}{" "}
          {resultCount === 1 ? "empresa encontrada" : "empresas encontradas"}
        </p>
      </div>

      <div className="flex flex-wrap items-center gap-2">
        <span className="text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">
          Estado
        </span>
        {businessStatusFilters.map((filter) => {
          const isActive = statusFilter === filter;
          const label =
            filter === "todas" ? "Todas" : businessStatusLabels[filter];

          return (
            <Button
              key={filter}
              type="button"
              size="sm"
              variant={isActive ? "primary" : "outline"}
              className={cn(
                !isActive && "text-muted hover:text-foreground",
                isActive && "shadow-none",
              )}
              onClick={() => onStatusFilterChange(filter)}
              aria-pressed={isActive}
            >
              {label}
            </Button>
          );
        })}
      </div>
    </div>
  );
}
