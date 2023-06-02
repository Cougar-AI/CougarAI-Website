import './globals.css'
import { Inter } from 'next/font/google'
import localFont from 'next/font/local'
import NavBar from '@/components/NavBar'

const inter = Inter({ subsets: ['latin'] })

export const satoshi = localFont({
  src: '../public/fonts/satoshi/Satoshi-Regular.otf',
  weight: '200'
})

export const satoshiBold = localFont({
  src: '../public/fonts/satoshi/Satoshi-Bold.otf',
  weight: '200'
})

export const satoshiMedium = localFont({
  src: '../public/fonts/satoshi/Satoshi-Medium.otf',
  weight: '200'
})

export const metadata = {
  title: 'CougarAI',
  description: 'AI & Machine Learning @ UH',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      {/* <head><NavBar></NavBar></head> */}
      <body className={satoshiBold.className}>
          <div className="fixed z-50">
            <NavBar></NavBar>
          </div>
        {children}
      </body>
    </html>
  )
}
