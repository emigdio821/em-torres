import { motion } from 'motion/react'
import { cn } from '@/lib/utils'

interface TimelineProps {
  isLast?: boolean
  isFirst?: boolean
  delay?: number
}

export function TimeLine({ isLast = false, isFirst = false, delay = 0 }: TimelineProps) {
  return (
    <div className="relative">
      <motion.div
        className={cn('bg-foreground mt-1.5 size-2', isFirst ? 'rounded-[2px]' : 'rounded-full')}
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: isFirst ? 0 : delay }}
      />
      {!isLast && (
        <motion.div
          style={{
            transform: 'translate(0.188rem, 0)',
          }}
          className="bg-muted-foreground absolute w-0.5"
          initial={{ opacity: 0, height: '0%' }}
          transition={{ delay: isFirst ? 0 : delay }}
          animate={{ opacity: 0.6, height: '100%' }}
        />
      )}
    </div>
  )
}
