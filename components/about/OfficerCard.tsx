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
        <div className="flex flex-col relative bg-snow rounded-md h-80 w-[18.5rem] items-center p-8 overflow-hidden">
            <Image src="/Icons/placeholder_officer_headshot.svg" width={100} height={100} className="rounded-full pb-2 z-50" alt="Officer headshot"></Image>
            <h1 className="text-cai-500 text-2xl text-center pt-2 z-50">Zeel Engineer</h1>
            <h2 className="text-cai-500 text-xl text-center pb-2 z-50">President</h2>
            <SocialLink platform="LinkedIn" accountLink={'https://www.linkedin.com/'} platformIcon='/Icons/LinkedIn_icon.svg'></SocialLink>
            <Image src="/Icons/node-network-test.png" width={1000} height={"0"} className="absolute h-[115%] scale-[80%] rounded-tr-3xl top-0 ml-[10rem] mt-4 object-none z-0" alt="Card Pattern"></Image>
        </div>
    )
}

export default OfficerCard;