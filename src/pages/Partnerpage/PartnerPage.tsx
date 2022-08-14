import React from 'react';
import { PARTNER_TITLE, SPONSOR_TITLE, MEDPAR_TITLE } from '@/types/constant';
import PageTransition from '@/components/PageTransition';
import SponsorAndPartnerContainer from '@/components/SponsorAndPartnerContainer';
import { sponsorLG, sponsorMD, sponsorSM } from './SponsorsList';
import { medparLG, medparMD } from './PartnersList';

const SponsorSectionTitle = ({ title }: { title: string }) => (
    <div className="flex relative h-[36px] justify-center">
        <div className="font-Heading text-center bg-LightBrown absolute h-[36px] top-[16px] py-[2px] px-[10px] rounded drop-shadow-lg">
            {title}
        </div>
    </div>
);

const PartnerPage: React.FC<{}> = () => {
    document.title = 'Sponsor - OSKM ITB 2022';
    // const imageArray: Array<image> = [];
    return (
        <PageTransition>
            <div className="bg-gradient-to-b from-[#FF8952] to-[#F9DCB0] py-20">
                <div className="container max-w-screen min-h-screen mx-auto grid grid-cols-1 md:grid-cols-[200px_auto_200px]">
                    <div className="vistock-kiri md:block hidden max-h-screen">
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
                    <div className="sponsor-medpar ml-8 md:mb-8 mr-8">
                        <p className="text-4xl md:text-h3 font-Heading font-bold mb-2 text-center">
                            {PARTNER_TITLE}
                        </p>
                        <div className="sponsor py-10">
                            <SponsorSectionTitle title={SPONSOR_TITLE} />
                            <div className="min-h-[200px] py-8 p-4 bg-LightBrown flex justify-center flex-col items-center rounded-md gap-5">
                                <SponsorAndPartnerContainer
                                    listOfSponsorAndPartner={sponsorLG}
                                />
                                <SponsorAndPartnerContainer
                                    listOfSponsorAndPartner={sponsorMD}
                                />
                                <SponsorAndPartnerContainer
                                    listOfSponsorAndPartner={sponsorSM}
                                />
                            </div>
                        </div>
                        <div className="medpart">
                            <SponsorSectionTitle title={MEDPAR_TITLE} />
                            <div className="min-h-[200px] py-8 p-4 bg-LightBrown flex justify-center flex-col items-center rounded-md gap-5">
                                <SponsorAndPartnerContainer
                                    listOfSponsorAndPartner={medparLG}
                                />
                                <SponsorAndPartnerContainer
                                    listOfSponsorAndPartner={medparMD}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="vistock-bawah md:hidden mt-8 mx-8 flex flex-row gap-4">
                        <div className="img bg-gray-300 w-full h-[200px]">
                            img 1
                        </div>
                        <div className="img bg-gray-300 w-full h-[200px]">
                            img 2
                        </div>
                        <div className="img bg-gray-300 w-full h-[200px]">
                            img 3
                        </div>
                    </div>
                    <div className="vistock-kanan md:block hidden max-h-screen ml-8">
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
                </div>
            </div>
        </PageTransition>
    );
};
export default PartnerPage;
