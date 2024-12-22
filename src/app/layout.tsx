import type { Metadata } from 'next'
import './globals.css'
import Header from '../components/Header'
import Footer from '../components/Footer'

export const metadata: Metadata = {
  title: 'Excalibur Mebel - Качественная мебель в Астане',
  description: 'Качество и уют дома - первый залог успеха для его очага. Производство всех видов мебели в Астане с 2015 года.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ru">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
} 