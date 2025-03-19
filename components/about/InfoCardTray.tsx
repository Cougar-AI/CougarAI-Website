import InfoCard from '@/components/about/InfoCard'

const aboutUsCardInformation: { title: string; link?: string }[] = [
    { title: "Workshops" },
    { title: "Info Sessions" },
    { title: "Social Events" },
    { title: "Projects", link: "https://github.com/Cougar-AI" } // Google Drive link
]

const InfoCardTray = () => {
    return (
        <div className="grid md:grid-cols-2 gap-x-5 gap-y-5 items-center md:max-2xl:items-start mx-8 md:mx-0">
            {aboutUsCardInformation.map((card, index) => (
                <InfoCard key={index} cardTitle={card.title} link={card.link} />
            ))}
        </div>
    )
}

export default InfoCardTray;
