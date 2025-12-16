'use client'

import { Moon02Icon, Sun03Icon } from '@hugeicons/core-free-icons'
import { HugeiconsIcon } from '@hugeicons/react'
import { AnimatePresence, motion } from 'motion/react'
import { useTheme } from 'next-themes'
import { Button } from '@/components/ui/button'

export function ThemeToggler() {
  const { setTheme, resolvedTheme } = useTheme()

  return (
    <Button
      type="button"
      variant="outline"
      size="sm"
      onClick={() => setTheme(resolvedTheme === 'light' ? 'dark' : 'light')}
    >
      <AnimatePresence initial={false} mode="wait">
        <motion.span key={resolvedTheme} animate={{ rotate: 0 }} initial={{ rotate: 90 }}>
          <HugeiconsIcon icon={Sun03Icon} className="hidden size-4 dark:block" />
          <HugeiconsIcon icon={Moon02Icon} className="block size-4 dark:hidden" />
        </motion.span>
      </AnimatePresence>
      <span>Toggle theme</span>
    </Button>
  )
}
