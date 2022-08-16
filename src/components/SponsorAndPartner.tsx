import { imgPartner } from '@/types/types';
import React from 'react';

const SponsorAndPartner = ({ imageUrl, title, type }: imgPartner) => {
    let className = '';

    if (type === 'sm') {
        className = 'h-[30px] object-contain';
    } else if (type === 'md') {
        className = 'h-[60px] object-contain';
    } else if (type === 'lg') {
        className = 'h-[90px] object-contain';
    } else if (type === 'xl') {
        className = 'h-[120px] object-contain';
    }

    return (
        <img
            alt={title}
            src={imageUrl}
            className={className}
            draggable="false"
        />
    );
};
export default SponsorAndPartner;
