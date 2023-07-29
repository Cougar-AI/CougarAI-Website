import OfficerCardTray from '@/components/about/OfficerCardTray';
import { satoshiBold, satoshiMedium } from '@/util/localFonts';

const OfficerSecton = () => {
    return (
        <div className= {satoshiBold.className + " flex flex-col text-center md:text-start md:items-start items-center my-10 lg:mt-28 mb-16 mr-64 md:pb-16 w-screen"}>
            <h1 className="pt-6 pb-2.5 mb-2.5 md:mb-0 md:py-6 align-bottom md:text-5xl text-3xl text-white">The Officers</h1>
            <OfficerCardTray/>
        </div>
    )

}

export default OfficerSecton;