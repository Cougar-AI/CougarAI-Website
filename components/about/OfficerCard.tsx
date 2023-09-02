import Image from 'next/image'
import SocialLink from '@/components/about/SocialLink'

interface OfficerCardProps{
    key: number;
    name: string;
    officerRole: string;
    officerLinkedIn: string;
}

const OfficerCard = (props: OfficerCardProps) => {
    let officerNameTextSize = "text-2xl";
    let officerRoleTextSize = "text-xl";
    if(props.name.length > 20) //The Briana Breakpoint (TM)...
        officerNameTextSize = "text-[1.35rem] leading-none pb-0.5";
    else if(props.name.length > 14)
        officerNameTextSize += " max-lg:text-[1.35rem]";

    if(props.officerRole.length > 20)
        officerRoleTextSize = "text-[1.25rem] leading-none pb-0.5";

    return(
        <div className="flex flex-col relative gap-y-0 bg-snow rounded-md h-[17rem] w-52 md:h-[19rem] md:w-64 items-center md:p-8 p-1.5 overflow-hidden">
            {/* Will code this for various headshots in the next sprint, when I have headshot photos available */}
            <Image src="/icons/placeholder.png" width={130} height={130} className="rounded-full z-40 border-misty-rose border-8 scale-[80%] md:scale-100 h/2" alt={`Officer headshot: ${props.name}`}></Image>
            {/* Officer bio, name, title, and LinkedIn link */}
            <div className="flex flex-col items-center md:pb-2 z-40 h-1/2">
                <h1 className={`text-cai-500 ${officerNameTextSize} text-center drop-shadow-sm md:pt-1.5 -pt-1.5"`}>{props.name}</h1>
                <h2 className={`text-cai-500 ${officerRoleTextSize} text-center drop-shadow-sm md:pb-2 pb-1.5`}>{props.officerRole}</h2>
                <SocialLink platform="LinkedIn" accountLink={props.officerLinkedIn} platformIcon='/icons/linkedinIcon.svg'></SocialLink>
            </div>
            {/* Card Pattern */}
            <Image src="/icons/neuralNetwork.png" width={350} height={"0"} className="absolute h-[115%] scale-[160%] md:scale-[195%] rounded-tr-3xl top-0 ml-28 md:mt-20 mt-[4.5rem] object-none z-0 select-none" alt="Officer Card Pattern"></Image>
        </div>
    )
}

export default OfficerCard;