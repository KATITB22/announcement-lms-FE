
import { UnitListProps } from "@/types/interface";
import Card from "@/components/Unit";
import { unitBSO, unitAgama, unitBudaya, unitOlahraga, unitSeni, unitPMK} from "@/pages/TreasureHuntPage/ListUnit";
import { useParams } from "react-router-dom";

const TreasureHuntPageUnit: React.FC<UnitListProps> = () => {

    const id = useParams().unitId;

    const mockData = [
        { name: 'BSO'},
        { name: 'Agama'},
        { name: 'Budaya'},
        { name: 'Olahraga'},
        { name: 'Seni'},
        { name: 'P/M/K'},
    ];

    if(window.location.pathname === "/treasure/1"){
        return(
            <>
                <div className="py-20 bg-Yellow">
                    <h1 className="text-5xl font-Heading font-bold mb-2 text-center">
                        Rumpun {mockData[0].name}
                    </h1>
                    <p className="text-2xl font-Heading font-bold mb-2 text-center">
                        Selamat Datang di rumpun {mockData[0].name}! di sini ada beberapa unit yang termasuk kategori
                        rumpun {mockData[0].name} nih, silahkan diklik kalo kepo sama unitnya, buat kenalan lebih lanjut
                        bakal di OHU nanti tanggalnya.
                    </p>
                </div>
                <div className="bg-gradient-to-b from-[#FF8952] to-[#F9DCB0] py-20 px-[3.75rem] flex flex-col items-center justify-center gap-5 text-4xl">
                    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-10 min-h-screen items-start max-w-screen-xl w-full">
                        {unitBSO.map((unit, index) => (
                            <Card
                                key={unit.name}
                                name={unit.name}
                                page_link={unit.page_link}
                            />
                        ))}
                    </div>
                </div>
            </>
        )
    }
    else if(window.location.pathname === "/treasure/2"){
        return(
            <>
                <div className="py-20 bg-Yellow">
                    <h1 className="text-5xl font-Heading font-bold mb-2 text-center">
                        Rumpun {mockData[1].name}
                    </h1>
                    <h2 className="text-2xl font-Heading font-bold mb-2 text-center">
                    Selamat Datang di rumpun {mockData[1].name}! di sini ada beberapa unit yang termasuk kategori
                        rumpun {mockData[1].name} nih, silahkan diklik kalo kepo sama unitnya, buat kenalan lebih lanjut
                        bakal di OHU nanti tanggalnya.
                    </h2>
                </div>
                <div className="bg-gradient-to-b from-[#FF8952] to-[#F9DCB0] py-20 px-[3.75rem] flex flex-col items-center justify-center gap-5 text-4xl">
                    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-10 min-h-screen items-start max-w-screen-xl w-full">
                        {unitAgama.map((unit, index) => (
                            <Card
                                key={unit.name}
                                name={unit.name}
                                page_link={unit.page_link}
                            />
                        ))}
                    </div>
                </div>
            </>
        )
    }
    else if(window.location.pathname === "/treasure/3"){
        return(
            <>
                <div className="py-20 bg-Yellow">
                    <h1 className="text-5xl font-Heading font-bold mb-2 text-center">
                        Rumpun {mockData[2].name}
                    </h1>
                    <h2 className="text-2xl font-Heading font-bold mb-2 text-center">
                        Selamat Datang di rumpun {mockData[2].name}! di sini ada beberapa unit yang termasuk kategori
                        rumpun {mockData[2].name} nih, silahkan diklik kalo kepo sama unitnya, buat kenalan lebih lanjut
                        bakal di OHU nanti tanggalnya.
                    </h2>
                </div>
                <div className="bg-gradient-to-b from-[#FF8952] to-[#F9DCB0] py-20 px-[3.75rem] flex flex-col items-center justify-center gap-5 text-4xl">
                    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-10 min-h-screen items-start max-w-screen-xl w-full">
                        {unitBudaya.map((unit, index) => (
                            <Card
                                key={unit.name}
                                name={unit.name}
                                page_link={unit.page_link}
                            />
                        ))}
                    </div>
                </div>
            </>
        )
    }
    else if(window.location.pathname === "/treasure/4"){
        return(
            <>
                <div className="py-20 bg-Yellow">
                    <h1 className="text-5xl font-Heading font-bold mb-2 text-center">
                        Rumpun {mockData[3].name}
                    </h1>
                    <h2 className="text-2xl font-Heading font-bold mb-2 text-center">
                        Selamat Datang di rumpun {mockData[3].name}! di sini ada beberapa unit yang termasuk kategori
                        rumpun {mockData[3].name} nih, silahkan diklik kalo kepo sama unitnya, buat kenalan lebih lanjut
                        bakal di OHU nanti tanggalnya.
                    </h2>
                </div>
                <div className="bg-gradient-to-b from-[#FF8952] to-[#F9DCB0] py-20 px-[3.75rem] flex flex-col items-center justify-center gap-5 text-4xl">
                    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-10 min-h-screen items-start max-w-screen-xl w-full">
                        {unitOlahraga.map((unit, index) => (
                            <Card
                                key={unit.name}
                                name={unit.name}
                                page_link={unit.page_link}
                            />
                        ))}
                    </div>
                </div>
            </>
        )
    }
    else if(window.location.pathname === "/treasure/5"){
        return(
            <>
                <div className="py-20 bg-Yellow">
                    <h1 className="text-5xl font-Heading font-bold mb-2 text-center">
                        Rumpun {mockData[4].name}
                    </h1>
                    <h2 className="text-2xl font-Heading font-bold mb-2 text-center">
                        Selamat Datang di rumpun {mockData[4].name}! di sini ada beberapa unit yang termasuk kategori
                        rumpun {mockData[4].name} nih, silahkan diklik kalo kepo sama unitnya, buat kenalan lebih lanjut
                        bakal di OHU nanti tanggalnya.
                    </h2>
                </div>
                <div className="bg-gradient-to-b from-[#FF8952] to-[#F9DCB0] py-20 px-[3.75rem] flex flex-col items-center justify-center gap-5 text-4xl">
                    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-10 min-h-screen items-start max-w-screen-xl w-full">
                        {unitSeni.map((unit, index) => (
                            <Card
                                key={unit.name}
                                name={unit.name}
                                page_link={unit.page_link}
                            />
                        ))}
                    </div>
                </div>
            </>
        )
    }
    else if(window.location.pathname === "/treasure/6"){
        return(
            <>
                <div className="py-20 bg-Yellow">
                    <h1 className="text-5xl font-Heading font-bold mb-2 text-center">
                        Rumpun {mockData[5].name}
                    </h1>
                    <h2 className="text-2xl font-Heading font-bold mb-2 text-center">
                        Selamat Datang di rumpun {mockData[5].name}! di sini ada beberapa unit yang termasuk kategori
                        rumpun {mockData[5].name} nih, silahkan diklik kalo kepo sama unitnya, buat kenalan lebih lanjut
                        bakal di OHU nanti tanggalnya.
                    </h2>
                </div>
                <div className="bg-gradient-to-b from-[#FF8952] to-[#F9DCB0] py-20 px-[3.75rem] flex flex-col items-center justify-center gap-5 text-4xl">
                    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-10 min-h-screen items-start max-w-screen-xl w-full">
                        {unitPMK.map((unit, index) => (
                            <Card
                                key={unit.name}
                                name={unit.name}
                                page_link={unit.page_link}
                            />
                        ))}
                    </div>
                </div>
            </>
        )
    }
}

export default TreasureHuntPageUnit;