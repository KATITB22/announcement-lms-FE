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
    link: (id: number, text: string, url: string) => (
        <Link
            key={id}
            fontSize={{
                base: '12px',
                md: '18px',
            }}
            color="#D27C2F"
            href={url}
            w="full"
            isExternal
        >
            <Text as="u">{text}</Text>
        </Link>
    ),
    image: (id: number, src: string) => (
        <Center key={id}>
            <img src={src} alt="content" width="80%" />
        </Center>
    ),
    video: (id: number, pathOfThumbnail: string, src: string) => (
        <Flex key={id} alignItems="center" justifyContent="center">
            <video controls poster={pathOfThumbnail} width="80%">
                <source src={src} type="video/mp4" />
            </video>
        </Flex>
    ),
    youtube: (id: number, title: string, src: string) => (
        <div key={id} className="w-full flex justify-center aspect-video">
            <iframe
                src={src}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title={title}
                width="80%"
            />
        </div>
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
    audio: (id: number, node: any) => {
        const src = node.childNodes[2].childNodes[0].attrs.src;
        const titleAudio = node.childNodes[2].childNodes[1].text;
        return (
            <VStack
                key={id}
                className={'block p-6 rounded-lg shadow-lg bg-white max-w-sm'}
            >
                <Center>{titleAudio}</Center>
                <audio controls>
                    <source src={src} type={'audio/mpeg'} />
                </audio>
            </VStack>
        );
    },
    h2: (id: number, text: any) => (
        <Flex justifyContent="flex-start" w="full">
            <Text align="left" key={id} fontSize="xl">
                {text}
            </Text>
        </Flex>
    ),
    h3: (id: number, text: any) => (
        <Flex justifyContent="flex-start" w="full">
            <Text align="right" key={id} fontSize="lg">
                {text}
            </Text>
        </Flex>
    ),
};

export default Render;
