import {
  Box,
  Input,
  InputGroup,
  InputLeftElement,
  SimpleGrid,
  Image,
  Heading,
  Badge,
  Text,
} from "@chakra-ui/react";

import { SearchIcon } from "@chakra-ui/icons";
import { ArrowRightIcon, StarIcon } from "@chakra-ui/icons";
import styles from "./HomePage.module.css";
import Filter from "./Filter";
import CourseCards from "../Courses/CourseCards";


export default function HomePage() {
  return (
    <Box className={styles.background}>
      <Box mx="5vw" minW="56" pt="24" px="4">
        <Box display={"flex"}>
          <Box p="2" style={{ marginRight: "auto", width: "fit-content" }}>
              <Filter/>
          </Box>
          <Box p="2" style={{ marginLeft: "auto", width: "fit-content" }}>
            <InputGroup borderColor={"gray.400"}>
              <InputLeftElement
                pointerEvents="none"
                children={<SearchIcon color="gray" />}
              />
              <Input type="text" placeholder="Search" />
            </InputGroup>
          </Box>
        </Box>
        <hr />
        <Box pt="4">
          <SimpleGrid minChildWidth="280px" spacing="18px">
            {/* 
                Image - 160px x 280px 
                Font-Style - CantoraOne
                Font-Size - 36px
            */}
            <CourseCards/>
            <Box
              bg="#821b9110"
              p="1"
              borderRadius="2"
              boxShadow="md"
              cursor="pointer"
              style={{
                border: "1px solid #00000050",
                backdropFilter: "blur(5px)",
              }}
            >
              <Image
                height="160px"
                width="100%"
                objectFit="cover"
                src="/images/courses/dsa.png"
                alt="Dan Abramov"
              />
              <Badge
                variant="subtle"
                colorScheme="green"
                m="2"
                shadow="lg"
                style={{ position: "absolute", top: "0", right: "0" }}
              >
                MOST VISITED
              </Badge>
              <Box px="2">
                <Heading as="h4" size="md" pt="2">
                  Data Structures
                </Heading>
                <Text fontSize="md" textColor="gray.600" mt="2">
                  Specific way to store and organize data in a computer's memory
                  so that these data can ...
                </Text>
                <Text fontSize="sm" textColor="gray.700" mt="3">
                  Keywords -
                </Text>
                <Text fontSize="sm" textColor="gray.500">
                  Stack, Queue, Linked List, Trees, Graph
                </Text>
                <Text
                  fontSize="xs"
                  textColor="gray.700"
                  mt="6"
                  mb="16"
                  style={{ display: "flex", alignItems: "center" }}
                >
                  <StarIcon mr="1" textColor="#Dede25" w={4} h={4} /> 2.2 (1.1k
                  views)
                </Text>

                <Box
                  w="100%"
                  size="xs"
                  style={{ display: "flex", justifyContent: "end" }}
                >
                  <Text
                    fontSize="xs"
                    m="2"
                    style={{ position: "absolute", bottom: "0", left: "0" }}
                  >
                    CS/IT
                  </Text>
                </Box>
                <Box
                  w="100%"
                  size="xs"
                  style={{ display: "flex", justifyContent: "end" }}
                >
                  <Text
                    fontSize="sm"
                    textColor="blue"
                    m="2"
                    style={{ position: "absolute", bottom: "0", right: "0" }}
                  >
                    Explore <ArrowRightIcon w={2} h={2} />
                  </Text>
                </Box>
              </Box>
            </Box>
            <Box
              bg="#52dd8e10"
              p="1"
              borderRadius="2"
              boxShadow="md"
              cursor="pointer"
              onClick={() => console.log("OS")}
              style={{
                border: "1px solid #00000050",
                backdropFilter: "blur(5px)",
              }}
            >
              <Image
                height="160px"
                width="100%"
                objectFit="cover"
                src="/images/courses/os.png"
                alt="Dan Abramov"
              />
              <Badge
                variant="subtle"
                colorScheme="yellow"
                m="2"
                shadow="lg"
                style={{ position: "absolute", top: "0", right: "0" }}
              >
                MOST VALUABLE
              </Badge>
              <Box px="2">
                <Heading as="h4" size="md" pt="2">
                  Operating Systems
                </Heading>
                <Text fontSize="md" textColor="gray.600" mt="2">
                  the low-level software that supports a computer's basic
                  functions, such ...
                </Text>
                <Text fontSize="sm" textColor="gray.700" mt="3">
                  Keywords -
                </Text>
                <Text fontSize="sm" textColor="gray.500">
                  Process, Scheduling, First Come First Serve, SJF
                </Text>
                <Text
                  fontSize="xs"
                  textColor="gray.700"
                  mt="6"
                  mb="16"
                  style={{ display: "flex", alignItems: "center" }}
                >
                  <StarIcon mr="1" textColor="#Dede25" w={4} h={4} /> 4.6 (530
                  views)
                </Text>

                <Box
                  w="100%"
                  size="xs"
                  style={{ display: "flex", justifyContent: "end" }}
                >
                  <Text
                    fontSize="xs"
                    m="2"
                    style={{ position: "absolute", bottom: "0", left: "0" }}
                  >
                    CS/IT
                  </Text>
                </Box>
                <Box
                  w="100%"
                  size="xs"
                  style={{ display: "flex", justifyContent: "end" }}
                >
                  <Text
                    fontSize="sm"
                    textColor="blue"
                    m="2"
                    style={{ position: "absolute", bottom: "0", right: "0" }}
                  >
                    Explore <ArrowRightIcon w={2} h={2} />
                  </Text>
                </Box>
              </Box>
            </Box>
            <Box bg="tomato" height="80px"></Box>
            <Box bg="tomato" height="80px"></Box>
            <Box bg="tomato" height="80px"></Box>
            <Box bg="tomato" height="80px"></Box>
            <Box bg="tomato" height="80px"></Box>
          </SimpleGrid>
        </Box>
      </Box>
    </Box>
  );
}
