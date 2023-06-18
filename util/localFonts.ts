import localFont from 'next/font/local'
import { NextFont } from '@next/font' //the type NextFont isn't in the built in next/font so I just used @next/font

export const satoshi: NextFont = localFont({ src: '../public/fonts/satoshi/Satoshi-Regular.otf' })

export const satoshiMedium: NextFont = localFont({ src: '../public/fonts/satoshi/Satoshi-Medium.otf' })

export const satoshiBold: NextFont = localFont({ src: '../public/fonts/satoshi/Satoshi-Bold.otf' })