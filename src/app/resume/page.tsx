import type { Metadata } from 'next/types'
import { ResumeContent } from '@/components/resume/content'
import { siteConfig } from '@/config/site'

export const metadata: Metadata = {
  title: {
    default: 'Resume',
    template: `%s · ${siteConfig.name}`,
  },
  description: siteConfig.resumeDesc,
  openGraph: {
    title: 'Emigdio Torres · Resume',
    description: siteConfig.resumeDesc,
    url: siteConfig.url,
    siteName: siteConfig.name,
    locale: 'en-US',
    type: 'website',
    images: siteConfig.ogUrl,
  },
}

export default async function ResumePage() {
  return (
    <section>
      <ResumeContent />
    </section>
  )
}
