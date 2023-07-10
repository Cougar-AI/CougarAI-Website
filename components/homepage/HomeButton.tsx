import Link from 'next/link'
import Image from 'next/image'

interface buttonProps {
    text: string,
    link: string,
}

const HomeButton = (props: buttonProps) => {
    return(
        <button className=" relative transition ease-in-out duration-500 delay-150 hover:scale-105 bg-white rounded-3xl w-20 h-[1.85rem] md:max-2xl:w-36 md:max-2xl:h-10 md:max-2xl:py-1.5 py-0.5 text-center z-50 overflow-hidden">
            <Link href={props.link} target="_blank">
                <h1 className="text-sm md:max-2xl:text-lg font-bold hover:text-cai-500 text-cai-400">{props.text}</h1>
            </Link>
        </button>
    )
}

export default HomeButton;