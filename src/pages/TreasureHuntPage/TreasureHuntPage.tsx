import Rumpun from '@/components/Rumpun';

const mockData = [
    { name: 'BSO'
    },
    { name: 'Agama'
    },
    { name: 'Budaya'
    },
    { name: 'Olahraga'
    },
    { name: 'Seni'
    },
    { name: 'P/M/K'
    },
];
const TreasureHuntPage = () => {
    return (
        <div>
            <div className="py-20 bg-Yellow">
                <h1 className="text-4xl font-Heading font-bold mb-2 text-center">
                    Defile Unit
                </h1>
            </div>
            <div className="bg-gradient-to-b from-[#FF8952] to-[#F9DCB0] py-20 px-[3.75rem] flex flex-col items-center justify-center gap-5 text-4xl">
                <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-10 min-h-screen items-start max-w-screen-xl w-full">
                    {mockData.map((rumpun, index) => (
                        <Rumpun
                            key={rumpun.name}
                            id={index}
                            name={rumpun.name}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default TreasureHuntPage;
