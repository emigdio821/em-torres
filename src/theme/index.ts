import {
  Spinner,
  extendTheme,
  theme as base,
  Button as ChakraBtn,
  type ThemeConfig,
} from '@chakra-ui/react'
import { mode, StyleFunctionProps } from '@chakra-ui/theme-tools'
import TextColorModeVal from 'utils/TextColorModeVal'
import Button from './components/Button'

const styles = {
  global: (props: StyleFunctionProps) => ({
    body: {
      color: TextColorModeVal,
      bg: mode('#fafafa', '#333')(props),
    },
  }),
}

const fonts = {
  heading: `Inter, ${base.fonts.heading}`,
  body: `Inter, ${base.fonts.body}`,
}

const shadows = {
  outline: '0 0 0 3px #B2ABCC',
}

const config: ThemeConfig = {
  initialColorMode: 'dark',
  useSystemColorMode: true,
}

const components = {
  Button,
}

Spinner.defaultProps = {
  ...Spinner.defaultProps,
  size: 'sm',
  speed: '0.6s',
  thickness: '4px',
  color: '#B2ABCC',
}

ChakraBtn.defaultProps = {
  ...ChakraBtn.defaultProps,
  fontSize: 'sm',
  fontWeight: 'normal',
}

const theme = extendTheme({ config, styles, shadows, fonts, components })
export default theme
