import {
  Box,
  Flex,
  Icon,
  Text,
  VStack,
  Button,
  Heading,
  useColorModeValue,
} from '@chakra-ui/react'
import NextLink from 'next/link'
import Helmet from '@/components/Helmet'
import { BiGhost, BiArrowBack } from 'react-icons/bi'

export default function NotFound() {
  return (
    <>
      <Helmet title="Not found" description="This page does not exist." />
      <Flex
        w="100%"
        minW="xs"
        maxW="4xl"
        margin="0 auto"
        pt={{ base: 10, sm: 20 }}
        minH={{ base: 'md', md: 'xl' }}
        h={{ base: 'calc(100vh - 222px)', sm: 'calc(100vh - 150px)' }}
      >
        <VStack px={{ base: 4, lg: 0 }} justify="center" w="100%">
          <Box
            w="100%"
            borderRadius="xl"
            py={{ base: 10, sm: 20 }}
            bg={useColorModeValue('#f5f5f5', '#2e2e2e')}
          >
            <Box textAlign="center" w="100%">
              <Icon as={BiGhost} fontSize="5rem" />
              <Heading fontSize="3xl">Not found</Heading>
              <Text fontSize="xl">Page does not exist.</Text>
              <Button as={NextLink} href="/" mt={10} leftIcon={<BiArrowBack />}>
                Back to home
              </Button>
            </Box>
          </Box>
        </VStack>
      </Flex>
    </>
  )
}
