import Footer from './component/footer/page'
import Header from './component/header/page'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './globals.css'
import { Roboto } from 'next/font/google'

const roboto = Roboto({ weight: ['100', '400', '700'], subsets: ['latin'] })

export const metadata = {
  title: 'Macfadyen Test',
  description: 'Developed by Sachin Kumar',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <Header />
        <main className='max-w-screen-xl mx-auto px-4 py-2'>
          {children}
        </main>
        <Footer />
        </body>
    </html>
  )
}
