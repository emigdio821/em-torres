import {
  Button,
  type ButtonProps,
  useColorModeValue,
  Icon as ChakraIcon,
} from '@chakra-ui/react'

interface ContactLinksProps extends ButtonProps {
  text: string
  href: string
  Icon: React.ComponentType
}

export default function ContactLink({
  text,
  Icon,
  ...props
}: ContactLinksProps) {
  return (
    <Button
      as="a"
      size="sm"
      {...props}
      role="group"
      variant="link"
      target="_blank"
      fontWeight={600}
      aria-label={text}
      rel="noopener noreferrer"
      style={{ textDecoration: 'none' }}
      color={useColorModeValue('#333', '#f0efef')}
      leftIcon={
        <ChakraIcon
          as={Icon}
          transition="0.2s"
          _groupHover={{ transform: 'scale(1.15)' }}
        />
      }
      _hover={{
        opacity: 0.8,
      }}
    >
      {text}
    </Button>
  )
}
