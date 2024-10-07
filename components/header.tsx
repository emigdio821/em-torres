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
    <header className="sticky top-0 z-40 w-full bg-background/90 px-4 backdrop-blur-md print:hidden">
      <nav className="mx-auto flex h-16 max-w-3xl items-center justify-between">
        <Button asChild variant="unstyled" className="text-lg font-bold hover:text-muted-foreground">
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
