import Link from 'next/link'
import { satoshi } from '@/app/page';
import { satoshiBold } from '@/app/page';

const NavBar = () => {
    return(
        <div className={satoshiBold.className}>
            <div className="flex flex-row  md:max-lg:flex-col gap-x-4 md:gap-y-1 lg:max-2xl:gap-x-9 text-white md:text-4xl lg:max-2xl:text-2xl align-baseline top-0 w-screen absolute h-8 pt-4 md:max-2xl:pt-8 items-center justify-center md:max-2xl:justify-normal md:max-2xl:items-start lg:max-2xl:pl-32 md:pl-52">
                <Link href="/">
                    <h1 className="border-b-3 border-y-0 border-t-0 border-spacing-4 border-white border-none hover:border-solid">Home</h1>
                </Link>
                <Link href="/" className="">
                    <h1 className="border-b-3 border-y-0 border-t-0 border-spacing-4 border-white border-none hover:border-solid">About Us</h1>
                </Link>
                <Link href="/" className="">
                    <h1 className="border-b-3 border-y-0 border-t-0 border-spacing-4 border-white border-none hover:border-solid">Membership</h1>
                </Link>
                <Link href="/" className="">
                    <h1 className="border-b-3 border-y-0 border-t-0 border-spacing-4 border-white border-none hover:border-solid">Contact</h1>
                </Link>
            </div>
        </div>
    )
}

export default NavBar;