import Link from 'next/link'
import { satoshi } from '@/app/page';
import { satoshiBold } from '@/app/page';

const NavBar = () => {
    return(
        <div className={satoshiBold.className}>
            <div className="flex flex-row gap-x-9 text-white text-2xl align-baseline top-0 w-screen absolute h-8 md:max-2xl:pt-6 md:max-2xl:pl-32">
                <Link href="/">Home</Link>
                <Link href="/">About Us</Link>
                <Link href="/">Membership</Link>
                <Link href="/">Contact</Link>
            </div>
        </div>
    )
}

export default NavBar;