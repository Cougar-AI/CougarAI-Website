import Image from 'next/image'
import Link from 'next/link'

interface buttonProps {
    text: string,
    link: string,
}

const HomeButton = (props: buttonProps) => {
    return(
            <button className="bg-white rounded-3xl w-16 h-6 md:max-2xl:w-36 md:max-2xl:h-10 md:max-2xl:py-1.5 py-0.5 text-center">
                <Link href={props.link} target="_blank">
                    <h1 className="text-xs md:max-2xl:text-lg font-bold hover:text-cai-500 text-cai-400">{props.text}</h1>
                </Link>
            </button>
    )
}

export default HomeButton;