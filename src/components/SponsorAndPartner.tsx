import { imgPartner } from '@/types/types';
import React from 'react';

const SponsorAndPartner = ({ imageUrl, title, link, type }: imgPartner) => {
    let className = '';

    if (type === 'sm') {
        className = 'h-sm object-contain';
    } else if (type === 'md') {
        className = 'h-md object-contain';
    } else if (type === 'lg') {
        className = 'h-lg object-contain';
    }

    return (
        <a rel="noreferrer" target="_blank" href={link}>
            <img alt={title} src={imageUrl} className={className} />
        </a>
    );
};
export default SponsorAndPartner;
