    import Image from 'next/image'
import SocialLink from '@/components/about/SocialLink'

interface officerCardProps{
    key: number;
    name: string;
    officerRole: string;
    officerLinkedIn: string;
}

const OfficerCard = (props: officerCardProps) => {
    let officerNameTextSize = "text-2xl";

    if(props.name.length > 20) //The Briana Breakpoint (TM)...
        officerNameTextSize = "text-[1.3rem] leading-none pb-0.5";
    else if(props.name.length > 14)
        officerNameTextSize = "text-[1.35rem]";

    return(
        <div className="flex flex-col relative gap-y-0 bg-snow rounded-md h-[17rem] w-52 md:max-2xl:h-[19rem] md:max-2xl:w-60 items-center md:max-2xl:p-8 p-1.5 overflow-hidden">
            <Image src="/Icons/placeholder.png" width={130} height={130} className="rounded-full z-40 border-misty-rose border-8 scale-[80%] md:max-2xl:scale-100 h/2" alt="Officer headshot"></Image>
            <div className="flex flex-col items-center md:max-2xl:pb-2 z-40 h-1/2">
                <h1 className={`text-cai-500 ${officerNameTextSize} text-center drop-shadow-sm md:max-2xl:pt-1.5 -pt-1.5"`}>{props.name}</h1>
                <h2 className="text-cai-500 text-xl text-center drop-shadow-sm md:max-2xl:pb-2 pb-1.5">{props.officerRole}</h2>
                <SocialLink platform="LinkedIn" accountLink={props.officerLinkedIn} platformIcon='/Icons/LinkedIn_icon.svg'></SocialLink>
            </div>
            <Image src="/Icons/neural-pattern-mistyrose.png" width={350} height={"0"} className="absolute h-[115%] scale-[160%] md:max-2xl:scale-[180%] rounded-tr-3xl top-0 ml-28 md:max-2xl:mt-20 mt-[4.5rem] object-none z-0 select-none" alt="Card Pattern"></Image>
        </div>
    )
}

export default OfficerCard;