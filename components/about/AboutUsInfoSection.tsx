import { satoshiBold, satoshiMedium } from '@/util/localFonts';

// update this content/information with better branding.
const aboutUsInformation: string[][] = [
    ["About Us", "We are a student organization inspired by AI, Machine Learning, and Data Science.", "text-4xl md:text-5xl lg:text-6xl"],
    ["What we do.","CougarAI aims to educate members in the latest advances in artificial intelligence, data science, and machine learning. As well as to provide a space for networking among those interested in the field.", "text-3xl md:max-2xl:text-5xl"],
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