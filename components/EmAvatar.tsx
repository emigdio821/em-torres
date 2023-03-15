import { Img as Image } from '@chakra-ui/react'

interface EmAvatarProps {
  width?: number
  height?: number
}

export default function EmAvatar({ width = 180, height = 180 }: EmAvatarProps) {
  return (
    <Image
      alt="Em"
      w={width}
      h={height}
      rounded="full"
      boxShadow="xl"
      objectFit="cover"
      src="/images/em.jpg"
    />
  )
}
