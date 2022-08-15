import { RumpunProps } from '@/types/interface';
import { Link } from 'react-router-dom';

const Rumpun: React.FC<RumpunProps> = ({ link, name }: RumpunProps) => (
    <div className="w-72 bg-LightBrown rounded-[30px] border-[10px] border-black px-4 py-4">
        <Link
            className=" flex justify-center items-center w-full aspect-video hover:scale-105 transition-transform"
            to={`/defile/${link}`}
        >
            <h2 className="text-6xl font-[Magilio]">{name}</h2>
        </Link>
    </div>
);

export default Rumpun;
