import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/icons";
import {
  loyaltyLevelFilterLabels,
  loyaltyLevelFilters,
} from "@/config/loyalty";
import { cn } from "@/lib/utils";
import type { LoyaltyLevelFilter } from "@/types/loyalty";

type LoyaltyToolbarProps = {
  search: string;
  levelFilter: LoyaltyLevelFilter;
  onSearchChange: (value: string) => void;
  onLevelFilterChange: (value: LoyaltyLevelFilter) => void;
  resultCount: number;
};

export function LoyaltyToolbar({
  search,
  levelFilter,
  onSearchChange,
  onLevelFilterChange,
  resultCount,
}: LoyaltyToolbarProps) {
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
            placeholder="Buscar por nombre, email o ciudad..."
            className="h-10 w-full rounded-lg border border-border bg-surface pl-9 pr-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-gold/40 focus:outline-none focus:ring-2 focus:ring-ring"
            aria-label="Buscar miembros de fidelización"
          />
        </div>

        <p className="text-xs text-muted-foreground sm:text-sm">
          {resultCount}{" "}
          {resultCount === 1 ? "miembro encontrado" : "miembros encontrados"}
        </p>
      </div>

      <div className="flex flex-wrap items-center gap-2">
        <span className="text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">
          Nivel
        </span>
        {loyaltyLevelFilters.map((filter) => {
          const isActive = levelFilter === filter;

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
              onClick={() => onLevelFilterChange(filter)}
              aria-pressed={isActive}
            >
              {loyaltyLevelFilterLabels[filter]}
            </Button>
          );
        })}
      </div>
    </div>
  );
}
