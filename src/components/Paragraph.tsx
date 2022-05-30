import { Text } from "@chakra-ui/react"

interface ParagraphProps {
  children: React.ReactNode;
}

export const Paragraph = ({ children }: ParagraphProps) => {
  return (
    <Text>
      {children}
    </Text>
  )
}
