import React from 'react';
import { imgPartner, typePartner } from '../../types/types';

export const pageTitle = '\uE096\uE00Ean\uE01As t\uE032';

// TODO: bikin array terpisah untuk masing2 tipe listOfSponsor, apus enum, hardcode ukuran img
export const listOfSponsor: imgPartner[] = [
    {
        title: 'Google',
        type: typePartner.LG,
        imageUrl:
            'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
        link: 'www.google.com', // link to detail post
    },
    {
        title: 'Google',
        type: typePartner.MD,
        imageUrl:
            'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
        link: 'www.google.com', // link to detail post
    },
    {
        title: 'Google',
        type: typePartner.LG,
        imageUrl:
            'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
        link: 'www.google.com', // link to detail post
    },
    {
        title: 'Google',
        type: typePartner.LG,
        imageUrl:
            'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
        link: 'www.google.com', // link to detail post
    },
    {
        title: 'Google',
        type: typePartner.LG,
        imageUrl:
            'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
        link: 'www.google.com', // link to detail post
    },
    {
        title: 'Google',
        type: typePartner.LG,
        imageUrl:
            'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
        link: 'www.google.com', // link to detail post
    },
    {
        title: 'Google',
        type: typePartner.LG,
        imageUrl:
            'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
        link: 'www.google.com', // link to detail post
    },
    {
        title: 'Google',
        type: typePartner.LG,
        imageUrl:
            'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
        link: 'www.google.com', // link to detail post
    },
    {
        title: 'Google',
        type: typePartner.LG,
        imageUrl:
            'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
        link: 'www.google.com', // link to detail post
    },
    {
        title: 'Google',
        type: typePartner.MD,
        imageUrl:
            'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
        link: 'www.google.com', // link to detail post
    },
    {
        title: 'Google',
        type: typePartner.MD,
        imageUrl:
            'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
        link: 'www.google.com', // link to detail post
    },
    {
        title: 'Google',
        type: typePartner.MD,
        imageUrl:
            'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
        link: 'www.google.com', // link to detail post
    },
];

const sponsorLG = listOfSponsor.filter(
    (sponsor) => sponsor.type === typePartner.LG
);

// const sponsorMD = listOfSponsor.filter((sponsor)=>{
//     return sponsor.type === typePartner.MD
// })

// const sponsorSM = listOfSponsor.filter((sponsor)=>{
//     return sponsor.type === typePartner.SM
// })

export const listOfMedpar: imgPartner[] = [
    {
        title: 'Google',
        type: typePartner.LG,
        imageUrl:
            'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
        link: 'www.google.com', // link to detail post
    },
];

const PartnerPage: React.FC<{}> = () => (
    // const imageArray: Array<image> = [];

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
                <p className="text-h3 font-Heading font-bold mb-2 text-center">
                    {pageTitle}
                </p>
                <div className="sponsor py-10">
                    <div className="flex relative h-[36px] justify-center">
                        <div className="text-h6 text-center bg-LightBrown absolute h-[36px] top-[16px] py-[2px] px-[10px] rounded drop-shadow-lg">
                            Sponsor
                        </div>
                    </div>
                    <div className="min-h-[200px] py-8 p-4 bg-LightBrown flex justify-center items-center rounded-md ">
                        <div className="image flex flex-wrap place-content-center gap-3">
                            {sponsorLG.map((image: imgPartner) => (
                                <a href={image.link}>
                                    <img
                                        alt={image.title}
                                        src={image.imageUrl}
                                        className={`w-[${image.type}] h-[${image.type}] object-cover`}
                                    />
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="medpart">
                    <div className="flex relative h-[36px] justify-center">
                        <div className="text-h6 text-center bg-LightBrown absolute h-[36px] top-[16px] py-[2px] px-[10px] rounded drop-shadow-lg">
                            Media Partner
                        </div>
                    </div>
                    <div className="min-h-[200px] py-8 p-4 bg-LightBrown flex justify-center items-center rounded-md">
                        <div className="image flex flex-wrap place-content-center gap-3">
                            {listOfMedpar.map((image: imgPartner) => (
                                <a href={image.link}>
                                    <img
                                        alt={image.title}
                                        src={image.imageUrl}
                                        className={`w-[${image.type}] h-[${image.type}] object-cover`}
                                    />
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <div className="vistock-bawah md:hidden block mt-8 mx-8 flex flex-row gap-4">
                <div className="img bg-gray-300 w-full h-[200px]">img 1</div>
                <div className="img bg-gray-300 w-full h-[200px]">img 2</div>
                <div className="img bg-gray-300 w-full h-[200px]">img 3</div>
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
);
export default PartnerPage;
