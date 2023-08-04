import NextLink from 'next/link'
import type { Metadata } from 'next/types'
import { LuArrowLeft, LuGhost } from 'react-icons/lu'

import { siteConfig } from '@/config/site'
import { buttonVariants } from '@/components/ui/button'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'

export const metadata: Metadata = {
  title: {
    default: 'Not found',
    template: `%s · ${siteConfig.name}`,
  },
  description: siteConfig.description,
  authors: [
    {
      name: 'Emigdio Torres',
      url: siteConfig.url,
    },
  ],
  creator: 'Emigdio Torres',
  icons: {
    icon: 'images/favicon.ico',
    shortcut: 'images/favicon-16x16.png',
    apple: 'images/apple-touch-icon.png',
  },
  manifest: '/site.webmanifest',
}

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-between px-4 py-6 pt-20">
      <Card className="w-full max-w-sm">
        <CardHeader>
          <CardTitle className="text-center text-8xl font-extrabold">
            <LuGhost size={32} className="mx-auto mb-2" />
            404
          </CardTitle>
          <CardContent className="text-center text-lg font-semibold">
            This page does not exist.
          </CardContent>
          <CardFooter className="items-center justify-center">
            <NextLink
              href="/"
              className={buttonVariants({ variant: 'outline', className: 'mt-6' })}
            >
              <LuArrowLeft className="mr-2" />
              Back to home
            </NextLink>
          </CardFooter>
        </CardHeader>
      </Card>
    </div>
  )
}
