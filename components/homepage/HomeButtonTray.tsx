import HomeButton from '@/components/homepage/HomeButton'
import { satoshiBold } from '@/util/localFonts';

const trayOptions: string[][] = [
    ["Join us!", "/membership"], //this will later link to the membership page once it's made
    ["Socials", "https://bento.me/cougarai"], //this will later link to either a linktree or bento? Maybe even just the instagram. Depends on Marketing team.
    ["Discord", "https://discord.gg/5Jhw67yQDH"],
]

const HomeButtonTray = () => {
    return(
        <div className = {satoshiBold.className}>
          <div className="flex flex-row gap-x-[1.4rem] md:gap-x-[1.7rem] lg:max-2xl:gap-x-[2.1rem] md:max-2xl:pt-1 z-50">
            {trayOptions.map(([optionText, optionLink], index) => (
                <HomeButton key = {index} text = {optionText} link = {optionLink}></HomeButton>
            ))}
          </div>
        </div>
    )
}

export default HomeButtonTray;