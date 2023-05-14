import Image from 'next/image'
import localFont from '@next/font/local'

import HomepageButton from '@/components/HomepageButton'

const satoshi = localFont({
  src: '../public/fonts/Satoshi-Regular.otf',
  weight: '200'
})

const satoshiBold = localFont({
  src: '../public/fonts/Satoshi-Bold.otf',
  weight: '200'
})

export default function Home() {
  return (
    <main className="bg-cai-400 min-h-screen md:max-2xl:grid md:max-2xl:grid-cols-2">
      <div className="flex flex-col items-center md:max-2xl:items-start md:max-2xl:pl-32 justify-between">
        <div className={satoshiBold.className}>
          <div className="gap-y-3 relative z-50 align-bottom"> 
            {/*.webp file is too fuzzy right now, will change this to a .svg or raise the resolution of the .webp file - Tariq*/}
            <div className="w-36 h-36 md:max-2xl:w-96 md:max-2xl:h-48 select-none">
                <Image src='/images/CAI.webp' className="object-contain" fill alt=""></Image>
            </div>

            <div className="pt-24 md:max-2xl:pt-56 md:max-2xl:pb-6 align-bottom">
              <h1 className="text-5xl md:max-2xl:text-6xl mt-2">CougarAI</h1>
              <h2 className="text-[1.455rem] md:max-2xl:text-4xl pt-0.5 md:max-2xl:pt-2.5">Your network for AI @ UH</h2>
            </div>
            {/*I'm aware that using that using arbitrary values is bad practice (the square brackets), but this temporary - Tariq*/}
            {/*Add button components below in a flex row.*/}
          </div>
          <div className="flex flex-row gap-x-8 md:max-2xl:gap-x-12 pt-3 md:max-2xl:pt-1 z-50">
            <HomepageButton text="Join us!" link="/"></HomepageButton>
            <HomepageButton text="Socials" link="/"></HomepageButton>
            <HomepageButton text="Discord" link="/"></HomepageButton>
          </div>
        </div>
      </div>

      <div>
        <Image src="/images/binary.svg" width="0" height="0" className="fixed right-0 select-none overflow-hidden object-contain lg:max-2xl:object-fill w-full h-[50%] mt-36 lg:max-2xl:w-1/2 lg:max-2xl:h-[47%] lg:max-2xl:pl-72 md:max-2xl:mt-[30.5rem]" alt=""></Image>
      </div>
    </main>
  )
}
