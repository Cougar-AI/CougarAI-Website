import Image from 'next/image'
import { satoshi, satoshiBold, satoshiMedium } from '@/util/localFonts';
import HomepageButton from '@/components/homepage/HomeButton'
import OfficerCard from '@/components/about/OfficerCard'

export default function About() {
    return (
      <main className="bg-cai-400 min-h-screen md:max-2xl:grid lg:max-2xl:grid-cols-2">
        {/* one column in the grid */}
        <div>
          {/* the padding top (for lg screens and up) here might need a tweak to be consistent with the padding elsewhere on the page */}
          <section className="flex flex-col text-center md:max-2xl:text-start px-5 md:max-2xl:px-0 md:max-2xl:items-start pt-20 md:max-2xl:pt-36 px- md:max-2xl:pl-32">
              <div className={satoshiBold.className}>
                  <h1 className="pb-2 md:max-2xl:pb-6 align-bottom text-4xl md:max-2xl:text-6xl">About Us</h1>
                  <div className={satoshiMedium.className}>
                  <p className="pb-2 md:max-2xl:pb-6 align-bottom text-base md:max-2xl:text-3xl leading-normal">We are a student organization inspired by AI, Machine Learning, and Data Science.</p>
                  </div>
              
              </div>
              <div className={satoshiBold.className}> 
                  <h2 className="pt-2.5 md:max-2xl:pt-6 pb-2 md:max-2xl:pb-6 align-bottom text-3xl md:max-2xl:text-5xl">What we do.</h2>
              </div>
              <div className={satoshiMedium.className}>
                <p className="md:max-2xl:pb-6 align-bottom text-base md:max-2xl:text-3xl leading-normal">CougarAI aims to educate members in the latest advances in artificial intelligence, data science, and machine learning. As well as to provide a space for networking among those interested in the field.</p>
              </div>
          </section>

          <section className="pt-36 pl-32 pb-16">
            <div className={satoshiBold.className}>
              <h1 className="md:max-2xl:pt-6 md:max-2xl:pb-6 align-bottom text-5xl">The Officers</h1>
              <OfficerCard></OfficerCard>
            </div>
          </section>
        </div>
        <div>
          <Image src="/Icons/binary.svg" width="0" height="0" className="absolute right-0 select-none overflow-hidden object-contain lg:max-2xl:object-fill w-full h-[50%] mt-36 lg:max-2xl:w-1/2 lg:max-2xl:h-[47%] md:h-[70%] lg:max-2xl:pl-72 md:top-0 md:mt-[50rem] lg:max-2xl:mt-[30.5rem]" alt=""></Image>
        </div>
      </main>
    )
  }
  