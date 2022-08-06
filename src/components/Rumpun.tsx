import { RumpunProps } from '@/types/interface';

const Rumpun: React.FC<RumpunProps> = ({ name }) => (
    <div className="flex flex-col gap-4 justify-center items-center">
        <div className="bg-LightBrown w-full aspect-square hover:scale-105 transition-transform" />
        <h2 className="text-3xl">{name}</h2>
    </div>
);

export default Rumpun;
