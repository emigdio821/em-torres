'use client'

import { RiContrast2Line } from '@remixicon/react'
import { useTheme } from 'next-themes'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'
import { Button } from './ui/button'
import {
  Menu,
  MenuGroup,
  MenuGroupLabel,
  MenuPopup,
  MenuRadioGroup,
  MenuRadioItem,
  MenuTrigger,
} from './ui/menu'

export function AppHeader() {
  const { setTheme, theme } = useTheme()
  const pathname = usePathname()
  const isResumeActive = pathname === '/resume'

  return (
    <header className="sticky flex items-center justify-center top-0 z-40 bg-background border-b py-2 px-4 sm:p-4">
      <div className="flex max-w-xl w-full items-center justify-between mx-auto">
        <Button
          variant="ghost"
          size="sm"
          className="-ms-2.5"
          render={
            <Link href="/">
              <span className="hidden sm:block">Emigdio Torres</span>
              <span className="block sm:hidden">ET</span>
            </Link>
          }
        />

        <div className="flex items-center gap-2">
          <Button
            size="sm"
            variant="ghost"
            render={<Link href="/resume">Resume</Link>}
            className={cn(isResumeActive && 'bg-accent')}
          />
          <Menu>
            <MenuTrigger render={<Button variant="outline" size="icon-sm" />}>
              <RiContrast2Line />
            </MenuTrigger>
            <MenuPopup align="end">
              <MenuGroup>
                <MenuGroupLabel>Theme</MenuGroupLabel>
                <MenuRadioGroup value={theme} onValueChange={setTheme}>
                  <MenuRadioItem value="light">Light</MenuRadioItem>
                  <MenuRadioItem value="dark">Dark</MenuRadioItem>
                  <MenuRadioItem value="system">System</MenuRadioItem>
                </MenuRadioGroup>
              </MenuGroup>
            </MenuPopup>
          </Menu>
        </div>
      </div>
    </header>
  )
}
