import { RiGithubLine, RiLinkedinLine, RiMailLine, RiMapPinLine, RiPhoneLine } from '@remixicon/react'
import { siteConfig } from '@/config/site'

export const CONTACT_LINKS = [
  {
    icon: RiLinkedinLine,
    href: siteConfig.links.linkedin,
    label: '@emigdio821',
  },
  {
    icon: RiGithubLine,
    href: siteConfig.links.github,
    label: '@emigdio821',
  },
  {
    icon: RiMapPinLine,
    href: siteConfig.links.location,
    label: 'Jalisco, Mexico',
  },
  {
    icon: RiPhoneLine,
    href: 'tel:+523139617676',
    label: '+52 (313) 961-7676',
  },
  {
    icon: RiMailLine,
    href: 'mailto:emigdio821@gmail.com',
    label: 'emigdio821@gmail.com',
  },
]
