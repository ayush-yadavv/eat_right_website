import { Card } from "@/components/ui/card"
import { cn } from "@/lib/utils"

interface AnnuraAuraCardProps extends React.ComponentProps<typeof Card> {
  glowType?: "sage" | "error" | "none";
}

export function AnnuraAuraCard({ children, glowType = "sage", className, ...props }: AnnuraAuraCardProps) {
  return (
    <Card className={cn(
      "border-border bg-surface p-4 rounded-lg",
      glowType !== "none" && `shadow-aura-${glowType}`,
      className
    )} {...props}>
      {children}
    </Card>
  )
}
