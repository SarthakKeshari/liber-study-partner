import {
    Box,
    Container,
    Divider,

} from "@chakra-ui/react";


export default function LeftPanel() {
    return (
        <Box  w='20%' p={4} h={700} color='white' marginTop={30}>

            <Container maxW='1000px' color={'black'} marginTop={8}>
                Profile
            </Container>
            <Container maxW='1000px' color={'black'} marginTop={8}>
                My Accounts
            </Container>
            <Container maxW='1000px' color={'black'} marginTop={8}>
                My Favourites
            </Container>
            <Container maxW='1000px' color={'black'} marginTop={8}>
                Notes Keeper
            </Container>
            <Divider orientation='horizontal' width={200} marginTop={15} marginBottom={15} />

            <Container maxW='1000px' color={'black'} marginTop={8}>
                Help
            </Container>
            <Container maxW='1000px' color={'black'} marginTop={8}>
                Docs
            </Container>
            <Container maxW='1000px' color={'black'} marginTop={8}>
                FAQ
            </Container>

        </Box>
    );
}
