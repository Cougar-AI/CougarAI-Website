import Image from 'next/image'
import InfoCard from '@/components/about/InfoCard'
import { satoshi, satoshiMedium, satoshiBold } from '@/util/localFonts';

const aboutUsCardInformation: string[] = ["Workshops", "Info Sessions", "Social Events"]

const InfoCardTray = () => {

    return(
        <div className="grid md:grid-cols-2 gap-x-5 gap-y-5 items-center md:max-2xl:items-start mx-8 md:mx-0">
            {aboutUsCardInformation.map((cardTitle, index) => (
                <InfoCard key={index} cardTitle={cardTitle}></InfoCard>
            ))}
      </div>
    )
}

export default InfoCardTray;