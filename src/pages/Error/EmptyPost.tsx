import React from 'react';
import vistock from '@/assets/images/empty-post.png';

const EmptyPost: React.FC<{}> = () => (
    <div className="relative min-h-content flex items-center justify-center flex-col text-center bg-gradient-to-b from-Orange to-LightOrange z-10">
        <img
            src={vistock}
            alt="gambar vistock"
            className="w-[20rem] sm:w-[30rem] absolute left-[50%] top-1/2 translate-y-[-55%] translate-x-[-50%] -z-10"
        />
        <p className="m-0 mb-2 mt-24 font-Heading text-h4 sm:text-h3 text-DarkerOrange drop-shadow-errorStyle">
            Wah belum ada post nih
        </p>
    </div>
);
export default EmptyPost;
