import React from 'react';
import { PARTNER_TITLE, SPONSOR_TITLE, MEDPAR_TITLE } from '@/types/constant';
import PageTransition from '@/components/PageTransition';
import SponsorAndPartnerContainer from '@/components/SponsorAndPartnerContainer';
import VistockPartner from '@/components/VistockPartner';
import { sponsorLG, sponsorMD, sponsorSM } from './SponsorsList';
import { medparXL, medparLG, medparMD, medparSM } from './PartnersList';

const SponsorSectionTitle = ({ title }: { title: string }) => (
    <div className="flex relative h-[36px] justify-center">
        <div className="font-Heading text-xl sm:text-2xl text-center bg-LightBrown absolute h-[36px] top-[16px] py-[2px] px-[10px] rounded drop-shadow-lg">
            {title}
        </div>
    </div>
);

const PartnerPage: React.FC<{}> = () => {
    document.title = 'Sponsor - DEVA: Blog OSKM ITB 2022';
    // const imageArray: Array<image> = [];
    return (
        <PageTransition>
            <div className="bg-gradient-to-b from-[#FF8952] to-[#F9DCB0] relative py-20 z-10">
                <VistockPartner />
                <div className="container max-w-screen min-h-screen mx-auto">
                    <div className="sponsor-medpar ml-8 md:mb-8 mr-8">
                        <p className="text-4xl md:text-h3 font-Heading font-bold mb-2 text-center">
                            {PARTNER_TITLE}
                        </p>
                        <div className="sponsor py-10">
                            <SponsorSectionTitle title={SPONSOR_TITLE} />
                            <div className="min-h-[200px] py-8 p-4 bg-LightBrown flex justify-center flex-col items-center rounded-md gap-5">
                                <SponsorAndPartnerContainer
                                    listOfSponsorAndPartner={sponsorSM}
                                />
                                <SponsorAndPartnerContainer
                                    listOfSponsorAndPartner={sponsorMD}
                                />
                                <SponsorAndPartnerContainer
                                    listOfSponsorAndPartner={sponsorLG}
                                />
                            </div>
                        </div>
                        <div className="medpart">
                            <SponsorSectionTitle title={MEDPAR_TITLE} />
                            <div className="min-h-[200px] py-8 p-4 bg-LightBrown flex justify-center flex-col items-center rounded-md gap-5">
                                <SponsorAndPartnerContainer
                                    listOfSponsorAndPartner={medparSM}
                                />
                                <SponsorAndPartnerContainer
                                    listOfSponsorAndPartner={medparMD}
                                />
                                <SponsorAndPartnerContainer
                                    listOfSponsorAndPartner={medparLG}
                                />
                                <SponsorAndPartnerContainer
                                    listOfSponsorAndPartner={medparXL}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </PageTransition>
    );
};
export default PartnerPage;
