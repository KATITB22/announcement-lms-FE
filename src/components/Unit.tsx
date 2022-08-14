import { UnitProps } from '@/types/interface';

const Card: React.FC<UnitProps> = ({ name }: { name: string }) => (
    <div className="flex flex-col gap-4 justify-center items-center">
        <h2 className="bg-LightBrown w-full aspect-square hover:scale-105 transition-transform">
            {name}
        </h2>
    </div>
);

export default Card;
