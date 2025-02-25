interface ExperienceData {
  id: number
  title: string
  year: string
  company: string
  description: string
}

export const EXPERIENCE: ExperienceData[] = [
  {
    id: 1,
    title: 'Software Engineer',
    year: 'Present',
    company: 'Wizeline',
    description:
      'Mainly working as a Frontend engineer, development and support for the B2B and B2C login pages from the Dow Jones company. Sometimes I work in the backend using Node.js and Express.' +
      'Updated UI and refactored two jQuery legacy projects to React, TypeScript and Tailwind, increasing performance and application a11y. ' +
      'Created internal application from scratch to manage some internal data, using Next.js, and Tailwind.' +
      'Currently we are migrating our backend to TypeScript and improving our unit testing using Jest.',
  },
  {
    id: 2,
    title: 'Software Engineer',
    year: '2019 - 2021',
    company: 'HCL Technologies',
    description:
      'Frontend, using IBM Dojo Toolkit, after some time we migrated to React, Redux, and Material UI. Development of a web content manager.',
  },
  {
    id: 3,
    title: 'Software Engineer',
    year: '2017 - 2019',
    company: 'Advanced Methods Co. (Amco)',
    description:
      'Frontend, using SASS, JQuery, and Bootstrap. Sometimes Backend side, using Ruby on Rails. Development of Payments portal for an education platform.',
  },
  {
    id: 4,
    title: 'Web Developer',
    year: '2014 - 2017',
    company: 'TATA Consultancy Services',
    description:
      'Frontend, using JavaScript under a framework called: Ext JS. Development of banking web apps for Morgan Stanley.',
  },
]
