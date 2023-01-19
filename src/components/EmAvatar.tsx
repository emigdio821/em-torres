import { Box, Image, Spinner, VStack } from '@chakra-ui/react'
import ProfileImg from 'assets/images/em.jpg'

interface EmAvatarProps {
  width?: number
  height?: number
}

export default function EmAvatar({ width = 180, height = 180 }: EmAvatarProps) {
  return (
    <Box
      width={width}
      rounded="full"
      height={height}
      boxShadow="2xl"
      overflow="hidden"
      position="relative"
    >
      <Image
        w="100%"
        h="100%"
        alt="Em"
        fit="cover"
        align="center"
        src={ProfileImg}
        fallback={
          <VStack w="100%" h="100%" bg="#333" justify="center">
            <Spinner size="md" speed="0.6s" color="#B2ABCC" thickness="4px" />
          </VStack>
        }
      />
    </Box>
  )
}
