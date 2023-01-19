import {
  Flex,
  Text,
  Stack,
  Button,
  Divider,
  Container,
  IconButton,
  ButtonGroup,
} from '@chakra-ui/react'
import { FaLinkedinIn, FaGithub } from 'react-icons/fa'
import { BiCoffee } from 'react-icons/bi'

export default function Footer() {
  return (
    <Container as="footer" role="contentinfo" pt={20} px={0} maxW="2xl">
      <Divider opacity={0.4} />
      <Stack
        pt={4}
        pb={4}
        opacity={0.8}
        align="center"
        justify="space-between"
        px={{ base: 4, md: 0 }}
        direction={{ base: 'column', sm: 'row' }}
      >
        <Flex direction="row" alignItems="center" alignContent="center">
          <BiCoffee fontSize="1.3rem" />
          <Text ml={2} fontWeight={700} fontSize="1.3rem">
            Em<span style={{ fontWeight: 800 }}>.</span>
          </Text>
        </Flex>
        {/* <Text fontSize="sm" py={2} m="0 !important">
          &copy; {new Date().getFullYear()} all rights reserved.
        </Text> */}
        <ButtonGroup>
          <Button
            as="a"
            size="sm"
            target="_blank"
            variant="simple"
            borderRadius="full"
            leftIcon={<FaGithub />}
            rel="noopener noreferrer"
            href="https://github.com/emigdio821/emigdio821.github.io"
          >
            Source
          </Button>
          <IconButton
            as="a"
            size="sm"
            target="_blank"
            variant="simple"
            aria-label="LinkedIn"
            icon={<FaLinkedinIn />}
            rel="noopener noreferrer"
            href="https://www.linkedin.com/in/emigdio821/"
          />
          {/* <IconButton
            as="a"
            size="sm"
            target="_blank"
            aria-label="Twitter"
            icon={<FaTwitter />}
            rel="noopener noreferrer"
            href="https://twitter.com/emigdio821"
          /> */}
        </ButtonGroup>
      </Stack>
    </Container>
  )
}
