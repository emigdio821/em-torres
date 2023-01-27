import NextHead from 'next/head'

interface HelmetProps {
  title: string
}

export default function Helmet({ title }: HelmetProps) {
  return (
    <NextHead>
      <title>{title}</title>
      <meta name="description" content="Emigdio Torres homepage" />
      <meta
        name="viewport"
        content="initial-scale=1.0, width=device-width,  maximum-scale=1.0"
      />
      <meta property="og:image" content="/apple-touch-icon.png" />

      <link rel="icon" href="./images/favicon.ico" />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="./images/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="./images/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="./images/favicon-16x16.png"
      />
      <link rel="manifest" href="./site.webmanifest" />
    </NextHead>
  )
}
