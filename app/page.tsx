import { HomeHero } from '@/components/home/hero'
import { Hobbies } from '@/components/home/hobbies'
import { Skills } from '@/components/home/skills'

export default async function HomePage() {
  return (
    <>
      <HomeHero />
      <Skills />
      <Hobbies />
    </>
  )
}
