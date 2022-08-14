import { UnitProps } from "@/types/interface";

const Card: React.FC<UnitProps>= ({id, name}) => {

    return(
        <div className='flex flex-col gap-4 justify-center items-center'>
            <a className='bg-LightBrown w-full aspect-square hover:scale-105 transition-transform' href={"#"}>
            </a>
            <h2 className='text-4xl text-center'>{name}</h2>
        </div>
    )
}

export default Card;

