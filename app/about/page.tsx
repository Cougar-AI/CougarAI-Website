import Image from 'next/image'
import OfficerCardTray from '@/components/about/OfficerCardTray';
import InfoCardTray from '@/components/about/InfoCardTray';
import { satoshiBold, satoshiMedium } from '@/util/localFonts';

export default function About() {

    // update this content/information with better branding.
    const aboutUsInformation: string[][] = [
      ["About Us", "We are a student organization inspired by AI, Machine Learning, and Data Science.", "text-4xl md:text-5xl lg:text-6xl"],
      ["What we do.","Cougar AI aims to introduce students to the fascinating fields of artificial intelligence, data science, and machine learning. No matter your major or skill level, you are welcome to join of all what have to offer!", "text-3xl md:text-5xl"],
    ];

    return (
      <main className="bg-cai-400 min-h-screen flex flex-col lg:grid lg:grid-cols-2">
        <section className="md:ml-24 lg:ml-32 lg:mt-2 md:max-lg:w-3/5">
          {/* the padding top (for lg screens and up) here might need a tweak to be consistent with the padding elsewhere on the page */}
          <div className={satoshiBold.className + " flex flex-col gap-y-10 md:gap-y-16 lg:gap-y-24 text-white text-center md:text-start px-5 md:px-0 md:items-start pt-20 md:pt-64 lg:pt-36 mb-3.5"}>
            {aboutUsInformation.map(([title, description, textSize], index) => (
              <div key = {index}>
                <h1 className={`pb-2 md:pb-5 align-bottom ${textSize}`}>{title}</h1>
                <p className={satoshiMedium.className + " pb-2 md:pb-6 align-bottom text-base md:text-3xl leading-normal"}>{description}</p>
              </div>
            ))}
          </div>

          <InfoCardTray cardTitles={["Workshops", "Info Sessions", "Social Events"]}></InfoCardTray>

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
  