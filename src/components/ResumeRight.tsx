import {
  Box,
  Text,
  Grid,
  Icon,
  Flex,
  Heading,
  useColorModeValue,
} from "@chakra-ui/react";
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
} from "react-icons/fa";
import TextColorModeVal from "utils/TextColorModeVal";
import styles from "assets/css/common.module.css";
import SemiBoldText from "./SemiBoldText";
import SectionTitle from "./SectionTitle";

interface ITimeLine {
  isLast?: boolean;
}

function TimeLine({ isLast = false }: ITimeLine) {
  return (
    <Box pr={4} position="relative">
      <Box w={2} h={2} mt={1.5} bg={TextColorModeVal()} borderRadius="full" />
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
  );
}

export default function ResumeRight() {
  return (
    <Box p={4} bg={useColorModeValue("#fafafa", "#212121")}>
      <Box mb={6}>
        <SectionTitle>Experience</SectionTitle>
        <Flex mb={3}>
          <TimeLine />
          <Box color={TextColorModeVal()} textAlign="left">
            <Heading as="h5" size="sm" fontWeight={600}>
              Web Developer
            </Heading>
            <Text fontSize="sm">
              2014 - 2017 |{" "}
              <SemiBoldText>TATA Consultancy Services</SemiBoldText>
            </Text>
            <Text fontSize="sm">
              Frontend side, using JavaScript under a framework called: ExtJS.
              Development of banking web apps for Morgan Stanley.
            </Text>
          </Box>
        </Flex>
        <Flex mb={3}>
          <TimeLine />
          <Box color={TextColorModeVal()} textAlign="left">
            <Heading as="h5" size="sm" fontWeight={600}>
              Software Engineer
            </Heading>
            <Text fontSize="sm">
              2017 - 2019 |{" "}
              <SemiBoldText>Advanced Methods Co. (Amco)</SemiBoldText>
            </Text>
            <Text fontSize="sm">
              Frontend side, using SASS, JQuery, Bootstrap. Sometimes Backend
              side, using Ruby on Rails. Development of Payments portal for an
              education platform.
            </Text>
          </Box>
        </Flex>
        <Flex mb={3}>
          <TimeLine />
          <Box color={TextColorModeVal()} textAlign="left">
            <Heading as="h5" size="sm" fontWeight={600}>
              Software Engineer
            </Heading>
            <Text fontSize="sm">
              2019- 2021 | <SemiBoldText>HCL Technologies</SemiBoldText>
            </Text>
            <Text fontSize="sm">
              Frontend side, using IBM Dojo toolkit, migrating to React, Redux
              and MaterialUI. Development of an application builder.
            </Text>
          </Box>
        </Flex>
        <Flex>
          <TimeLine isLast />
          <Box color={TextColorModeVal()} textAlign="left">
            <Heading as="h5" size="sm" fontWeight={600}>
              Software Engineer
            </Heading>
            <Text fontSize="sm">
              Present | <SemiBoldText>Wizeline</SemiBoldText>
            </Text>
            <Text fontSize="sm">
              Currently working on Frontend, using React and AWS. Development
              and support for the Dow Jones login page products.
            </Text>
          </Box>
        </Flex>
      </Box>
      <Box mb={6}>
        <SectionTitle>Skills</SectionTitle>
        <Grid
          columnGap={6}
          textAlign="center"
          color={TextColorModeVal()}
          className={styles["skills-grid"]}
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
            <Text fontSize="sm">JS</Text>
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
          className={styles["hobbies-grid"]}
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
  );
}
