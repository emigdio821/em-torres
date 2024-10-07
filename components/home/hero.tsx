import { IconBrandGithub, IconBrandLinkedin } from '@tabler/icons-react'
import { siteConfig } from '@/config/site'
import { Button } from '@/components/ui/button'
import { BlurImage } from '@/components/blur-image'
import { SpotiWidget } from '@/components/spotify-widget'

export function HomeHero() {
  return (
    <section className="relative h-[calc(100vh-4rem)] bg-background bg-[url(/images/title-bg-light.svg)] px-4 dark:bg-[url(/images/title-bg.svg)]">
      <div className="mx-auto flex h-full w-full max-w-3xl items-center justify-center">
        <div>
          <div className="flex w-full flex-col-reverse items-start gap-6 sm:flex-row sm:items-center">
            <div>
              <h1 className="text-3xl font-extrabold md:text-4xl">
                Emigdio Torres
                <span className="ml-2 animate-blinking">_</span>
              </h1>
              <h2 className="text-xl font-bold text-muted-foreground md:text-2xl">Software Engineer</h2>
              <div className="my-4 flex items-center space-x-2">
                <Button asChild variant="outline">
                  <a rel="noopener noreferrer" target="_blank" href={siteConfig.links.github}>
                    <IconBrandGithub className="mr-2 size-4" />
                    GitHub
                  </a>
                </Button>

                <Button asChild variant="outline">
                  <a rel="noopener noreferrer" target="_blank" href={siteConfig.links.linkedin}>
                    <IconBrandLinkedin className="mr-2 size-4" />
                    LinkedIn
                  </a>
                </Button>
              </div>
              <SpotiWidget />
            </div>

            <div className="size-36 rounded-full sm:size-44">
              <BlurImage priority src="/images/em.jpg" alt="Emigdio" />
            </div>
          </div>
          <p className="pt-4 text-xl font-bold md:text-2xl">
            Hey there, I&apos;m a Software Engineer, mainly focused on front-end development. Currently, I&apos;m
            contributing to{' '}
            <Button asChild variant="underline" className="text-xl font-bold text-muted-foreground md:text-2xl">
              <a href={siteConfig.links.jobCompany}>Wizeline</a>
            </Button>{' '}
            projects.
          </p>
        </div>
      </div>
    </section>
  )
}
