/* eslint-disable react/destructuring-assignment */
/* eslint-disable jsx-a11y/media-has-caption */
import { jsxElmt } from '@/types/types';
import { NodeExtended } from '@/types/interface';
import { formatUrl, trimString } from '@/util/util';
import { Flex, VStack, Text, Link, Center, Button } from '@chakra-ui/react';
import { Tweet } from 'react-twitter-widgets';
import Carousel from '@/components/Carousel';
import DownloadLogo from '@styles/images/icon-download-file.png';

const Render = {
    P: (id: number, node: NodeExtended) => {
        let textElmt: jsxElmt;
        if (node.childNodes[0]?.tagName === 'A') {
            // single link for entire paragraph, ex:<p><a>link</a></p>
            const { text } = node.childNodes[0].childNodes[0];
            const { href } = node.childNodes[0].attrs;
            textElmt = (
                <Link
                    key={id}
                    className="text-caption md:text-body w-full font-Body text-justify"
                    color="#D27C2F"
                    href={href}
                    isExternal
                >
                    <Text as="u">{text}</Text>
                </Link>
            );
        } else {
            // inline link inside outher text
            const childs: JSX.Element[] = [];
            node.childNodes.forEach((innerNode) => {
                if (innerNode.rawTagName === 'a') {
                    childs.push(
                        <a
                            className="text-DarkerOrange underline"
                            target="_blank"
                            href={innerNode.attrs.href}
                            rel="noreferrer"
                        >
                            {innerNode.text}
                        </a>
                    );
                } else {
                    childs.push(<span>{innerNode.text}</span>);
                }
            });
            textElmt = (
                <p
                    key={id}
                    className="text-caption md:text-body w-full font-Body text-left"
                >
                    {childs}
                </p>
            );
        }
        return textElmt;
    },
    HR: (id: number) => (
        <div key={id} className="w-10 py-7 flex justify-evenly items-center">
            <div className="w-1 h-1 bg-black rounded-lg" />
            <div className="w-1 h-1 bg-black rounded-lg" />
            <div className="w-1 h-1 bg-black rounded-lg" />
        </div>
    ),
    OL: (id: number, node: NodeExtended) => {
        const listItems: JSX.Element[] = [];
        for (const innerNode of node.childNodes) {
            listItems.push(<li>{innerNode.text}</li>);
        }
        return (
            <div
                key={id}
                className="w-full text-caption md:text-body font-Body text-justify"
            >
                <ol className="list-decimal ml-8">{listItems}</ol>
            </div>
        );
    },
    UL: (id: number, node: NodeExtended) => {
        const listItems: JSX.Element[] = [];
        for (const innerNode of node.childNodes) {
            listItems.push(<li>{innerNode.text}</li>);
        }
        return (
            <div
                key={id}
                className="w-full text-caption md:text-body font-Body text-justify"
            >
                <ul className="list-disc ml-9">{listItems}</ul>
            </div>
        );
    },
    DIV: (id: number, node: NodeExtended) => {
        if (node.attrs.class.includes('kg-file-card')) {
            const { innerWidth } = window;
            const filename =
                innerWidth > 768
                    ? node.childNodes[1].childNodes[1].childNodes[3]
                          .childNodes[1].text
                    : trimString(
                          node.childNodes[1].childNodes[1].childNodes[3]
                              .childNodes[1].text,
                          25
                      );
            const src = node.childNodes[1].attrs.href;
            return (
                <a
                    key={id}
                    className="w-32 h-20 md:w-80 md:h-28 bg-white rounded-md flex items-center hover:drop-shadow-lg hover:relative hover:bottom-1 hover:right-1"
                    href={src}
                    target="_blank"
                    rel="noreferrer"
                >
                    <img
                        className="h-4/6"
                        src={DownloadLogo}
                        alt="download-logo"
                    />
                    <div className="h-5/6 w-0.5 bg-gray-400 opacity-50 rounded-md" />
                    <div className="text-caption_smaller md:text-caption ml-3">
                        {filename}
                    </div>
                </a>
            );
        }
        if (node.attrs.class.includes('kg-audio-card')) {
            const { src } = node.childNodes[2].childNodes[0].attrs;
            const titleAudio = node.childNodes[2].childNodes[1].text;
            return (
                <VStack
                    key={id}
                    className="block p-5 md:p-7 w-40 sm:w-60 md:w-72 lg:w-80 rounded-lg shadow-lg bg-white"
                >
                    <Center>{titleAudio}</Center>
                    <audio controls className="w-full">
                        <source src={formatUrl(src)} type="audio/mpeg" />
                    </audio>
                </VStack>
            );
        }
        if (node.attrs.class.includes('kg-product-card')) {
            const srcImage = node.childNodes[0].childNodes[0].attrs.src;
            const title = node.childNodes[0].childNodes[1].text;
            const description = node.childNodes[0].childNodes[2].text;
            const button = node.childNodes[0].childNodes[3]?.attrs.href;
            const buttonText = node.childNodes[0].childNodes[3]?.text;
            return (
                <div className="w-40 sm:w-44 md:w-60 lg:w-80 rounded overflow-hidden shadow-lg bg-LightBrown">
                    <img
                        className="w-full"
                        src={formatUrl(srcImage)}
                        alt="product"
                    />
                    <div className="px-3 py-2 md:px-6 md:py-4">
                        <div className="font-bold text-md sm:text-lg md:text-xl mb-2">
                            {title}
                        </div>
                        <p className="text-gray-700 text-sm sm:text-base md:text-lg">
                            {description}
                        </p>
                    </div>
                    {button && (
                        <Center className="px-6 pt-2 pb-2">
                            <Link href={button} isExternal>
                                <Button>{buttonText}</Button>
                            </Link>
                        </Center>
                    )}
                </div>
            );
        }
        const textHeader = node.childNodes[0].text;
        const textSubHeader = node.childNodes[1]?.text;
        return (
            <VStack
                key={id}
                justifyContent="center"
                alignItems="center"
                width="100%"
                bg="rgba(255,235,176,0.65)"
            >
                <Text fontSize={['2xl', '3xl', '4xl']}>{textHeader}</Text>
                {textSubHeader && (
                    <Text fontSize={['lg', 'xl', '2xl']}>{textSubHeader}</Text>
                )}
            </VStack>
        );
    },
    FIGURE: (id: number, node: NodeExtended) => {
        if (node.attrs.class.includes('kg-image-card')) {
            const { src } = node.childNodes[0].attrs;
            return (
                <Center key={id}>
                    <img src={formatUrl(src)} alt="content" width="80%" />
                </Center>
            );
        }
        if (node.attrs.class.includes('kg-video-card')) {
            const pathOfThumbnails =
                node.childNodes[0].childNodes[0].attrs.style.match(
                    /(https?:\/\/[^\s]+)/g
                );
            const pathOfThumbnail = pathOfThumbnails
                ? pathOfThumbnails[0].slice(0, -2)
                : '';
            const { src } = node.childNodes[0].childNodes[0].attrs;
            return (
                <Flex key={id} alignItems="center" justifyContent="center">
                    <video controls poster={pathOfThumbnail} width="80%">
                        <source src={formatUrl(src)} type="video/mp4" />
                    </video>
                </Flex>
            );
        }
        if (node.attrs.class.includes('kg-embed-card')) {
            let attrs: Record<string, any>;
            let aspectRatio = false;
            if (node.childNodes[0].attrs.src) {
                attrs = {
                    allow: node.childNodes[0].attrs.allow,
                    allowFullScreen: node.childNodes[0].attrs.allowfullscreen,
                    frameBorder: node.childNodes[0].attrs.frameborder,
                    src: node.childNodes[0].attrs.src,
                    title: node.childNodes[0].attrs.tile,
                    height: node.childNodes[0].attrs.height,
                    width: node.childNodes[0].attrs.width,
                };
                if (node.childNodes[0].rawAttrs.includes('www.youtube.com')) {
                    attrs.width = '100%';
                    delete attrs?.height;
                    aspectRatio = true;
                }
            }
            if (node.childNodes[0].attrs.class === 'twitter-tweet') {
                // twitter
                const src = node.childNodes[0].childNodes[2].rawAttrs;
                const idExp = /status\/(\d+)/g;
                const regexExp = new RegExp(idExp);
                const match = regexExp.exec(src);
                const tweetId = match![1];
                return (
                    <div key={id} className="w-full">
                        <Tweet
                            tweetId={tweetId}
                            options={{ align: 'center' }}
                        />
                    </div>
                );
            }
            // youtube & spotify
            return (
                <div
                    key={id}
                    className={`w-full max-w-screen-sm flex justify-center ${
                        aspectRatio ? 'aspect-video' : ''
                    }`}
                >
                    <iframe title={attrs!.title} {...attrs!} />
                </div>
            );
        }
        if (node.attrs.class.includes('kg-gallery-card')) {
            const srcItems: string[] = [];
            for (const innerNode of node.childNodes[0].childNodes) {
                for (const extraInnerNode of innerNode.childNodes) {
                    srcItems.push(
                        formatUrl(extraInnerNode.childNodes[0].attrs.src)
                    );
                }
            }
            return <Carousel key={id} items={srcItems} />;
        }
        return null;
    },
    BLOCKQUOTE: (id: number, node: NodeExtended) => {
        const { text } = node;
        return (
            <div
                key={id}
                className="w-full text-caption md:text-body font-Body text-justify flex flex-row"
            >
                <div className="w-1 h-full rounded bg-gray-600" />
                <p className="ml-6">
                    <em>{text}</em>
                </p>
            </div>
        );
    },
    H2: (id: number, node: NodeExtended) => {
        const { text } = node;
        return (
            <Flex key={id} justifyContent="flex-start" w="full">
                <Text align="left" fontSize="xl">
                    {text}
                </Text>
            </Flex>
        );
    },
    H3: (id: number, node: NodeExtended) => {
        const { text } = node;
        return (
            <Flex key={id} justifyContent="flex-start" w="full">
                <Text align="right" fontSize="lg">
                    {text}
                </Text>
            </Flex>
        );
    },
};

export default Render;
