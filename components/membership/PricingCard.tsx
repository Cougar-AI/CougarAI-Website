import Image from 'next/image'

interface PricingCardProps{
    priceTag: string;
    subscriptionPlan: string;
}


const PricingCard = (props: PricingCardProps) => {
  return (
    <div className="relative flex flex-row gap-x-4 bg-snow rounded-md md:w-1/2 overflow-hidden max-lg:px-7 p-3 lg:pl-6">
      <Image src="/icons/chip.svg" width={140} height={140} className="absolute ml-44 lg:ml-40 self-center mt-8 select-none z-0" alt={`Pricing icon`}></Image>
      <h1 className="grid grid-cols-2 lg:w-2/3 text-3xl md:text-4xl lg:text-5xl text-cai-500">
        <span>{props.priceTag}</span>
        <span className={`text-sm md:text-lg lg:text-2xl leading-none text-start pt-1.5 lg:pt-0.5 ml-1 ${props.priceTag === '$15' ? `lg:pl-0 lg:pr-0.5 pl-0.5` : `pl-1`}`}>{props.subscriptionPlan}</span>
      </h1>
    </div>
  )

}

export default PricingCard;