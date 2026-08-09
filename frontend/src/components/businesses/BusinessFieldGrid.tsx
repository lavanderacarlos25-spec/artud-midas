import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

type BusinessFieldItemProps = {
  label: string;
  value: ReactNode;
  className?: string;
};

export function BusinessFieldItem({
  label,
  value,
  className,
}: BusinessFieldItemProps) {
  return (
    <div className={cn("space-y-1", className)}>
      <dt className="text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">
        {label}
      </dt>
      <dd className="text-sm text-foreground">{value}</dd>
    </div>
  );
}

type BusinessFieldGridProps = {
  children: ReactNode;
  columns?: 2 | 3;
  className?: string;
};

export function BusinessFieldGrid({
  children,
  columns = 2,
  className,
}: BusinessFieldGridProps) {
  return (
    <dl
      className={cn(
        "grid gap-4",
        columns === 3 ? "sm:grid-cols-2 lg:grid-cols-3" : "sm:grid-cols-2",
        className,
      )}
    >
      {children}
    </dl>
  );
}
