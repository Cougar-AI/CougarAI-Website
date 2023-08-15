import { satoshiBold, satoshiMedium } from '@/util/localFonts';

const aboutUsInformation: string[][] = [
    ["About Us", "We are a student organization inspired by AI, Machine Learning, and Data Science.", "text-4xl md:text-5xl lg:text-6xl"],
    ["What we do.","Cougar AI aims to introduce students to the fascinating fields of artificial intelligence, data science, and machine learning. No matter your major or skill level, you are welcome to join of all what have to offer!", "text-3xl md:text-5xl"],
  ];
  
const AboutUsInfoSection = () => {
    return (
        <div className={satoshiBold.className + " flex flex-col gap-y-10 md:gap-y-16 lg:gap-y-24 text-white text-center md:text-start px-5 md:px-0 md:items-start pt-20 md:pt-64 lg:pt-36 mb-3.5"}>
            {aboutUsInformation.map(([title, description, textSize], index) => (
            <div key = {index}>
                <h1 className={`pb-2 md:pb-5 align-bottom ${textSize}`}>{title}</h1>
                <p className={satoshiMedium.className + " pb-2 md:pb-6 align-bottom text-base md:text-3xl leading-normal"}>{description}</p>
            </div>
            ))}
        </div>
    )

}

export default AboutUsInfoSection;