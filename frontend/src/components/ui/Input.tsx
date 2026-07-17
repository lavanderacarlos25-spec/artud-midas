import type { InputHTMLAttributes } from "react";

import { cn } from "@/lib/utils";

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  error?: string;
};

export function Input({ className, error, id, ...props }: InputProps) {
  return (
    <div className="space-y-1.5">
      <input
        id={id}
        className={cn(
          "flex h-11 w-full rounded-lg border border-border bg-surface px-3 text-sm text-foreground",
          "placeholder:text-muted-foreground",
          "focus:border-gold/40 focus:outline-none focus:ring-2 focus:ring-ring",
          "disabled:cursor-not-allowed disabled:opacity-50",
          error && "border-red-500/50 focus:border-red-500/50 focus:ring-red-500/20",
          className,
        )}
        {...props}
      />
      {error && <p className="text-xs text-red-400">{error}</p>}
    </div>
  );
}
