import type { Metadata, Viewport } from 'next'
import { Inter, Space_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({ subsets: ['latin', 'latin-ext'] })
const spaceMono = Space_Mono({ weight: ['400', '700'], subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Curious Media | Connecting Creators with Brands',
  description: 'The ultimate platform for connecting talented creators with innovative brands. Build authentic partnerships, grow your audience, and unlock new opportunities.',
  keywords: 'creators, brands, influencer marketing, content creation, collaboration, partnership',
  openGraph: {
    title: 'Curious Media | Connecting Creators with Brands',
    description: 'The ultimate platform for connecting talented creators with innovative brands.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Curious Media',
    description: 'Connecting Creators with Brands',
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: '#0052FF',
  userScalable: true,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} bg-background text-foreground antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
