import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconDeviceMobile,
  IconMail,
  IconMapPin,
} from '@tabler/icons-react'
import { siteConfig } from '@/config/site'

export const CONTACT_LINKS = [
  {
    icon: IconBrandLinkedin,
    href: siteConfig.links.linkedin,
    label: '@emigdio821',
  },
  {
    icon: IconBrandGithub,
    href: siteConfig.links.github,
    label: '@emigdio821',
  },
  {
    icon: IconMapPin,
    href: siteConfig.links.location,
    label: 'Jalisco, Mexico',
  },
  {
    icon: IconDeviceMobile,
    href: 'tel:+523139617676',
    label: '+52 (313) 961-7676',
  },
  {
    icon: IconMail,
    href: 'mailto:emigdio821@gmail.com',
    label: 'emigdio821@gmail.com',
  },
]
