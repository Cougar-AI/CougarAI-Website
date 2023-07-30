import './globals.css'
import NavBar from '@/components/navbar/NavBar'
import { satoshi } from '@/util/localFonts';
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Cougar AI',
  description: 'AI & Machine Learning @ UH',
  openGraph: {
    title: 'CougarAI',
    description: 'AI & Machine Learning @ UH',
    url: 'https://cougarai.org',
    siteName: 'Cougar AI',
    locale: 'en-US',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={satoshi.className + ` bg-cai-400`}>
        <div className="z-50">
          <NavBar/>
        </div>
        {children}
      </body>
    </html>
  )
}
