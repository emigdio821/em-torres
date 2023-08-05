'use client'

import NextLink from 'next/link'
import { usePathname } from 'next/navigation'
import { LuCoffee, LuFileText } from 'react-icons/lu'

import { siteConfig } from '@/config/site'
import { cn } from '@/lib/utils'

import { ThemeToggler } from './theme-toggler'
import { buttonVariants } from './ui/button'

export function Navbar() {
  const pathname = usePathname()
  const isResumePage = pathname === '/resume'

  return (
    <header className="sticky top-0 z-40 w-full bg-background/90 px-4 backdrop-blur-md dark:bg-background/90 print:hidden">
      <nav className="mx-auto flex h-16 max-w-3xl items-center justify-between">
        <div>
          <NextLink
            href="/"
            className={cn(
              buttonVariants({ variant: 'link', size: 'sm' }),
              'px-0 text-lg font-bold transition-opacity duration-200 hover:no-underline hover:opacity-80',
            )}
          >
            <LuCoffee className="mr-2 animate-coffee-icon" />
            {siteConfig.brand}
          </NextLink>
        </div>
        <div className="flex items-center gap-2">
          <NextLink
            href="/resume"
            tabIndex={isResumePage ? -1 : undefined}
            aria-current={isResumePage ? 'page' : undefined}
            className={cn(buttonVariants({ variant: 'secondary', size: 'sm' }), {
              'pointer-events-none opacity-70': isResumePage,
            })}
          >
            <LuFileText className="mr-2" />
            Resume
          </NextLink>
          <ThemeToggler />
        </div>
      </nav>
    </header>
  )
}
