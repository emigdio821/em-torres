import '@/styles/globals.css'

import { type PropsWithChildren } from 'react'
import { type Metadata } from 'next'

import { siteConfig } from '@/config/site'
import { fontSans } from '@/lib/fonts'
import { cn } from '@/lib/utils'
import { Footer } from '@/components/footer'
import { Navbar } from '@/components/navbar'
import { ThemeProvider } from '@/components/theme-provider'
import { TailwindIndicator } from '@/components/tw-indicator'

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s · ${siteConfig.name}`,
  },
  description: siteConfig.description,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: 'black' },
  ],
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
  openGraph: {
    title: 'Emigdio Torres',
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: siteConfig.name,
    locale: 'en-US',
    type: 'website',
    images: siteConfig.ogUrl,
  },
  robots: '/robots.txt',
  manifest: '/site.webmanifest',
}

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body
        className={cn(
          'relative flex min-h-screen flex-col bg-background font-sans antialiased ',
          fontSans.variable,
        )}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Navbar />
          <main className="flex flex-col gap-6">{children}</main>
          <Footer />
          <TailwindIndicator />
        </ThemeProvider>
      </body>
    </html>
  )
}
