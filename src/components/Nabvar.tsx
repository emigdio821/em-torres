import { BiCoffee, BiFile } from 'react-icons/bi'
import { NavLink } from 'react-router-dom'
import { Box, Flex, Button, useColorModeValue } from '@chakra-ui/react'
import styles from 'assets/css/common.module.css'
import ThemeSwitcher from './ThemeSwitcher'

export default function Navbar() {
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
      bg={useColorModeValue(
        'rgba(237, 237, 237, 0.9)',
        'rgba(20, 20, 20, 0.9)',
      )}
    >
      <Flex
        h={16}
        maxW="4xl"
        m="0 auto"
        alignItems="center"
        justifyContent="space-between"
      >
        <Box>
          <Flex alignItems="center">
            <Button
              to="/"
              as={NavLink}
              fontSize="xl"
              variant="link"
              color="inherit"
              transition="0.2s"
              fontWeight="bold"
              leftIcon={<BiCoffee className={styles['coffe-anim']} />}
              _hover={{
                background: 'transparent',
                transform: 'translateY(-1.2px)',
              }}
              _active={{ transform: 'translateY(0)' }}
            >
              Em<span style={{ fontWeight: 'bold' }}>.</span>
            </Button>
          </Flex>
        </Box>
        <Flex alignItems="center">
          <Button
            to="/resume"
            as={NavLink}
            variant="simple"
            fontWeight="normal"
            borderRadius="full"
            leftIcon={<BiFile />}
          >
            Resume
          </Button>
          <ThemeSwitcher />
        </Flex>
      </Flex>
    </Box>
  )
}
