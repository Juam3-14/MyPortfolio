import Link from 'next/link'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Juan Pablo Piemonte Portfolio',
  description: 'Personal portfolio of Juan Pablo Piemonte, Information Systems Engineer',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header className="w-full max-w-7xl mx-auto px-4 lg:px-6 h-14 flex items-center">
          <Link className="flex items-center justify-center" href="/">
            <span className="sr-only">Juan Pablo Piemonte</span>
            <span className="h-6 w-6 text-2xl font-bold">MyPortfolio</span>
          </Link>
          <nav className="ml-auto flex gap-4 sm:gap-6">
            <Link className="text-sm font-medium hover:underline underline-offset-4" href="/#projects">
              Projects
            </Link>
            <Link className="text-sm font-medium hover:underline underline-offset-4" href="/about">
              About Me
            </Link>
            <Link className="text-sm font-medium hover:underline underline-offset-4" href="/#contact">
              Contact Info
            </Link>
          </nav>
        </header>
        {children}
      </body>
    </html>
  )
}