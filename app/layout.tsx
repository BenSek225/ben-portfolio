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
  title: "Bienvenu Y. Sekongo - Développeur Web & Mobile Fullstack",
  description:
    "Portfolio de Bienvenu Y. Sekongo, développeur web et mobile fullstack. Intermédiaire/Presque senior en développement avec expertise React, Next.js, React Native et technologies fullstack modernes.",

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
