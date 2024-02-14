import { Inter } from 'next/font/google'
import './globals.scss'
import MainHeader from '@/components/Header/MainHeader'

const inter = Inter({ subsets: ['latin'] })

const siteName = 'Futurealize-with-Tech！';
const description = '卒業メンターにメッセージを届けよう！';
const url = 'https://futurealize-with.tech';

export const metadata = {
    title: {
        default: siteName,
        template: `%s - ${siteName}`,
    },
    description,
    openGraph: {
        title: {
            default: siteName,
            template: `%s - ${siteName}`,
        },
        description,
        url,
        siteName,
        locale: 'ja_JP',
        type: 'website',
    },
    twitter: {
        card: 'summary',
        title: {
            default: siteName,
            template: `%s - ${siteName}`,
        },
        description,
        site: '',
        creator: '',
    },
    alternates: {
        canonical: url,
    },
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