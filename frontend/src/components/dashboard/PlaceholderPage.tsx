import type { IconName } from "@/components/ui/icons";
import { Icon } from "@/components/ui/icons";
import { Badge } from "@/components/ui/Badge";
import { Card, CardContent } from "@/components/ui/Card";

type PlaceholderPageProps = {
  title: string;
  description: string;
  icon: IconName;
};

export function PlaceholderPage({
  title,
  description,
  icon,
}: PlaceholderPageProps) {
  return (
    <div className="flex min-h-[60vh] items-center justify-center">
      <Card className="w-full max-w-lg text-center">
        <CardContent className="flex flex-col items-center gap-4 py-12">
          <div className="flex size-16 items-center justify-center rounded-2xl bg-gold/10 ring-1 ring-gold/25">
            <Icon name={icon} className="size-8 text-gold" />
          </div>
          <div className="space-y-2">
            <Badge variant="gold">Coming soon</Badge>
            <h2 className="text-xl font-semibold text-foreground">{title}</h2>
            <p className="mx-auto max-w-sm text-sm leading-relaxed text-muted">
              {description}
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
