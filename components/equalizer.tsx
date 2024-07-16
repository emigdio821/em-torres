import { cn } from '@/lib/utils'
import styles from '@/styles/eq.module.css'

function EQBar({ className }: { className: string }) {
  return <div className={cn(className, 'h-2 w-[2px] bg-foreground dark:bg-foreground')} />
}

export function Equalizer() {
  return (
    <div className="flex h-4 items-end gap-[2px]">
      {Array.from(Array(6), (_, i) => i).map((i) => (
        <EQBar key={i} className={styles[`bar-${i + 1}`]} />
      ))}
    </div>
  )
}
