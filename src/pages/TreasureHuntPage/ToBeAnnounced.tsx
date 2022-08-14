import React from 'react';
import vistock from '@/assets/images/search-not-found.png';

const ToBeAnnounced: React.FC<{}> = () => (
    <div className="relative min-h-content flex items-center justify-center flex-col text-center bg-gradient-to-b from-Orange to-LightOrange z-10">
        <img
            src={vistock}
            alt="To Be Announced"
            className="w-[20rem] md:w-[30rem] absolute left-[50%] bottom-[33%] translate-x-[-50%] -z-10"
        />
        <p className="m-0 mb-1 font-Heading text-title md:text-h3 text-DarkerOrange drop-shadow-errorStyle">
            To Be Announced
        </p>
        <div className="bg-Yellow rounded-full p-2 px-4 hover:shadow-sm">
            Tunggu Tanggal Mainnya !
        </div>
    </div>
);
export default ToBeAnnounced;
