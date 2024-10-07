'use client'

import { Button } from '@/components/ui/button'
import { AnimatePresence, motion } from 'framer-motion'
import { useTheme } from 'next-themes'
import { IconSun, IconMoonStars } from '@tabler/icons-react'

export function ThemeToggler() {
  const { setTheme, resolvedTheme } = useTheme()

  return (
    <Button
      size="icon"
      type="button"
      variant="outline"
      onClick={() => {
        setTheme(resolvedTheme === 'light' ? 'dark' : 'light')
      }}
    >
      <AnimatePresence initial={false} mode="wait">
        <motion.span key={resolvedTheme} animate={{ rotate: 0 }} initial={{ rotate: 90 }}>
          <IconSun className="hidden dark:block size-4" />
          <IconMoonStars className="block dark:hidden size-4" />
          <span className="sr-only">Toggle theme</span>
        </motion.span>
      </AnimatePresence>
    </Button>
  )
}
