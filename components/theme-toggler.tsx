'use client'

import { IconMoonStars, IconSun } from '@tabler/icons-react'
import { AnimatePresence, motion } from 'motion/react'
import { useTheme } from 'next-themes'
import { Button } from '@/components/ui/button'

export function ThemeToggler() {
  const { setTheme, resolvedTheme } = useTheme()

  return (
    <Button type="button" variant="plain" onClick={() => setTheme(resolvedTheme === 'light' ? 'dark' : 'light')}>
      <AnimatePresence initial={false} mode="wait">
        <motion.span key={resolvedTheme} animate={{ rotate: 0 }} initial={{ rotate: 90 }}>
          <IconSun className="hidden size-[13px] dark:block" />
          <IconMoonStars className="block size-[13px] dark:hidden" />
          <span className="sr-only">Toggle theme</span>
        </motion.span>
      </AnimatePresence>
    </Button>
  )
}
