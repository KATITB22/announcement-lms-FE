import FrisianFlag from '@/assets/images/sponsors/Frisian Flag.png';
import IAITB from '@/assets/images/sponsors/IAITB(Colour).png';
import BukitAsam from '@/assets/images/sponsors/Bukit Asam.jpg';
import KuaciRebo from '@/assets/images/sponsors/Kuaci Rebo.png';
import { typePartner } from '@/types/enum';
import { imgPartner } from '@/types/types';

export const listOfSponsor: imgPartner[] = [
    {
        title: 'Frisian Flag',
        type: typePartner.SM,
        imageUrl: FrisianFlag,
        link: 'www.google.com', // link to detail post
    },
    {
        title: 'Bukit Asam',
        type: typePartner.SM,
        imageUrl: BukitAsam,
        link: 'www.google.com', // link to detail post
    },
    {
        title: 'Kuaci Rebo',
        type: typePartner.SM,
        imageUrl: KuaciRebo,
        link: 'www.google.com', // link to detail post
    },
    {
        title: 'IA ITB',
        type: typePartner.MD,
        imageUrl: IAITB,
        link: 'www.google.com', // link to detail post
    },
];

export const sponsorLG = listOfSponsor.filter(
    (sponsor) => sponsor.type === typePartner.LG
);

export const sponsorMD = listOfSponsor.filter(
    (sponsor) => sponsor.type === typePartner.MD
);

export const sponsorSM = listOfSponsor.filter(
    (sponsor) => sponsor.type === typePartner.SM
);

export default listOfSponsor;
