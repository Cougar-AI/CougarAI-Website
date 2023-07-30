// this is the custom 404 page. It's not really a page, but rather a component that is rendered when the user tries to access a page that doesn't exist.
// beta Next.js 13 documentation: https://nextjs.org/docs/app/api-reference/file-conventions/not-found

"use client";

import Logo from '@/components/homepage/Logo'
import { satoshiBold, satoshiMedium } from '@/util/localFonts'

export default function Custom404() {
    return (
      <main className="bg-cai-400 min-h-screen flex flex-col">
        <section className="md:ml-24 lg:ml-32 lg:mt-2 md:max-lg:w-3/5">
        <div className={satoshiBold.className + " flex flex-col relative align-bottom bottom-3 md:bottom-4 justify-between pt-20 md:pt-64 lg:pt-36"}>
          <h1 className={"text-cai-500  font-extrabold	text-9xl md:text-[10rem] lg:text-[14rem]"}>404</h1>
        </div>
        </section>
      </main>
    )
  }
  