import { typePartner } from '@/types/enum';
import { imgPartner } from '@/types/types';

const listOfMedpar: imgPartner[] = [
    {
        title: 'Google',
        type: typePartner.LG,
        imageUrl:
            'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
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
