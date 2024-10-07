import {
  IconAt,
  IconBackpack,
  IconBrandGithub,
  IconBrandLinkedin,
  IconBrandNextjs,
  IconBrandNodejs,
  IconBrandReact,
  IconBrandReactNative,
  IconBrandTailwind,
  IconBrandTypescript,
  IconDeviceGamepad,
  IconDeviceMobile,
  IconHeadphones,
  IconMapPin,
  IconMusicBolt,
  IconRobot,
} from '@tabler/icons-react'
import { siteConfig } from '@/config/site'

export const SKILLS_ICONS = [
  {
    icon: IconBrandTypescript,
    label: 'TypeScript',
  },
  {
    icon: IconBrandReact,
    label: 'React',
  },
  {
    icon: IconBrandReactNative,
    label: 'React Native',
  },
  {
    icon: IconBrandTailwind,
    label: 'Tailwind',
  },
  {
    icon: IconBrandNextjs,
    label: 'Next.js',
  },
  {
    icon: IconBrandNodejs,
    label: 'Node.js',
  },
]

export const HOBBIES_ICONS = [
  {
    icon: IconMusicBolt,
    label: 'Drums',
  },
  {
    icon: IconHeadphones,
    label: 'Music',
  },
  {
    icon: IconDeviceGamepad,
    label: 'Games',
  },
  {
    icon: IconRobot,
    label: 'Tech',
  },

  {
    icon: IconBackpack,
    label: 'Travel',
  },
]

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
    icon: IconAt,
    href: 'mailto:emigdio821@gmail.com',
    label: 'emigdio821@gmail.com',
  },
]
