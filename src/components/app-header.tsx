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
    <header className="sticky top-0 z-40 bg-background border-b">
      <div className="flex max-w-xl w-full items-center justify-between py-4 mx-auto">
        <Button variant="ghost" className="-ms-2.5" render={<Link href="/">Emigdio Torres</Link>} />

        <div className="flex items-center gap-2">
          <Button
            variant="ghost"
            render={<Link href="/resume">Resume</Link>}
            className={cn(isResumeActive && 'bg-accent')}
          />
          <Menu>
            <MenuTrigger render={<Button variant="outline" size="icon" />}>
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
