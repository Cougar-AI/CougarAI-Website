import Link from 'next/link'

interface linkProps {
    text: string,
    link: string,
}

const NavLink = (props: linkProps) => {
    return(
        <Link href={props.link}>
            <h1 className="group hover:scale-105 duration-700 ease-in-out">
                {props.text}
                <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-white"></span>
            </h1>

        </Link>
    )   
}

export default NavLink;