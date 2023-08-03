import NextLink from 'next/link'
import type { Metadata } from 'next/types'
import { LuArrowLeft } from 'react-icons/lu'

import { siteConfig } from '@/config/site'
import { buttonVariants } from '@/components/ui/button'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'

export const metadata: Metadata = {
  title: {
    default: 'Not found',
    template: `${siteConfig.name} · %s`,
  },
  description: siteConfig.description,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: 'black' },
  ],
  authors: [
    {
      name: 'Emigdio Torres',
      url: 'https://emtorres.vercel.app/',
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
          <CardTitle className="font-heading text-center text-8xl font-extrabold">404</CardTitle>
          <CardContent className="text-center text-lg">This page does not exist.</CardContent>
          <CardFooter className="items-center justify-center">
            <NextLink href="/" className={buttonVariants({ className: 'mt-6' })}>
              <LuArrowLeft className="mr-2" />
              Back to home
            </NextLink>
          </CardFooter>
        </CardHeader>
      </Card>
    </div>
  )
}
