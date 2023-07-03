import Link from 'next/link'
import Image from 'next/image'
import SocialLink from '@/components/about/SocialLink'
import { satoshi, satoshiBold, satoshiMedium } from '@/util/localFonts';

interface officerCardProps{
    name: string;
    officerRole: string;
}

const OfficerCard = () => {
    return(
        <div className="flex flex-col relative content-end bg-snow rounded-md h-64 w-52 md:max-2xl:h-[19rem] md:max-2xl:w-60 items-center md:max-2xl:p-8 p-2 overflow-hidden">
            <Image src="/Icons/placeholder.png" width={130} height={130} className="rounded-full z-40 border-misty-rose border-8 scale-[80%] md:max-2xl:scale-100" alt="Officer headshot"></Image>
            <div className="flex flex-col items-center md:max-2xl:pb-2 z-40">
                <h1 className="text-cai-500 text-2xl text-center drop-shadow-sm md:max-2xl:pt-1.5">Zeel Engineer</h1>
                <h2 className="text-cai-500 text-xl text-center drop-shadow-sm md:max-2xl:pb-2">President</h2>
                <SocialLink platform="LinkedIn" accountLink={'https://www.linkedin.com/'} platformIcon='/Icons/LinkedIn_icon.svg'></SocialLink>
            </div>
            <Image src="/Icons/neural-pattern-mistyrose.png" width={350} height={"0"} className="absolute h-[115%] scale-[175%] rounded-tr-3xl top-0 ml-28 mt-20 object-none z-0 select-none" alt="Card Pattern"></Image>
        </div>
    )
}

export default OfficerCard;