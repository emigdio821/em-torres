import { SpotifyActivity } from '@/components/spotify-activity'
import { Button } from '@/components/ui/button'

export default async function HomePage() {
  return (
    <section className="mx-auto w-full max-w-xl space-y-4 text-sm">
      <p>
        Hi, I&apos;m a Software Engineer specializing in frontend development. I&apos;m currently building
        products with the team at{' '}
        <Button
          variant="link"
          render={
            <a href="https://www.wizeline.com/" target="_blank" rel="noreferrer">
              Wizeline
            </a>
          }
        />
        , where I focus on crafting fast, accessible, and maintainable user interfaces.
      </p>
      <p>
        I work primarily with TypeScript, React, Next.js, Tailwind CSS, and Node.js to deliver polished
        end-to-end experiences.
      </p>
      <p>
        In my free time, I like to play the drums and play video games. I&apos;m always trying to stay up to
        date with the latest technology topics, and I really enjoy learning new things.
      </p>

      <h4 className="text-base leading-none font-semibold tracking-tight">Recently played</h4>
      <SpotifyActivity />
    </section>
  )
}
