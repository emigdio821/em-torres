import useTitle from 'hooks/useTitle'
import { useRef, useState } from 'react'
import ResumeLeft from 'components/ResumeLeft'
import { useReactToPrint } from 'react-to-print'
import ResumeRight from 'components/ResumeRight'
import styles from 'assets/css/common.module.css'
import { Box, Container, Grid, useColorModeValue } from '@chakra-ui/react'

interface ResumeProps {
  title: string
}

export default function Resume({ title }: ResumeProps) {
  useTitle(title)
  const pdfRef = useRef<HTMLDivElement>(null)
  const [loadingPdf, setLoadingPdf] = useState<boolean>(false)

  const handleBeforeAfterPrint = () =>
    new Promise<void>((resolve) => {
      setLoadingPdf((prev) => {
        resolve()
        return !prev
      })
    })

  const handlePdfDownload = useReactToPrint({
    content: () => pdfRef.current,
    documentTitle: 'Emigdio-Torres',
    onAfterPrint: handleBeforeAfterPrint,
    onBeforeGetContent: handleBeforeAfterPrint,
  })

  return (
    <Container maxW="4xl" px={{ base: 0, md: 0 }} pt={20}>
      <Box ref={pdfRef}>
        <Grid
          borderRadius="xl"
          overflow="hidden"
          className={styles['main-grid']}
          templateColumns={{ base: 'inherit', md: '0.5fr 1fr' }}
          border={`1px solid ${useColorModeValue('#f0efef', '#1c1c1c')}`}
        >
          <ResumeLeft
            isLoadingPdf={loadingPdf}
            pdfCallback={handlePdfDownload}
          />
          <ResumeRight />
        </Grid>
      </Box>
    </Container>
  )
}
