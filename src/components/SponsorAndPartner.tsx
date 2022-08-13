import { imgPartner } from '@/types/types';
import React from 'react';

const SponsorAndPartner = ({ imageUrl, link, title, type }: imgPartner) => (
    <a href={link} key={`${link} ${imageUrl}`}>
        <img
            alt={title}
            src={imageUrl}
            className={`w-[${type}] h-[${type}] object-contain`}
        />
    </a>
);

export default SponsorAndPartner;
