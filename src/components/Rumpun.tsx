import { RumpunProps } from '@/types/interface';

const Rumpun: React.FC<RumpunProps> = ({ id, name, pageLink}) => {
    return (
        <div className="flex flex-col gap-4 justify-center items-center">
            <a className="bg-LightBrown w-full aspect-square hover:scale-105 transition-transform" href={pageLink}>
            </a>
            <h2 className="text-3xl">{name}</h2>
        </div>
    );
};


export default Rumpun;
