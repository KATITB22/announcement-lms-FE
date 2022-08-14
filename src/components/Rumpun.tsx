import { RumpunProps } from '@/types/interface';

const Rumpun: React.FC<RumpunProps> = ({ id, name}) => {
    return (
        <div className="flex flex-col justify-center items-center">
            <a className="bg-LightBrown w-full aspect-video hover:scale-105 transition-transform" href={`/treasure/${id}`}>
                <div className="flex flex-col text-center pt-20 ">
                    <h2 className="text-6xl">{name}</h2>
                </div>
            </a>
        </div>
    );
};


export default Rumpun;
