import {
    Box,

} from "@chakra-ui/react";
import { Container } from '@chakra-ui/react'

export default function LeftPanel() {
    return (
        <Box bg='tomato' w='25%' p={4} h={700} color='white' marginTop={30}>

            <Container maxW='800px' color='white'>
                Profile
            </Container>
            <Container maxW='800px' color='white'>
                My Accounts
            </Container>
            <Container maxW='800px' color='white'>
                My Favourites
            </Container>
            <Container maxW='800px' color='white'>
                My Favourites
            </Container>
            <Container maxW='800px' color='white'>
                My Favourites
            </Container>

        </Box>

    );
}
