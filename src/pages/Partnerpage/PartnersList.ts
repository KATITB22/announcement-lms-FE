import { typePartner } from '@/types/enum';
import { imgPartner } from '@/types/types';

import BahanaFM from '@/assets/images/medpars/Bahana FM.png';
import MMTCRADIO from '@/assets/images/medpars/MMTC RADIO.png';

const listOfMedpar: imgPartner[] = [
    {
        title: 'Bahana FM',
        type: typePartner.LG,
        imageUrl: BahanaFM,
        link: 'www.google.com', // link to detail post
    },
    {
        title: 'MMTC Radio',
        type: typePartner.MD,
        imageUrl: MMTCRADIO,
        link: 'www.google.com', // link to detail post
    },
];

export const medparLG = listOfMedpar.filter(
    (medpar) => medpar.type === typePartner.LG
);

export const medparMD = listOfMedpar.filter(
    (medpar) => medpar.type === typePartner.MD
);

export const medparSM = listOfMedpar.filter(
    (medpar) => medpar.type === typePartner.SM
);

export default listOfMedpar;
