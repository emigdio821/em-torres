'use client'

import { siteConfig } from '@/config/site'
import { Button } from './ui/button'
import { Separator } from './ui/separator'

export function AppFooter() {
  return (
    <footer className="mt-auto px-4 print:hidden border-t">
      <div className="flex gap-2 max-w-xl w-full items-center justify-center py-4 mx-auto">
        <Button
          variant="link"
          render={
            <a href={siteConfig.links.github} target="_blank" rel="noreferrer">
              GitHub
            </a>
          }
        />

        <Separator orientation="vertical" />

        <Button
          variant="link"
          render={
            <a href={siteConfig.links.linkedin} target="_blank" rel="noreferrer">
              LinkedIn
            </a>
          }
        />
      </div>
    </footer>
  )
}
