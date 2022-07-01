import bgLight from "assets/images/title-bg.svg";
import bgDark from "assets/images/title-bg-light.svg";
import {
  Box,
  Flex,
  Stack,
  VStack,
  chakra,
  Button,
  Heading,
  useColorModeValue,
} from "@chakra-ui/react";
import { FaGithub } from "react-icons/fa";
import TextColorModeVal from "utils/TextColorModeVal";
import styles from "assets/css/common.module.css";
import EmAvatar from "./EmAvatar";
import MotionDiv from "./MotionDiv";
import CardText from "./CardText";
import Spotify from "./Spotify";

export default function HomeTitle() {
  const titleBg = useColorModeValue(bgDark, bgLight);
  return (
    <Flex
      pt={20}
      pb={20}
      minH="100vh"
      bgImage={titleBg}
      mb={{ base: 4, md: 20 }}
      bgColor={useColorModeValue("#ededed", "#141414")}
    >
      <VStack px={4} w="100%" justify="center">
        <MotionDiv y={-10}>
          <Stack
            mb={20}
            w="100%"
            maxW="4xl"
            align={{ base: "left", md: "center" }}
            direction={{ base: "column-reverse", md: "row" }}
          >
            <Box mr={{ base: "inherit", lg: 2 }} w={{ base: "100%", md: "sm" }}>
              <Heading as="h2" size="2xl">
                Emigdio Torres
                <span className={styles["text-blinking"]}>_</span>
              </Heading>
              <Heading fontWeight={600} size="lg" mb={4}>
                Software Engineer
              </Heading>
              <Button
                as="a"
                size="md"
                mb={4}
                target="_blank"
                colorScheme="gray"
                borderRadius="full"
                aria-label="Github"
                leftIcon={<FaGithub />}
                rel="noopener noreferrer"
                href="https://github.com/emigdio821/"
              >
                GitHub
              </Button>
              <Spotify />
            </Box>
            <EmAvatar />
          </Stack>
          <Box maxW="4xl">
            <CardText>
              Hi there, I&apos;m a Software Engineer, mainly focused on
              front-end development. Currently, I&apos;m contributing to{" "}
              <Button
                as="a"
                fontSize="lg"
                variant="link"
                target="_blank"
                textUnderlineOffset={2}
                rel="noopener noreferrer"
                textDecoration="underline"
                color={TextColorModeVal()}
                href="https://www.wizeline.com/"
              >
                <chakra.span
                  fontWeight="700"
                  fontSize={{ base: "2xl", md: "3xl" }}
                >
                  Wizeline
                </chakra.span>
              </Button>{" "}
              projects.
            </CardText>
          </Box>
        </MotionDiv>
      </VStack>
    </Flex>
  );
}
