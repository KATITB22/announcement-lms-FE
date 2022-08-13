import { imgPartner } from '@/types/types';
import React from 'react';
import SponsorAndPartner from './SponsorAndPartner';

type SponsorAndPartnerContainerProps = {
    listOfSponsorAndPartner: imgPartner[];
};

const SponsorAndPartnerContainer = ({
    listOfSponsorAndPartner,
}: SponsorAndPartnerContainerProps) => (
    <div className="grid justify-items-center items-center gap-4 p-2 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {listOfSponsorAndPartner.map(SponsorAndPartner)}
    </div>
);

export default SponsorAndPartnerContainer;
