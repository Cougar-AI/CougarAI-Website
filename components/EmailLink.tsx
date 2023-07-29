import { satoshiBold, satoshiMedium } from '@/util/localFonts';

const EmailLink = () => {
  return (
    <a href="mailto:cougaraicontact@gmail.com" className={satoshiMedium.className + " group"}>
        {'cougaraicontact@gmail.com'}
        <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-white"></span>
    </a>
  )

}

export default EmailLink;