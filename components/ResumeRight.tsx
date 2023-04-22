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
  FaGitAlt,
  FaNodeJs,
  FaCss3Alt,
  FaJsSquare,
  FaKeyboard,
  FaLaptopCode,
  FaHeadphonesAlt,
} from 'react-icons/fa'
import experienceData from 'data'
import styles from '@/styles/Common.module.css'
import TimeLine from './Timeline'
import SemiBoldText from './SemiBoldText'
import SectionTitle from './SectionTitle'
import TailwindIcon from './svg/TailwindIcon'

export default function ResumeRight() {
  return (
    <Box p={4} bg={useColorModeValue('#fafafa', '#212121')}>
      <Box mb={6}>
        <SectionTitle>Experience</SectionTitle>
        {experienceData.map((item, idx) => (
          <Flex mb={3} key={`${item.id}-${item.company}`}>
            <TimeLine
              delay={idx * 0.15}
              isFirst={idx === 0}
              isLast={idx + 1 === experienceData.length}
            />
            <Box textAlign="left">
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
          rowGap={3}
          columnGap={6}
          textAlign="center"
          className={styles['skills-grid']}
          templateColumns={{
            base: 'repeat(5, max-content)',
            sm: 'repeat(7, max-content)',
          }}
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
            <Box fontSize="2xl" display="inline-block">
              <TailwindIcon />
            </Box>
            <Text fontSize="sm">Tailwind</Text>
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
            <Text fontSize="sm">Node.js</Text>
          </Box>
        </Grid>
      </Box>
      <Box mb={6}>
        <SectionTitle>Hobbies & Interests</SectionTitle>
        <Grid
          columnGap={6}
          textAlign="center"
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
            <Icon as={FaLaptopCode} fontSize="2xl" />
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
