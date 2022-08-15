import React from 'react';
import { CarouselProps } from '@/types/interface';
import ChevronLeft from '@/assets/images/chevron-left.png';
import ChevronRight from '@/assets/images/chevron-right.png';

const Carousel: React.FC<CarouselProps> = (props) => {
    const { items } = props;
    const [currentIndex, setCurrentIndex] = React.useState(0);

    const totalItems = items.length;

    const navigatorBox: JSX.Element[] = React.useMemo(() => {
        const retval: JSX.Element[] = [];
        for (let i = 0; i < totalItems; i += 1) {
            retval.push(
                <div
                    key={i}
                    className={`w-3.5 md:w-5 h-2/3 rounded-sm ${
                        currentIndex === i ? 'bg-white' : 'bg-slate-400'
                    } opacity-75 mr-1 ml-1`}
                />
            );
        }
        return retval;
    }, [currentIndex]);

    const handleClickPrev = React.useCallback(() => {
        setCurrentIndex(currentIndex === 0 ? totalItems - 1 : currentIndex - 1);
    }, [currentIndex]);

    const handleClickNext = React.useCallback(() => {
        setCurrentIndex(currentIndex === totalItems - 1 ? 0 : currentIndex + 1);
    }, [currentIndex]);

    return (
        <div className="flex w-60 h-44 md:w-96 md:h-72 lg:w-[36em] lg:h-[27em]">
            <button className="w-[15%]" type="button" onClick={handleClickPrev}>
                <img
                    className="opacity-75"
                    src={ChevronLeft}
                    alt="chevron-left"
                />
            </button>
            <div className="flex w-[70%] justify-center items-center relative">
                <img
                    className="h-full object-contain"
                    src={items[currentIndex]}
                    alt="sponsor images"
                />
                <div className="absolute w-[80%] h-2 bottom-5 flex justify-center">
                    {navigatorBox}
                </div>
            </div>
            <button className="w-[15%]" type="button" onClick={handleClickNext}>
                <img
                    className="opacity-75"
                    src={ChevronRight}
                    alt="chevron-right"
                />
            </button>
        </div>
    );
};

export default Carousel;
