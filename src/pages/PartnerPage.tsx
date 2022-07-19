import React from 'react';
import { Box, VStack } from '@chakra-ui/react';

const PartnerPage: React.FC<{}> = () => (
    // const imageArray: Array<image> = [];
    <div className="bg-gradient-to-b from-[#FF8952] to-[#F9DCB0]">
        <div className="container max-w-screen-lg min-h-screen mx-auto px-[3.75rem]">
            <p className="text-[24px] text-center pt-10 pb-10">Thanks to:</p>
            <VStack spacing={50} align="stretch">
                <Box h="300px" className="lg:bg-[#FFECD0] lg:rounded-xl">
                    sponsor
                </Box>
                <Box h="300px" className="lg:bg-[#FFECD0] lg:rounded-xl">
                    medpar
                </Box>
            </VStack>

            {/* <img
                    className="relative -top-[4rem] -mb-[4rem] lg:w-96"
                    src={oskmLogo}
                    alt=""
                />
                {aboutContents.map((content: paragraph) => (
                    <p className="text-h6 md:text-[40px] lg:text-h3">
                        {content}
                    </p>
                ))}
                <button
                    type="button"
                    onClick={toggle}
                    className="bg-[#FFC176] text-white px-4 py-3 mt-8 rounded-[15px] drop-shadow-lg hover:drop-shadow-xl"
                >
                    see more
                </button> */}
        </div>
    </div>
);
export default PartnerPage;
