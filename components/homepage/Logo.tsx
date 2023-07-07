import Image from 'next/image'
import { satoshiBold } from '@/util/localFonts';


const Logo = () => {
    return (
        <div className={satoshiBold.className + " mt-48 pr-3 z-40"}>
            <Image src='/icons/CAI.webp' width={500} height={500} className="object-contain z-0 align-bottom select-none hidden md:block" alt="CAI Logo"></Image>
            <Image src='/icons/CAI.webp' width={290} height={290} className="object-contain z-0 align-bottom select-none md:hidden block" alt="CAI Logo"></Image>
        </div>
    )

}

export default Logo;