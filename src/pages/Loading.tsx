import React from 'react';
import LoadingVector from '@/assets/images/loading/loading-vector.png';
import LoadingMaskot from '@/assets/images/loading/loading-maskot.gif';

const Loading: React.FC<{}> = () => (
    <div className="flex justify-center items-center w-full min-h-screen bg-gradient-to-b from-Orange to-LightOrange">
        <div className="flex justify-center relative">
            <img
                className="max-w-[65%] md:max-w-[55%]"
                src={LoadingVector}
                alt="loading-vector"
            />

            <img
                className="absolute bottom-[25%] md:bottom-[33%] max-w-[45%] md:max-w-[40%] mr-10"
                src={LoadingMaskot}
                alt="loading-maskot"
            />

            <div className="absolute bottom-[30%] md:bottom-[40%] mr-6 font-Heading text-[30px] md:text-h3 text-DarkerOrange drop-shadow-errorStyle">
                LOADING
            </div>
        </div>
    </div>
);

export default Loading;
