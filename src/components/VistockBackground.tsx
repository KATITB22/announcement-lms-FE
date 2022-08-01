import Kabut4 from '@/assets/images/kabut_4.png';
import Kabut6 from '@/assets/images/kabut_6.png';
import Bintang1 from '@/assets/images/bintang_1.png';

const VistockBackground: React.FC<{}> = () => {
    return (
        <div className={'absolute w-full h-[3127px] overflow-x-hidden'}>
            <div className="vistock-1 w-full">
                <img
                    className="w-[35%] md:w-[20%] h-auto mix-blend-overlay absolute right-[-2rem] top-7 lg:top-16"
                    src={Kabut4}
                />
                <img
                    className="w-[50%] md:w-[20%] h-auto mix-blend-overlay absolute left-[-1rem] top-[4.5rem] lg:top-16"
                    src={Kabut6}
                />
                <img src={Bintang1} />
            </div>
        </div>
    );
};

export default VistockBackground;
