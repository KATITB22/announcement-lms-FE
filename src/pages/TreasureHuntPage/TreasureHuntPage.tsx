import Rumpun from '@/components/Rumpun';
import { mockData } from '@/types/constant';
import ToBeAnnounced from './ToBeAnnounced';

const TreasureHuntPage = () => {
    const date1 = new Date('2022-08-15');
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
                <p className="text-center text-xl mx-[5em] my-[2em]">
                    Haloo, teman-teman maba! <br />
                    Selamat datang di DEFILE UNIT! Kalian telah berhasil
                    memecahkan teka teki dan menemukan harta karun ini. <br />
                    <br />
                    Berikut terdapat beberapa rumpun dari unit-unit yang ada di
                    ITB. Rumpun-rumpun ini adalah kategori dari berbagai unit di
                    ITB yang serumpun, seperti BSO, Agama, Budaya, Seni,
                    Olahraga, dan Pendidikan/Media/Kajian. Di dalamnya,
                    teman-teman bisa melihat unit apa saja yang tergabung dalam
                    kategori rumpun-rumpun yang ada. Silakan klik rumpunnya, dan
                    saksikan beragam unit yang ada di ITB!
                    <br />
                    <br />
                    Psst! Buat kalian yang masih kepo, pantengin terus OHU pada
                    27 Agustus 2022 yaa!
                </p>
            </div>
            <div className="bg-gradient-to-b from-[#FF8952] to-[#F9DCB0] py-20 px-[3.75rem] flex flex-col items-center justify-center gap-5 text-4xl">
                <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-10 min-h-screen items-start max-w-screen-xl w-full">
                    {mockData.map(({ name, link }) => (
                        <Rumpun link={link} key={name} name={name} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default TreasureHuntPage;
