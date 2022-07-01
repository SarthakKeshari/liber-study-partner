import {
    Image,
    Grid,
    GridItem,
    Text,
    Link,
    Box,
    Input,
} from "@chakra-ui/react";


export default function Footer() {

    return (
        <Grid templateColumns='repeat(3, 1fr)' gap={6} marginBottom={"75px"}>
            <GridItem w='100%' h='10' padding={"25px"} >
                <Box display={"flex"}>
                    <Image borderRadius="full" boxSize="50px" src="/logo.jpg" alt="Logo" />
                    <Text fontSize='lg' marginTop={"15px"} marginLeft={"20px"}> Liber</Text>
                </Box>
                <Text fontSize='md'>Online Learning Educational Platform <br></br> Designed for Engineers.</Text>
            </GridItem>
            <GridItem w='100%' h='10' marginTop={"40px"} >
                <Link marginTop={"25px"}>Home</Link>
                <br></br>
                <hr></hr>
                <Link marginTop={"35px"}>About</Link>
                <br></br>
                <hr></hr>
                <Link marginTop={"35px"}>Contact</Link>
                <hr></hr>
            </GridItem>
            <GridItem w='100%' h='10'marginTop={"40px"}>
                <Text fontSize='md'>Reach Us At <br></br> Civil Lines, Prayagraj <br></br> Subscribe Us ! <br></br></Text>
                <Input placeholder='Your Mail Id' size='sm' />
            </GridItem>

        </Grid>

    );
}
