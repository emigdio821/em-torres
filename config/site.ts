export type SiteConfig = typeof siteConfig

export const siteConfig = {
  name: 'Em Torres',
  brand: 'emtorres',
  url: 'https://emtorres.vercel.app/',
  description: 'Software Engineer based in Mexico.',
  resumeDesc: "Emigdio's resume.",
  ogUrl: 'https://emtorres.vercel.app/api/og',
  navItems: [
    {
      title: 'Resume',
      href: '/resume',
    },
  ],
  links: {
    github: 'https://github.com/emigdio821/',
    sourceCode: 'https://github.com/emigdio821/em-torres',
    linkedin: 'https://www.linkedin.com/in/emigdio821/',
    jobCompany: 'https://www.wizeline.com/',
    location: 'https://www.google.com.mx/maps/place/Jalisco',
  },
}
