import { useRef } from "react";
import { useReactToPrint } from "react-to-print";
import { MotionDiv } from "components/MotionDiv";
import { Box, Grid } from "@chakra-ui/react";
import { ResumeLeft } from "components/ResumeLeft";
import { ResumeRight } from "components/ResumeRight";
import styles from "assets/css/common.module.css";

export const Resume = () => {
  const pdfRef = useRef(null);
  const handlePdfDownload = useReactToPrint({
    content: () => pdfRef.current,
    documentTitle: "Emigdio-Torres",
  });

  return (
    <>
      <MotionDiv>
        <Box ref={pdfRef}>
          <Grid
            className={styles["main-grid"]}
            templateColumns={{ base: "inherit", md: "0.5fr 1fr" }}
          >
            <ResumeLeft pdfCallback={handlePdfDownload} />
            <ResumeRight />
          </Grid>
        </Box>
      </MotionDiv>
    </>
  );
};