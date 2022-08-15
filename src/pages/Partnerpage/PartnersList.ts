import { typePartner } from '@/types/enum';
import { imgPartner } from '@/types/types';

import BahanaFM from '@/assets/images/medpars/Bahana FM.png';
import MMTCRADIO from '@/assets/images/medpars/MMTC RADIO.png';
import InilahKoran from '@/assets/images/medpars/(XL) INILAH KORAN-min.png';
import SeputarEvent from '@/assets/images/medpars/(S) Seputar Event-min.png';
import OlimpiadeUpdate from '@/assets/images/medpars/(S) Olimpiade Update-min.png';
import EventMahasiswa from '@/assets/images/medpars/(S) Info Event Mahasiswa Indonesia-min.png';
import EventCampus from '@/assets/images/medpars/(S) Eventcampus-min.png';
import EventList from '@/assets/images/medpars/(S) event.list-min.png';
import EventNetwork from '@/assets/images/medpars/(S) Event Network-min.png';
import EventBanget from '@/assets/images/medpars/(S) Event Banget Logo Black-min.png';


const listOfMedpar: imgPartner[] = [
    {
        title: 'Bahana FM',
        type: typePartner.LG,
        imageUrl: BahanaFM,
        link: 'https://www.google.com', // link to detail post
    },
    {
        title: 'MMTC Radio',
        type: typePartner.MD,
        imageUrl: MMTCRADIO,
        link: 'https://www.google.com', // link to detail post
    },
    {
        title: 'Inilah Koran',
        type: typePartner.LG,
        imageUrl: InilahKoran,
        link: 'https://www.google.com', // link to detail post
    },
    {
        title: 'Seputar Event',
        type: typePartner.SM,
        imageUrl: SeputarEvent,
        link: 'https://www.google.com', // link to detail post
    },
    {
        title: 'Olimpiade Update',
        type: typePartner.SM,
        imageUrl: OlimpiadeUpdate,
        link: 'https://www.google.com', // link to detail post
    },
    {
        title: 'Info Event Mahasiswa Indonesia',
        type: typePartner.SM,
        imageUrl: EventMahasiswa,
        link: 'https://www.google.com', // link to detail post
    },
    {
        title: 'Eventcampus',
        type: typePartner.SM,
        imageUrl: EventCampus,
        link: 'https://www.google.com', // link to detail post
    },
    {
        title: 'Event List',
        type: typePartner.SM,
        imageUrl: EventList,
        link: 'https://www.google.com', // link to detail post
    },
    {
        title: 'Event Network',
        type: typePartner.SM,
        imageUrl: EventNetwork,
        link: 'https://www.google.com', // link to detail post
    },
    {
        title: 'Event Banget',
        type: typePartner.SM,
        imageUrl: EventBanget,
        link: 'https://www.google.com', // link to detail post
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
