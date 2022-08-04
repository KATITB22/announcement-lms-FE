import React from 'react';
import oskmLogo from '@/assets/images/oskm-logo-text.svg';
import { AboutProps } from '@/types/interface';

const AboutDetail: React.FC<AboutProps> = ({ toggle }) => {
    const aboutDetailContents: Array<string> = [
        'Penggunaan Internet di Indonesia cukup besar dan sangat aktif karena menunjang berbagai kebutuhan sehari-hari. Ini menjadi hal yang wajar, mengingat hampir semua sektor sudah terhubung ke internet, termasuk sektor bisnis yang mulai melakukan perubahan dalam segi marketing.',
        'Pemasaran yang dulu dilakukan dengan menggunakan flyer, spanduk, koran, kini beralih ke media digital dan juga internet, yang kemudian dikenal dengan istilah internet marketing strategist dan digital marketing. Arti keduanya sebenarnya kurang lebih sama, yaitu suatu cara untuk memasarkan produk secara luas menggunakan internet. Penggunaan Internet di Indonesia cukup besar dan sangat aktif karena menunjang berbagai kebutuhan sehari-hari. Ini menjadi hal yang wajar, mengingat hampir semua sektor sudah terhubung ke internet, termasuk sektor bisnis yang mulai melakukan perubahan dalam segi marketing.',
        'Pemasaran yang dulu dilakukan dengan menggunakan flyer, spanduk, koran, kini beralih ke media digital dan juga internet, yang kemudian dikenal dengan istilah internet marketing strategist dan digital marketing. Arti keduanya sebenarnya kurang lebih sama, yaitu suatu cara untuk memasarkan produk secara luas menggunakan internet. Penggunaan Internet di Indonesia cukup besar dan sangat aktif karena menunjang berbagai kebutuhan sehari-hari. Ini menjadi hal yang wajar, mengingat hampir semua sektor sudah terhubung ke internet, termasuk sektor bisnis yang mulai melakukan perubahan dalam segi marketing.',
    ];

    return (
        <div className="bg-gradient-to-b from-DarkOrange to-MediumBrown">
            <div className="container text-center max-w-screen-lg min-h-screen mx-auto px-[2rem] py-20">
                <div className="relative flex flex-col items-center bg-MediumBrown opacity-70 rounded-[37px] pb-6 px-4 md:text-[18px] md:px-14 lg:px-20">
                    <img
                        className="relative -mt-7  w-20 md:w-28 md:-mt-8 md:mb-8 "
                        src={oskmLogo}
                        alt=""
                    />
                    {aboutDetailContents.map((content: string) => (
                        <>
                            <p>{content}</p>
                            <br />
                        </>
                    ))}
                    <button
                        type="button"
                        onClick={toggle}
                        className="bg-MediumOrange text-white px-4 py-3 mt-8 rounded-[15px] drop-shadow-lg hover:drop-shadow-xl"
                    >
                        go back
                    </button>
                </div>
            </div>
        </div>
    );
};

export default AboutDetail;
