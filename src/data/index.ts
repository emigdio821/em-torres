interface IExpData {
  id: number
  title: string
  year: string
  company: string
  description: string
}

const expData: IExpData[] = [
  {
    id: 1,
    title: 'Software Engineer',
    year: 'Present',
    company: 'Wizeline',
    description:
      'Currently working on Frontend, using Vanilla JS, CSS, Typescript, React, NextJS, and Chakra UI. Development and support for the Dow Jones products.',
  },
  {
    id: 2,
    title: 'Software Engineer',
    year: '2019 - 2021',
    company: 'HCL Technologies',
    description:
      'Frontend, using IBM Dojo toolkit, migrating to React, Redux and MaterialUI. Development of an application builder.',
  },
  {
    id: 3,
    title: 'Software Engineer',
    year: '2017 - 2019',
    company: 'Advanced Methods Co. (Amco)',
    description:
      'Frontend, using SASS, JQuery and Bootstrap. Sometimes Backend side, using Ruby on Rails. Development of Payments portal for an education platform.',
  },
  {
    id: 4,
    title: 'Web Developer',
    year: '2014 - 2017',
    company: 'TATA Consultancy Services',
    description:
      'Frontend, using JavaScript under a framework called: ExtJS. Development of banking web apps for Morgan Stanley.',
  },
]

export default expData
