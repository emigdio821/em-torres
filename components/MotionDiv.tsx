import { motion, type Variants } from 'framer-motion'

interface MotionDivProps {
  children: React.ReactNode
  y?: number
}

export default function MotionDiv({ children, y = 50 }: MotionDivProps) {
  const variants: Variants = {
    offscreen: {
      y,
      opacity: 0,
      scale: 1.01,
      transition: {
        type: 'spring',
        bounce: 0.6,
        duration: 1,
      },
    },
    onscreen: {
      y: 0,
      scale: 1,
      opacity: 1,
      transition: {
        type: 'tween',
      },
    },
  }

  return (
    <motion.div
      initial="offscreen"
      variants={variants}
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.4 }}
    >
      {children}
    </motion.div>
  )
}
