// app/layout.tsx
import type { Metadata, Viewport } from 'next'
import { Inter, Roboto, Open_Sans } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from './components/theme-provider'
import { Analytics } from './components/analytics'
import { SpeedInsights } from './components/speed-insights'

// Optimize fonts with multiple options for better performance
const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

const roboto = Roboto({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-roboto',
  weight: ['300', '400', '500', '700'],
})

const openSans = Open_Sans({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-open-sans',
  weight: ['300', '400', '500', '600', '700'],
})

// Viewport configuration
export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#000080' },
    { media: '(prefers-color-scheme: dark)', color: '#0770FF' },
  ],
}

// Enhanced metadata for better SEO
export const metadata: Metadata = {
  title: {
    default: 'QuantumResolve Technologies - Empowering Malawi Through Smart Innovation',
    template: '%s | QR TECH'
  },
  description: 'Leading technology solutions provider in Malawi offering website design, graphic design, 3D simulation, PCB design, and AI chatbot development services.',
  keywords: [
    'website design Malawi',
    'graphic design Malawi', 
    '3D simulation Malawi',
    'PCB design Malawi',
    'AI chatbot development',
    'QuantumResolve Technologies',
    'QR TECH',
    'technology solutions Malawi',
    'software development Malawi'
  ],
  authors: [
    { 
      name: 'QuantumResolve Technologies', 
      url: 'https://quantumresolve.mw' 
    }
  ],
  creator: 'QuantumResolve Technologies',
  publisher: 'QuantumResolve Technologies',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://quantumresolve.mw'),
  alternates: {
    canonical: '/',
    languages: {
      'en-US': '/',
    },
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://quantumresolve.mw',
    siteName: 'QuantumResolve Technologies',
    title: 'QuantumResolve Technologies - Empowering Malawi Through Smart Innovation',
    description: 'Leading technology solutions provider in Malawi offering professional digital services and innovative tech solutions.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'QuantumResolve Technologies - Empowering Malawi Through Smart Innovation',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'QuantumResolve Technologies - Empowering Malawi Through Smart Innovation',
    description: 'Leading technology solutions provider in Malawi offering professional digital services.',
    creator: '@quantumresolve',
    images: ['/og-image.jpg'],
  },
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png' },
    ],
  },
  manifest: '/manifest.json',
}

// Structured data for better SEO
const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'QuantumResolve Technologies',
  alternateName: 'QR TECH',
  url: 'https://quantumresolve.mw',
  logo: 'https://quantumresolve.mw/logo.png',
  description: 'Empowering Malawi Through Smart Innovation That Matters',
  address: {
    '@type': 'PostalAddress',
    addressCountry: 'Malawi',
    addressLocality: 'Lilongwe',
  },
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+265-xxx-xxx-xxx',
    contactType: 'customer service',
    areaServed: 'MW',
    availableLanguage: 'en',
  },
  sameAs: [],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html 
      lang="en" 
      suppressHydrationWarning
      className={`${inter.variable} ${roboto.variable} ${openSans.variable}`}
    >
      <head>
        {/* Structured data for SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        
        {/* Performance optimizations */}
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
        <link rel="dns-prefetch" href="//fonts.gstatic.com" />
        
        {/* Theme color for address bar */}
        <meta name="theme-color" content="#000080" media="(prefers-color-scheme: light)" />
        <meta name="theme-color" content="#0770FF" media="(prefers-color-scheme: dark)" />
      </head>
      <body className={`
        font-sans
        bg-background
        text-primary
        antialiased
        min-h-screen
        transition-colors
        duration-300
      `}>
        <ThemeProvider 
          attribute="class" 
          defaultTheme="system" 
          enableSystem
          disableTransitionOnChange={false}
          storageKey="quantumresolve-theme"
        >
          {/* Main content */}
          <main className="min-h-screen flex flex-col">
            {children}
          </main>
          
          {/* Analytics and performance monitoring */}
          <Analytics />
          <SpeedInsights />
        </ThemeProvider>
      </body>
    </html>
  )
}