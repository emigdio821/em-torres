import { motion, AnimatePresence } from 'framer-motion'
import { MoonIcon, SunIcon } from '@chakra-ui/icons'
import { useColorMode, useColorModeValue, IconButton } from '@chakra-ui/react'

export default function ThemeSwitcher() {
  const { toggleColorMode } = useColorMode()
  const text = useColorModeValue('dark', 'light')
  const SwitchIcon = useColorModeValue(MoonIcon, SunIcon)

  return (
    <IconButton
      marginLeft="2"
      variant="simple"
      icon={
        <AnimatePresence initial={false} mode="wait">
          <motion.div
            key={text}
            transition={{ duration: 0.2 }}
            animate={{ opacity: 1, rotate: 0 }}
            initial={{ opacity: 0.8, rotate: 40 }}
          >
            <SwitchIcon />
          </motion.div>
        </AnimatePresence>
      }
      onClick={toggleColorMode}
      aria-label={`Switch to ${text} mode`}
    />
  )
}
