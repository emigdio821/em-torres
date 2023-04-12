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
import styles from '@/styles/Common.module.css'
import { FaLinkedinIn, FaGithub } from 'react-icons/fa'
import { BiCoffee } from 'react-icons/bi'

export default function Footer() {
  return (
    <Container
      px={0}
      pt={20}
      mt="auto"
      maxW="2xl"
      as="footer"
      role="contentinfo"
      className={styles.footer}
    >
      <Divider opacity={0.4} />
      <Stack
        pt={4}
        pb={4}
        opacity={0.85}
        align="center"
        justify="space-between"
        px={{ base: 4, md: 0 }}
        direction={{ base: 'column', sm: 'row' }}
      >
        <Flex direction="row" alignItems="center" alignContent="center" gap={1}>
          <BiCoffee fontSize="1.125rem" />
          <Text fontWeight="bold" fontSize="lg">
            emtorres
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
