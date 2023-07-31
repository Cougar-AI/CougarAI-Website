interface PricingCardProps{
    priceTag: string;
    subscriptionPlan: string;
}


const PricingCard = (props: PricingCardProps) => {
  return (
    <div className="bg-misty-rose rounded-md w-1/2 overflow-hidden relative max-lg:px-7 p-3 lg:pl-6">
      <h1 className="grid grid-cols-2 lg:w-2/3 text-3xl md:text-4xl lg:text-5xl text-cai-500">
        <span>{props.priceTag}</span>
        <span className={`text-sm md:text-lg lg:text-2xl leading-none text-start pt-1.5 lg:pt-0.5 ${props.priceTag === '$15' ? `lg:pl-0 pl-0.5` : `lg:pl-1.5 pl-1`}`}>{props.subscriptionPlan}</span></h1>
    </div>
  )

}

export default PricingCard;