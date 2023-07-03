import Image from 'next/image'
import { satoshi, satoshiBold, satoshiMedium } from '@/util/localFonts';

export default function Membership() {
    return (
      <main className="bg-cai-400 h-screen flex flex-col md:max-2xl:grid lg:max-2xl:grid-cols-2">
            <div className={satoshiBold.className + " flex flex-col gap-y-24 text-center md:max-2xl:text-start px-5 md:max-2xl:px-0 md:max-2xl:items-start pt-20 md:max-2xl:pt-36 md:max-2xl:pl-32"}>
                <h1 className={`pb-2 md:max-2xl:pb-6 align-bottom text-4xl md:max-2xl:text-6xl`}>Membership</h1>
            </div>

        <Image src="/Icons/binary.svg" width="0" height="0" className="md:max-2xl:absolute right-0 select-none overflow-hidden object-contain lg:max-2xl:object-fill w-full h-[50%] mt-36 lg:max-2xl:w-1/2 lg:max-2xl:h-[47%] md:h-[70%] lg:max-2xl:pl-72 md:top-0 md:mt-[50rem] lg:max-2xl:mt-[30.5rem]" alt="Binary Pattern"></Image>
      </main>
    )
  }
  