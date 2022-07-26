/* eslint-disable jsx-a11y/media-has-caption */
import { Box, Flex, Divider, VStack, Heading, Text } from '@chakra-ui/react';
import React from 'react';
import createDOMPurify from 'dompurify';
// import { JSDOM } from 'jsdom';

// const window = (new JSDOM('')).window;
const DOMPurify = createDOMPurify();

const Render = {
    paragraph: (id: number, text: string) => (
        <Box
            key={id}
            textAlign="justify"
            fontFamily="Alegreya"
            width="100%"
            fontSize={{
                base: '12px',
                md: '18px',
            }}
        >
            {/* {text} */}
            <div
                dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(text) }}
            />
        </Box>
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
        // <Divider  orientation='horizontal' colorScheme={'purple'}/>
        <hr
            style={{ width: '10000px', height: '1000px', color: 'chocolate' }}
        />
        // <Box>
        //     peler
        // </Box>
    ),
    ol: (id: number, text: string) => (
        <Box
            key={id}
            textAlign="justify"
            fontFamily="Alegreya"
            width="100%"
            fontSize={{
                base: '12px',
                md: '18px',
            }}
        >
            {/* {text} */}
            <div
                dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(text) }}
            />
        </Box>
    ),
    ul: (id: number, text: string) => (
        <Box
            key={id}
            textAlign="justify"
            fontFamily="Alegreya"
            width="100%"
            fontSize={{
                base: '12px',
                md: '18px',
            }}
        >
            {/* {text} */}
            <div
                dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(text) }}
            />
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
};

export default Render;
