import NextLink from 'next/link'
import type { Metadata } from 'next/types'
import { IconChevronLeft } from '@tabler/icons-react'
import { siteConfig } from '@/config/site'
import { Button } from '@/components/ui/button'
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'

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
    <div className="flex flex-col items-center justify-between">
      <Card className="w-full max-w-sm">
        <CardHeader>
          <CardTitle className="text-center text-xl">404</CardTitle>
          <CardDescription className="text-center">This page does not exist.</CardDescription>
        </CardHeader>
        <CardFooter className="items-center justify-center">
          <Button variant="outline" asChild>
            <NextLink href="/">
              <IconChevronLeft className="mr-2 size-4" />
              Back to home
            </NextLink>
          </Button>
        </CardFooter>
      </Card>
    </div>
  )
}
