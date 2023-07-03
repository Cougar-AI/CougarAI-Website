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
        <div className="flex flex-col relative content-end bg-snow rounded-md h-[19rem] w-60 items-center p-8 overflow-hidden">
            <Image src="/Icons/placeholder.png" width={130} height={130} className="rounded-full z-50 border-misty-rose border-8" alt="Officer headshot"></Image>
            <div className="flex flex-col items-center pb-2 z-50">
                <h1 className="text-cai-500 text-2xl text-center drop-shadow-sm pt-1.5">Zeel Engineer</h1>
                <h2 className="text-cai-500 text-xl text-center drop-shadow-sm pb-2">President</h2>
                <SocialLink platform="LinkedIn" accountLink={'https://www.linkedin.com/'} platformIcon='/Icons/LinkedIn_icon.svg'></SocialLink>
            </div>
            <Image src="/Icons/neural-pattern-mistyrose.png" width={360} height={"0"} className="absolute h-[115%] scale-[175%] rounded-tr-3xl top-0 ml-28 mt-20 object-none z-0 select-none" alt="Card Pattern"></Image>
        </div>
    )
}

export default OfficerCard;