import theme from '@/theme'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import type { AppProps } from 'next/app'
import { Inter } from '@next/font/google'
import { ChakraProvider, Flex } from '@chakra-ui/react'
import 'cal-sans'
import '@/styles/Print.css'

const inter = Inter({ subsets: ['latin'] })

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Flex
        h="100vh"
        direction="column"
        justify="space-between"
        className={inter.className}
      >
        <Navbar />
        {/* eslint-disable-next-line react/jsx-props-no-spreading */}
        <Component {...pageProps} />
        <Footer />
      </Flex>
    </ChakraProvider>
  )
}
