import React from 'react';
import vistock from '@/assets/images/search-not-found.png';

const ToBeAnnounced: React.FC<{}> = () => (
    <div className="relative min-h-content flex items-center justify-center flex-col text-center bg-gradient-to-b from-Orange to-LightOrange z-10">
        <img
            src={vistock}
            alt="Server Error"
            className="w-[20rem] sm:w-[30rem] absolute left-[50%] top-1/2 translate-y-[-55%] translate-x-[-50%] -z-10"
        />
        <p className="m-0 pt-24 sm:mt-4 md:mt-4 mb-2 font-Heading text-h4 sm:text-h3 text-DarkerOrange drop-shadow-errorStyle">
            Tunggu Tanggal Mainnya !
        </p>
    </div>
);
export default ToBeAnnounced;
