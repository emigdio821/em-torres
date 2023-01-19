import { mode, StyleFunctionProps } from '@chakra-ui/theme-tools'

const colorDarkMode = '255, 255, 255'
const colorWhiteMode = '0, 0, 0'

const ButtonSyles = {
  variants: {
    simple: (props: StyleFunctionProps) => ({
      bg: mode(
        `rgba(${colorWhiteMode}, 0.03)`,
        `rgba(${colorDarkMode}, 0.05)`,
      )(props),
      color: mode(
        `rgba(${colorWhiteMode}, 0.8)`,
        `rgba(${colorDarkMode}, 0.8)`,
      )(props),
      _hover: {
        bg: mode(
          `rgba(${colorWhiteMode}, 0.08)`,
          `rgba(${colorDarkMode}, 0.1)`,
        )(props),
        color: mode(
          `rgba(${colorWhiteMode}, 1)`,
          `rgba(${colorDarkMode}, 1)`,
        )(props),
      },
      _activeLink: {
        cursor: 'default',
        transform: 'unset !important',
        bg: mode(
          `rgba(${colorWhiteMode}, 0.08)`,
          `rgba(${colorDarkMode}, 0.1)`,
        )(props),
        color: mode(
          `rgba(${colorWhiteMode}, 1)`,
          `rgba(${colorDarkMode}, 1)`,
        )(props),
      },
      _active: { transform: 'translateY(1px)' },
    }),
  },
}

export default ButtonSyles
