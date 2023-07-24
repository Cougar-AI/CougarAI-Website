import Image from 'next/image'
import OfficerCardTray from '@/components/about/OfficerCardTray';
import AboutUsInfoSection from '@/components/about/AboutUsInfoSection';
import InfoCardTray from '@/components/about/InfoCardTray';
import { satoshiBold, satoshiMedium } from '@/util/localFonts';

export default function About() {

    return (
      <main className="bg-cai-400 min-h-screen flex flex-col lg:grid lg:grid-cols-2">
        <section className="md:ml-24 lg:ml-32 lg:mt-2 md:max-lg:w-3/5">
          {/* the padding top (for lg screens and up) here might need a tweak to be consistent with the padding elsewhere on the page */}

          <AboutUsInfoSection/>
          <InfoCardTray/>

          {/* Officer section of the page */}
          <div className= {satoshiBold.className + " flex flex-col text-center md:text-start md:items-start items-center my-10 lg:mt-28 mb-16 mr-64 md:pb-16 w-screen"}>
              <h1 className="pt-6 pb-2.5 mb-2.5 md:mb-0 md:py-6 align-bottom md:text-5xl text-3xl text-white">The Officers</h1>
              <OfficerCardTray/>
          </div>

        </section>
        <Image src="/Icons/binary.svg" width="0" height="0" className="lg:absolute lg:right-0 select-none overflow-hidden object-contain lg:object-fill w-full h-[50%] mt-36 lg:w-1/2 lg:h-[47%] md:h-[70%] lg:pl-72 md:top-0 md:mt-[50rem] lg:mt-[30.5rem]" alt="Binary Pattern"></Image>
      </main>
    )
  }
  