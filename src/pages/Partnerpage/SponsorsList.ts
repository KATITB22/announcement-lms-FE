import IAITB from '@/assets/images/sponsors/IAITB(Colour).png';
import Ayamayaman from '@/assets/images/sponsors/AYAMAYAMAN.png';
import BankNeoCommerce from '@/assets/images/sponsors/BANK NEO COMMERCE.png';
import Dorm from '@/assets/images/sponsors/Dorm.png';
import Mantappu from '@/assets/images/sponsors/Mantappu-Corp.png';
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
import BNI from '@/assets/images/sponsors/BNI-min.png';
import BSI from '@/assets/images/sponsors/BSI-min.png';
import ValucceStudio from '@/assets/images/sponsors/valuce-min.png';
import Menantea from '@/assets/images/sponsors/Menantea-min.png';
import KumawRamen from '@/assets/images/sponsors/Kumawramen-min.png';

import { typePartner } from '@/types/enum';
import { imgPartner } from '@/types/types';
import Imajirent from '@/assets/images/sponsors/imajirent-min.jpg';

export const listOfSponsor: imgPartner[] = [
    {
        title: 'Ayamayaman',
        type: typePartner.SM,
        imageUrl: Ayamayaman,
    },
    {
        title: 'BNI',
        type: typePartner.SM,
        imageUrl: BNI,
    },
    {
        title: 'BSI',
        type: typePartner.SM,
        imageUrl: BSI,
    },
    {
        title: 'Valucce Studio',
        type: typePartner.SM,
        imageUrl: ValucceStudio,
    },
    {
        title: 'Imajirent',
        type: typePartner.SM,
        imageUrl: Imajirent,
    },
    {
        title: 'Menantea',
        type: typePartner.MD,
        imageUrl: Menantea,
    },
    {
        title: 'Kumaw Ramen',
        type: typePartner.MD,
        imageUrl: KumawRamen,
    },
    {
        title: 'Dorm ID',
        type: typePartner.SM,
        imageUrl: Dorm,
    },
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
    {
        title: 'Mantappu Corp',
        type: typePartner.LG,
        imageUrl: Mantappu,
    },
    {
        title: 'PT TIMAH Tbk',
        type: typePartner.MD,
        imageUrl: PTTimahTBK,
    },
    {
        title: 'Singgah Sini',
        type: typePartner.MD,
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
        type: typePartner.LG,
        imageUrl: HutamaKarya,
    },
    {
        title: 'Whitelab',
        type: typePartner.SM,
        imageUrl: whitelab,
    },
    {
        title: 'byU',
        type: typePartner.SM,
        imageUrl: byu,
    },
    {
        title: 'Bank Neo Commerce',
        type: typePartner.SM,
        imageUrl: BankNeoCommerce,
    },
    {
        title: 'Kuaci Rebo',
        type: typePartner.SM,
        imageUrl: KuaciRebo,
    },
    {
        title: 'Ikatan Alumni ITB (IA-ITB)',
        type: typePartner.MD,
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
