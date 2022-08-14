
import { RumpunProps, TreasureHuntPageProps } from "@/types/interface";
import Card from "@/components/Unit";
import { unitBSO, unitAgama, unitBudaya, unitOlahraga, unitSeni, unitPMK} from "@/pages/TreasureHuntPage/ListUnit";
import { useParams } from "react-router-dom";

function greetings(rumpunName: string){
    return(
        <div className="py-20 bg-Yellow">
            <h1 className="text-5xl font-Heading font-bold mb-2 text-center">
                Rumpun {rumpunName}
            </h1>
            <p className="text-2xl font-Heading font-bold mb-2 text-center">
                Selamat Datang di rumpun {rumpunName}! di sini ada beberapa unit yang termasuk kategori
                rumpun {rumpunName} nih, silahkan diklik kalo kepo sama unitnya, buat kenalan lebih lanjut
                bakal di OHU nanti tanggalnya.
            </p>
        </div>
    )
}

function showCard(rumpunName: string){
    switch(rumpunName){
        case "BSO":
            return unitBSO.map((unit, index) => (
                <Card
                    key={unit.name}
                    id={index}
                    name={unit.name}
                />
            ))
        case "Agama":
            return unitAgama.map((unit, index) => (
                <Card
                    key={unit.name}
                    id={index}
                    name={unit.name}
                    
                />
            ))
        case "Budaya":
            return unitBudaya.map((unit, index) => (
                <Card
                    key={unit.name}
                    id={index}
                    name={unit.name}
                    
                />
            ))
        case "Olahraga":
            return unitOlahraga.map((unit, index) => (
                <Card
                    key={unit.name}
                    id={index}
                    name={unit.name}
                />
            ))
        case "Seni":
            return unitSeni.map((unit, index) => (
                <Card
                    key={unit.name}
                    id={index}
                    name={unit.name}
                />
            ))
        case "P/M/K":
            return unitPMK.map((unit, index) => (
                <Card
                    key={unit.name}
                    id={index}
                    name={unit.name}
                />
            ))
        default:
            return null
    }
}

const TreasureHuntPageUnit: React.FC<TreasureHuntPageProps> = ({}) => {
    const id = useParams().unitId;
    const rumpunName = [
        "BSO",
        "Agama",
        "Budaya",
        "Olahraga",
        "Seni",
        "P/M/K"
    ]
    return (
        <div>
            {greetings(rumpunName[parseInt(id!)])}
            <div className="bg-gradient-to-b from-[#FF8952] to-[#F9DCB0] py-20 px-[3.75rem] flex flex-col items-center justify-center gap-5 text-4xl">
                <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-10 min-h-screen items-start max-w-screen-xl w-full">
                    {showCard(rumpunName[parseInt(id!)])}
                </div>
            </div>
        </div>
    )
}

export default TreasureHuntPageUnit;