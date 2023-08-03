import type { Metadata } from 'next/types'

import { siteConfig } from '@/config/site'
import { ResumeContent } from '@/components/resume/content'

export const metadata: Metadata = {
  title: {
    default: 'Resume',
    template: `%s · ${siteConfig.name}`,
  },
  description: "Emigdio's resume.",
}

export default async function ResumePage() {
  return (
    <section className="mt-auto px-4 pt-20">
      <ResumeContent />
    </section>
  )
}
