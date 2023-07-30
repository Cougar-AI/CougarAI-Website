import { satoshiMedium } from '@/util/localFonts';

const MembershipInfoSection = () => {
    return (
        <div>
            <div>
              <h1 className="pb-2 md:pb-5 align-bottom text-4xl md:text-5xl lg:text-6xl">Membership</h1>
              <p className={satoshiMedium.className + " pb-2 md:pb-6 align-bottom text-base md:text-2xl lg:text-3xl leading-normal"}>
                <span className="">{'Gain'}</span>{' access to exclusive AI workshops, research projects, and rewards with a Cougar AI membership.'}
              </p>
              <p className={satoshiMedium.className + " pb-2 md:pb-6 align-bottom text-base md:text-2xl lg:text-3xl leading-normal"}>
                {'Our membership opens the door for all majors to having more opportunities to explore AI & Data Science.'}
              </p>
            </div>
            <p className={satoshiMedium.className + " pb-2 md:pb-6 align-bottom text-base md:text-2xl lg:text-3xl leading-normal mb-2"}>
                {'Sign up today!'}
            </p>
        </div>
    )

}

export default MembershipInfoSection;