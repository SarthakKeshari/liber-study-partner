import {
    Box,
    Popover,
    PopoverTrigger,
    PopoverContent,
    PopoverHeader,
    PopoverBody,
    PopoverFooter,
    PopoverArrow,
    PopoverCloseButton,
    PopoverAnchor,
    Button,
} from '@chakra-ui/react'



export default function NotesKeeper() {
    return (
        <Box bg='tomato' w='100%' p={4} height='40%' color='white'>
            You don't Have Anything to Store.

            <Popover>
                <PopoverTrigger>
                    <Button>ADD</Button>
                </PopoverTrigger>
                <PopoverContent>
                    <PopoverArrow />
                    <PopoverCloseButton />
                    <PopoverHeader>NOTES KEEPER</PopoverHeader>
                    <PopoverBody>
                        <Text mb='8px'>Title  {value}</Text>
                        <Input
                            value={value}
                            onChange={handleChange}
                            placeholder='Title'
                            size='sm'
                        />
                        <Text mb='8px'>Content  {value}</Text>
                        <Input
                            value={value}
                            onChange={handleChange}
                            placeholder='Content'
                            size='sm'
                        />
                        <Button colorScheme='blue' ref={initialFocusRef}>
                            ADD NOTES
                        </Button>
                    </PopoverBody>
                </PopoverContent>
            </Popover>
        </Box>



    );
}