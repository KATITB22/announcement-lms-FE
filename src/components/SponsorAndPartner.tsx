import { imgPartner } from '@/types/types';
import React from 'react';

const SponsorAndPartner = ({ imageUrl, link, type }: imgPartner) => (
    <a
        href={link}
        key={`${link} ${imageUrl}`}
        className={`w-[${type}] h-[${type}] block border-solid border-black border-2`}
    >
        {/* <img
            alt={title}
            src={imageUrl}
            className="object-contain block max-w-full max-h-full"
        /> */}
    </a>
);

export default SponsorAndPartner;
