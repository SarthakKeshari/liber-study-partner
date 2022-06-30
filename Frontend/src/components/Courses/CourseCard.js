import {
    Box,
    Image,
    Heading,
    Badge,
    Text,
  } from "@chakra-ui/react";
  
  import { ArrowRightIcon, StarIcon } from "@chakra-ui/icons";

export default function CourseCard(props) {

    return (

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
                style={{ position: "absolute", top: "0", right: "0", textTransform: "uppercase" }}
            >
                {props.courseDetail.tag}
            </Badge>
            <Box px="2">
                <Heading as="h4" size="md" pt="2">
                    {props.title}
                </Heading>
                <Text fontSize="md" textColor="gray.600" mt="2">
                    {props.courseDetail.def.substring(0, 100)}...
                </Text>
                <Text fontSize="sm" textColor="gray.700" mt="3">
                    Keywords -
                </Text>
                <Text fontSize="sm" textColor="gray.500">
                    {props.courseDetail.keywords.map(e => (e+", "))}
                </Text>
                <Text
                    fontSize="xs"
                    textColor="gray.700"
                    mt="6"
                    mb="16"
                    style={{ display: "flex", alignItems: "center" }}
                >
                    <StarIcon mr="1" textColor="#Dede25" w={4} h={4} /> {props.courseDetail.rating} ({props.courseDetail.views} views)
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
                        {props.courseDetail.domain}
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

    )
}