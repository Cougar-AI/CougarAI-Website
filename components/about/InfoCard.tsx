// InfoCard.tsx
import Image from 'next/image'
import Link from 'next/link'
import { satoshiBold } from '@/util/localFonts';

interface InfoCardProps {
    key: number;
    cardTitle: string;
    link?: string; // Optional link prop
}

const InfoCard = (props: InfoCardProps) => {
    return (
        <div className="relative flex flex-row gap-x-4 bg-snow rounded-md h-12 md:h-16 items-center overflow-hidden text-center">
            <Link href={`${props.link}`} className="z-50 pb-2" target="_blank">
                <Image src="/icons/chip.svg" width={140} height={160} className="absolute mt-6 ml-44 select-none" alt={`${props.cardTitle} icon`} />
            </Link>

            <h1 className={satoshiBold.className + " text-cai-500 font-bold md:text-2xl px-6 py-4"}>
                {props.link ? (
                    <a href={props.link} target="_blank" rel="noopener noreferrer" className="text-cai-500 hover:underline"> {props.cardTitle}</a>
                ) : (
                    props.cardTitle
                )}
            </h1>
        </div>
    )
}

export default InfoCard;
