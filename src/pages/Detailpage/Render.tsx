/* eslint-disable jsx-a11y/media-has-caption */
import {
    Box,
    Flex,
    VStack,
    Heading,
    Text,
    OrderedList,
    ListItem,
    UnorderedList,
    HStack,
    Link,
    Center,
} from '@chakra-ui/react';

const Render = {
    paragraph: (id: number, text: string) => (
        <Box
            key={id}
            textAlign="left"
            fontFamily="Alegreya"
            width="100%"
            fontSize={{
                base: '12px',
                md: '18px',
            }}
            dangerouslySetInnerHTML={{
                __html: text.replaceAll(
                    '<a',
                    '<a style="color: #D27C2F; text-decoration: underline" target="_blank"'
                ),
            }}
        />
    ),
    link: (text: string, url: string) => (
        <Link
            fontSize={{
                base: '12px',
                md: '18px',
            }}
            color="#D27C2F"
            href={url}
            target="_blank"
            w="full"
        >
            <Text as="u">{text}</Text>
        </Link>
    ),
    image: (id: number, src: string) => (
        <Flex key={id} alignItems="center" justifyContent="center">
            <img src={src} alt="content" width="80%" />
        </Flex>
    ),
    video: (id: number, pathOfThumbnail: string, src: string) => (
        <Flex key={id} alignItems="center" justifyContent="center">
            <video controls poster={pathOfThumbnail} width="80%">
                <source src={src} type="video/mp4" />
            </video>
        </Flex>
    ),
    divider: () => (
        <Box
            width={'95%'}
            height={'4px'}
            bg={'#B8C094'}
            borderRadius={'lg'}
            dropShadow={'outline'}
        />
        // <Divider  orientation='horizontal' colorScheme={'black'}/>
        // <hr style={{width :'50px', height : '40px', color:'black'}}/>
    ),
    ol: (id: number, node: any) => (
        <Box width={'100%'}>
            <OrderedList
                key={id}
                textAlign="justify"
                fontFamily="Alegreya"
                width="100%"
                fontSize={{
                    base: '12px',
                    md: '18px',
                }}
            >
                {node.childNodes.map((node: any) => {
                    return <ListItem>{node.text}</ListItem>;
                })}
            </OrderedList>
        </Box>
    ),
    ul: (id: number, node: any) => (
        <Box width={'100%'}>
            <UnorderedList
                key={id}
                textAlign="justify"
                fontFamily="Alegreya"
                width="100%"
                fontSize={{
                    base: '12px',
                    md: '18px',
                }}
            >
                {node.childNodes.map((node: any) => {
                    return <ListItem>{node.text}</ListItem>;
                })}
            </UnorderedList>
        </Box>
    ),
    heading: (id: number, heading: string, subheading: string) => (
        <Box key={id}>
            <VStack>
                <Heading mb={0}>{heading}</Heading>
                <Text fontSize="xl">{subheading}</Text>
            </VStack>
        </Box>
    ),
    blockquote: (id: number, text: string) => {
        return (
            <HStack key={id} width={'100%'}>
                <Box
                    bg={'#737B5C'}
                    height={'100%'}
                    width={'3px'}
                    marginRight={'20px'}
                />
                <Box>
                    <i>{text}</i>
                </Box>
            </HStack>
        );
    },
    file: (id: number, titleFile: string, src: string) => {
        return (
            <Link href={src} width={'50%'}>
                <Center
                    boxShadow={'5px 5px 3px #E38F6E'}
                    borderRadius="lg"
                    width={'100%'}
                    bg={'#D26033'}
                >
                    {`Download File ${id}`}
                </Center>
            </Link>
        );
    },
};

export default Render;
