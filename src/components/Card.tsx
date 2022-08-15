/* eslint-disable camelcase */
import { UnitProps } from '@/types/interface';
import { formatUrl } from '@/util/util';
import React from 'react';
import { Link } from 'react-router-dom';

const Card: React.FC<UnitProps> = ({ title, preSlug, slug, feature_image }) => {
    const [formattedUrl, setFormattedUrl] = React.useState('');

    React.useEffect(() => {
        const srcImage = formatUrl(feature_image!);
        setFormattedUrl(srcImage);
    }, []);

    return (
        <div className="flex flex-col gap-4 justify-center items-center">
            <Link to={`/defile/${preSlug}/${slug}`}>
                <img
                    src={formattedUrl!}
                    className="w-[200px] aspect-square hover:scale-105 transition-transform object-contain mx-auto"
                    alt={title}
                />
                <p className="text-center pt-2">{title}</p>
            </Link>
        </div>
    );
};

export default Card;
