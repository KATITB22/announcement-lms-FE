import React from 'react';
import aboutOne from '@/assets/images/about/about-one.png';
import aboutTwo from '@/assets/images/about/about-two.png';

const VistockAbout: React.FC<{}> = () => (
    <div className="relative">
        <div className="absolute">
            <img src={aboutOne} alt="" />
        </div>
        <div className="absolute">
            <img src={aboutTwo} alt="" />
        </div>
    </div>
);

export default VistockAbout;
