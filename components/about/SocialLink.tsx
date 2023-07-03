import Image from 'next/image'
import Link from 'next/link'

interface socialLinkProps{
  platform: string;
  accountLink: string;
  platformIcon: string;
  //for now the only social link we have is LinkedIn which will be 40x40 if we add another social in the future the dimensions may be diff for that one.
  // iconWidth: number;
  // iconHeight: number;
}

const SocialLink = (props: socialLinkProps) => {
    return(
      <Link href={`${props.accountLink}`} className="pt-1 pb-2 z-50" target="_blank">
        <Image src={`${props.platformIcon}`} width={40} height={40} className="z-50 hover:scale-105 hover:rotate-2 duration-700" alt={`${props.platform} icon`}></Image>
      </Link>
    );
}

export default SocialLink;