import NextLink from 'next/link'
import { useRouter } from 'next/router'
import { Box, Button, Flex, useColorModeValue } from '@chakra-ui/react'
import { BiCoffee, BiFile } from 'react-icons/bi'

import styles from '@/styles/Common.module.css'

import ThemeSwitcher from './ThemeSwitcher'

export default function Navbar() {
  const router = useRouter()
  const isResumePage = router.pathname === '/resume'

  return (
    <Box
      px={4}
      as="nav"
      w="100%"
      zIndex={1}
      position="fixed"
      css={{
        backdropFilter: 'blur(10px)',
      }}
      bg={useColorModeValue('rgba(237, 237, 237, 0.9)', 'rgba(20, 20, 20, 0.9)')}
      className={styles.navbar}
    >
      <Flex h={16} maxW="4xl" m="0 auto" alignItems="center" justifyContent="space-between">
        <Box>
          <Flex alignItems="center">
            <Button
              href="/"
              as={NextLink}
              fontSize="xl"
              variant="link"
              color="inherit"
              iconSpacing={1}
              transition="0.2s"
              fontWeight="bold"
              leftIcon={<BiCoffee className={styles['coffe-anim']} />}
              _hover={{
                background: 'transparent',
                transform: 'translateY(-1.2px)',
              }}
              _active={{ transform: 'translateY(0)' }}
            >
              emtorres
            </Button>
          </Flex>
        </Box>
        <Flex alignItems="center">
          <Button
            passHref
            as={NextLink}
            href="/resume"
            variant="simple"
            fontWeight="normal"
            borderRadius="full"
            leftIcon={<BiFile />}
            className={isResumePage ? 'active' : undefined}
            aria-current={isResumePage ? 'page' : undefined}
          >
            Resume
          </Button>
          <ThemeSwitcher />
        </Flex>
      </Flex>
    </Box>
  )
}
