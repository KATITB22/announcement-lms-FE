import React, { useRef, useState, useEffect } from 'react';
import Vistock1 from '@/assets/images/vistock1.svg';
import Vistock2 from '@/assets/images/vistock2.svg';
import Vistock3 from '@/assets/images/vistock3.svg';

const breakPointHeight = {
    xl: 2850,
    l: 2000,
    m: 1500,
    base: 750,
};

const VistockBackground: React.FC<{}> = () => {
    const [countRender, setCountRender] = useState(0);
    const ref: React.LegacyRef<HTMLDivElement> = useRef(null);

    useEffect(() => {
        const clientHeight = ref?.current?.clientHeight!;
        const clientWidth = ref?.current?.clientWidth!;

        let count: number;
        if (clientWidth > 1280) {
            count = clientHeight / breakPointHeight.xl;
        } else if (clientWidth > 1024) {
            count = clientHeight / breakPointHeight.l;
        } else if (clientWidth > 768) {
            count = clientHeight / breakPointHeight.m;
        } else {
            count = clientHeight / breakPointHeight.base;
        }
        setCountRender(Math.ceil(count) + 1);
    }, []);

    const renderedVistock = React.useMemo(() => {
        const retval: JSX.Element[] = [];
        for (let i = 0; i < countRender; i += 1) {
            retval.push(
                <div
                    key={i}
                    className="relative w-full h-[750px] md:h-[1500px] lg:h-[2000px] xl:h-[2850px]  overflow-y-hidden"
                >
                    <img
                        className="w-full h-auto mix-blend-overlay absolute top-[-20px] md:top-[-50px] lg:top-[-80px]"
                        src={Vistock1}
                        alt="vistock-1"
                    />
                    <img
                        className="w-full h-auto absolute top-[150px] md:top-[300px] lg:top-[400px] xl:top-[600px] z-0"
                        src={Vistock2}
                        alt="vistock-2"
                    />
                    <img
                        className="w-full h-auto mix-blend-overlay absolute top-[440px] md:top-[890px] lg:top-[1190px] xl:top-[1725px]"
                        src={Vistock3}
                        alt="vistock-3"
                    />
                </div>
            );
        }
        return retval;
    }, [countRender]);

    return (
        <div ref={ref} className="absolute w-full h-full overflow-hidden">
            {renderedVistock}
        </div>
    );
};

export default VistockBackground;
