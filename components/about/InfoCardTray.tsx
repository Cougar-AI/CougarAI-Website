import InfoCard from '@/components/about/InfoCard'

const aboutUsCardInformation: { title: string; link?: string }[] = [
    { title: "Workshops" },
    { title: "Info Sessions" },
    { title: "Social Events" },
    { title: "Projects", link: "https://photos.google.com/share/AF1QipNWQ-vbx201JGgNFwTwwkCijNsgr9iswVVFYHrdvEYhQvKaJo24SvyyTaQV_rOaMg?pli=1&key=T29mWUJsVVpIZG1YajdDVmFfY3FtNEFIc050UF93" } // Google Drive link
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
