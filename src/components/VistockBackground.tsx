import React, { useState } from 'react';
import Vistock1 from '@/assets/images/background-detail-page/vistock1.png';
import Vistock21 from '@/assets/images/background-detail-page/vistock21.png';
import Vistock22 from '@/assets/images/background-detail-page/vistock22.png';
import Vistock23 from '@/assets/images/background-detail-page/vistock23.png';
import Vistock3 from '@/assets/images/background-detail-page/vistock3.png';
import Vistock41 from '@/assets/images/background-detail-page/vistock41.png';
import Vistock42 from '@/assets/images/background-detail-page/vistock42.png';
import Vistock43 from '@/assets/images/background-detail-page/vistock43.png';
import Vistock5 from '@/assets/images/background-detail-page/vistock5.png';
import Vistock6 from '@/assets/images/background-detail-page/vistock6.png';

const VistockBackground: React.FC<{}> = () => {
    const [countAddVistock] = useState(4);
    // const refDetailPage: React.LegacyRef<HTMLDivElement> = useRef(null);
    // const refVistock: React.LegacyRef<HTMLDivElement> = useRef(null);

    // useEffect(() => {
    //     const clientHeight = refDetailPage?.current?.clientHeight!;
    //     // const clientWidth = refDetailPage?.current?.clientWidth!;
    //     const vistockHeight = refVistock?.current?.clientHeight!;
    //     // const vistockWidth = refVistock?.current?.clientWidth!;

    //     setCountAddVistock(clientHeight / vistockHeight);
    // }, []);

    const renderedVistock = React.useMemo(() => {
        const retval: JSX.Element[] = [];

        for (let i = 0; i < countAddVistock; i += 1) {
            retval.push(
                <div key={i} className="relative w-full overflow-y-hidden">
                    <img
                        draggable={false}
                        className="w-full mix-blend-overlay relative"
                        src={Vistock1}
                        alt="vistock1"
                    />
                    <div className="grid grid-cols-7 w-full relative">
                        <img
                            draggable={false}
                            className="col-start-1 col-end-2"
                            src={Vistock21}
                            alt="vistock21"
                        />
                        <img
                            draggable={false}
                            className="col-start-2 col-end-7 mix-blend-overlay"
                            src={Vistock22}
                            alt="vistock22"
                        />
                        <img
                            draggable={false}
                            className="col-start-7 col-end-7"
                            src={Vistock23}
                            alt="vistock23"
                        />
                    </div>
                    <img
                        draggable={false}
                        className="w-full"
                        src={Vistock3}
                        alt="vistock3"
                    />
                    <div className="grid grid-cols-7 relative">
                        <img
                            draggable={false}
                            className="col-start-1 col-end-2"
                            src={Vistock41}
                            alt="vistock41"
                        />
                        <img
                            draggable={false}
                            className="col-start-2 col-end-7 mix-blend-overlay"
                            src={Vistock42}
                            alt="vistock42"
                        />
                        <img
                            draggable={false}
                            className="col-start-7 col-end-7 w-full"
                            src={Vistock43}
                            alt="vistock43"
                        />
                    </div>
                    <img
                        draggable={false}
                        className="w-full mix-blend-overlay"
                        src={Vistock5}
                        alt="vistock5"
                    />
                    <img
                        draggable={false}
                        className="w-full"
                        src={Vistock6}
                        alt="vistock6"
                    />
                </div>
            );
        }
        return retval;
    }, [countAddVistock]);

    return (
        <div
            // ref={refDetailPage}
            className="absolute w-full h-full overflow-hidden z-[-1]"
        >
            <div
                // ref={refVistock}
                className="relative w-full overflow-y-hidden"
            >
                <img
                    draggable={false}
                    className="w-full mix-blend-overlay relative"
                    src={Vistock1}
                    alt="vistock1"
                />
                <div className="grid grid-cols-7 w-full relative">
                    <img
                        draggable={false}
                        className="col-start-1 col-end-2"
                        src={Vistock21}
                        alt="vistock21"
                    />
                    <img
                        draggable={false}
                        className="col-start-2 col-end-7 mix-blend-overlay"
                        src={Vistock22}
                        alt="vistock22"
                    />
                    <img
                        draggable={false}
                        className="col-start-7 col-end-7"
                        src={Vistock23}
                        alt="vistock23"
                    />
                </div>
                <img
                    draggable={false}
                    className="w-full"
                    src={Vistock3}
                    alt="vistock3"
                />
                <div className="grid grid-cols-7 relative">
                    <img
                        draggable={false}
                        className="col-start-1 col-end-2"
                        src={Vistock41}
                        alt="vistock41"
                    />
                    <img
                        draggable={false}
                        className="col-start-2 col-end-7 mix-blend-overlay"
                        src={Vistock42}
                        alt="vistock42"
                    />
                    <img
                        draggable={false}
                        className="col-start-7 col-end-7 w-full"
                        src={Vistock43}
                        alt="vistock43"
                    />
                </div>
                <img
                    draggable={false}
                    className="w-full mix-blend-overlay"
                    src={Vistock5}
                    alt="vistock5"
                />
                <img
                    draggable={false}
                    className="w-full"
                    src={Vistock6}
                    alt="vistock6"
                />
            </div>
            {renderedVistock}
        </div>
    );
};

export default VistockBackground;
