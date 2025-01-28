import { Figtree as FontSans } from 'next/font/google'

export const fontSans = FontSans({
  preload: true,
  subsets: ['latin'],
  variable: '--font-sans',
  fallback: ['ui-sans-serif', 'system-ui', 'sans-serif'],
})
