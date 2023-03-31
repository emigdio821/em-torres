import {
  Button,
  type ButtonProps,
  useColorModeValue,
  Icon as ChakraIcon,
} from '@chakra-ui/react'

interface FooterBtnProps extends ButtonProps {
  text: string
  href: string
  Icon: React.ComponentType
}

export default function BtnLink({
  text,
  href,
  Icon,
  size = 'sm',
  variant = 'solid',
}: FooterBtnProps) {
  return (
    <Button
      as="a"
      size={size}
      href={href}
      role="group"
      target="_blank"
      variant={variant}
      aria-label={text}
      rel="noopener noreferrer"
      style={{ textDecoration: 'none' }}
      color={useColorModeValue('#333', '#f0efef')}
      leftIcon={
        <ChakraIcon
          as={Icon}
          transition="all 0.2s"
          _groupHover={{ transform: 'scale(1.15)' }}
        />
      }
    >
      {text}
    </Button>
  )
}
