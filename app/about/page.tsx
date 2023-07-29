import Image from 'next/image'
import AboutUsInfoSection from '@/components/about/AboutUsInfoSection';
import OfficerSecton from '@/components/about/OfficerSection';
import InfoCardTray from '@/components/about/InfoCardTray';

export default function About() {
    return (
      <main className="bg-cai-400 min-h-screen flex flex-col lg:grid lg:grid-cols-2">
        <section className="md:ml-24 lg:ml-32 lg:mt-2 md:max-lg:w-3/5">
          <AboutUsInfoSection/>
          <InfoCardTray/>
          <OfficerSecton/>
        </section>
        <Image src="/Icons/binary.svg" width="0" height="0" className="lg:absolute lg:right-0 select-none overflow-hidden object-contain lg:object-fill w-full h-[50%] mt-36 lg:w-1/2 lg:h-[47%] md:h-[70%] lg:pl-72 md:top-0 md:mt-[50rem] lg:mt-[30.5rem]" alt="Binary Pattern"></Image>
      </main>
    )
  }
  