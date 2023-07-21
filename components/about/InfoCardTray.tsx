import InfoCard from '@/components/about/InfoCard'

interface infoCardTrayProps{
    cardTitles: string[];
}


const InfoCardTray = (props: infoCardTrayProps) => {

    return(
        <div className="grid md:grid-cols-2 gap-x-5 gap-y-5 items-center md:max-2xl:items-start mx-8 md:mx-0">
            {props.cardTitles.map((cardTitle, index) => (
                <InfoCard key={index} cardTitle={cardTitle}></InfoCard>
            ))}
      </div>
    )
}

export default InfoCardTray;