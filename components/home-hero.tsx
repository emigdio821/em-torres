import Image from 'next/image'
import { LuGithub } from 'react-icons/lu'
import { RiLinkedinLine } from 'react-icons/ri'

import { siteConfig } from '@/config/site'
import { cn } from '@/lib/utils'

import SpotiWidget from './spotify-widget'
import { buttonVariants } from './ui/button'

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
              <h2 className="text-xl font-bold opacity-80 md:text-2xl">Software Engineer</h2>
              <div className="flex items-center gap-2">
                <a
                  rel="noopener noreferrer"
                  href={siteConfig.links.github}
                  className={cn(
                    buttonVariants({
                      variant: 'secondary',
                      size: 'sm',
                    }),
                    'my-4 font-semibold',
                  )}
                >
                  <LuGithub className="mr-2" />
                  GitHub
                </a>
                <a
                  rel="noopener noreferrer"
                  href={siteConfig.links.linkedin}
                  className={cn(
                    buttonVariants({
                      variant: 'secondary',
                      size: 'sm',
                    }),
                    'my-4 font-semibold',
                  )}
                >
                  <RiLinkedinLine className="mr-2" />
                  LinkedIn
                </a>
              </div>
              <SpotiWidget />
            </div>
            <Image
              priority
              width={176}
              height={176}
              alt="Emigdio"
              src="/images/em.jpg"
              className="h-36 w-36 rounded-full object-cover shadow-md sm:h-44 sm:w-44"
            />
          </div>
          <p className="pt-4 text-xl font-bold md:text-2xl">
            Hey there, I&apos;m a Software Engineer, mainly focused on front-end development.
            Currently, I&apos;m contributing to{' '}
            <a
              className={cn(
                buttonVariants({
                  size: 'sm',
                  variant: 'link',
                }),
                'p-0 text-xl font-extrabold transition-none md:text-2xl',
              )}
              href={siteConfig.links.jobCompany}
            >
              Wizeline
            </a>{' '}
            projects.
          </p>
        </div>
      </div>
    </section>
  )
}
