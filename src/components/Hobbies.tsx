import { Box, useColorModeValue } from '@chakra-ui/react'
import MotionDiv from './MotionDiv'
import CardText from './CardText'

export default function Hobbies() {
  return (
    <MotionDiv>
      <Box
        borderRadius="xl"
        p={{ base: 4, md: 10 }}
        mt={{ base: 4, md: 20 }}
        bg={useColorModeValue('#f5f5f5', '#2e2e2e')}
      >
        <CardText>
          I love music. On my free time I like to play videogames or play drums.
          I like to build custom pc&apos;s and keyboards. I&apos;m also
          passionate about new technology topics 🤓.
        </CardText>
      </Box>
    </MotionDiv>
  )
}
