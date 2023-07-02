import Link from 'next/link'
import Image from 'next/image'
import { satoshi, satoshiBold, satoshiMedium } from '@/util/localFonts';

const OfficerCard = () => {
    return(
        <div className="flex flex-col relative bg-snow rounded-3xl h-96 w-[18.5rem] items-center p-8 overflow-hidden">
            <Image src="/Icons/placeholderOfficer.jpg" width={100} height={100} className="rounded-full pb-2 z-50" alt="Officer headshot"></Image>
            <h1 className="text-cai-500 text-2xl text-center pt-2 z-50">Ur Mom</h1>
            <h2 className="text-cai-500 text-xl text-center pb-2 z-50">Outreach Officer</h2>
            <Image src="/Icons/neural-network-hex.png" width={1000} height={"0"} className="absolute h-[125%] scale-y-[-1] rounded-tr-3xl bottom-0 mb-44 object-none z-0" alt="Card Pattern"></Image>
        </div>
    )
}

export default OfficerCard;