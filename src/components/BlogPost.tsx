import React from 'react';
import { Box, Heading, Text, Stack, Image } from '@chakra-ui/react';
import { Post } from '../types/types';

// TODO: fix image
const BlogPost: React.FC<Post> = (props) => {
    const { title, date, author, description, imageUrl, link } = props;
    return (
        <Stack className="py-6">
            <Box
                maxW="450px"
                w="full"
                overflow="hidden"
                className="bg-LightBrown rounded-md shadow-l p-6"
            >
                <Box h="275px" className="-mt-6 -mx-6 mb-6 relative">
                    <Image src={imageUrl} h="275px" w="450px" />
                </Box>
                <Stack>
                    <Text className="font-Subheading text-caption font-normal">
                        {date} | Posted by {author}
                    </Text>
                    <Heading className="font-Heading text-h6 font-semibold">
                        {title}
                    </Heading>
                    <Text className="font-Body text-body font-normal">
                        {description}
                    </Text>
                </Stack>
                <Stack direction="row" spacing={4} className="mt-6 center">
                    <Stack direction="column" spacing={0}>
                        <Text className="font-Caption text-caption font-semibold">
                            <a href={link}>Read More</a>
                        </Text>
                    </Stack>
                </Stack>
            </Box>
        </Stack>
    );
};

export default BlogPost;
