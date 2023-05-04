import theme from '@/theme'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import type { AppProps } from 'next/app'
import { ChakraProvider, Flex } from '@chakra-ui/react'
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
