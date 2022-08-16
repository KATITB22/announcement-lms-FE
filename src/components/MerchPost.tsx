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
        <div className="bg-white w-[17rem] md:w-[20rem] h-[17rem] md:h-[25rem] rounded-br-lg rounded-bl-lg flex flex-col justify-between ">
            <div className="h-[75%] flex">
                <Carousel items={item.images} />
            </div>
            <div className="h-[25%] text-center bg-Yellow  ">
                <p className="font-Heading font-semibold text-caption md:text-body md:pt-1">
                    {item.title}
                </p>
                <p className="font-Body text-caption_smaller md:text-caption font-normal">
                    {item.price}
                </p>

                <a
                    className="font-Body text-caption font-normal rounded bg-Orange px-1.5 text-white hover:text-black px-4 md:py-1"
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
