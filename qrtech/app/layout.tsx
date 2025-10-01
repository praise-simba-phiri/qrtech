// app/layout.tsx (Enhanced, optimized)
import type { Metadata, Viewport } from 'next'
import { Inter, Roboto_Mono } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from './components/theme-provider'
import { Analytics } from './components/analytics'
import { SpeedInsights } from './components/speed-insights'
import SmoothScroll from './components/smooth-scroll'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const robotoMono = Roboto_Mono({ subsets: ['latin'], variable: '--font-roboto-mono' })

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#000080' },
    { media: '(prefers-color-scheme: dark)', color: '#0770FF' },
  ],
}

export const metadata: Metadata = {
  title: {
    default: 'QuantumResolve Technologies - Empowering Malawi Through Smart Innovation',
    template: '%s | QR TECH',
  },
  description: 'Leading technology solutions provider in Malawi offering website design, graphic design, 3D simulation, PCB design, and AI chatbot development services.',
  keywords: [
    'website design Malawi', 'graphic design Malawi', '3D simulation Malawi',
    'PCB design Malawi', 'AI chatbot development', 'QuantumResolve Technologies',
    'QR TECH', 'technology solutions Malawi', 'software development Malawi'
  ],
  authors: [{ name: 'QuantumResolve Technologies', url: 'https://quantumresolve.mw' }],
  creator: 'QuantumResolve Technologies',
  publisher: 'QuantumResolve Technologies',
  formatDetection: { email: false, address: false, telephone: false },
  metadataBase: new URL('https://quantumresolve.mw'),
  alternates: { canonical: '/', languages: { 'en-US': '/' } },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-video-preview': -1, 'max-image-preview': 'large', 'max-snippet': -1 } },
  openGraph: {
    type: 'website', locale: 'en_US', url: 'https://quantumresolve.mw', siteName: 'QuantumResolve Technologies',
    title: 'QuantumResolve Technologies - Empowering Malawi Through Smart Innovation',
    description: 'Leading technology solutions provider in Malawi offering professional digital services and innovative tech solutions.',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'QuantumResolve Technologies - Empowering Malawi Through Smart Innovation' }],
  },
  twitter: {
    card: 'summary_large_image', title: 'QuantumResolve Technologies - Empowering Malawi Through Smart Innovation',
    description: 'Leading technology solutions provider in Malawi offering professional digital services.',
    creator: '@quantumresolve', images: ['/og-image.jpg'],
  },
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [{ url: '/apple-touch-icon.png' }],
  },
  manifest: '/manifest.json',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning className={`${inter.variable} ${robotoMono.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Organization',
            name: 'QuantumResolve Technologies',
            url: 'https://quantumresolve.mw',
            logo: 'https://quantumresolve.mw/logo.png',
            description: 'Empowering Malawi Through Smart Innovation',
          })}}
        />
      </head>
      <body className="font-sans bg-background text-primary antialiased">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <SmoothScroll>
            {children}
          </SmoothScroll>
          <Analytics />
          <SpeedInsights />
        </ThemeProvider>
      </body>
    </html>
  )
}