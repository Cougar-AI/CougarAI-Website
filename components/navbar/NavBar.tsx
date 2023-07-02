import NavLink from '@/components/navbar/NavLink'
import { satoshiBold } from '@/util/localFonts';

const navOptions: string[][] = [
    ["Home", "/"],
    ["About Us", "/about"],
    ["Membership", "/membership"],
    ["Contact", "/contact"],
]

const NavBar = () => {
    return(
        <div className = {satoshiBold.className}>
            <div className = "flex flex-row  md:max-lg:flex-col gap-x-4 md:gap-y-1 lg:max-2xl:gap-x-9 bg-cai-400 h-auto text-white md:text-4xl lg:max-2xl:text-2xl align-baseline top-0 w-screen absolute pt-4 md:max-2xl:pt-8 items-center justify-center md:max-2xl:justify-normal md:max-2xl:items-start lg:max-2xl:pl-32 md:pl-52">
                {navOptions.map(([optionText, optionLink], index) => (
                    <NavLink key = {index} text = {optionText} link = {optionLink}></NavLink>
                ))}
            </div>
        </div>
    )
}

export default NavBar;