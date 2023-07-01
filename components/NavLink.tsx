import Link from 'next/link'

interface linkProps {
    text: string,
    link: string,
}

const NavLink = (props: linkProps) => {
    return(
        <Link href={props.link}>
            <h1 className="border-b-3 border-y-0 border-t-0 border-spacing-4 border-white border-none hover:border-solid">{props.text}</h1>
        </Link>
    )   
}

export default NavLink;