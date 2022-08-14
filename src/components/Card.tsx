/* eslint-disable camelcase */
import { UnitProps } from '@/types/interface';
import { formatUrl } from '@/util/util';
import React from 'react';
import { Link } from 'react-router-dom';

const Card: React.FC<UnitProps> = ({ title, slug, feature_image }) => {
    const [formattedUrl, setFormattedUrl] = React.useState('');

    React.useEffect(() => {
        const srcImage = formatUrl(feature_image!);
        setFormattedUrl(srcImage);
    }, []);

    return (
        <div className="flex flex-col gap-4 justify-center items-center">
            <Link to={`/defile/${slug}`}>
                <img
                    src={formattedUrl!}
                    className="bg-LightBrown w-full aspect-square hover:scale-105 transition-transform"
                    alt={title}
                />
                <p>{title}</p>
            </Link>
        </div>
    );
};

export default Card;
