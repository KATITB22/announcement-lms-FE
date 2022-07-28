/* eslint-disable jsx-a11y/media-has-caption */
import { formatUrl } from '@/util/util';
import {
    Box,
    Flex,
    VStack,
    Text,
    OrderedList,
    ListItem,
    UnorderedList,
    HStack,
    Link,
    Center,
    Button,
} from '@chakra-ui/react';
import { Tweet } from 'react-twitter-widgets';

const Render = {
    paragraph: (id: number, text: string) => (
        <div
            key={id}
            className={
                'text-caption md:text-body w-full font-Body text-justify'
            }
            dangerouslySetInnerHTML={{
                __html: text.replaceAll(
                    '<a',
                    '<a style="color: #D27C2F; text-decoration: underline" target="_blank"'
                ),
            }}
        ></div>
    ),
    link: (id: number, text: string, url: string) => (
        <Link
            key={id}
            className={
                'text-caption md:text-body w-full font-Body text-justify'
            }
            color="#D27C2F"
            href={url}
            isExternal
        >
            <Text as="u">{text}</Text>
        </Link>
    ),
    image: (id: number, src: string) => {
        return (
            <Center key={id}>
                <img src={formatUrl(src)} alt="content" width="80%" />
            </Center>
        );
    },
    video: (id: number, pathOfThumbnail: string, src: string) => (
        <Flex key={id} alignItems="center" justifyContent="center">
            <video controls poster={pathOfThumbnail} width="80%">
                <source src={formatUrl(src)} type="video/mp4" />
            </video>
        </Flex>
    ),
    youtube: (id: number, title: string, src: string, isYoutube: boolean) => (
        // kalo mau responsive ini aspect rationya diedit untuk spotify
        <div
            key={id}
            className={`w-full max-w-screen-sm flex justify-center ${
                isYoutube ? 'aspect-video' : 'aspect-video'
            }`}
        >
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
    twitter: (id: number) => (
        <div key={id} className="w-full">
            <Tweet
                tweetId="1552277594707742720"
                options={{ align: 'center' }}
            />
        </div>
    ),
    divider: (id: number) => (
        <Box
            key={id}
            width="95%"
            height="4px"
            bg="#B8C094"
            borderRadius="lg"
            dropShadow="outline"
        />
        // <Divider  orientation='horizontal' colorScheme={'black'}/>
        // <hr style={{width :'50px', height : '40px', color:'black'}}/>
    ),
    ol: (id: number, node: any) => (
        <div
            key={id}
            className={
                'w-full text-caption md:text-body font-Body text-justify'
            }
        >
            <ol className={'list-decimal ml-8'}>
                {node.childNodes.map((innerNode: any) => (
                    <li>{innerNode.text}</li>
                ))}
            </ol>
        </div>
    ),
    ul: (id: number, node: any) => (
        <div
            key={id}
            className={
                'w-full text-caption md:text-body font-Body text-justify'
            }
        >
            <ul className={'list-disc ml-9'}>
                {node.childNodes.map((innerNode: any) => (
                    <li>{innerNode.text}</li>
                ))}
            </ul>
        </div>
    ),
    blockquote: (id: number, text: string) => (
        <div
            key={id}
            className="w-full text-caption md:text-body font-Body text-justify flex flex-row"
        >
            <div className={'w-1 h-full rounded bg-gray-600'}></div>
            <p className={'ml-6'}>
                <em>{text}</em>
            </p>
        </div>
    ),
    file: (id: number, titleFile: string, src: string) => (
        <Link key={id} href={formatUrl(src)} width="50%">
            <Center
                boxShadow="5px 5px 3px #E38F6E"
                borderRadius="lg"
                width="100%"
                bg="#D26033"
            >
                {`Download File ${id}`}
            </Center>
        </Link>
    ),
    audio: (id: number, node: any) => {
        const { src } = node.childNodes[2].childNodes[0].attrs;
        const titleAudio = node.childNodes[2].childNodes[1].text;
        return (
            <VStack
                key={id}
                className="block p-6 rounded-lg shadow-lg bg-white max-w-sm"
            >
                <Center>{titleAudio}</Center>
                <audio controls>
                    <source src={formatUrl(src)} type="audio/mpeg" />
                </audio>
            </VStack>
        );
    },
    h2: (id: number, text: any) => (
        <Flex key={id} justifyContent="flex-start" w="full">
            <Text align="left" fontSize="xl">
                {text}
            </Text>
        </Flex>
    ),
    h3: (id: number, text: any) => (
        <Flex key={id} justifyContent="flex-start" w="full">
            <Text align="right" fontSize="lg">
                {text}
            </Text>
        </Flex>
    ),
    header: (id: number, node: any) => {
        const textHeader = node.childNodes[0].text;
        const textSubHeader = node.childNodes[1].text;
        return (
            <VStack
                key={id}
                justifyContent="center"
                alignItems="center"
                width="100%"
                bg="rgba(255,235,176,0.65)"
            >
                <Text fontSize="5xl">{textHeader}</Text>
                <Text fontSize="3xl">{textSubHeader}</Text>
            </VStack>
        );
    },
    product: (id: number, node: any) => {
        const srcImage = node.childNodes[0].childNodes[0].attrs.src;
        const title = node.childNodes[0].childNodes[1].text;
        const description = node.childNodes[0].childNodes[2].text;
        const button = node.childNodes[0].childNodes[3]?.attrs.href;
        const buttonText = node.childNodes[0].childNodes[3]?.text;
        return (
            <div
                key={id}
                className="max-w-sm rounded overflow-hidden shadow-lg"
            >
                <img
                    className="w-full"
                    src={formatUrl(srcImage)}
                    alt="product"
                />
                <div className="px-6 py-4">
                    <div className="font-bold text-xl mb-2">{title}</div>
                    <p className="text-gray-700 text-base">{description}</p>
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
    },
    gallery: (id: number, node: any) => {
        const wrapItems: JSX.Element[] = node.childNodes[0].childNodes.map(
            (innerNode: any) =>
                innerNode.childNodes.map((extraInnerNode: any) => (
                    <div className="self-stretch">
                        <img
                            className="h-full w-full object-contain"
                            src={formatUrl(
                                extraInnerNode.childNodes[0].attrs.src
                            )}
                            alt={extraInnerNode.childNodes[0].attrs.desc}
                        />
                    </div>
                ))
        );
        return (
            <div
                key={id}
                className="grid-cols-2 grid place-items-center bg-slate-200 p-5 rounded-md bg-opacity-50 gap-5"
            >
                {wrapItems}
            </div>
        );
    },
};

export default Render;
