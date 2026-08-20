import * as React from 'react'
import { Button } from "@/components/ui/button"
import { Loader2 } from "lucide-react"
import { cn } from "@/lib/utils"
import { cva, type VariantProps } from "class-variance-authority"

const annuraButtonVariants = cva(
  "rounded-pill px-6 py-6 font-semibold transition-all duration-200 active:scale-95",
  {
    variants: {
      variant: {
        default: "bg-gradient-matcha-cta text-white shadow-md hover:shadow-lg hover:-translate-y-0.5 hover:opacity-90",
        secondary: "border-2 border-slate text-slate hover:bg-slate/10 bg-transparent hover:-translate-y-0.5",
        danger: "bg-error text-white hover:opacity-90 active:scale-95",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

interface AnnuraButtonProps 
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof annuraButtonVariants> {
  isLoading?: boolean;
  asChild?: boolean;
}

export function AnnuraButton({ 
  variant,
  isLoading = false, 
  asChild = false,
  className,
  children,
  ...props 
}: AnnuraButtonProps) {
  const buttonContent = (
    <>
      {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
      {children}
    </>
  );

  return (
    <Button 
      className={cn(annuraButtonVariants({ variant, className }))}
      disabled={isLoading || props.disabled}
      render={asChild && React.isValidElement(children) ? children : undefined}
      {...props}
    >
      {!asChild ? buttonContent : null}
    </Button>
  )
}
