import Rumpun from '@/components/Rumpun';
import BaseLayout from '@/layout/BaseLayout';

const TreasureHuntPage = () => {
    const mockData = [
        { name: 'Bruh' },
        { name: 'Bruh 2' },
        { name: 'Bruh 2' },
        { name: 'Bruh 2' },
        { name: 'Bruh 2' },
        { name: 'Bruh 2' },
        { name: 'Bruh 2' },
    ];

    return (
        <BaseLayout>
            <div>
                <div className="py-20 bg-Yellow">
                    <h1 className="text-4xl font-Heading font-bold mb-2 text-center">
                        Defile Unit
                    </h1>
                </div>
                <div className="bg-gradient-to-b from-[#FF8952] to-[#F9DCB0] py-20 px-[3.75rem] grid grid-auto-fit-[150px] gap-5 min-h-screen items-start">
                    {mockData.map((rumpun, index) => (
                        <Rumpun id={index} />
                    ))}
                </div>
            </div>
        </BaseLayout>
    );
};

export default TreasureHuntPage;
