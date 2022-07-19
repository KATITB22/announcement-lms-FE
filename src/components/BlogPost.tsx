import React from 'react';
import { Box, Center, Heading, Text, Stack, Image } from '@chakra-ui/react';
import { BaseProps } from '../types/interface';
// TODO: fix image
const BlogPost: React.FC<BaseProps> = () => (
    <Center className="py-6">
        <Box
            maxW="450px"
            w="full"
            overflow="hidden"
            className="bg-LightBrown rounded-md shadow-l p-6"
        >
            <Box h="275px" className="-mt-6 -mx-6 mb-6 relative">
                <Image
                    src="https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                    h="275px"
                    w="450px"
                />
            </Box>
            <Stack>
                <Text className="font-Subheading text-caption font-normal">
                    11 Jul 2022 | Posted by Mamet KAT ITB
                </Text>
                <Heading className="font-Heading text-h6 font-semibold">
                    Post Title - Boost your conversion rate
                </Heading>
                <Text className="font-Body text-body font-normal">
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                    diam nonumy eirmod tempor invidunt ut labore et dolore magna
                    aliquyam erat, sed diam voluptua. At vero eos et accusam et
                    justo duo dolores et ea rebum.
                </Text>
            </Stack>
            <Stack direction="row" spacing={4} className="mt-6 center">
                <Stack direction="column" spacing={0}>
                    <Text className="font-Caption text-caption font-semibold">
                        Read More
                    </Text>
                </Stack>
            </Stack>
        </Box>
    </Center>
);

export default BlogPost;
