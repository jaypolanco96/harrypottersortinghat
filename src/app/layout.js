import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Unofficial Harry Potter Sorting Hat',
  description: 'A Fan Made Harry Potter Sorting Hat App',
  generator: 'Next.js',
  applicationName: 'Harry Potter: Sorting Hat',
  referrer: 'origin-when-cross-origin',
  keywords: ['Next.js', 'React', 'JavaScript', 'harry', 'potter', 'harrypotter', 'sortinghat'],
  authors: [{ name: 'Jordan Polanco'}],
  colorScheme: 'dark',
  creator: 'Jordan Polanco',
  publisher: 'Jordan Polanco',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: '/favicon.jpeg',
    shortcut: '/favicon.jpeg',
    apple: '/favicon.jpeg',
    other: {
      rel: 'apple-touch-icon-precomposed',
      url: '/favicon.jpeg',
    },
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">

      <body className={inter.className}>{children}</body>
    </html>
  )
}
