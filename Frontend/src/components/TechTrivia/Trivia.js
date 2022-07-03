import {
    Box,
    SimpleGrid,
} from "@chakra-ui/react";

import styles from "./Trivia.module.css";

import TriviaCards from "./TriviaCards";


export default function Trivia() {
    return (
        <Box className={styles.background} marginTop={"100px"}>
            <Box pt="4" >
                <SimpleGrid minChildWidth="280px" spacing="18px">

                    <TriviaCards />
                    <TriviaCards />
                </SimpleGrid>
            </Box>
        </Box >

    )
}