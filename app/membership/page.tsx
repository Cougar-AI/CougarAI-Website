import Image from 'next/image'
import { satoshiMedium, satoshiBold } from '@/util/localFonts';
import InfoCardTray from '@/components/about/InfoCardTray';

export default function Membership() {

    const membershipInformation: string[][] = [
      ['Membership', 'Gain access to exclusive member-only AI workshops, research projects, and rewards through our CougarAI membership program.', ""],
    ]

    return (
      // Deal with this code on the next sprint, too much to include in this sprint.
      <main className="bg-cai-400 min-h-screen flex flex-col lg:grid lg:grid-cols-2">
        <section className="md:ml-24 lg:ml-32 lg:mt-2 md:max-lg:w-3/5">
          <div className={satoshiBold.className + " flex flex-col text-white text-center md:text-start px-5 md:px-0 md:items-start pt-20 md:pt-64 lg:pt-36 mb-3.5"}>
            <div>
              <h1 className="pb-2 md:pb-5 align-bottom text-4xl md:text-5xl lg:text-6xl">Membership</h1>
              <p className={satoshiMedium.className + " pb-2 md:pb-6 align-bottom text-base md:text-2xl lg:text-3xl leading-normal"}>
                <span className="">{'Gain'}</span>{' access to exclusive AI workshops, research projects, and rewards with a CougarAI membership.'}
              </p>
              <p className={satoshiMedium.className + " pb-2 md:pb-6 align-bottom text-base md:text-2xl lg:text-3xl leading-normal"}>
                {'Our membership opens the door to having more opportunities to explore AI & Data Science in a hands-on environment.'}
              </p>
            </div>

            <div className="flex flex-col w-full gap-y-4">
              <div className="flex flex-row gap-x-4 h-inherit w-full">
                <div className="bg-snow rounded-md w-1/2 p-5 px-4">
                  <h1 className="grid grid-cols-2 text-7xl text-cai-500">$10<span className="text-3xl leading-none text-start">per semester</span></h1>
                  {/* <Image src="/Icons/noun-algorithm-4814633-FFFAFA.svg" width={175} height={175} className="absolute top-0 ml-40 select-none" alt={` icon`}></Image> */}

                </div>
                <div className="bg-misty-rose rounded-md w-1/2 overflow-hidden relative p-5 px-6">
                  <h1 className="grid grid-cols-2 text-7xl text-cai-500">$15<span className="text-3xl text-start">per year</span></h1>

                  {/* <Image src="/Icons/noun-algorithm-4814633-FFFAFA.svg" width={175} height={175} className="absolute top-0 ml-40 select-none" alt={` icon`}></Image> */}

                </div>
              </div>
              {/* <div className="bg-snow rounded-md h-16 w-full">

              </div> */}
            </div>
          </div>
        </section>

        <Image src="/Icons/binary.svg" width="0" height="0" className="lg:absolute lg:right-0 select-none overflow-hidden object-contain lg:object-fill w-full h-[50%] mt-36 lg:w-1/2 lg:h-[47%] md:h-[70%] lg:pl-72 md:top-0 md:mt-[50rem] lg:mt-[30.5rem]" alt="Binary Pattern"></Image>
      </main>
    )
  }
  