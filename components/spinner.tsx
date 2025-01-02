import { cn } from '@/lib/utils'
import styles from '@/styles/spinner.module.css'

interface SpinnerProps {
  className?: string
  barsClassName?: string
}

export function Spinner({ className, barsClassName }: SpinnerProps) {
  return (
    <div className={cn('size-4', className)}>
      <div className="relative left-1/2 top-1/2 h-[inherit] w-[inherit]">
        {Array.from({ length: 12 }).map((_, n) => (
          <div
            key={`spinner-bar-${
              // biome-ignore lint/suspicious/noArrayIndexKey: safe to use
              n
            }`}
            className={cn(
              'absolute -left-[10%] -top-[3.9%] h-[8%] w-[24%] animate-spinner rounded-[6px] bg-current',
              styles['spinner-bar'],
              barsClassName,
            )}
          />
        ))}
      </div>
    </div>
  )
}
