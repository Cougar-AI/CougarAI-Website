import Image from 'next/image'
import { satoshi, satoshiMedium, satoshiBold } from '@/util/localFonts';

interface infoCardProps{
    key: number;
    cardTitle: string;
}

const InfoCard = (props: infoCardProps) => {

    return(
        <div key={props.key} className="relative flex flex-row gap-x-4 bg-snow rounded-md h-12 md:h-16 items-center overflow-hidden text-center">
            <Image src="/Icons/chip_placeholder.svg" width={140} height={140} className="absolute mt-6 ml-44 select-none" alt={`${props.cardTitle} icon`}></Image>
            <h1 className={satoshiBold.className + " text-cai-500 font-bold md:text-2xl px-6 py-4"}>{props.cardTitle}</h1>
        </div>
    )
}

export default InfoCard;