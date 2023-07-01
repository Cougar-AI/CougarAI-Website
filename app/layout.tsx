import './globals.css'
import NavBar from '@/components/NavBar'
import { satoshi, satoshiMedium, satoshiBold } from '@/util/localFonts';

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
      <body className={satoshi.className}>
        <div className="fixed z-50">
          <NavBar/>
        </div>
        {children}
      </body>
    </html>
  )
}
