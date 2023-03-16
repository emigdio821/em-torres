import NextHead from 'next/head'
import { useColorModeValue } from '@chakra-ui/react'

interface HelmetProps {
  title: string
  description?: string
}

export default function Helmet({ title, description }: HelmetProps) {
  const themeColor = useColorModeValue('#ededed', '#141414')
  const desc = description || 'Software Engineer based in Mexico.'

  return (
    <NextHead>
      <title>{title}</title>
      <meta name="theme-color" content={themeColor} />
      <meta name="description" content={desc} />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <meta property="og:image" content="/images/em-banner.png" />
      <link rel="icon" href="/images/favicon.ico" />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/images/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/images/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/images/favicon-16x16.png"
      />
      <link rel="manifest" href="/site.webmanifest" />
    </NextHead>
  )
}
