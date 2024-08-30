import Image from 'next/image'
import { satoshiBold } from '@/util/localFonts';

interface InfoCardProps{
    key: number;
    cardTitle: string;
}

const InfoCard = (props: InfoCardProps) => {

    return(
        <div key={props.key} className="relative flex flex-row gap-x-4 bg-snow rounded-md h-12 md:h-16 items-center overflow-hidden text-center">
            <Image src="/icons/chip.svg" width={140} height={160} className="absolute mt-6 ml-44 select-none" alt={`${props.cardTitle} icon`}></Image>
            <h1 className={satoshiBold.className + " text-cai-500 font-bold md:text-2xl px-6 py-4"}>{props.cardTitle}</h1>
        </div>
    )
}

export default InfoCard;