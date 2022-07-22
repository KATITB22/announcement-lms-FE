/* eslint-disable jsx-a11y/media-has-caption */
import React from "react";
import { DetailpageProps } from "../../types/interface";
import { 
    Flex,
    // Hide,
    Box,
    VStack} from "@chakra-ui/react";
import { DetailPost } from "../../types/types";
import { parse } from "node-html-parser";
import useFetch from "../../hooks/useFetch";
import Render from "./Render";
import { useParams } from "react-router-dom";

const Detailpage: React.FC<DetailpageProps> = (props) => {
    const {postId} = useParams();
    const response = useFetch<any>(`http://localhost:2368/ghost/api/content/posts/${postId}?key=c11259cec5c2cfa1a037f3f5a4&include=tags`);
    const data = response.data as any;
    const isLoading = response.isLoading;
    const error = response.error;
    const message = response.message;
    const posts: DetailPost[] = data.posts;

    const renderHTMLContent = React.useCallback(() => {
        if (posts.length===0) return [];

        const root = parse(posts[0].html);
        // console.log(root);
        const components: any[] = [];
        let id: number = 0;
        root.childNodes.forEach((node: any)=>{
            if (node.tagName === "P"){
                components.push(
                    Render.paragraph(id, node.childNodes[0].text)
                )
            }else { 
                components.push(
                    node.childNodes[0].tagName === "IMG" ?
                    Render.image(id, node.childNodes[0].attrs.src) :
                    Render.video(id, node.childNodes[0].childNodes[0].attrs.style.match(/(https?:\/\/[^\s]+)/g)[0].slice(0,-2), node.childNodes[0].childNodes[0].attrs.src)   
                )
            }
            id+=1;
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