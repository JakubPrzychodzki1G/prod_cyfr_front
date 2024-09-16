import './globals.css'
import { Inter } from 'next/font/google'
import NavBar from '@/components/navbar/navbar'
import FooterBar from '@/components/footer/footerbar'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Posejdon KONIN',
  description: 'Strona klubu pływackiego',
}

export default function RootLayout({ children }) {
  return (
    <html lang="pl">
      <body className={`${inter.className} bg-slate-300`}>
        <nav className="flex justify-center fixed z-20 w-full">
          <NavBar />
        </nav>
        <div className='flex flex-col items-center h-screen z-10 fullscreen'>
          {children}
          <footer className='flex h-fit w-full justify-center z-30'>
            <FooterBar />
          </footer>
        </div>
      </body>
    </html>
  )
}
