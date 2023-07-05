import { useRef, useState } from 'react'
import { Container, Grid, useColorModeValue } from '@chakra-ui/react'
import { useReactToPrint } from 'react-to-print'

import Helmet from '@/components/Helmet'
import ResumeLeft from '@/components/ResumeLeft'
import ResumeRight from '@/components/ResumeRight'
import styles from '@/styles/Common.module.css'

export default function Resume() {
  const pdfRef = useRef<HTMLDivElement>(null)
  const [loadingPdf, setLoadingPdf] = useState<boolean>(false)

  const handleBeforeAfterPrint = async () => {
    await new Promise<void>((resolve) => {
      setLoadingPdf((prev) => {
        resolve()
        return !prev
      })
    })
  }

  const handlePdfDownload = useReactToPrint({
    content: () => pdfRef.current,
    documentTitle: 'Emigdio-Torres-CV',
    onAfterPrint: handleBeforeAfterPrint,
    onBeforeGetContent: handleBeforeAfterPrint,
  })

  return (
    <>
      <Helmet title="Em Torres · Resume" description="Emigdio's resume." />
      <Container maxW="4xl" px={{ base: 0, md: 0 }} pt={20}>
        <Grid
          ref={pdfRef}
          borderRadius="xl"
          overflow="hidden"
          className={styles['main-grid']}
          templateColumns={{ base: 'inherit', md: '0.5fr 1fr' }}
          border={`1px solid ${useColorModeValue('#f0efef', '#1c1c1c')}`}
        >
          <ResumeLeft isLoadingPdf={loadingPdf} pdfCallback={handlePdfDownload} />
          <ResumeRight />
        </Grid>
      </Container>
    </>
  )
}
