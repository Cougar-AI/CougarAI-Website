import Link from 'next/link'
import Image from 'next/image'
import { satoshi, satoshiBold, satoshiMedium } from '@/util/localFonts';

const OfficerCard = () => {
    return(
        <div className="flex flex-col relative bg-snow rounded-3xl h-80 w-[18.5rem] items-center p-8 overflow-hidden">
            <Image src="/Icons/placeholder_officer_headshot.svg" width={100} height={100} className="rounded-full pb-2 z-50" alt="Officer headshot"></Image>
            <h1 className="text-cai-500 text-2xl text-center pt-2 z-50">Zeel Engineer</h1>
            <h2 className="text-cai-500 text-xl text-center pb-2 z-50">President</h2>
            <Link href="https://www.linkedin.com/in/testing-CAI/" className="pt-1 pb-2 z-50">
                <Image src="/Icons/LinkedIn_icon.svg" width={40} height={40} className="z-50 hover:scale-105 hover:rotate-2 duration-700" alt="LinkedIn Icon"></Image>
            </Link>
            <Image src="/Icons/node-network-test.png" width={1000} height={"0"} className="absolute h-[115%] scale-[80%] rounded-tr-3xl top-0 ml-[10rem] mt-4 object-none z-0" alt="Card Pattern"></Image>
        </div>
    )
}

export default OfficerCard;