import { imgPartner } from '@/types/types';
import React from 'react';
import SponsorAndPartner from './SponsorAndPartner';

type SponsorAndPartnerContainerProps = {
    listOfSponsorAndPartner: imgPartner[];
};

const SponsorAndPartnerContainer = ({
    listOfSponsorAndPartner,
}: SponsorAndPartnerContainerProps) => (
    <div className="flex flex-wrap justify-center gap-4 p-2">
        {listOfSponsorAndPartner.map(SponsorAndPartner)}
    </div>
);

export default SponsorAndPartnerContainer;
