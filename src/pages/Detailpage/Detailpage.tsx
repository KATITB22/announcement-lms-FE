/* eslint-disable camelcase */
/* eslint-disable jsx-a11y/media-has-caption */
import React from 'react';
import { Flex, Box, VStack } from '@chakra-ui/react';
import { parse } from 'node-html-parser';
import { useParams } from 'react-router-dom';
import { includes, isEmpty } from 'lodash';
import { getFetchSinglePostUrl } from '@/util/util';
import { DetailpageProps } from '../../types/interface';
import useFetch from '../../hooks/useFetch';
import Render from './Render';

const months = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sept',
    'Oct',
    'Nov',
    'Dec',
];

const Detailpage: React.FC<DetailpageProps> = () => {
    const { postId } = useParams();
    const path = getFetchSinglePostUrl(postId);
    const { data, isLoading, error, message } = useFetch(path);

    let post: any;
    let published_at: string;
    if (!isEmpty(data)) {
        post = data.posts[0];
        const date = new Date(post.published_at);
        published_at = `${date.getDate()} ${
            months[date.getMonth()]
        } ${date.getFullYear()}`;
    }

    const renderHTMLContent = React.useCallback(() => {
        if (!post) return [];

        const root = parse(post.html.replace(/(\r\n|\n|\r)/gm, ''));
        console.log('root', root);
        const components: any[] = [];
        let id: number = 0;
        root.childNodes.forEach((node: any) => {
            if (node.tagName === 'P') {
                if (node.childNodes[0]?.tagName === 'A') {
                    // single link for entire paragraph, ex:<p><a>link</a></p>
                    components.push(
                        Render.link(
                            id,
                            node.childNodes[0].childNodes[0].text,
                            node.childNodes[0].attrs.href
                        )
                    );
                } else {
                    // inline link inside outher text
                    components.push(Render.paragraph(id, node.outerHTML));
                }
            } else if (node.tagName === 'HR') {
                components.push(Render.divider());
            } else if (node.tagName === 'OL') {
                components.push(Render.ol(id, node));
            } else if (node.tagName === 'UL') {
                components.push(Render.ul(id, node));
            } else if (node.tagName === 'DIV') {
                let component: JSX.Element;
                if (includes(node.attrs.class, 'kg-file-card')) {
                    const titleFile = node.childNodes[1].text.trim();
                    component = Render.file(
                        id,
                        titleFile,
                        node.childNodes[1].attrs.href
                    );
                } else if (includes(node.attrs.class, 'kg-audio-card')) {
                    component = Render.audio(id, node);
                } else if (includes(node.attrs.class, 'kg-product-card')) {
                    component = Render.product(id, node);
                } else {
                    component = Render.header(id, node);
                }
                components.push(component);
            } else if (node.tagName === 'FIGURE') {
                let component: JSX.Element;
                if (includes(node.attrs.class, 'kg-image-card')) {
                    component = Render.image(id, node.childNodes[0].attrs.src);
                } else if (includes(node.attrs.class, 'kg-video-card')) {
                    component = Render.video(
                        id,
                        node.childNodes[0].childNodes[0].attrs.style
                            .match(/(https?:\/\/[^\s]+)/g)[0]
                            .slice(0, -2),
                        node.childNodes[0].childNodes[0].attrs.src
                    );
                } else if (includes(node.attrs.class, 'kg-embed-card')) {
                    if (node.childNodes[0].attrs.class === 'twitter-tweet') {
                        component = Render.twitter(id);
                    } else if (
                        // render for embed, youtube & spotify
                        includes(node.childNodes[0].rawAttrs, 'www.youtube.com')
                    ) {
                        component = Render.youtube(
                            id,
                            node.childNodes[0].attrs.title,
                            node.childNodes[0].attrs.src,
                            true
                        );
                    } else {
                        component = Render.youtube(
                            id,
                            node.childNodes[0].attrs.title,
                            node.childNodes[0].attrs.src,
                            false
                        );
                    }
                } else if (includes(node.attrs.class, 'kg-gallery-card')) {
                    component = Render.gallery(id, node);
                }
                components.push(component!);
            } else if (node.tagName === 'BLOCKQUOTE') {
                components.push(Render.blockquote(id, node.text));
            } else if (node.tagName === 'H2') {
                components.push(Render.h2(id, node.text));
            } else if (node.tagName === 'H3') {
                components.push(Render.h3(id, node.text));
            }
            id += 1;
        });
        return components;
    }, [data]);

    if (isLoading) {
        return <p>Loading</p>;
    }

    if (error) {
        return <p>{message}</p>;
    }

    return (
        <Flex background="linear-gradient(180deg, #FF9165 -21.55%, #F9DCB0 100%)">
            <Flex width="15%">
                <Box width="100%" height="100%" />
            </Flex>
            <Flex className="my-36" flexDirection="column" width="70%">
                <Box
                    fontFamily="Alegreya"
                    fontSize={{
                        base: '14px',
                        md: '18px',
                    }}
                >
                    {'Home > Category >  Kemahasiswaan'}
                </Box>
                <Box
                    fontFamily="Magilio"
                    fontSize={{
                        base: '20px',
                        md: '35px',
                    }}
                >
                    {post.title}
                </Box>
                <Box
                    fontFamily="Alegreya"
                    fontSize={{
                        base: '12px',
                        md: '18px',
                    }}
                >
                    {published_at!}
                </Box>
                <VStack
                    spacing={{
                        base: '12px',
                        md: '24px',
                    }}
                >
                    <Box maxWidth="100%">
                        <img
                            src="http://localhost:2368/content/images/2022/07/IMG_6351.jpg"
                            alt="featured"
                        />
                    </Box>
                    {renderHTMLContent()}
                </VStack>
            </Flex>
            <Flex width="15%" />
        </Flex>
    );
};

export default Detailpage;
