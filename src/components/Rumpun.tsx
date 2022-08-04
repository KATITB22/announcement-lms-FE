import { RumpunProps } from '@/types/interface';

const Rumpun: React.FC<RumpunProps> = ({ id }: RumpunProps) => (
    <div className="flex flex-col gap-2 justify-center items-center">
        <div className="bg-LightBrown w-full aspect-square" />
        <h2 className="text-xl sm:text-2xl">Rumpun {id + 1}</h2>
    </div>
);

export default Rumpun;
