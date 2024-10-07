import { IconBrandGithub } from '@tabler/icons-react'
import { siteConfig } from '@/config/site'
import { cn } from '@/lib/utils'
import { buttonVariants } from '@/components/ui/button'

export function Footer() {
  return (
    <footer className="mt-auto px-4 pt-6 print:hidden">
      <div className="mx-auto flex max-w-3xl flex-col items-center justify-center pb-4">
        <div className="flex flex-col items-center gap-1">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href={siteConfig.links.sourceCode}
            className={cn(buttonVariants({ variant: 'link', size: 'sm' }), 'h-auto p-0 font-semibold transition-none')}
          >
            <IconBrandGithub className="mr-2 size-4" />
            Source
          </a>
          <span className="flex items-center gap-1 text-sm">
            <span className="font-semibold">{new Date().getFullYear()}</span> · Emigdio Torres
          </span>
        </div>
      </div>
    </footer>
  )
}
