import { cn } from '@/lib/utils'

type IconProps = React.HTMLAttributes<SVGElement>

export function CoffeeIcon(props: IconProps) {
  return (
    <svg
      role="img"
      aria-label="Coffee"
      fill="none"
      width="18"
      height="18"
      strokeWidth="2"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M17 8h1a4 4 0 1 1 0 8h-1" />
      <path d="M3 8h14v9a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4Z" />
      <line x1="6" x2="6" y1="2" y2="4" className="animate-coffee-steam delay-100" />
      <line x1="10" x2="10" y1="2" y2="4" className="animate-coffee-steam delay-300" />
      <line x1="14" x2="14" y1="2" y2="4" className="animate-coffee-steam delay-500" />
    </svg>
  )
}

export function SpinnerIcon({ className, ...props }: IconProps) {
  return (
    <svg
      role="img"
      fill="none"
      viewBox="0 0 24 24"
      aria-label="Loading..."
      xmlns="http://www.w3.org/2000/svg"
      className={cn('size-4 animate-spin', className)}
      {...props}
    >
      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
      <path
        className="opacity-75"
        fill="currentColor"
        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
      />
    </svg>
  )
}
