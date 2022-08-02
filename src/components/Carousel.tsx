import { CarouselProps } from '@/types/interface';
import ChevronLeft from '@/assets/chevron-left.svg';
import ChevronRight from '@/assets/chevron-right.svg';
import React from 'react';

const Carousel: React.FC<CarouselProps> = (props) => {
    const { items } = props;
    const [currentIndex, setCurrentIndex] = React.useState(0);

    const totalItems = items.length;
    const widthNavigationBox = `absolute w-${
        totalItems * 8
    } h-1.5 bottom-5 flex justify-between`;

    const navigatorBox: JSX.Element[] = React.useMemo(() => {
        let retval: JSX.Element[] = [];
        for (let i = 0; i < totalItems; i++) {
            retval.push(
                <div
                    className={`w-7 h-full rounded-sm ${
                        currentIndex == i ? 'bg-white' : 'bg-slate-400'
                    } opacity-75`}
                ></div>
            );
        }
        return retval;
    }, [currentIndex]);

    const handleClickPrev = React.useCallback(() => {
        setCurrentIndex(currentIndex == 0 ? totalItems - 1 : currentIndex - 1);
    }, [currentIndex]);

    const handleClickNext = React.useCallback(() => {
        setCurrentIndex(currentIndex == totalItems - 1 ? 0 : currentIndex + 1);
    }, [currentIndex]);

    return (
        <div
            className={
                'w-60 h-44 md:w-96 md:h-72 flex justify-center items-center relative'
            }
        >
            <img
                onClick={handleClickPrev}
                className={'absolute left-px opacity-75'}
                src={ChevronLeft}
            />
            <img
                className={'h-full object-contain'}
                src={items[currentIndex]}
            />
            <img
                onClick={handleClickNext}
                className={'absolute right-px opacity-75'}
                src={ChevronRight}
            />
            <div className={widthNavigationBox}>{navigatorBox}</div>
        </div>
    );
};

export default Carousel;
