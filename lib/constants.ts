import { GithubIcon, Linkedin01Icon, Location03Icon, Mail01Icon, SmartPhone01Icon } from '@hugeicons/core-free-icons'
import { siteConfig } from '@/config/site'

export const CONTACT_LINKS = [
  {
    icon: Linkedin01Icon,
    href: siteConfig.links.linkedin,
    label: '@emigdio821',
  },
  {
    icon: GithubIcon,
    href: siteConfig.links.github,
    label: '@emigdio821',
  },
  {
    icon: Location03Icon,
    href: siteConfig.links.location,
    label: 'Jalisco, Mexico',
  },
  {
    icon: SmartPhone01Icon,
    href: 'tel:+523139617676',
    label: '+52 (313) 961-7676',
  },
  {
    icon: Mail01Icon,
    href: 'mailto:emigdio821@gmail.com',
    label: 'emigdio821@gmail.com',
  },
]
