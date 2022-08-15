import React from 'react';
import { CarouselProps } from '@/types/interface';
import ChevronLeft from '@/assets/images/chevron-left.png';
import ChevronRight from '@/assets/images/chevron-right.png';

const Carousel: React.FC<CarouselProps> = (props) => {
    const { items } = props;
    const [currentIndex, setCurrentIndex] = React.useState(0);

    const totalItems = items.length;
    const widthNavigationBox = `absolute w-${
        totalItems * 8
    } h-1.5 bottom-5 flex justify-between`;

    const navigatorBox: JSX.Element[] = React.useMemo(() => {
        const retval: JSX.Element[] = [];
        for (let i = 0; i < totalItems; i += 1) {
            retval.push(
                <div
                    key={i}
                    className={`w-7 h-full rounded-sm ${
                        currentIndex === i ? 'bg-white' : 'bg-slate-400'
                    } opacity-75`}
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
        <div className="w-60 h-44 md:w-72 md:h-64 flex justify-center items-center relative">
            <button type="button" onClick={handleClickPrev}>
                <img
                    className="absolute left-px opacity-75"
                    src={ChevronLeft}
                    alt="chevron-left"
                />
            </button>
            <img
                className="h-full object-contain"
                src={items[currentIndex]}
                alt="sponsor images"
            />
            <button type="button" onClick={handleClickNext}>
                <img
                    className="absolute right-px opacity-75"
                    src={ChevronRight}
                    alt="chevron-right"
                />
            </button>
            <div className={widthNavigationBox}>{navigatorBox}</div>
        </div>
    );
};

export default Carousel;
