import { Heading } from '@chakra-ui/react'

export default function CardText({ children }: { children: React.ReactNode }) {
  return (
    <Heading as="h2" size="lg">
      {children}
    </Heading>
  )
}
