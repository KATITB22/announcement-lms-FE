import React from 'react';

// export const listOfSponsor: imgPartner[] = [
//     {
//         title: 'Google',
//         type: string;
//         imageUrl: string;
//         link: string; // link to detail post
//     }
// ]

const PartnerPage: React.FC<{}> = () => (
    // const imageArray: Array<image> = [];
    <div className="bg-gradient-to-b from-[#FF8952] to-[#F9DCB0] py-20">
        <div className="container max-w-screen min-h-screen mx-auto grid grid-cols-1 md:grid-cols-[200px_auto_200px]">
            <div className="infografis-kiri border md:block hidden max-h-screen">
                <div className="img bg-gray-300 h-[200px] my-4 text-center">
                    img 1
                </div>
                <div className="img bg-gray-300 h-[150px] my-4 text-center">
                    img 2
                </div>
                <div className="img bg-gray-300 h-[200px] my-4 text-center">
                    img 3
                </div>
                <div className="img bg-gray-300 h-[150px] my-4 text-center">
                    img 4
                </div>
                <div className="img bg-gray-300 h-[200px] my-4 text-center">
                    img 5
                </div>
            </div>
            <div className="sponsor-medpart border ml-8 md:mb-8 mr-8">
                <p className="text-3xl font-bold mb-2 text-center">
                    Thanks to:
                </p>
                <div className="sponsor py-10">
                    <div className="flex relative h-[36px] justify-center">
                        <div className="text-h6 text-center bg-LightBrown absolute h-[36px] top-[16px] py-[2px] px-[10px] rounded drop-shadow-lg">
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
                    <div className="flex relative h-[36px] justify-center">
                        <div className="text-h6 text-center bg-LightBrown absolute h-[36px] top-[16px] py-[2px] px-[10px] rounded drop-shadow-lg">
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
            <div className="infografis-bawah border md:hidden block mt-8 mx-8 flex flex-row gap-4">
                <div className="img bg-gray-300 w-full">img 1</div>
                <div className="img bg-gray-300 w-full">img 2</div>
                <div className="img bg-gray-300 w-full">img 3</div>
            </div>
            <div className="infografis-kanan border md:block hidden max-h-screen ml-8">
                <div className="img bg-gray-300 h-[200px] my-4 text-center">
                    img 1
                </div>
                <div className="img bg-gray-300 h-[150px] my-4 text-center">
                    img 2
                </div>
                <div className="img bg-gray-300 h-[200px] my-4 text-center">
                    img 3
                </div>
                <div className="img bg-gray-300 h-[150px] my-4 text-center">
                    img 4
                </div>
                <div className="img bg-gray-300 h-[200px] my-4 text-center">
                    img 5
                </div>
            </div>

            {/* <VStack spacing={50} align="stretch">
            #grid grid-cols-1 md:grid-cols-[200px_auto_200px]
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
