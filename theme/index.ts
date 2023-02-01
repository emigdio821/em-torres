import {
  Spinner,
  Skeleton,
  extendTheme,
  theme as base,
  Button as ChakraBtn,
  type ThemeConfig,
} from '@chakra-ui/react'
import { mode, StyleFunctionProps } from '@chakra-ui/theme-tools'
import Button from './components/Button'

const styles = {
  global: (props: StyleFunctionProps) => ({
    body: {
      bg: mode('#fafafa', '#333')(props),
      color: mode('#333', '#f0efef')(props),
    },
    ':root': {
      '--chakra-colors-home-bg': mode('#ededed', '#141414')(props),
    },
  }),
}

const fonts = {
  heading: `Cal Sans, ${base.fonts.heading}`,
  body: `Inter, ${base.fonts.body}`,
}

const shadows = {
  outline: '0 0 0 3px #b2abcc',
}

const config: ThemeConfig = {
  initialColorMode: 'dark',
  useSystemColorMode: true,
}

const components = {
  Button,
  Heading: {
    baseStyle: {
      letterSpacing: 0.4,
    },
  },
}

Spinner.defaultProps = {
  ...Spinner.defaultProps,
  size: 'sm',
  speed: '0.6s',
  thickness: '4px',
  color: '#b2abcc',
}

ChakraBtn.defaultProps = {
  ...ChakraBtn.defaultProps,
  fontSize: 'sm',
  fontWeight: 'normal',
}

Skeleton.defaultProps = {
  ...Skeleton.defaultProps,
  fitContent: true,
  endColor: '#333',
  startColor: '#888',
}

const theme = extendTheme({
  fonts,
  config,
  styles,
  shadows,
  components,
})
export default theme