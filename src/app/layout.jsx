import { Cinzel_Decorative, Inter, Cormorant_Garamond } from 'next/font/google'
import './globals.css'

const decorative = Cinzel_Decorative({ 
  weight: ['400', '700', '900'],
  subsets: ['latin'],
  variable: '--font-decorative'
})

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter'
})

const cormorant = Cormorant_Garamond({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-cormorant'
})

export const metadata = {
  title: 'Museum ChatBot',
  description: 'Where history meets the future',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${decorative.variable} ${inter.variable} ${cormorant.variable} bg-sienna-500`}>
        {children}
      </body>
    </html>
  )
}