import {
    Box,
    Input,
    InputGroup,
    InputLeftElement,
    Image,
    
} from "@chakra-ui/react";

import { SearchIcon } from "@chakra-ui/icons";


export default function MainPanel() {
    return (
        <Box mx="5vw" minW="56" pt="24" px="4">


            <Box p="2" style={{ marginLeft: "auto", width: "fit-content", marginRight: "auto" }}>
                <InputGroup borderColor={"gray.400"}>
                    <InputLeftElement
                        pointerEvents="none"
                        children={<SearchIcon color="gray" />}
                    />
                    <Input type="text" placeholder="Search" />
                </InputGroup>
            </Box>
            <Box display={"flex"}>
                <Box p="2" style={{ marginRight: "auto", width: "fit-content" }}>
                    All Courses
                </Box>
                <Box p="2" style={{ marginLeft: "auto", width: "fit-content" }}>
                    Your Courses
                </Box>

            </Box>
            <hr />
            <Box boxSize='500px' style={{ marginRight: "auto", marginLeft: "auto" }} marginTop={30}>
                <Image src="/images/aa.jpg" alt='Course' />
            </Box>
            <Box display={"flex"}>
                <Box style={{ marginRight: "auto" }}>
                    <Image src="/images/courses/dsa.png" alt='Course' />
                </Box>
                <Box  style={{ marginLeft: "auto"}}>
                    <Image src="/images/courses/dsa.png" alt='Course' />
                </Box>

            </Box>
        </Box>
    );
}