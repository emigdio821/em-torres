import { Box, Stack, useColorModeValue } from "@chakra-ui/react";
import jsSvg from "assets/images/js.svg";
import tsSvg from "assets/images/ts.svg";
import reactSvg from "assets/images/react.svg";
import styles from "assets/css/common.module.css";
import nodeSvg from "assets/images/node.svg";
import { motion } from "framer-motion";
import MotionDiv from "./MotionDiv";
import CardText from "./CardText";

interface SkillIconProps {
  src: string;
  alt: string;
  delay?: number;
}

function SkillIcon({ src, alt, delay }: SkillIconProps) {
  const variants = {
    offscreen: {
      y: 10,
      opacity: 0,
    },
    onscreen: {
      y: 0,
      opacity: 1,
    },
  };

  return (
    <motion.img
      alt={alt}
      src={src}
      width="100%"
      variants={variants}
      transition={{ delay }}
      className={styles["skills-stack-icons"]}
    />
  );
}

export default function Skills() {
  return (
    <MotionDiv>
      <Box
        borderRadius="xl"
        p={{ base: 4, md: 10 }}
        mb={{ base: 4, md: 20 }}
        bg={useColorModeValue("#f5f5f5", "#2e2e2e")}
      >
        <Box>
          <CardText>
            I have a strong background in front-end development.
          </CardText>
        </Box>
        <Box>
          <CardText>
            These are some of the technologies I currently use: JavaScript,
            TypeScript, React and Node.
          </CardText>
          <Stack
            mt={6}
            direction="row"
            filter="grayscale(70%);"
            spacing={{ base: 2, sm: 6 }}
          >
            <SkillIcon src={jsSvg} alt="JavaScript" delay={0.1} />
            <SkillIcon src={tsSvg} alt="TypeScript" delay={0.2} />
            <SkillIcon src={reactSvg} alt="React" delay={0.3} />
            <SkillIcon src={nodeSvg} alt="Node" delay={0.4} />
          </Stack>
        </Box>
      </Box>
    </MotionDiv>
  );
}
