import { TimeIcon } from "@chakra-ui/icons";
import {
    Box,
    Image,
    Heading,
    
    Text,
} from "@chakra-ui/react";

import { useState } from "react";

export default function CourseCard(props) {

   

    return (

        <Box
            bg="#821b9110"
            p="1"
            borderRadius="50"
            boxShadow="md"
            cursor="pointer"
            style={{
                border: "1px solid #00000050",
                backdropFilter: "blur(5px)",
            }}
        >
            <Image
                height="120px"
                width="100%"
                borderTopRadius="50"
                objectFit="cover"
                src="/images/courses/os.png"
                alt="Dan Abramov"
            />
            
            <Box px="2">
                <Heading as="h4" size="md" pt="2">
                    {props.title}
                </Heading>
                


                <Box
                    w="100%"
                    size="xs"
                    
                >
                    <Text
                        fontSize="xs"
                        m="2"
                        pt="2"
                    >
                        <TimeIcon boxSize={4}/> {props.triviaDetail.sdate}
                    </Text>
                </Box>

            </Box>
        </Box>

    )
}