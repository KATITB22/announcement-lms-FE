import { MerchPostProps } from '@/types/interface';
import Carousel from './Carousel';

const MerchPost: React.FC<MerchPostProps> = ({ item }: MerchPostProps) => (
    <div
        className={`shadow-lg
                    transition
                    duration-500
                    ease-in-out
                    transform
                    hover:shadow-2xl
                    w-full
                    h-full
                    max-w-xs
                    `}
    >
        <div className="bg-white w-full h-full min-h-[12.5rem]  rounded-br-lg rounded-bl-lg flex flex-col justify-between h-full ">
            <Carousel items={item.images} />
            <div className="text-center ">
                <p className="font-Heading font-semibold text-body">
                    {item.title}
                </p>
                <p className="font-Body text-caption font-normal">
                    {item.price}
                </p>

                <a
                    className="font-Body text-caption font-normal rounded bg-Orange px-1.5 text-white hover:text-black"
                    href={item.url}
                    target="_blank"
                    rel="noreferrer"
                >
                    Beli
                </a>
            </div>
        </div>
    </div>
);

export default MerchPost;
