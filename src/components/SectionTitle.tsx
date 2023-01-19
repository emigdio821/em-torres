import { Heading } from '@chakra-ui/react'
import TextColorModeVal from 'utils/TextColorModeVal'

interface SectionTitleProps {
  children: React.ReactNode
}

export default function SectionTitle({ children }: SectionTitleProps) {
  return (
    <Heading mb={3} as="h4" size="md" color={TextColorModeVal()}>
      {children}
    </Heading>
  )
}
