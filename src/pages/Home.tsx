import Skills from 'components/Skills'
import Hobbies from 'components/Hobbies'
import { Container } from '@chakra-ui/react'
import HomeTitle from 'components/HomeTitle'
import useTitle from 'hooks/useTitle'

export default function Home() {
  useTitle()

  return (
    <>
      <HomeTitle />
      <Container maxW="4xl" px={{ base: 4, lg: 0 }}>
        <Skills />
        <Hobbies />
      </Container>
    </>
  )
}
