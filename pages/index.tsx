// import Image from 'next/image'
import Skills from '@/components/Skills'
import Helmet from '@/components/Helmet'
import Hobbies from '@/components/Hobbies'
import HomeHero from '@/components/HomeHero'
import { Container } from '@chakra-ui/react'

export default function Home() {
  return (
    <>
      <Helmet title="Em." />
      <HomeHero />
      <Container maxW="4xl" px={{ base: 4, lg: 0 }}>
        <Skills />
        <Hobbies />
      </Container>
      {/* <Image
        src="/vercel.svg"
        alt="Vercel Logo"
        className={styles.vercelLogo}
        width={100}
        height={24}
        priority
      /> */}
    </>
  )
}
