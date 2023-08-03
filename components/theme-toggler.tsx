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
      variant="outline"
      aria-label="Toggle theme"
      onClick={() => {
        setTheme(resolvedTheme === 'light' ? 'dark' : 'light')
      }}
    >
      <AnimatePresence initial={false} mode="wait">
        <motion.div
          key={resolvedTheme}
          transition={{ duration: 0.2 }}
          animate={{ opacity: 1, rotate: 0 }}
          initial={{ opacity: 0.8, rotate: 40 }}
        >
          <LuSun className="hidden dark:flex" />
          <LuMoonStar className="flex dark:hidden" />
        </motion.div>
      </AnimatePresence>
    </Button>
  )
}
