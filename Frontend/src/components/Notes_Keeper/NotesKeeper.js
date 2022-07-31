import {
    Box,
    Popover,
    PopoverTrigger,
    PopoverContent,
    PopoverHeader,
    PopoverBody,
    Input,
    PopoverArrow,
    PopoverCloseButton,
    Button,
    InputGroup,
    InputLeftAddon,
} from '@chakra-ui/react'



export default function NotesKeeper() {
    return (
        <Box pt="24" px="4" w='100%' p={4} height='100vh'  color='black' marginTop={6}  >
            You don't Have Anything to Store.

            <Popover>
                <PopoverTrigger>
                    <Button  marginRight={"auto"} bg={'red'}>ADD</Button>
                </PopoverTrigger>
                <PopoverContent>
                    <PopoverArrow />
                    <PopoverCloseButton />
                    <PopoverHeader>NOTES KEEPER</PopoverHeader>
                    <PopoverBody>
                        <InputGroup size='sm' marginTop={4}>
                            <InputLeftAddon children='Title' />
                            <Input type='text' placeholder='Title' />

                        </InputGroup>
                        <InputGroup size='sm' marginTop={4}>
                            <InputLeftAddon children='Content' />
                            <Input type='text' placeholder='Content' />

                        </InputGroup>
                        <Button colorScheme='blue' marginTop={4}>
                            ADD NOTES
                        </Button>
                    </PopoverBody>
                </PopoverContent>
            </Popover>
        </Box>



    );
}