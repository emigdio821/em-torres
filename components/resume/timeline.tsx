import { motion } from 'framer-motion'

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
        className={cn(
          'mt-1 h-2 w-2 bg-[#333] dark:bg-[#f0efef] print:!translate-y-0 print:!opacity-100',
          isFirst ? 'rounded-[2px]' : 'rounded-full',
        )}
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: isFirst ? 0 : delay }}
      />
      {!isLast && (
        <motion.div
          style={{
            transform: 'translate(0.188rem, 0)',
          }}
          className="absolute w-[2px] bg-[#333] dark:bg-[#f0efef] print:!h-full print:!opacity-60"
          initial={{ opacity: 0, height: '0%' }}
          transition={{ delay: isFirst ? 0 : delay }}
          animate={{ opacity: 0.6, height: '100%' }}
        />
      )}
    </div>
  )
}
