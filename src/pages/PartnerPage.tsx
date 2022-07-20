import React from 'react';

const PartnerPage: React.FC<{}> = () => (
    // const imageArray: Array<image> = [];
    <div className="bg-gradient-to-b from-[#FF8952] to-[#F9DCB0]">
        <div className="container max-w-screen min-h-screen mx-auto grid grid-cols-1 md:grid-cols-[150px_auto_150px]">
            <div className="container border-black border md:w-[150px] md:block hidden">
                <div className="container bg-gray-300 h-[200px] my-4 text-center">
                    img 1
                </div>
                <div className="container bg-gray-300 h-[100px] my-4 text-center">
                    img 2
                </div>
                <div className="container bg-gray-300 h-[200px] my-4 text-center">
                    img 3
                </div>
                <div className="container bg-gray-300 h-[100px] my-4 text-center">
                    img 4
                </div>
                <div className="container bg-gray-300 h-[200px] my-4 text-center">
                    img 5
                </div>
            </div>
            <div className="container">
                <p className="text-[24px] text-center pt-8">Thanks to:</p>
                <div className="sponsor py-4">
                    <div className="flex relative h-[30px] justify-center">
                        <div className="text-center bg-LightBrown absolute h-[30px] top-[16px] py-[2px] px-[10px] rounded drop-shadow-lg">
                            Sponsor
                        </div>
                    </div>
                    <div className="min-h-[200px] p-6 bg-LightBrown flex justify-center items-center rounded-md">
                        <div className="image">
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry. Lorem Ipsum has been the
                            industrys standard dummy text ever since the 1500s,
                            when an unknown printer took a galley of type and
                            scrambled it to make a type specimen book. It has
                            survived not only five centuries, but also the leap
                            into electronic typesetting, remaining essentially
                            unchanged. It was popularised in the 1960s with the
                            release of Letraset sheets containing Lorem Ipsum
                            passages, and more recently with desktop publishing
                            software like Aldus PageMaker including versions of
                            Lorem Ipsum.
                        </div>
                    </div>
                </div>
                <div className="medpart">
                    <div className="flex relative h-[30px] justify-center">
                        <div className="text-center bg-LightBrown absolute h-[30px] top-[16px] py-[2px] px-[10px] rounded drop-shadow-lg">
                            Media Partner
                        </div>
                    </div>
                    <div className="min-h-[200px] p-6 bg-LightBrown flex justify-center items-center rounded-md">
                        <div className="image">
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry. Lorem Ipsum has been the
                            industrys standard dummy text ever since the 1500s,
                            when an unknown printer took a galley of type and
                            scrambled it to make a type specimen book. It has
                            survived not only five centuries, but also the leap
                            into electronic typesetting, remaining essentially
                            unchanged. It was popularised in the 1960s with the
                            release of Letraset sheets containing Lorem Ipsum
                            passages, and more recently with desktop publishing
                            software like Aldus PageMaker including versions of
                            Lorem Ipsum.
                        </div>
                    </div>
                </div>
            </div>
            <div className="container border-black border md:hidden block">
                Infografis bawah
                <div className="container bg-gray-300">img</div>
                <div className="container bg-gray-300">img</div>
            </div>
            <div className="container border-black border md:w-[150px] md:block hidden">
                Infografis kanan
            </div>

            {/* <VStack spacing={50} align="stretch">
                <Box h="300px" className="lg:bg-[#FFECD0] lg:rounded-xl">
                    sponsor
                </Box>
                <Box h="300px" className="lg:bg-[#FFECD0] lg:rounded-xl mb-10">
                    medpar
                </Box>
            </VStack>
            <VStack>
                <Box>
                    test
                </Box>
            </VStack> */}

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
