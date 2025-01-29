import NextLink from 'next/link'
import { siteConfig } from '@/config/site'
import { SKILLS_ICONS } from '@/lib/constants'
import { Button } from '@/components/ui/button'
import { SpotifyActivity } from '@/components/spotify-activity'

const SKILLS = SKILLS_ICONS.filter((skill) => skill.label !== 'React Native')

export default async function HomePage() {
  return (
    <section className="mx-auto w-full max-w-xl space-y-4">
      <h4 className="text-base leading-none font-semibold tracking-tight sm:text-lg">Emigdio Torres</h4>
      <p className="text-sm">
        Hey there, I'm a Software Engineer, mainly focused on frontend development. Currently, I'm contributing to{' '}
        <Button variant="underline" asChild>
          <a href="https://www.wizeline.com/" target="_blank" rel="noreferrer">
            Wizeline
          </a>
        </Button>{' '}
        projects.
      </p>
      <p className="text-sm">Technologies I currently use: {SKILLS.map((skill) => skill.label).join(', ')}.</p>
      <p className="text-sm">
        I love music. On my free time I like to play videogames or play drums. I like to build custom PC&apos;s.
        I&apos;m also passionate about new technology topics.
      </p>

      <h4 className="text-base leading-none font-semibold tracking-tight sm:text-lg">Links</h4>
      <ul>
        <li>
          <Button variant="underline" asChild>
            <a href={siteConfig.links.github} target="_blank" rel="noreferrer">
              GitHub
            </a>
          </Button>
        </li>
        <li>
          <Button variant="underline" asChild>
            <a href={siteConfig.links.linkedin} target="_blank" rel="noreferrer">
              LinkedIn
            </a>
          </Button>
        </li>
        <li>
          <Button variant="underline" asChild>
            <NextLink href="/resume">Resume</NextLink>
          </Button>
        </li>
      </ul>

      <h4 className="text-base leading-none font-semibold tracking-tight sm:text-lg">Recently played</h4>
      <SpotifyActivity />
    </section>
  )
}
