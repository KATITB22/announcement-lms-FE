/* eslint-disable react/destructuring-assignment */
/* eslint-disable jsx-a11y/media-has-caption */
// import { jsxElmt } from '@/types/types';
// import { formatUrl, trimString } from '@/util/util';
import { VStack, Text, Link, Center, Button, Flex } from '@chakra-ui/react';
import { Tweet } from 'react-twitter-widgets';
import Carousel from '@/components/Carousel';
import DownloadLogo from '@styles/images/icon-download-file.png';
import { ElementExtended, figureAttr } from '@/types/interface';
import { formatUrl, trimString, getAttr } from '@/util/util';

const Render = {
    p: (id: number, node: ElementExtended) => {
        const { childNodes } = node;
        const textComponents: JSX.Element[] = [];
        childNodes.forEach((innerNode, idx) => {
            textComponents.push(renderText(innerNode, idx));
        });
        return (
            <Text
                key={id}
                className=" text-caption md:text-body w-full text-justify"
            >
                {textComponents}
            </Text>
        );
    },
    hr: (id: number) => (
        <div key={id} className="w-10 py-7 flex justify-evenly items-center">
            <div className="w-1 h-1 bg-black rounded-lg" />
            <div className="w-1 h-1 bg-black rounded-lg" />
            <div className="w-1 h-1 bg-black rounded-lg" />
        </div>
    ),
    ol: (id: number, node: ElementExtended) => {
        const listItems: JSX.Element[] = [];
        node.childNodes.forEach((innerNode) => {
            const textPerList: JSX.Element[] = [];
            innerNode.childNodes.forEach((extraInnerNode, index) => {
                textPerList.push(renderText(extraInnerNode, index));
            });
            listItems.push(<li>{textPerList}</li>);
        });
        return (
            <div
                key={id}
                className="w-full text-caption md:text-body font-Body text-justify"
            >
                <ol className="list-decimal ml-8">{listItems}</ol>
            </div>
        );
    },
    ul: (id: number, node: ElementExtended) => {
        const listItems: JSX.Element[] = [];
        node.childNodes.forEach((innerNode) => {
            const textPerList: JSX.Element[] = [];
            innerNode.childNodes.forEach((extraInnerNode, index) => {
                textPerList.push(renderText(extraInnerNode, index));
            });
            listItems.push(<li>{textPerList}</li>);
        });
        return (
            <div
                key={id}
                className="w-full text-caption md:text-body font-Body text-justify"
            >
                <ul className="list-disc ml-8">{listItems}</ul>
            </div>
        );
    },
    div: (id: number, node: ElementExtended) => {
        if (node.attrs[0].value.includes('kg-file-card')) {
            const { innerWidth } = window;
            const rawFileName =
                node.childNodes[1].childNodes[1].childNodes.length > 5
                    ? node.childNodes[1].childNodes[1].childNodes[5]
                          .childNodes[1].childNodes[0].value
                    : node.childNodes[1].childNodes[1].childNodes[3]
                          .childNodes[1].childNodes[0].value;
            const filename =
                innerWidth > 768 ? rawFileName : trimString(rawFileName, 25);
            const altTextFile =
                node.childNodes[1].childNodes[1].childNodes[3]?.attrs[0].value.includes(
                    'kg-file-card-caption'
                )
                    ? node.childNodes[1].childNodes[1].childNodes[3]
                          .childNodes[0].value
                    : undefined;

            const src = node.childNodes[1].attrs[1].value;
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
                    <div className="flex flex-col">
                        <div className="text-caption_smaller md:text-caption ml-3">
                            {filename}
                        </div>
                        <div className="text-[8px] md:text-[10px] text-gray-400 ml-3">
                            {altTextFile}
                        </div>
                    </div>
                </a>
            );
        }
        if (node.attrs[0].value.includes('kg-audio-card')) {
            const srcThumbnail = node.childNodes[0].attrs[0].value || undefined;
            const src = node.childNodes[2].childNodes[0].attrs[0].value;
            const titleAudio =
                node.childNodes[2].childNodes[1].childNodes[0].value;
            return (
                <VStack
                    key={id}
                    className="block p-5 md:p-7 w-40 sm:w-60 md:w-72 lg:w-80 rounded-lg shadow-lg bg-white"
                >
                    <div className="w-full flex">
                        {srcThumbnail && (
                            <img
                                src={srcThumbnail}
                                className="w-1/5  rounded-md"
                                alt=""
                            />
                        )}
                        <div className="w-4/5 pl-3">{titleAudio}</div>
                    </div>
                    <audio controls className="w-full">
                        <source src={src} type="audio/mpeg" />
                    </audio>
                </VStack>
            );
        }
        if (node.attrs[0].value.includes('kg-product-card')) {
            const srcImage = node.childNodes[0].childNodes[0].attrs[0].value;
            const title =
                node.childNodes[0].childNodes[1].childNodes[0].childNodes[0]
                    .value;
            const description =
                node.childNodes[0].childNodes[2].childNodes[0].childNodes[0]
                    .value;
            const button = node.childNodes[0].childNodes[3]?.attrs[0].value;
            const buttonText =
                node.childNodes[0].childNodes[3]?.childNodes[0].childNodes[0]
                    .value;
            return (
                <div className="w-40 sm:w-44 md:w-60 lg:w-80 rounded overflow-hidden shadow-lg bg-LightBrown">
                    <img
                        className="w-full"
                        src={formatUrl(srcImage)}
                        alt="product"
                    />
                    <div className="px-3 py-2 md:px-6 md:py-4">
                        <div className="font-Bold text-base md:text-xl mb-2">
                            {title}
                        </div>
                        <p className="text-gray-700 text-sm md:text-base">
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
        if (node.attrs[0].value.includes('kg-header-card')) {
            const textHeader = node.childNodes[0].childNodes[0].value;
            const textSubHeader = node.childNodes[1]?.childNodes[0].value;
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
                        <Text fontSize={['lg', 'xl', '2xl']}>
                            {textSubHeader}
                        </Text>
                    )}
                </VStack>
            );
        }

        return <div />;
    },
    figure: (id: number, node: ElementExtended) => {
        if (node.attrs[0].value.includes('kg-image-card')) {
            const attr: figureAttr = getAttr(node.childNodes[0].attrs);
            return (
                <Center key={id}>
                    <img src={formatUrl(attr.src!)} alt="content" width="80%" />
                </Center>
            );
        }
        if (node.attrs[0].value.includes('kg-video-card')) {
            const attr: figureAttr = getAttr(
                node.childNodes[0].childNodes[0].attrs
            );
            const pathOfThumbnails = attr?.style?.match(/(https?:\/\/[^\s]+)/g);
            const pathOfThumbnail = pathOfThumbnails
                ? pathOfThumbnails[0].slice(0, -2)
                : '';
            return (
                <Flex key={id} alignItems="center" justifyContent="center">
                    <video controls poster={pathOfThumbnail} width="80%">
                        <source src={formatUrl(attr.src!)} type="video/mp4" />
                    </video>
                </Flex>
            );
        }

        if (node.attrs[0].value.includes('kg-embed-card')) {
            if (node.childNodes[0].attrs[0].value === 'twitter-tweet') {
                // twitter
                const src = node.childNodes[0].childNodes[2].attrs[0].value;
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
            let attrs: Record<string, any>;
            let aspectRatio = false;
            const srcAttr: figureAttr = getAttr(node.childNodes[0].attrs);
            if (node.childNodes[0].attrs) {
                attrs = {
                    allow: srcAttr.allow,
                    allowFullScreen: srcAttr.allowFullScreen,
                    frameBorder: srcAttr.frameBorder,
                    src: srcAttr.src,
                    title: srcAttr.title,
                    height: srcAttr.height,
                    width: srcAttr.width,
                };
                if (attrs.src.includes('www.youtube.com')) {
                    attrs.width = '100%';
                    delete attrs?.height;
                    aspectRatio = true;
                }
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
        if (node.attrs[0].value.includes('kg-gallery-card')) {
            const srcItems: string[] = [];
            node.childNodes[0].childNodes.forEach((innerNode) => {
                innerNode.childNodes.forEach((extraInnerNode) => {
                    srcItems.push(
                        formatUrl(extraInnerNode.childNodes[0].attrs[0].value)
                    );
                });
            });
            return <Carousel key={id} items={srcItems} />;
        }
        return null;
    },
    blockquote: (id: number, node: ElementExtended) => {
        const text = node.childNodes[0].childNodes[0].value;
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
    h2: (id: number, node: ElementExtended) => {
        const text = node.childNodes[0].value;
        return (
            <h1 key={id} className="text-[22px] md:text-title font-Bold w-full">
                {text}
            </h1>
        );
    },
    h3: (id: number, node: ElementExtended) => {
        const text = node.childNodes[0].value;
        return (
            <h2 key={id} className="text-body md:text-[22px] font-Bold w-full">
                {text}
            </h2>
        );
    },
};

const renderText = (node: ElementExtended, idx: number) => {
    if (node.nodeName === '#text') {
        return (
            <span className="font-Body" key={idx}>
                {node.value}
            </span>
        );
    }
    if (node.nodeName === 'strong') {
        return (
            <span className="font-Bold" key={idx}>
                {node.childNodes[0].value}
            </span>
        );
    }
    if (node.nodeName === 'em') {
        return (
            <span className="font-Italic" key={idx}>
                {node.childNodes[0].value}
            </span>
        );
    }
    if (node.nodeName === 'u') {
        return (
            <span className="underline" key={idx}>
                {node.childNodes[0].value}
            </span>
        );
    }

    // <a> tag
    return (
        <a
            className="text-DarkerOrange underline"
            target="_blank"
            rel="noreferrer"
            key={idx}
            href={node.attrs[0].value}
        >
            {node.childNodes[0].value}
        </a>
    );
};

export default Render;
