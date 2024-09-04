import { satoshiMedium } from '@/util/localFonts';
import PricingCard from '@/components/membership/PricingCard';
import Link from 'next/link'
import Image from 'next/image'
  
const MembershipInfoSection = () => {
    return (
        <div>
            <div>
              <h1 className="pb-2 md:pb-5 align-bottom text-4xl md:text-5xl lg:text-6xl">Membership</h1>
              <p className={satoshiMedium.className + " pb-2 md:pb-6 align-bottom text-base md:text-2xl lg:text-3xl leading-normal"}>
                <span className="">{'Gain'}</span>{' access to exclusive AI workshops, research projects, and rewards with a CougarAI membership.'}
              </p>
              <p className={satoshiMedium.className + " pb-2 md:pb-6 align-bottom text-base md:text-2xl lg:text-3xl leading-normal"}>
                {'Our membership opens the door for all majors to having more opportunities to explore AI & Data Science.'}
              </p>
            </div>
            <p className={satoshiMedium.className + " pb-2 md:pb-6 align-bottom text-base md:text-2xl lg:text-3xl leading-normal mb-2"}>
                {'Sign up today!'}
            </p>
            <div className="flex flex-col md:flex-row gap-4 h-inherit w-full pb-2">
            <Link href={`https://docs.google.com/forms/d/e/1FAIpQLSfZM7ktCB6PvgdEjOJ3pJSLNPlEsU1t4hsdGH9LDKvuYx5Elw/viewform`} className="z-50 pb-2 w-full" target="_blank">
                <div className="relative flex justify-center items-center bg-snow rounded-md w-full overflow-hidden max-lg:px-7 p-3 lg:pl-6 pb-4">
                    <Image src="/icons/chip.svg" width={140} height={140} className="absolute right-0 mr-6 lg:mr-12 self-center mt-8 select-none z-0" alt={`Pricing icon`}/>
                    <h1 className="text-4xl md:text-4xl lg:text-5xl text-cai-500 z-10">
                        Join Here
                    </h1>
                </div>
            </Link>
        </div>    
      </div>
    )

}

export default MembershipInfoSection;