import { Footer } from '@/components/footer'
import { Navbar } from '@/components/navbar'
import { Providers } from '@/components/providers'
import { TailwindIndicator } from '@/components/tw-indicator'
import { siteConfig } from '@/config/site'
import { fontSans } from '@/lib/fonts'
import { cn } from '@/lib/utils'
import '@/styles/globals.css'
import type { Metadata, Viewport } from 'next'
import type { PropsWithChildren } from 'react'

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s · ${siteConfig.name}`,
  },
  description: siteConfig.description,
  authors: [
    {
      name: 'Emigdio Torres',
      url: siteConfig.url,
    },
  ],
  keywords: ['Emigdio Torres', 'Emigdio', 'Torres', 'Em Torres', 'Software Engineer', 'emtorres', 'Mexico'],
  metadataBase: new URL(siteConfig.url),
  creator: 'Emigdio Torres',
  icons: {
    icon: 'images/favicon.ico',
    shortcut: 'images/favicon-16x16.png',
    apple: 'images/apple-touch-icon.png',
  },
  openGraph: {
    title: 'Emigdio Torres',
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: siteConfig.name,
    locale: 'en-US',
    type: 'website',
    images: siteConfig.ogUrl,
  },
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.name,
    description: siteConfig.description,
    images: [siteConfig.ogUrl],
    creator: '@emigdio821',
  },
  robots: '/robots.txt',
  manifest: '/site.webmanifest',
}

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#000000' },
  ],
}

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body
        className={cn('relative flex min-h-screen flex-col bg-background font-sans antialiased ', fontSans.variable)}
      >
        <Providers>
          <Navbar />
          <main className="flex flex-col gap-4">{children}</main>
          <Footer />
          <TailwindIndicator />
        </Providers>
      </body>
    </html>
  )
}
