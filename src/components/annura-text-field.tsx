import { SmoothInput } from "@/components/ui/skiper-ui/skiper106"
import { cn } from "@/lib/utils"
import React from "react"

export function AnnuraTextField({ 
  className, 
  wrapperClassName,
  ...props 
}: React.ComponentProps<typeof SmoothInput>) {
  return (
    <SmoothInput 
      wrapperClassName={cn(
        "bg-surface border-border focus-within:border-primary focus-within:ring-2 focus-within:ring-primary/20 transition-all rounded-xl",
        wrapperClassName
      )}
      className={cn(
        "text-text-main text-base placeholder:text-text-muted/60",
        className
      )}
      {...props} 
    />
  )
}
