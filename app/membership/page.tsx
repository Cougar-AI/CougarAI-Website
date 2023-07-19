import Image from 'next/image'
import { satoshiBold } from '@/util/localFonts';

export default function Membership() {
    return (
      // Deal with this code on the next sprint, too much to include in this sprint.
      <main className="bg-cai-400 h-screen flex flex-col md:grid lg:grid-cols-2">
        <div className={satoshiBold.className + " flex flex-col gap-y-24 text-center md:text-start px-5 md:px-0 md:items-start pt-20 md:pt-36 md:pl-32"}>
            <h1 className={`pb-2 md:pb-6 align-bottom text-4xl md:text-6xl`}>Membership</h1>
            <p></p>


        </div>
        <Image src="/Icons/binary.svg" width="0" height="0" className="md:absolute right-0 select-none overflow-hidden object-contain lg:object-fill w-full h-[50%] mt-36 lg:w-1/2 lg:h-[47%] md:h-[70%] lg:pl-72 md:top-0 md:mt-[50rem] lg:mt-[30.5rem]" alt="Binary Pattern"></Image>
      </main>
    )
  }
  