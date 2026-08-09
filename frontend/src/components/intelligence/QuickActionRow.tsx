import { Icon, type IconName } from "@/components/ui/icons";

export type QuickActionItem = {
  id: string;
  label: string;
  icon: IconName;
  actionKey: string;
};

type QuickActionRowProps = {
  actions: QuickActionItem[];
  onAction?: (action: QuickActionItem) => void;
};

/** Visual-only quick action row, ready for future handlers. */
export function QuickActionRow({ actions, onAction }: QuickActionRowProps) {
  return (
    <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-6">
      {actions.map((action) => (
        <button
          key={action.id}
          type="button"
          onClick={() => onAction?.(action)}
          className="group flex min-h-[76px] items-center gap-3 rounded-xl border border-border/80 bg-surface/50 px-4 py-3 text-left transition-colors hover:border-gold/30 hover:bg-gold/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
        >
          <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-gold/10 ring-1 ring-gold/20 transition-colors group-hover:bg-gold/15">
            <Icon name={action.icon} className="size-5 text-gold" />
          </div>
          <span className="text-sm font-medium text-foreground">
            {action.label}
          </span>
        </button>
      ))}
    </div>
  );
}
