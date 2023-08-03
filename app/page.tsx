import { Hobbies } from '@/components/hobbies'
import { HomeHero } from '@/components/home-hero'
import { Skills } from '@/components/skills'

export default async function HomePage() {
  return (
    <>
      <HomeHero />
      <Skills />
      <Hobbies />
    </>
  )
}
