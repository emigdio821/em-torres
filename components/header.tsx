'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { siteConfig } from '@/config/site'
import { cn } from '@/lib/utils'
import { CoffeeIcon } from './icons'
import { ThemeToggler } from './theme-toggler'
import { Button } from './ui/button'

export function Header() {
  const pathname = usePathname()
  const isResumePage = pathname === '/resume'

  return (
    <header className="bg-background/90 sticky top-0 z-40 mx-auto w-full max-w-3xl border-b p-2 backdrop-blur-md print:hidden">
      <nav className="mx-auto flex max-w-3xl items-center justify-between">
        <Button asChild variant="unstyled" className="hover:text-muted-foreground text-lg font-bold">
          <Link href="/">
            <CoffeeIcon className="mr-2 h-full" />
            {siteConfig.brand}
          </Link>
        </Button>
        <div className="flex items-center gap-2">
          <Button
            variant="outline"
            asChild
            className={cn({
              'bg-accent': isResumePage,
            })}
          >
            <Link href="/resume">Resume</Link>
          </Button>
          <ThemeToggler />
        </div>
      </nav>
    </header>
  )
}
