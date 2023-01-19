import {
  Box,
  Text,
  Grid,
  Icon,
  Flex,
  Heading,
  useColorModeValue,
} from '@chakra-ui/react'
import {
  FaDrum,
  FaHtml5,
  FaReact,
  FaSteam,
  FaLaptop,
  FaGitAlt,
  FaNodeJs,
  FaCss3Alt,
  FaJsSquare,
  FaKeyboard,
  FaHeadphonesAlt,
} from 'react-icons/fa'
import expData from 'data'
import TextColorModeVal from 'utils/TextColorModeVal'
import styles from 'assets/css/common.module.css'
import SemiBoldText from './SemiBoldText'
import SectionTitle from './SectionTitle'

interface ITimeLine {
  isLast?: boolean
  isFirst?: boolean
}

function TimeLine({ isLast = false, isFirst = false }: ITimeLine) {
  return (
    <Box pr={4} position="relative">
      <Box
        w={2}
        h={2}
        mt={1.5}
        bg={TextColorModeVal()}
        rounded={isFirst ? 'sm' : 'full'}
      />
      {!isLast && (
        <Box
          w="2px"
          h="110%"
          opacity={0.6}
          position="absolute"
          bg={TextColorModeVal()}
          transform="translate(3px, 0)"
        />
      )}
    </Box>
  )
}

export default function ResumeRight() {
  return (
    <Box p={4} bg={useColorModeValue('#fafafa', '#212121')}>
      <Box mb={6}>
        <SectionTitle>Experience</SectionTitle>
        {expData.map((item, idx) => (
          <Flex mb={3} key={`${item.id}-${item.company}`}>
            <TimeLine isFirst={idx === 0} isLast={idx + 1 === expData.length} />
            <Box color={TextColorModeVal()} textAlign="left">
              <Heading as="h5" size="sm" fontWeight={600}>
                {item.title}
              </Heading>
              <Text fontSize="sm">
                {item.year} | <SemiBoldText>{item.company}</SemiBoldText>
              </Text>
              <Text fontSize="sm">{item.description}</Text>
            </Box>
          </Flex>
        ))}
      </Box>
      <Box mb={6}>
        <SectionTitle>Skills</SectionTitle>
        <Grid
          columnGap={6}
          textAlign="center"
          color={TextColorModeVal()}
          className={styles['skills-grid']}
          templateColumns="repeat(6, max-content)"
        >
          <Box>
            <Icon as={FaCss3Alt} fontSize="2xl" />
            <Text fontSize="sm">CSS</Text>
          </Box>
          <Box>
            <Icon as={FaHtml5} fontSize="2xl" />
            <Text fontSize="sm">HTML</Text>
          </Box>
          <Box>
            <Icon as={FaJsSquare} fontSize="2xl" />
            <Text fontSize="sm">JS/TS</Text>
          </Box>
          <Box>
            <Icon as={FaGitAlt} fontSize="2xl" />
            <Text fontSize="sm">Git</Text>
          </Box>
          <Box>
            <Icon as={FaReact} fontSize="2xl" />
            <Text fontSize="sm">React</Text>
          </Box>
          <Box>
            <Icon as={FaNodeJs} fontSize="2xl" />
            <Text fontSize="sm">Node</Text>
          </Box>
        </Grid>
      </Box>
      <Box mb={6}>
        <SectionTitle>Hobbies & Interests</SectionTitle>
        <Grid
          columnGap={6}
          textAlign="center"
          color={TextColorModeVal()}
          className={styles['hobbies-grid']}
          templateColumns="repeat(5, max-content)"
        >
          <Box>
            <Icon as={FaDrum} fontSize="2xl" />
            <Text fontSize="sm">Drums</Text>
          </Box>
          <Box>
            <Icon as={FaHeadphonesAlt} fontSize="2xl" />
            <Text fontSize="sm">Music</Text>
          </Box>
          <Box>
            <Icon as={FaSteam} fontSize="2xl" />
            <Text fontSize="sm">Games</Text>
          </Box>
          <Box>
            <Icon as={FaLaptop} fontSize="2xl" />
            <Text fontSize="sm">Tech</Text>
          </Box>
          <Box>
            <Icon as={FaKeyboard} fontSize="2xl" />
            <Text fontSize="sm">KBoards</Text>
          </Box>
        </Grid>
      </Box>
    </Box>
  )
}
