/* eslint-disable jsx-a11y/media-has-caption */
import { Box, Flex, Divider, VStack, Heading , Text, OrderedList, ListItem, UnorderedList} from '@chakra-ui/react';

const Render = {
    paragraph: (id: number, text: string) => (
        
        <Box
            key={id}
            textAlign="justify"
            fontFamily="Alegreya"
            width="100%"
            fontSize={{
                base: '12px',
                md: '18px'
            }}
            dangerouslySetInnerHTML={{ __html: text }}>
        </Box>
    ),
    image: (id: number, src: string) => (
        <Flex
            key={id}
            alignItems='center'
            justifyContent='center'>
            <img
                src={src}
                alt="content"
                width="80%"/>
        </Flex>
    ),
    video: (id: number, pathOfThumbnail: string, src: string) => (
        <Flex
            key={id}
            alignItems='center'
            justifyContent='center'>
            <video
                controls
                poster={pathOfThumbnail}
                width="80%">
                <source 
                    src={src} 
                    type="video/mp4"/>
            </video>
        </Flex>
    ),
    divider: () => (
        <Box
            width={"95%"}
            height={"4px"}
            bg={"#855E4A"}  
            borderRadius={"lg"}  
        />
        // <Divider  orientation='horizontal' colorScheme={'black'}/>
        // <hr style={{width :'50px', height : '40px', color:'black'}}/>
    ),
    ol: (id: number, node: any) => (
        <Box
            width={"100%"}>
            <OrderedList
                key={id}
                textAlign="justify"
                fontFamily="Alegreya"
                width="100%"
                fontSize={{
                    base: '12px',
                    md: '18px'
                }}>
                {node.childNodes.map((node: any) => {
                    return (
                        <ListItem>
                            {node.text}
                        </ListItem>
                    )
                })}
            </OrderedList>
        </Box>
    ),
    ul: (id: number, node: any) => (
        <Box
            width={"100%"}>
            <UnorderedList
                key={id}
                textAlign="justify"
                fontFamily="Alegreya"
                width="100%"
                fontSize={{
                    base: '12px',
                    md: '18px'
                }}>
                {node.childNodes.map((node: any) => {
                    return (
                        <ListItem>
                            {node.text}
                        </ListItem>
                    )
                })}
            </UnorderedList>
        </Box>
    ),
    heading: (id: number, heading: string, subheading: string) => (
        <Box key={id}>
            <VStack>
                <Heading mb={0}>{heading}</Heading>
                <Text fontSize='xl'>
                    {subheading}
                </Text>
            </VStack>
        </Box>
        
    ),
};

export default Render;