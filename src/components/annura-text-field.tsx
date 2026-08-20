import { Input } from "@/components/ui/input"
import { cn } from "@/lib/utils"

export function AnnuraTextField({ className, ...props }: React.ComponentProps<typeof Input>) {
  return (
    <Input 
      className={cn(
        "bg-surface border-border rounded-md px-4 py-6 focus-visible:ring-primary focus-visible:ring-2",
        className
      )}
      {...props} 
    />
  )
}
