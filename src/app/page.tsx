import { IconExternalLink } from '@tabler/icons-react'
import NextLink from 'next/link'
// import { BlurImage } from '@/components/blur-image'
import { SpotifyActivity } from '@/components/spotify-activity'
import { Button } from '@/components/ui/button'
import { siteConfig } from '@/config/site'

export default async function HomePage() {
  return (
    <section className="mx-auto w-full max-w-xl space-y-4 text-sm">
      {/* <div className="size-11 rounded-full shadow-lg transition-all hover:size-32">
        <BlurImage src="/images/em.jpg" alt="Emigdio" />
      </div> */}
      <h4 className="text-base leading-none font-semibold tracking-tight">Emigdio Torres</h4>
      <p>
        Hey there, I'm a Software Engineer, mainly focused on frontend development. Currently, I'm
        contributing to{' '}
        <Button variant="link" asChild>
          <a href="https://www.wizeline.com/" target="_blank" rel="noreferrer">
            Wizeline
          </a>
        </Button>{' '}
        projects.
      </p>
      <p>Technologies I currently use: TypeScript, React, Tailwind, Next.js and Node.js.</p>
      <p>
        I love music. On my free time I like to play videogames or play drums. I like to build custom
        PC&apos;s. I&apos;m also passionate about new technology topics.
      </p>

      <h4 className="text-base leading-none font-semibold tracking-tight">Links</h4>
      <ul>
        <li>
          <Button variant="link" asChild>
            <NextLink href="/resume">Resume</NextLink>
          </Button>
        </li>
        <li>
          <Button variant="link" asChild>
            <a href={siteConfig.links.github} target="_blank" rel="noreferrer">
              GitHub
              <IconExternalLink className="size-4" />
            </a>
          </Button>
        </li>
        <li>
          <Button variant="link" asChild>
            <a href={siteConfig.links.linkedin} target="_blank" rel="noreferrer">
              LinkedIn
              <IconExternalLink className="size-4" />
            </a>
          </Button>
        </li>
      </ul>

      <h4 className="text-base leading-none font-semibold tracking-tight">Recently played</h4>
      <SpotifyActivity />
    </section>
  )
}
