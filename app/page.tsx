import Image from 'next/image'
import localFont from '@next/font/local'

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
    <main className="bg-cai-400 min-h-screen pt-28">
      <div className="flex flex-col items-center justify-between">
        <div className={satoshiBold.className}>
          <div className="gap-y-2 relative z-50"> 
            {/*.webp file is too fuzzy right now, will change this to a .svg or raise the resolution of the .webp file - Tariq*/}
            <Image src='/images/CAI.webp'  width={245} height={245} className="select-none" alt=""/>
            <h1 className="text-4xl">CougarAI</h1>
            <h2 className="text-[1.275rem] ">Your network for AI @ UH</h2>
            {/*I'm aware that using that using arbitrary values is bad practice (the square brackets), but this temporary - Tariq*/}
            {/*Add button components below in a flex row.*/}
          </div>
        </div>
      </div>
      <Image src="/images/binary.svg" width="0" height="0" className="fixed right-0 select-none object-containmd:max-2xl:object-fill w-full h-[50%] mt-36 md:max-2xl:w-1/2 md:max-2xl:h-[60%] md:max-2xl:pl-64 md:max-2xl:mt-16" alt=""></Image>
    </main>
  )
}
