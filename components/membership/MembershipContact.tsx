import { satoshiMedium } from '@/util/localFonts';
import EmailLink from '@/components/EmailLink';

const MembershipInfoSection = () => {
    return (
        <div className={"flex flex-col text-white text-center md:text-start px-5 md:px-0 md:items-start"}>
            <p className={satoshiMedium.className + " align-bottom text-base md:text-2xl lg:text-3xl leading-normal mt-2"}>
                {'Any questions regarding payment can be sent to '}
                <EmailLink/>
            </p>
      </div>
    )

}

export default MembershipInfoSection;