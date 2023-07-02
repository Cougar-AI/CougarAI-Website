import Link from 'next/link'
import Image from 'next/image'
import { satoshi, satoshiBold, satoshiMedium } from '@/util/localFonts';

const OfficerCard = () => {
    return(
        <div className="flex flex-col relative bg-white rounded-3xl h-96 w-[18.5rem] p-8 items-center">
            <Image src="/Icons/placeholderOfficer.jpg" width={100} height={100} className="rounded-full pb-2" alt="Officer headshot"></Image>
            <h1 className="text-cai-500 text-2xl text-center pt-2">Ur Mom</h1>
            <h2 className="text-cai-500 text-xl text-center pb-2">Outreach Officer</h2>
            <Image src="/Icons/neuralNetwork.svg" width={50} height={50} className="absolute overflow-hidden object-none bottom-0 right-0" alt="Card Pattern"></Image>
        </div>
    )
}

export default OfficerCard;