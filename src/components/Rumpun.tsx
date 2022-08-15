import { RumpunProps } from '@/types/interface';
import { Link } from 'react-router-dom';

const Rumpun: React.FC<RumpunProps> = ({ link, name }: RumpunProps) => (
    <div className="flex flex-col justify-center items-center">
        <Link
            className="bg-LightBrown w-full aspect-video hover:scale-105 transition-transform"
            to={`/defile/${link}`}
        >
            <div className="flex flex-col text-center pt-20 ">
                <h2 className="text-6xl">{name}</h2>
            </div>
        </Link>
    </div>
);

export default Rumpun;
