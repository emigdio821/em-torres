import Image from 'next/image'
import { useState } from 'react'
import { Box } from '@chakra-ui/react'

interface EmAvatarProps {
  width?: number
  height?: number
}

export default function EmAvatar({ width = 180, height = 180 }: EmAvatarProps) {
  const [isLoading, setLoading] = useState<boolean>(true)

  return (
    <Box w={width} height={height} overflow="hidden" rounded="full">
      <Image
        alt="Em"
        width={width}
        height={height}
        style={{
          width,
          height,
          objectFit: 'cover',
          borderRadius: 'inherit',
          transition: '0.3s ease-in-out',
          boxShadow:
            '0 20px 25px -5px rgba(0, 0, 0, 0.1),0 10px 10px -5px rgba(0, 0, 0, 0.04)',
          filter: isLoading ? 'blur(2px)' : 'unset',
          transform: isLoading ? 'scale(1.08)' : 'scale(1)',
        }}
        src="/images/em.jpg"
        onLoadingComplete={() => setLoading(false)}
      />
    </Box>
  )
}
