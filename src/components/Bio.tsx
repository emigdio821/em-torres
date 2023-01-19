import { Box, Heading, chakra, Stack } from '@chakra-ui/react'
import SemiBoldText from './SemiBoldText'

interface CmpChildrenProps {
  children: React.ReactNode
}

function BioSection({ children }: CmpChildrenProps) {
  return (
    <Box fontSize="2xl">
      <Stack direction="row">{children}</Stack>
    </Box>
  )
}

function BioYear({ children }: CmpChildrenProps) {
  return (
    <chakra.span mr={6}>
      <chakra.span fontWeight={700}>{children}</chakra.span>
    </chakra.span>
  )
}

export default function Bio() {
  return (
    <Box mb={10}>
      <Heading as="h2" size="2xl" mb={4}>
        Bio
      </Heading>
      <BioSection>
        <BioYear>1992</BioYear>
        <chakra.span>
          Born in <SemiBoldText>Colima, Mexico</SemiBoldText>.
        </chakra.span>
      </BioSection>
      <BioSection>
        <BioYear>2014</BioYear>
        <chakra.span>
          <SemiBoldText>Telematics Engineering</SemiBoldText> Bachelor&apos;s
          Degree, <SemiBoldText>University of Colima</SemiBoldText>.
        </chakra.span>
      </BioSection>
      <BioSection>
        <BioYear>2017</BioYear>
        <chakra.span>
          Worked at <SemiBoldText>TATA Consultancy Services</SemiBoldText>.
        </chakra.span>
      </BioSection>
      <BioSection>
        <BioYear>2019</BioYear>
        <chakra.span>
          Worked at <SemiBoldText>Advanced Methods Co. (Amco)</SemiBoldText>.
        </chakra.span>
      </BioSection>
      <BioSection>
        <BioYear>2021</BioYear>
        <chakra.span>
          Worked at <SemiBoldText>HCL Technologies</SemiBoldText>.
        </chakra.span>
      </BioSection>
      <BioSection>
        <chakra.span>
          <BioYear>Present</BioYear>
          Working at <SemiBoldText>Wizeline</SemiBoldText>.
        </chakra.span>
      </BioSection>
    </Box>
  )
}
