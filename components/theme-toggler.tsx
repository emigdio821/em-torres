'use client'

import { AnimatePresence, motion } from 'framer-motion'
import { useTheme } from 'next-themes'
import { LuMoonStar, LuSun } from 'react-icons/lu'

import { Button } from '@/components/ui/button'

export function ThemeToggler() {
  const { setTheme, resolvedTheme } = useTheme()

  return (
    <Button
      size="sm"
      type="button"
      variant="secondary"
      aria-label="Toggle theme"
      onClick={() => {
        setTheme(resolvedTheme === 'light' ? 'dark' : 'light')
      }}
    >
      <AnimatePresence initial={false} mode="wait">
        <motion.span key={resolvedTheme} animate={{ rotate: 0 }} initial={{ rotate: 90 }}>
          <LuSun className="hidden dark:block" />
          <LuMoonStar className="block dark:hidden" />
        </motion.span>
      </AnimatePresence>
    </Button>
  )
}
