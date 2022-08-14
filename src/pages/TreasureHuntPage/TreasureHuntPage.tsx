import Rumpun from '@/components/Rumpun';
import { RumpunName } from '@/types/types';
import ToBeAnnounced from './ToBeAnnounced';

const mockData = [
    { name: 'BSO', link: 'bso' },
    { name: 'Agama', link: 'agama' },
    { name: 'Budaya', link: 'budaya' },
    { name: 'Olahraga', link: 'olahraga' },
    { name: 'Seni', link: 'seni' },
    { name: 'P/M/K', link: 'pmk' },
] as { name: RumpunName; link: string }[];
const TreasureHuntPage = () => {
    const date1 = new Date('2022-08-13');
    const date2 = new Date();

    if (date1.getDate() > date2.getDate()) {
        return <ToBeAnnounced />;
    }
    return (
        <div>
            <div className="py-20 bg-Yellow">
                <h1 className="text-4xl font-Heading font-bold mb-2 text-center">
                    Defile Unit
                </h1>
            </div>
            <div className="bg-gradient-to-b from-[#FF8952] to-[#F9DCB0] py-20 px-[3.75rem] flex flex-col items-center justify-center gap-5 text-4xl">
                <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-10 min-h-screen items-start max-w-screen-xl w-full">
                    {mockData.map(({ name, link }, index) => (
                        <Rumpun link={link} key={name} id={index} name={name} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default TreasureHuntPage;
