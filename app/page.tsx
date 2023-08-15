import Image from 'next/image'
import Logo from '@/components/homepage/Logo'
import HomeButtonTray from '@/components/homepage/HomeButtonTray'
import { satoshiBold } from '@/util/localFonts';

export default function Home() {
  return (  
    <main className="bg-cai-400 min-h-screen lg:grid lg:grid-cols-2">
      <div className="flex flex-col items-center lg:items-start lg:ml-32 md:max-lg:mr-80">
        <Logo/>
        <div className={satoshiBold.className + " flex flex-col relative z-40 align-bottom bottom-3 md:bottom-4 justify-between"}>
          <div className="text-white lg:mt-0 md:pb-6 align-bottom">
            <h1 className="text-[3.76rem] tracking-wide md:text-7xl">Cougar AI</h1>
            <h2 className="text-2xl md:text-4xl md:pt-2.5 max-md:pb-5">Your network for AI @ UH</h2>
          </div>
          
          <HomeButtonTray></HomeButtonTray>
        </div>
      </div>  
      <div>
        <Image src="/icons/binary.svg" width="0" height="0" className="fixed lg:right-0 select-none overflow-hidden object-contain lg:object-fill w-full h-[50%] max-md:mt-16 max-md:pt-1.5 md:w-1/2 lg:h-[47%] md:h-[70%] lg:pl-72 lg:top-0 md:mt-[50rem] lg:mt-[30.5rem] z-0" alt="Binary pattern"></Image>
      </div>
    </main>
  )
}
