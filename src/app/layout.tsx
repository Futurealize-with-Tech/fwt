import { Inter } from 'next/font/google'
import './globals.scss'
import MainHeader from '@/components/Header/MainHeader'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
    title: 'Futurealize with Tech',
    description: '卒業メンターにメッセージを届けよう！',
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="ja">
        <body className={inter.className}>
            <div className='all-container'>
            <MainHeader />
            {children}
            </div>
        </body>
        </html>
    )
}