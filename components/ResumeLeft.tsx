import { Box, Text, Button, Heading, useColorModeValue } from '@chakra-ui/react'
import {
  FaAt,
  FaPhone,
  FaFilePdf,
  FaGithubAlt,
  FaLinkedinIn,
  FaMapMarkedAlt,
} from 'react-icons/fa'
import EmAvatar from './EmAvatar'
import MotionDiv from './MotionDiv'
import ContactLink from './ContactLink'
import SemiBoldText from './SemiBoldText'
import SectionTitle from './SectionTitle'
import styles from '@/styles/Common.module.css'

interface ResumeLeftProps {
  isLoadingPdf: boolean
  pdfCallback: () => void
}

export default function ResumeLeft({
  pdfCallback,
  isLoadingPdf,
}: ResumeLeftProps) {
  return (
    <Box p={4} bg={useColorModeValue('#f2f2f2', '#1c1c1c')}>
      <Box mb={6}>
        <MotionDiv y={-10}>
          <EmAvatar width={120} height={120} />
        </MotionDiv>
        <Box mb={6} mt={4}>
          <Heading as="h3" size="lg" fontWeight={800}>
            Emigdio Torres
          </Heading>
          <Heading as="h4" size="md" className={styles.subtitle}>
            Software Engineer
          </Heading>
        </Box>
        <Button
          mb={6}
          variant="simple"
          colorScheme="gray"
          onClick={pdfCallback}
          disabled={isLoadingPdf}
          isLoading={isLoadingPdf}
          leftIcon={<FaFilePdf />}
          className={styles['download-pdf-btn']}
        >
          Download
        </Button>
        <Box>
          <Box>
            <ContactLink
              text="@emigdio821"
              Icon={FaLinkedinIn}
              href="https://www.linkedin.com/in/emigdio821/"
            />
          </Box>
          <Box>
            <ContactLink
              text="@emigdio821"
              Icon={FaGithubAlt}
              href="https://github.com/emigdio821/"
            />
          </Box>
          <Box>
            <ContactLink
              Icon={FaMapMarkedAlt}
              text="Jalisco, Mexico"
              href="https://www.google.com.mx/maps/place/Jalisco"
            />
          </Box>
          <Box>
            <ContactLink
              Icon={FaPhone}
              href="tel:+523139617676"
              text="+52 (313) 961-7676"
            />
          </Box>
          <Box>
            <ContactLink
              Icon={FaAt}
              text="emigdio821@gmail.com"
              href="mailto:emigdio821@gmail.com"
            />
          </Box>
        </Box>
      </Box>
      <Box mb={6} className={styles['common-box']}>
        <SectionTitle>Profile</SectionTitle>
        <Box>
          <Text fontSize="sm">
            <SemiBoldText>Telematics Engineer</SemiBoldText> with experience in
            Software Engineering using current programming standards.
          </Text>
          <Text fontSize="sm">
            Currently I am a Software Engineer at{' '}
            <SemiBoldText>Wizeline</SemiBoldText>.
          </Text>
        </Box>
      </Box>
      <Box>
        <SectionTitle>Education</SectionTitle>
        <Heading as="h5" size="sm" fontWeight={600}>
          Telematics Engineer
        </Heading>
        <Box>
          <Text fontSize="sm">Engineer&apos;s Degree</Text>
          <Text fontSize="sm">University of Colima</Text>
          <Text fontSize="sm">2010 - 2014</Text>
        </Box>
      </Box>
    </Box>
  )
}
