import { motion } from 'framer-motion'

interface CoffeeProps {
  className?: string
}

export function Coffee({ className }: CoffeeProps) {
  return (
    <motion.svg
      fill="none"
      width="18"
      height="18"
      strokeWidth="2"
      viewBox="0 0 24 24"
      stroke="currentColor"
      className={className}
      strokeLinecap="round"
      strokeLinejoin="round"
      xmlns="http://www.w3.org/2000/svg"
      animate={{ opacity: 1, rotate: 0 }}
      initial={{ opacity: 0, rotate: 90 }}
    >
      <path d="M17 8h1a4 4 0 1 1 0 8h-1" />
      <path d="M3 8h14v9a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4Z" />
      <line x1="6" x2="6" y1="2" y2="4" className="animate-coffee-steam delay-100" />
      <line x1="10" x2="10" y1="2" y2="4" className="animate-coffee-steam delay-300" />
      <line x1="14" x2="14" y1="2" y2="4" className="animate-coffee-steam delay-500" />
    </motion.svg>
  )
}
