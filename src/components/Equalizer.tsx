import { Box, Stack, useColorModeValue } from '@chakra-ui/react'
import styles from 'assets/css/equalizer.module.css'

function EQBar({ className }: { className: string }) {
  const barColor = useColorModeValue('#333', '#fafafa')
  return <Box h="0.5rem" bg={barColor} w="0.1875rem" className={className} />
}

export default function Equalizer() {
  return (
    <Stack direction="row" spacing={0.5} align="flex-end" h={4}>
      {Array.from(Array(6), (_, i) => i).map((i) => (
        <EQBar key={i} className={styles[`bar-${i + 1}`]} />
      ))}
    </Stack>
  )
}
