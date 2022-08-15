import IAITB from '@/assets/images/sponsors/IAITB(Colour).png';
import Ayamayaman from '@/assets/images/sponsors/AYAMAYAMAN.png';
import BankNeoCommerce from '@/assets/images/sponsors/BANK NEO COMMERCE.png';
import BukitAsam from '@/assets/images/sponsors/Bukit Asam.jpg';
import byu from '@/assets/images/sponsors/byu.png';
import FrisianFlag from '@/assets/images/sponsors/Frisian Flag.png';
import HutamaKarya from '@/assets/images/sponsors/Hutama Karya.png';
import KuaciRebo from '@/assets/images/sponsors/Kuaci Rebo.png';
import NusantaraTurbinDanPropulsi from '@/assets/images/sponsors/NUSANTARA TURBIN DAN PROPULSI.jpg';
import PTTimahTBK from '@/assets/images/sponsors/PT TIMAH TBK.png';
import SinggahSini from '@/assets/images/sponsors/singgah sini.jpg';
import StudyBoard from '@/assets/images/sponsors/study board.png';
import whitelab from '@/assets/images/sponsors/WHITELAB.jpg';
import ZebraAsabaIndustries from '@/assets/images/sponsors/Zebra Asaba Industries.png';
import { typePartner } from '@/types/enum';
import { imgPartner } from '@/types/types';

export const listOfSponsor: imgPartner[] = [
    {
        title: 'Ayamayaman',
        type: typePartner.SM,
        imageUrl: Ayamayaman,
    },
    // {
    //     title: 'Dorm ID',
    //     type: typePartner.SM,
    //     imageUrl:
    // },
    {
        title: 'Zebra Asaba Industries',
        type: typePartner.SM,
        imageUrl: ZebraAsabaIndustries,
    },
    {
        title: 'Frisian Flag',
        type: typePartner.SM,
        imageUrl: FrisianFlag,
    },
    // {
    //     title: 'Mantappu Corp',
    //     type: typePartner.SM,
    //     imageUrl:
    // },
    {
        title: 'PT TIMAH Tbk',
        type: typePartner.SM,
        imageUrl: PTTimahTBK,
    },
    {
        title: 'singgah sini',
        type: typePartner.SM,
        imageUrl: SinggahSini,
    },
    {
        title: 'Nusantara Turbin dan Propulsi',
        type: typePartner.SM,
        imageUrl: NusantaraTurbinDanPropulsi,
    },
    {
        title: 'Study Board Education',
        type: typePartner.SM,
        imageUrl: StudyBoard,
    },
    {
        title: 'PT Bukit Asam Tbk',
        type: typePartner.SM,
        imageUrl: BukitAsam,
    },
    {
        title: 'Hutama Karya',
        type: typePartner.MD,
        imageUrl: HutamaKarya,
    },
    {
        title: 'Whitelab',
        type: typePartner.MD,
        imageUrl: whitelab,
    },
    {
        title: 'byU',
        type: typePartner.MD,
        imageUrl: byu,
    },
    {
        title: 'Bank Neo Commerce',
        type: typePartner.MD,
        imageUrl: BankNeoCommerce,
    },
    {
        title: 'Kuaci Rebo',
        type: typePartner.LG,
        imageUrl: KuaciRebo,
    },
    {
        title: 'Ikatan Alumni ITB (IA-ITB)',
        type: typePartner.LG,
        imageUrl: IAITB,
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
