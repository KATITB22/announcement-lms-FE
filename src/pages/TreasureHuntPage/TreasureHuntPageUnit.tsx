import useFetch from '@/hooks/useFetch';
import { fetchSinglePost } from '@/service/ghostAPI';
import { TreasureHuntPageProps } from '@/types/interface';
import { RumpunName, UnitLink } from '@/types/types';
import Card from '@/components/Unit';
import {
    unitBSO,
    unitAgama,
    unitBudaya,
    unitOlahraga,
    unitSeni,
    unitPMK,
} from '@/pages/TreasureHuntPage/ListUnit';
import { useParams } from 'react-router-dom';
import Loading from '../Loading';

function greetings(rumpunName: string) {
    return (
        <div className="py-20 bg-Yellow">
            <h1 className="text-5xl font-Heading font-bold mb-2 text-center">
                Rumpun {rumpunName}
            </h1>
            <p className="text-2xl font-Heading font-bold mb-2 text-center">
                Selamat Datang di rumpun {rumpunName}! di sini ada beberapa unit
                yang termasuk kategori rumpun {rumpunName} nih, silahkan diklik
                kalo kepo sama unitnya, buat kenalan lebih lanjut bakal di OHU
                nanti tanggalnya.
            </p>
        </div>
    );
}

const rumpunToUnit = {
    BSO: unitBSO,
    Agama: unitAgama,
    Budaya: unitBudaya,
    Olahraga: unitOlahraga,
    Seni: unitSeni,
    'P/M/K': unitPMK,
} as Record<RumpunName, UnitLink[]>;

function showCard(rumpunName: RumpunName) {
    const unit = rumpunToUnit[rumpunName];
    return unit.map(({ name }, index) => (
        <Card key={name} id={index} name={name} />
    ));
}

const TreasureHuntPageUnit: React.FC<TreasureHuntPageProps> = () => {
    const id = useParams().unitId;
    const { isLoading } = useFetch(fetchSinglePost(id!), id);

    if (isLoading) {
        return <Loading />;
    }
    const rumpunName = [
        'BSO',
        'Agama',
        'Budaya',
        'Olahraga',
        'Seni',
        'P/M/K',
    ] as RumpunName[];
    return (
        <div>
            {greetings(rumpunName[parseInt(id!, 10)])}
            <div className="bg-gradient-to-b from-[#FF8952] to-[#F9DCB0] py-20 px-[3.75rem] flex flex-col items-center justify-center gap-5 text-4xl">
                <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-10 min-h-screen items-start max-w-screen-xl w-full">
                    {showCard(rumpunName[parseInt(id!, 10)])}
                </div>
            </div>
        </div>
    );
};

export default TreasureHuntPageUnit;
