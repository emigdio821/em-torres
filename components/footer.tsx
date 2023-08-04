import { FaGithub } from 'react-icons/fa'

import { siteConfig } from '@/config/site'
import { cn } from '@/lib/utils'

import { buttonVariants } from './ui/button'

export function Footer() {
  return (
    <footer className="mt-auto px-4 pt-6 print:hidden">
      <div className="mx-auto flex max-w-3xl flex-col items-center justify-center pb-4">
        <div className="flex gap-2">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href={siteConfig.links.projectSource}
            className={cn(buttonVariants({ variant: 'link', size: 'sm' }), 'font-semibold')}
          >
            <FaGithub className="mr-2" />
            Source
          </a>
        </div>
      </div>
    </footer>
  )
}
