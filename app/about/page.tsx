import Image from 'next/image'
import OfficerCardTray from '@/components/about/OfficerCardTray';
import { satoshi, satoshiBold, satoshiMedium } from '@/util/localFonts';

export default function About() {

    const aboutUsInformation: string[][] = [
      ["About Us", "We are a student organization inspired by AI, Machine Learning, and Data Science.", "text-4xl md:max-2xl:text-6xl"],
      ["What we do.","CougarAI aims to educate members in the latest advances in artificial intelligence, data science, and machine learning. As well as to provide a space for networking among those interested in the field.", "text-3xl md:max-2xl:text-5xl"],
    ];

    return (
      <main className="bg-cai-400 min-h-screen flex flex-col md:max-2xl:grid lg:max-2xl:grid-cols-2">
        <section>
          {/* the padding top (for lg screens and up) here might need a tweak to be consistent with the padding elsewhere on the page */}
          <div className={satoshiBold.className + " flex flex-col gap-y-24 text-center md:max-2xl:text-start px-5 md:max-2xl:px-0 md:max-2xl:items-start pt-20 md:max-2xl:pt-36 md:max-2xl:pl-32"}>
            {aboutUsInformation.map(([title, description, textSize], index) => (
              <div key = {index}>
                <h1 className={`pb-2 md:max-2xl:pb-6 align-bottom ${textSize}`}>{title}</h1>
                <p className={satoshiMedium.className + " pb-2 md:max-2xl:pb-6 align-bottom text-base md:max-2xl:text-3xl leading-normal"}>{description}</p>
              </div>
            ))}
          </div>

          <div className= {satoshiBold.className + " flex flex-col text-center md:max-2xl:text-start md:max-2xl:items-start items-center md:max-2xl:pt-36 md:max-2xl:pl-32 md:max-2xl:pb-16"}>
              <h1 className="pt-6 pb-2.5 md:max-2xl:py-6 align-bottom md:max-2xl:text-5xl text-3xl">The Officers</h1>
              <OfficerCardTray/>
          </div>
        </section>
        <Image src="/Icons/binary.svg" width="0" height="0" className="md:max-2xl:absolute right-0 select-none overflow-hidden object-contain lg:max-2xl:object-fill w-full h-[50%] mt-36 lg:max-2xl:w-1/2 lg:max-2xl:h-[47%] md:h-[70%] lg:max-2xl:pl-72 md:top-0 md:mt-[50rem] lg:max-2xl:mt-[30.5rem]" alt="Binary Pattern"></Image>
      </main>
    )
  }
  