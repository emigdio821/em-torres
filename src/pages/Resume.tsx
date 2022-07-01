import { useRef, useCallback, useState } from "react";
import ResumeLeft from "components/ResumeLeft";
import { useReactToPrint } from "react-to-print";
import ResumeRight from "components/ResumeRight";
import styles from "assets/css/common.module.css";
import { Box, Container, Grid, useColorModeValue } from "@chakra-ui/react";

export default function Resume() {
  const pdfRef = useRef<HTMLDivElement>(null);
  const [loadingPdf, setLoadingPdf] = useState<boolean>(false);

  const handleOnBeforeGetContent = useCallback(() => {
    setLoadingPdf(true);
  }, [setLoadingPdf]);

  const handleAfterPrint = useCallback(() => {
    setLoadingPdf(false);
  }, [setLoadingPdf]);

  const handlePdfDownload = useReactToPrint({
    content: () => pdfRef.current,
    onAfterPrint: handleAfterPrint,
    documentTitle: "Emigdio-Torres",
    onBeforeGetContent: handleOnBeforeGetContent,
  });

  return (
    <Container maxW="4xl" px={{ base: 0, md: 0 }} pt={20}>
      <Box ref={pdfRef}>
        <Grid
          borderRadius="xl"
          overflow="hidden"
          className={styles["main-grid"]}
          templateColumns={{ base: "inherit", md: "0.5fr 1fr" }}
          border={`1px solid ${useColorModeValue("#f0efef", "#1c1c1c")}`}
        >
          <ResumeLeft
            isLoadingPdf={loadingPdf}
            pdfCallback={handlePdfDownload}
          />
          <ResumeRight />
        </Grid>
      </Box>
    </Container>
  );
}
