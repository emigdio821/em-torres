'use client'

import * as React from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils'

const buttonVariants = cva(
  'outline-ring inline-flex items-center justify-center rounded-lg text-sm font-medium whitespace-nowrap outline-offset-2 transition-colors focus-visible:outline focus-visible:outline-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0',
  {
    variants: {
      variant: {
        default: 'bg-primary text-primary-foreground hover:bg-primary/90 shadow-xs shadow-black/5',
        destructive: 'bg-destructive text-destructive-foreground hover:bg-destructive/90 shadow-xs shadow-black/5',
        outline:
          'border-input bg-background hover:bg-accent hover:text-accent-foreground border shadow-xs shadow-black/5',
        secondary: 'bg-secondary text-secondary-foreground hover:bg-secondary/80 shadow-xs shadow-black/5',
        ghost: 'hover:bg-accent hover:text-accent-foreground',
        link: 'text-primary underline-offset-2 hover:underline',
        underline: 'text-primary underline underline-offset-2 hover:no-underline',
        plain: 'transition-opacity hover:opacity-80',
        unstyled: '',
      },
      size: {
        default: 'h-9 px-4 py-2',
        sm: 'h-8 rounded-lg px-3',
        lg: 'h-10 rounded-lg px-8',
        icon: 'h-9 w-9',
        flat: 'h-auto p-0',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  },
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button'
    const flatVariants = ['link', 'underline', 'unstyled', 'plain']
    const btnSize = size || (variant && flatVariants.includes(variant) ? 'flat' : size)

    return <Comp className={cn(buttonVariants({ variant, size: btnSize, className }))} ref={ref} {...props} />
  },
)
Button.displayName = 'Button'

export { Button, buttonVariants }
