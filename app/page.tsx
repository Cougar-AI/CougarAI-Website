import Image from 'next/image'
import NavBar from '@/components/NavBar'
import HomeButton from '@/components/HomeButton'
import { satoshi, satoshiMedium, satoshiBold } from '@/util/localFonts';

export default function Home() {
  return (
    <main className="bg-cai-400 min-h-screen md:max-2xl:grid lg:max-2xl:grid-cols-2">
      <div className="col-span-2 fixed z-50">
        <NavBar></NavBar>
      </div>
      <div className="flex flex-col items-center lg:max-2xl:items-start lg:max-2xl:pl-32 md:max-lg:mt-28 justify-between">
        <div className={satoshiBold.className}>
          <div className="gap-y-3 relative z-40 align-bottom"> 
            {/*.webp file is too fuzzy right now, will change this to a .svg or raise the resolution of the .webp file - Tariq*/}
            <div className="w-36 h-36 md:max-2xl:w-96 md:max-2xl:h-48 select-none">
                <Image src='/icons/CAI.webp' className="object-contain" fill alt="CAI Logo"></Image>
            </div>

            <div className="pt-24 md:max-2xl:pt-60 md:max-2xl:pb-6 align-bottom">
              <h1 className="text-6xl md:max-2xl:text-6xl mt-2">CougarAI</h1>
              <h2 className="text-[1.455rem] md:max-2xl:text-4xl pt-0.5 md:max-2xl:pt-2.5">Your network for AI @ UH</h2>
            </div>
            {/*I'm aware that using that using arbitrary values is bad practice (the square brackets), but this temporary - Tariq*/}
            {/*Add button components below in a flex row.*/}
          </div>
          <div className="flex flex-row gap-x-8 md:max-2xl:gap-x-9 pt-3 md:max-2xl:pt-1 z-50">
            <HomeButton text="Join us!" link="/"></HomeButton>
            <HomeButton text="Socials" link="/"></HomeButton>
            <HomeButton text="Discord" link="https://discord.gg/5Jhw67yQDH"></HomeButton>
          </div>
        </div>
      </div>

      <div>
        <Image src="/icons/binary.svg" width="0" height="0" className="fixed right-0 select-none overflow-hidden object-contain lg:max-2xl:object-fill w-full h-[50%] mt-36 lg:max-2xl:w-1/2 lg:max-2xl:h-[47%] md:h-[70%] lg:max-2xl:pl-72 md:top-0 md:mt-[50rem] lg:max-2xl:mt-[30.5rem]" alt="Binary pattern"></Image>
      </div>
    </main>
  )
}
