import type { AppProps } from 'next/app'
import theme from '@/theme'
import { ChakraProvider, Flex } from '@chakra-ui/react'

import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'

import '@/styles/Print.css'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Flex minH="100vh" direction="column" justify="space-between">
        <Navbar />
        <Component {...pageProps} />
        <Footer />
      </Flex>
    </ChakraProvider>
  )
}
