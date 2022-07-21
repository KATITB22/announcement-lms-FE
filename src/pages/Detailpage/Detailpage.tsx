/* eslint-disable jsx-a11y/media-has-caption */
import React from "react";
import { DetailpageProps } from "../../types/interface";
import { 
    Flex,
    // Hide,
    Box,
    VStack} from "@chakra-ui/react";
import { Post } from "../../types/types";
import { parse } from "node-html-parser";
import axios from "axios";

const Detailpage: React.FC<DetailpageProps> = () => {
    const [posts, setPosts] = React.useState<Post[]>([]);

    //use props.id later
    const fetchPost = () => {
        axios.get('http://localhost:2368/ghost/api/content/posts/62d8f59a4d575935b4b0ee04?key=c11259cec5c2cfa1a037f3f5a4&include=tags')
        .then((resp) => {
            setPosts(resp.data.posts);
        }).catch(err=>{
            throw err
        })
    }

    React.useEffect(()=>{
        fetchPost();
    },[])

    const renderHTMLContent = React.useCallback(() => {
        if (posts.length===0) return [];

        const root = parse(posts[0].html);
        const components: any[] = [];
        let id = 0;
        root.childNodes.forEach((node: any)=>{
            if (node.tagName === "P"){
                components.push(
                    <Box
                        key={id}
                        textAlign='justify'
                        fontFamily="Alegreya"
                        fontSize={{
                            base: "12px",
                            md: "18px"
                        }}>
                        {node.childNodes[0].text}
                    </Box>
                )
            }else { 
                components.push(
                    <Flex
                        key={id}
                        alignItems='center'
                        justifyContent='center'>
                        {node.childNodes[0].tagName === "IMG" ?
                        <img
                            src={node.childNodes[0].attrs.src}
                            alt="content"
                            width="80%"/>:
                        <video
                            controls
                            poster={node.childNodes[0].childNodes[0].attrs.style.match(/(https?:\/\/[^\s]+)/g)[0].slice(0,-2)}
                            width="80%">
                            <source 
                                src={node.childNodes[0].childNodes[0].attrs.src} 
                                type="video/mp4"/>
                        </video>
                        }
                    </Flex>
                )
            }
            id+=1;
        });
        return components;
    }, [posts]);

    return (
        <Flex
            background="linear-gradient(180deg, #FF9165 -21.55%, #F9DCB0 100%)">
            <Flex 
                width="15%">
                <Box
                    width="100%"
                    height="100%">
                </Box>
            </Flex>
            <Flex
                marginTop="7%"
                flexDirection='column'
                width="70%">
                <Box
                    fontFamily='Alegreya'
                    fontSize={{
                        base: '14px',
                        md: '18px'
                    }}>
                    {"Home > Category >  Kemahasiswaan"}
                </Box>
                <Box
                    fontFamily='Magilio'
                    fontSize={{
                        base: '20px',
                        md: '35px'
                    }}>
                    {"kitsch 8-bit organic plaid small batch keffiyeh"}
                </Box>
                <Box
                    fontFamily={'Alegreya'}
                    fontSize={{
                        base: '12px',
                        md: '18px'
                    }}>
                    {"8 Jul 2022"}
                </Box>
                <VStack
                    spacing={{
                        base: "12px",
                        md: "24px"
                    }}>
                    <Box
                        maxWidth='100%'>
                        <img 
                            src="http://localhost:2368/content/images/2022/07/IMG_6351.jpg" 
                            alt="featured"/>
                    </Box>
                    {renderHTMLContent()}
                </VStack>
            </Flex>
            <Flex 
                width="15%">

            </Flex>
        </Flex>
    )
}

export default Detailpage;