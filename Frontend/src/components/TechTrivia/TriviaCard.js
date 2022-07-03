import {
    Box,
    Image,
    Heading,
    Badge,
    Text,
} from "@chakra-ui/react";
import { ArrowRightIcon, StarIcon } from "@chakra-ui/icons";
import { useState } from "react";

export default function CourseCard(props) {

    const [favOnOff, setFavOnOff] = useState(0);
    const handleFavClick = () => {
        setFavOnOff(!favOnOff)
    }

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
                src="/images/courses/os.png"
                alt="Dan Abramov"
            />
            <Badge
                variant="subtle"
                colorScheme={props.triviaDetail.tag === "Most Visited" ? "green" : "yellow"}
                m="2"
                shadow="lg"
                style={{ position: "absolute", top: "0", left: "0", textTransform: "uppercase" }}
            >
                {props.triviaDetail.tag}
            </Badge>
            <Box
                m="2"
                mr="3"
                style={{ position: "absolute", top: "0", right: "0", background: "transparent" }}
            >
                <i class="fas fa-heart" style={{ color: favOnOff ? "red" : "white", fontSize: "22px" }} onClick={handleFavClick}></i>
            </Box>
            <Box px="2">
                <Heading as="h4" size="md" pt="2">
                    {props.title}
                </Heading>
                <Box
                    w="100%"
                    size="xs"
                    style={{ display: "flex", justifyContent: "end" }}
                >
                    <Text fontSize="sm" textColor="gray.500">
                        {props.triviaDetail.topic}
                    </Text>
                </Box>


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
                        {props.triviaDetail.domain}
                    </Text>
                </Box>

            </Box>
        </Box>

    )
}