import { motion } from 'framer-motion'
import { useColorModeValue, Box } from '@chakra-ui/react'

interface TimelineProps {
  isLast?: boolean
  isFirst?: boolean
  delay?: number
}

export default function TimeLine({
  isLast = false,
  isFirst = false,
  delay = 0,
}: TimelineProps) {
  const bg = useColorModeValue('#333', '#f0efef')

  return (
    <Box pr={4} position="relative">
      <motion.div
        style={{
          width: '0.5rem',
          height: '0.5rem',
          backgroundColor: bg,
          marginTop: '0.3rem',
          borderRadius: isFirst ? '0.125rem' : '100%',
        }}
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ delay: isFirst ? 0 : delay }}
      />
      {!isLast && (
        <motion.div
          style={{
            width: '0.125rem',
            backgroundColor: bg,
            position: 'absolute',
            transform: 'translate(0.188rem, 0)',
          }}
          viewport={{ once: true, amount: 0.4 }}
          initial={{ opacity: 0, height: '0%' }}
          transition={{ delay: isFirst ? 0 : delay }}
          animate={{ opacity: 0.6, height: 'calc(100% + 10px)' }}
        />
      )}
    </Box>
  )
}
