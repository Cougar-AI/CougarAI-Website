// this is the custom 404 page. It's not really a page, but rather a component that is rendered when the user tries to access a page that doesn't exist.
// beta Next.js 13 documentation: https://nextjs.org/docs/app/api-reference/file-conventions/not-found

"use client";
import { satoshiBold } from '@/util/localFonts'

export default function Custom404() {
    return (
      <main className="bg-cai-400 min-h-screen max-md:items-center flex flex-col overflow-hidden">
        <section className="md:ml-24 lg:ml-32 w-5/6 lg:mt-2 md:max-lg:w-3/5 lg:w-[40%]">
          <div className={satoshiBold.className + " flex flex-col align-bottom bottom-3 md:bottom-4 pt-20 md:pt-64 lg:pt-36"}>
            <h1 className={"text-white font-extrabold	text-2xl md:text-3xl lg:text-5xl leading-9"}>{"Sorry, but we couldn't find that page in our dataset."}</h1>
          </div>
        </section>

        <section className="md:ml-24 lg:ml-44 lg:mt-2 md:max-lg:w-3/5">
            {/* unsure of the margins on the other breakpoints -- perhaps fix this later */}
            <h1 className={"text-cai-500  font-extrabold	text-right text-9xl md:text-[10rem] lg:text-[25rem] max-md:fixed mt-4 md:mt-16 lg:mt-32 max-md:px-24 max-md:pt-12 start-0 md:right-0 md:bottom-0 max-md:text-center overflow-hidden"}>404</h1>
        </section>
      </main>
    )
  }
  