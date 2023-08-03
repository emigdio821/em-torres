'use client'

import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { FaGithub, FaLinkedinIn } from 'react-icons/fa'
import { LuChevronDown } from 'react-icons/lu'

import { siteConfig } from '@/config/site'
import { cn } from '@/lib/utils'

import { BlurImage } from './blur-image'
import SpotiWidget from './spotify-widget'
import { Button, buttonVariants } from './ui/button'

export function HomeHero() {
  const titleRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const titleEl = titleRef.current

    function handleScroll() {
      if (titleEl != null) titleEl.style.backgroundPositionY = `${window.scrollY * 0.4}px`
    }

    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <section
      ref={titleRef}
      className="home-hero relative h-screen min-h-[660px] bg-white__nav_bg bg-[url(/images/title-bg-light.svg)] px-4 dark:bg-dark__nav_bg dark:bg-[url(/images/title-bg.svg)]"
    >
      <div className="mx-auto flex h-full w-full max-w-3xl items-center justify-center">
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
          <div className="flex w-full flex-col-reverse items-start gap-6 py-6 md:flex-row md:items-center">
            <div>
              <h1 className="text-4xl font-extrabold md:text-5xl">
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
                      variant: 'outline',
                      size: 'sm',
                    }),
                    'my-4 font-semibold',
                  )}
                >
                  <FaGithub className="mr-2" />
                  GitHub
                </a>
                <a
                  rel="noopener noreferrer"
                  href={siteConfig.links.linkedin}
                  className={cn(
                    buttonVariants({
                      variant: 'outline',
                      size: 'sm',
                    }),
                    'my-4 font-semibold',
                  )}
                >
                  <FaLinkedinIn className="mr-2" />
                  LinkedIn
                </a>
              </div>
              <SpotiWidget />
            </div>
            <div className="relative h-36 w-36 overflow-hidden rounded-full bg-zinc-800 shadow-md md:h-44 md:w-44">
              <BlurImage src="/images/em.jpg" alt="Em Avatar" priority />
            </div>
          </div>
          <p className="pt-6 text-xl font-bold md:text-2xl">
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
        </motion.div>
      </div>
      <Button
        size="icon"
        type="button"
        variant="ghost"
        aria-label="Scroll down"
        onClick={() => {
          window.scrollTo({ behavior: 'smooth', top: document.body.scrollHeight })
        }}
        className=" absolute bottom-1 left-1/2 -translate-x-1/2"
      >
        <span className="sr-only">Scroll down</span>
        <LuChevronDown size={20} />
      </Button>
    </section>
  )
}
