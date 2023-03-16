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
      shadow="xl"
      rounded="full"
      objectFit="cover"
      src="/images/em.jpg"
    />
  )
}
