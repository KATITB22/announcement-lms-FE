import { Box, Flex } from "@chakra-ui/react"

const Render = {
    paragraph: (id: number, text: string) => {
        return (
            <Box
                key={id}
                textAlign={"justify"}
                fontFamily={"Alegreya"}
                width={"100%"}
                fontSize={{
                    base: "12px",
                    md: "18px"
                }}>
                {text}
            </Box>
        )
    },
    image: (id: number, src: string) => {
        return (
            <Flex
                key={id}
                alignItems='center'
                justifyContent='center'>
                <img
                    src={src}
                    alt="content"
                    width="80%"/>
            </Flex>
        )
    },
    video: (id: number, pathOfThumbnail: string, src: string) => {
        return (
            <Flex
                key={id}
                alignItems='center'
                justifyContent='center'>
                <video
                    controls
                    poster={pathOfThumbnail}
                    width="80%">
                    <source 
                        src={src} 
                        type="video/mp4"/>
                </video>
            </Flex>
        )
    }
}

export default Render;