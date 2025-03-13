import NavLink from '@/components/navbar/NavLink'
import { satoshiBold } from '@/util/localFonts';

const navOptions: string[][] = [
    ["Home", "/"],
    ["About Us", "/about"],
    ["Membership", "/membership"],
    ["Contact", "/contact"],
    ["Calendar", "/calendar"]
]

const NavBar = () => {
    return(
        <div className = {satoshiBold.className + " flex flex-row md:max-lg:flex-col gap-x-4 md:gap-y-1 lg:gap-x-9 bg-cai-400 text-white md:text-2xl align-baseline top-0 w-screen absolute py-4 md:py-6 lg:py-8 h-[60px] md:h-[80px] lg:h-[100px] items-center justify-center md:justify-normal md:items-start lg:ml-32 md:ml-24"}>
            {navOptions.map(([optionText, optionLink], index) => (
                <NavLink key = {index} text = {optionText} link = {optionLink}></NavLink>
            ))}
        </div>
    )
}

export default NavBar;