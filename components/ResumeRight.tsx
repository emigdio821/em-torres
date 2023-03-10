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
import experienceData from 'data'
import { motion } from 'framer-motion'
import styles from '@/styles/Common.module.css'
import SemiBoldText from './SemiBoldText'
import SectionTitle from './SectionTitle'

interface ITimeLine {
  isLast?: boolean
  isFirst?: boolean
  delay?: number
}

function TimeLine({ isLast = false, isFirst = false, delay = 0 }: ITimeLine) {
  const bg = useColorModeValue('#333', '#f0efef')

  return (
    <Box pr={4} position="relative">
      <motion.div
        style={{
          width: '0.5rem',
          height: '0.5rem',
          backgroundColor: bg,
          marginTop: '0.375rem',
          borderRadius: isFirst ? '0.125rem' : '100%',
        }}
        initial={{ opacity: 0, y: -10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ delay: isFirst ? 0 : delay }}
      />
      {!isLast && (
        <motion.div
          style={{
            width: '2px',
            backgroundColor: bg,
            position: 'absolute',
            transform: 'translate(3px, 0)',
          }}
          viewport={{ once: true, amount: 0.4 }}
          initial={{ opacity: 0, height: '0%' }}
          transition={{ delay: isFirst ? 0 : delay }}
          whileInView={{ opacity: 0.6, height: '110%' }}
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
          columnGap={6}
          textAlign="center"
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
