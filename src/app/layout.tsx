import type { Metadata, Viewport } from 'next'
import { Geist_Mono, Geist } from 'next/font/google'
import type { PropsWithChildren } from 'react'
import { AppFooter } from '@/components/app-footer'
import { AppHeader } from '@/components/app-header'
import { Providers } from '@/components/providers'
import { siteConfig } from '@/config/site'
import { cn } from '@/lib/utils'
import '@/styles/globals.css'

const fontMono = Geist_Mono({ subsets: ['latin'], variable: '--font-mono' })
const fontHeading = Geist({ subsets: ['latin'], variable: '--font-heading' })
const fontSans = Geist({ subsets: ['latin'], variable: '--font-sans' })

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
    icon: 'favicon.ico',
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
  manifest: '/site.webmanifest',
}

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#fff' },
    { media: '(prefers-color-scheme: dark)', color: '#000' },
  ],
}

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn('font-mono', fontSans.variable, fontHeading.variable, fontMono.variable)}
    >
      <head />
      <body className="flex h-dvh flex-col font-sans antialiased">
        <Providers>
          <AppHeader />
          <main className="p-4">{children}</main>
          <AppFooter />
        </Providers>
      </body>
    </html>
  )
}
