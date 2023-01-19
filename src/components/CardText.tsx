import { Text } from '@chakra-ui/react'

export default function CardText({ children }: { children: React.ReactNode }) {
  return (
    <Text
      fontWeight="bold"
      lineHeight={1.25}
      fontSize={{ base: '2xl', md: '3xl' }}
    >
      {children}
    </Text>
  )
}
