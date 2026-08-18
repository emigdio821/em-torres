'use client'

import { siteConfig } from '@/config/site'
import { Button } from './ui/button'
import { Separator } from './ui/separator'

export function AppFooter() {
  return (
    <footer className="mt-auto print:hidden border-t py-2 px-4 sm:p-4">
      <div className="flex gap-2 max-w-xl size-full items-center justify-center  mx-auto">
        <Button
          variant="link"
          render={
            <a href={siteConfig.links.github} target="_blank" rel="noreferrer">
              GitHub
            </a>
          }
        />

        <Separator orientation="vertical" className="h-4" />

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
