import { cn } from '@/lib/utils'
import { CgSpinnerAlt } from 'react-icons/cg'

interface SpinnerProps {
  className?: string
}

export function Spinner({ className }: SpinnerProps) {
  return <CgSpinnerAlt strokeWidth={2} className={cn('animate-spin duration-700', className)} />
}
