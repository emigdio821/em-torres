import { motion } from 'framer-motion'
import type { SVGProps } from 'react'

interface CoffeeProps {
  className?: string
}

export function TypeScriptIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      role="img"
      aria-label="TS"
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 32 32"
      {...props}
    >
      <path
        fill="currentColor"
        d="M23.827 8.243a4.424 4.424 0 0 1 2.223 1.281a5.853 5.853 0 0 1 .852 1.143c.011.045-1.534 1.083-2.471 1.662c-.034.023-.169-.124-.322-.35a2.014 2.014 0 0 0-1.67-1c-1.077-.074-1.771.49-1.766 1.433a1.3 1.3 0 0 0 .153.666c.237.49.677.784 2.059 1.383c2.544 1.095 3.636 1.817 4.31 2.843a5.158 5.158 0 0 1 .416 4.333a4.764 4.764 0 0 1-3.932 2.815a10.9 10.9 0 0 1-2.708-.028a6.531 6.531 0 0 1-3.616-1.884a6.278 6.278 0 0 1-.926-1.371a2.655 2.655 0 0 1 .327-.208c.158-.09.756-.434 1.32-.761l1.024-.6l.214.312a4.771 4.771 0 0 0 1.35 1.292a3.3 3.3 0 0 0 3.458-.175a1.545 1.545 0 0 0 .2-1.974c-.276-.395-.84-.727-2.443-1.422a8.8 8.8 0 0 1-3.349-2.055a4.687 4.687 0 0 1-.976-1.777a7.116 7.116 0 0 1-.062-2.268a4.332 4.332 0 0 1 3.644-3.374a9 9 0 0 1 2.691.084Zm-8.343 1.483l.011 1.454h-4.63v13.148H7.6V11.183H2.97V9.755a13.986 13.986 0 0 1 .04-1.466c.017-.023 2.832-.034 6.245-.028l6.211.017Z"
      />
    </svg>
  )
}

export function CoffeeIcon({ className }: CoffeeProps) {
  return (
    <motion.svg
      role="img"
      aria-label="Coffee"
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
