import type { PropsWithChildren } from 'react'
import type { Metadata, Viewport } from 'next'
import { siteConfig } from '@/config/site'
import { fontSans } from '@/lib/fonts'
import { Footer } from '@/components/footer'
import { Providers } from '@/components/providers'
import '@/styles/globals.css'

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
    <html lang="en" suppressHydrationWarning>
      <head />
      <body className={`${fontSans.variable} flex h-dvh flex-col font-sans antialiased`}>
        <Providers>
          <main className="p-4">{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  )
}
