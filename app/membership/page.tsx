import Image from 'next/image'
import MembershipInfoSection from '@/components/membership/MembershipInfoSection';
import PricingCard from '@/components/membership/PricingCard';
import MembershipContact from '@/components/membership/MembershipContact';
import { satoshiMedium, satoshiBold } from '@/util/localFonts';

export default function Membership() {
    return (
      <main className="bg-cai-400 min-h-screen flex flex-col lg:grid lg:grid-cols-2 pb-12">
        <section className="md:ml-24 lg:ml-32 lg:mt-2 md:max-lg:w-3/5">
          <div className={satoshiBold.className + " flex flex-col text-white text-center md:text-start px-5 md:px-0 md:items-start pt-20 md:pt-64 lg:pt-36 mb-3.5"}>
            <MembershipInfoSection/>
            <div className="flex flex-row gap-x-4 h-inherit w-full">
              <PricingCard priceTag={'$10'} subscriptionPlan={'/semester'}></PricingCard>
              <PricingCard priceTag={'$15'} subscriptionPlan={'/year'}></PricingCard>
            </div>
          </div>
          <MembershipContact/>
        </section>
        <Image src="/Icons/binary.svg" width="0" height="0" className="lg:absolute lg:right-0 select-none overflow-hidden object-contain lg:object-fill w-full h-[50%] mt-36 lg:w-1/2 lg:h-[47%] md:h-[70%] lg:pl-72 md:top-0 md:mt-[50rem] lg:mt-[30.5rem]" alt="Binary Pattern"></Image>
      </main>
    )
  }
  