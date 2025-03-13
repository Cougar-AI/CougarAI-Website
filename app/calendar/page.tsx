import CalendarBox from "@/components/calendar/CalendarBox";
import CalendarTitle from "@/components/calendar/CalendarTitle"
import { satoshiBold } from '@/util/localFonts';
import Image from 'next/image'

export default function Calendar() {
    return (
<main className="bg-cai-400 min-h-[calc(100vh-100px)] flex flex-col items-center justify-start pt-[80px] md:pt-[200px] lg:pt-[100px]">
  <section className="w-full max-w-[1200px] p-8 mt-5">
    <div className={satoshiBold.className + " flex flex-col text-white text-center px-5"}>
      <CalendarBox/>
    </div>
  </section>
</main>

)
}
