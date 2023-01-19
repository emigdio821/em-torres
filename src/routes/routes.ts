import NotFound from 'pages/NotFound'
import Home from 'pages/Home'
import Resume from 'pages/Resume'

interface Title {
  title: string
}

interface Route {
  to: string
  path: string
  name: string
  Component: ({ title }: Title) => JSX.Element
}

const routes: Route[] = [
  {
    to: '/not-found',
    path: 'not-found',
    name: 'Not found',
    Component: NotFound,
  },
  {
    to: '/',
    path: '/',
    name: 'Home',
    Component: Home,
  },
  {
    to: '/resume',
    path: 'resume',
    name: 'Resume',
    Component: Resume,
  },
]

export default routes
