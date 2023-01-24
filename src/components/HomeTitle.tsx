import {
  Box,
  Flex,
  Stack,
  VStack,
  chakra,
  Button,
  Heading,
  useColorModeValue,
} from '@chakra-ui/react'
import { useEffect, useRef } from 'react'
import { FaGithub } from 'react-icons/fa'
import bgLight from 'assets/images/title-bg.svg'
import styles from 'assets/css/common.module.css'
import bgDark from 'assets/images/title-bg-light.svg'
import EmAvatar from './EmAvatar'
import MotionDiv from './MotionDiv'
import CardText from './CardText'
import Spotify from './Spotify'

export default function HomeTitle() {
  const titleRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const titleEl = titleRef.current

    function handleScroll() {
      if (titleEl)
        titleEl.style.backgroundPositionY = `${window.scrollY * 0.4}px`
    }

    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const titleBg = useColorModeValue(bgDark, bgLight)
  return (
    <Flex
      pt={20}
      pb={20}
      h="100vh"
      ref={titleRef}
      bgImage={titleBg}
      mb={{ base: 4, md: 20 }}
      minH={{ base: '768px', md: '100vh' }}
      bgColor={useColorModeValue('#ededed', '#141414')}
    >
      <VStack px={4} w="100%" justify="center">
        <MotionDiv y={-10}>
          <Stack
            w="100%"
            maxW="4xl"
            mb={{ base: 10, md: 20 }}
            align={{ base: 'left', md: 'center' }}
            direction={{ base: 'column-reverse', md: 'row' }}
          >
            <Box mr={{ base: 'inherit', lg: 2 }} w={{ base: '100%', md: 'sm' }}>
              <Heading as="h2" size="2xl">
                Emigdio Torres
                <span className={styles['text-blinking']}>_</span>
              </Heading>
              <Heading fontWeight={600} size="lg" mb={4}>
                Software Engineer
              </Heading>
              <Button
                as="a"
                mb={4}
                size="md"
                target="_blank"
                variant="simple"
                colorScheme="gray"
                borderRadius="full"
                aria-label="Github"
                leftIcon={<FaGithub />}
                rel="noopener noreferrer"
                href="https://github.com/emigdio821/"
              >
                Github
              </Button>
              <Spotify />
            </Box>
            <EmAvatar />
          </Stack>
          <Box maxW="4xl">
            <CardText>
              Hi there, I&apos;m a Software Engineer, mainly focused on
              front-end development. Currently, I&apos;m contributing to{' '}
              <Button
                as="a"
                fontSize="lg"
                variant="link"
                target="_blank"
                color="inherit"
                transition="0.2s"
                textUnderlineOffset={4}
                rel="noopener noreferrer"
                _hover={{
                  textDecoration: '#B2ABCC underline',
                }}
                href="https://www.wizeline.com/"
              >
                <chakra.span
                  fontWeight="700"
                  fontSize={{ base: '2xl', md: '3xl' }}
                >
                  Wizeline
                </chakra.span>
              </Button>{' '}
              projects.
            </CardText>
          </Box>
        </MotionDiv>
      </VStack>
    </Flex>
  )
}
