import type React from "react"
import type { Metadata } from "next"
import { Inter, Playfair_Display } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { SpeedInsights } from "@vercel/speed-insights/next"
import "./globals.css"
import { ThemeProvider } from "@/contexts/theme-context"
import GlowHeader from "@/components/glow-header"
import Footer from "@/components/footer"
import AnimatedBackground from "@/components/animated-background"

const inter = Inter({ subsets: ["latin"] })
const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
})

export const metadata: Metadata = {
  metadataBase: new URL('https://sekongo-bienvenu.vercel.app'),
  title: {
    default: "Bienvenu Y. Sekongo | Développeur Web & Mobile Fullstack",
    template: "%s | Bienvenu Y. Sekongo"
  },
  description:
    "Portfolio de Bienvenu Y. Sekongo, développeur web et mobile fullstack. Expert React, Next.js & React Native basé en Côte d'Ivoire. Transformez vos idées en applications performantes.",
  keywords: ["Développeur Fullstack", "React", "Next.js", "React Native", "Abidjan", "Côte d'Ivoire", "Freelance", "Web Developer", "Mobile Developer"],
  authors: [{ name: "Bienvenu Y. Sekongo" }],
  creator: "Bienvenu Y. Sekongo",

  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    url: 'https://sekongo-bienvenu.vercel.app',
    siteName: 'Portfolio de Bienvenu Y. Sekongo',
    title: 'Bienvenu Y. Sekongo - Portfolio Développeur',
    description: 'Transformez vos idées en applications performantes. Expert React & Next.js.',
    images: [
      {
        url: '/images/profile-ben-pro.png',
        width: 500, //1200,
        height: 500, //630,
        alt: 'Bienvenu Y. Sekongo - Fullstack Developer',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Bienvenu Y. Sekongo | Développeur Fullstack',
    description: 'Découvrez mon portfolio et mes projets récents.',
    images: ['/images/profile-ben-pro.png'],
    creator: '@BenSekongo',
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
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr" className="dark">
      <body className={`${inter.className} ${playfair.variable}`}>
        <ThemeProvider>
          <div className="relative min-h-screen">
            <AnimatedBackground />
            <GlowHeader />
            <div className="pt-16 sm:pt-20">{children}</div>
            <Footer />
          </div>
        </ThemeProvider>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}
