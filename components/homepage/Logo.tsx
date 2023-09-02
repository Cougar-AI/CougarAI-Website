import Image from 'next/image'
import { satoshiBold } from '@/util/localFonts';

const Logo = () => {
    return (
        <div className={satoshiBold.className + " mt-28 md:mt-56 lg:mt-48 pr-3 z-40"}>
            <Image src='/icons/CAI_Revised.webp' width={500} height={500} className="object-contain z-0 align-bottom select-none hidden md:block mb-6" alt="CAI Logo for desktop"/>
            <Image src='/icons/CAI_Revised.webp' width={290} height={290} className="object-contain z-0 align-bottom select-none md:hidden block mb-6" alt="CAI Logo for mobile"/>
        </div>
    )

}

export default Logo;