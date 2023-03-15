import Skills from '@/components/Skills'
import Helmet from '@/components/Helmet'
import Hobbies from '@/components/Hobbies'
import HomeHero from '@/components/HomeHero'
import { Container } from '@chakra-ui/react'

export default function Home() {
  return (
    <>
      <Helmet title="Em Torres" />
      <HomeHero />
      <Container maxW="4xl" px={{ base: 4, lg: 0 }}>
        <Skills />
        <Hobbies />
      </Container>
    </>
  )
}
