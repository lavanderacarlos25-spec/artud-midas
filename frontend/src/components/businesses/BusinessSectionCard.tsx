import type { ReactNode } from "react";

import { Card, CardContent } from "@/components/ui/Card";
import { Icon, type IconName } from "@/components/ui/icons";
import { cn } from "@/lib/utils";

type BusinessSectionCardProps = {
  title: string;
  description?: string;
  icon?: IconName;
  action?: ReactNode;
  children: ReactNode;
  className?: string;
  contentClassName?: string;
};

export function BusinessSectionCard({
  title,
  description,
  icon,
  action,
  children,
  className,
  contentClassName,
}: BusinessSectionCardProps) {
  return (
    <Card
      className={cn(
        "border-border/80 bg-surface-elevated/90 shadow-sm shadow-black/20",
        className,
      )}
    >
      <div className="flex items-start justify-between gap-4 p-6 pb-0">
        <div className="flex min-w-0 items-start gap-3">
          {icon ? (
            <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-gold/10 ring-1 ring-gold/20">
              <Icon name={icon} className="size-5 text-gold" />
            </div>
          ) : null}
          <div className="min-w-0 space-y-1">
            <h3 className="text-sm font-medium tracking-wide text-foreground">
              {title}
            </h3>
            {description ? (
              <p className="text-xs leading-relaxed text-muted-foreground">
                {description}
              </p>
            ) : null}
          </div>
        </div>
        {action}
      </div>
      <CardContent className={cn("p-6 pt-5", contentClassName)}>
        {children}
      </CardContent>
    </Card>
  );
}
